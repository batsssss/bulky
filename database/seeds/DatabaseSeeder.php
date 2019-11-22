<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;
use Faker\Factory as Faker;
use Illuminate\Database\Eloquent\Model;
use App\Product;
use App\ProductLot;
use App\ProductSku;
use App\ProductLotContainer;
use App\Order;
use App\OrderItem;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        DB::table('users')->insert([
            'name' => 'Barbara',
            'email' => 'barbara.goss@ryerson.ca',
            'password' => bcrypt('bulky')
        ]);

        foreach ($this->generatePackagings() as $generatedPackaging) {
            DB::table('packagings')->insert($generatedPackaging);
        }

        foreach ($this->generateStorageLocations() as $generatedLocation) {
            DB::table('storage_locations')->insert($generatedLocation);
        }

        $packagings = $this->getPackagings();

        factory(Product::class, 20)->create()->each(function ($product) use ($packagings, $faker) {
            /** @var Product $product */

            $sizes = $this->skuSizes();
            $basePrice = $this->randomBaseSkuPrice();
            $baseSize = $sizes[0];
            $sizesCount = count($sizes);

            for ($i = 1; $i <= $sizesCount; $i++) {
                $size = $sizes[$i - 1];

                $product->productSkus()->save(factory(ProductSku::class)->make([
                    'packaging_id' => $this->getPackagingBySize($packagings, $size),
                    'size' => $size,
                    'price' => $this->generateSkuPrice($basePrice, $baseSize, $size, $i)
                ]));
            }

            $yearsToRecertify = $product->years_to_recertify;

            $numberOfLots = rand(1,3);

            for ($i = 1; $i <= $numberOfLots; $i++) {
                $initial = $faker->randomFloat(1, $baseSize, 2 * ($sizes[$sizesCount - 1]));
                $current = $faker->randomFloat(1, 0, floor($initial));
                $lotDate = $faker->dateTimeBetween('-5 years');
                $expiryDate = clone $lotDate;

                $product->productLots()->save(factory(ProductLot::class)->make([
                    'initial' => $initial,
                    'remaining' => $current,
                    'available' => $current,
                    'date_released' => $lotDate,
                    'date_certified' => $lotDate,
                    'date_expires' => $expiryDate->add(new DateInterval('P' . $yearsToRecertify . 'Y'))
                ]));
            }

            $productLots = $this->getProductLots($product->id);

            foreach ($productLots as $productLot) {

                $containerAttributes = [
                    'product_lot_id' => $productLot->id,
                    'storage_location_id' => $this->getRandomStorageLocationId()
                ];

                $numberOfContainers = rand(1,2);

                if ($numberOfContainers == 1) {

                    $containerAttributes = array_merge($containerAttributes, [
                        'packaging_id' => $this->getPackagingBySize($packagings, ceil($productLot->initial)),
                        'container_num' => 1,
                        'initial' => $productLot->initial,
                        'used' => $productLot->initial - $productLot->remaining,
                        'remaining' => $productLot->remaining
                    ]);

                    factory(ProductLotContainer::class)->create($containerAttributes);

                } else {
                    $containerInitial = $faker->randomFloat(1, 1, (floor($productLot->remaining) - 1));
                    $containerRemaining = $containerInitial;

                    for ($i = 1; $i <= $numberOfContainers; $i++) {

                        $containerAttributes = array_merge($containerAttributes, [
                            'packaging_id' => $this->getPackagingBySize($packagings, ceil($containerInitial)),
                            'container_num' => $i,
                            'initial' => $containerInitial,
                            'used' => $containerInitial - $containerRemaining,
                            'remaining' => $containerRemaining
                        ]);

                        factory(ProductLotContainer::class)->create($containerAttributes);

                        $containerRemaining = $productLot->remaining - $containerInitial;
                        $containerInitial = $productLot->initial - $containerInitial;
                    }
                }
            }
        });

        factory(Order::class, 10)->create()->each(function ($order) use($faker) {
            /** @var Order $order */

            $numberOfItems = rand(1,3);

            for ($i = 1; $i <= $numberOfItems; $i++) {

                $quantity = $faker->numberBetween(1, 5);

                /** @var Product $product */
                $product = $this->getRandomProduct();
                /** @var ProductSku $productSku */
                $productSku = $this->getRandomProductSku($product->id);

                $totalAmount = floatval($quantity * $productSku->size);

                $productLots = $this->getProductLots($product->id);

                $reservedProductLotId = null;
                $reserved = 0.0;
                /** @var DateTime $scheduledDate */
                $scheduledDate = clone $order->order_date;
                $scheduledDate->add(new DateInterval('P' . $product->lead_time . 'D'));

                foreach ($productLots as $productLot) {
                    /** @var ProductLot $productLot */
                    if ($productLot->available >= $totalAmount) {
                        $reservedProductLotId = $productLot->id;
                        $reserved = $totalAmount;
                        $scheduledDate = $order->order_date;

                        $productLot->reserved = $productLot->reserved + $reserved;
                        $productLot->available = $productLot->available - $reserved;

                        ProductLot::where('id', $productLot->id)
                            ->update([
                                'reserved' => $productLot->reserved,
                                'available' => $productLot->available
                            ]);

                        break;
                    }
                }

                $order->orderItems()->save(factory(OrderItem::class)->make([
                    'catalogue_num' => $product->catalogue_num,
                    'product_name' => $product->product_name,
                    'product_sku_id' => $productSku->id,
                    'product_lot_id' => $reservedProductLotId,
                    'size' => $productSku->size,
                    'price' => $productSku->price,
                    'quantity' => $quantity,
                    'reserved' => $reserved,
                    'scheduled_date' => $scheduledDate
                ]));

            }

        });
    }

    /**
     * @return array
     */
    private function generatePackagings() {
        return [
            [
                'name' => '2mL Vial',
                'gram_tare_start' => 2.0,
                'gram_tare_end' => 2.8,
                'up_to_sku_size' => 100
            ],
            [
                'name' => '8mL Vial',
                'gram_tare_start' => 8.8,
                'gram_tare_end' => 10.2,
                'up_to_sku_size' => 2000
            ],
            [
                'name' => '15mL Jar',
                'gram_tare_start' => 31.4,
                'gram_tare_end' => 34.4,
                'up_to_sku_size' => 5000
            ],
            [
                'name' => '30mL Jar',
                'gram_tare_start' => 48.9,
                'gram_tare_end' => 51.0,
                'up_to_sku_size' => 10000
            ]
        ];
    }

    /**
     * @return array
     */
    private function generateStorageLocations() {
        return [
            ['name' => 'Freezer 1'],
            ['name' => 'Freezer 2']
        ];
    }

    /**
     * @return array
     */
    private function skuSizes() {
        $sizes = [
            [1,2,5,10],
            [10,25,50,100],
            [100,250,500,1000],
            [1000,2000,5000,10000],
        ];

        return $sizes[rand(0,3)];
    }

    /**
     * @return Collection
     */
    private function getPackagings() {
        return DB::table('packagings')->get();
    }

    /**
     * @param int $productId
     * @return Collection
     */
    private function getProductLots($productId) {
        return DB::table('product_lots')
            ->where('product_id', $productId)
            ->orderBy('date_expires')
            ->orderBy('available')
            ->get();
    }

    /**
     * @param int $productId
     * @return Model
     */
    private function getRandomProductSku($productId) {
        return DB::table('product_skus')->where('product_id', $productId)->inRandomOrder()->first();
    }

    /**
     * @return Model
     */
    private function getRandomProduct() {
        return DB::table('products')->inRandomOrder()->first();
    }

    /**
     * @return int
     */
    private function getRandomStorageLocationId() {
        $storageLocation = DB::table('storage_locations')->inRandomOrder()->first();
        return $storageLocation->id;
    }

    /**
     * @param Collection $packagings
     * @param int $size
     * @return int
     */
    private function getPackagingBySize($packagings, $size) {
        $packagingId = 1;
        foreach ($packagings as $packaging) {
            if ($size <= $packaging->up_to_sku_size) {
                $packagingId = $packaging->id;
                break;
            }
        }
        return $packagingId;
    }

    /**
     * @return float
     */
    private function randomBaseSkuPrice() {
        return round( (rand(6,10) / 10) * 100,2);
    }

    /**
     * @param float $basePrice
     * @param int $baseSize
     * @param int $size
     * @param int $key
     * @return float
     */
    private function generateSkuPrice($basePrice, $baseSize, $size, $key) {
        return $basePrice * ((10 - $key) / 10) * ($size / $baseSize) + rand(0,9);
    }
}
