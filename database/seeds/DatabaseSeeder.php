<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;
use App\Product;
use App\ProductLot;
use App\ProductSku;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Barbara',
            'email' => 'barbara.goss@ryerson.ca',
            'password' => bcrypt('bulky')
        ]);

        DB::table('packagings')->insert([
            'name' => '2mL Vial',
            'gram_tare_start' => 2.0,
            'gram_tare_end' => 2.8,
            'up_to_sku_size' => 100
        ]);

        DB::table('packagings')->insert([
            'name' => '8mL Vial',
            'gram_tare_start' => 8.8,
            'gram_tare_end' => 10.2,
            'up_to_sku_size' => 2000
        ]);

        DB::table('packagings')->insert([
            'name' => '15mL Jar',
            'gram_tare_start' => 31.4,
            'gram_tare_end' => 34.4,
            'up_to_sku_size' => 5000
        ]);

        DB::table('packagings')->insert([
            'name' => '30mL Jar',
            'gram_tare_start' => 48.9,
            'gram_tare_end' => 51.0,
            'up_to_sku_size' => 10000
        ]);

        DB::table('storage_locations')->insert([
            'name' => 'Freezer 1'
        ]);

        DB::table('storage_locations')->insert([
            'name' => 'Freezer 2'
        ]);

        $packagings = $this->getPackagings();

        factory(Product::class, 20)->create()->each(function ($product) use ($packagings) {

            /** @var Product $product */
            $product->productLots()->createMany(factory(ProductLot::class, rand(1,3))->make()->toArray());

            $sizes = $this->skuSizes();
            $basePrice = $this->getRandomBaseSkuPrice();
            $baseSize = $sizes[0];

            for ($i = 1; $i <= count($sizes); $i++) {
                $size = $sizes[$i - 1];

                $product->productSkus()->save(factory(ProductSku::class)->make([
                    'packaging_id' => $this->getSkuPackaging($packagings, $size),
                    'size' => $size,
                    'price' => $this->getRandomSkuPrice($basePrice, $baseSize, $size, $i)
                ]));
            }
        });
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
     * @param Collection $packagings
     * @param int $size
     * @return int
     */
    private function getSkuPackaging($packagings, $size) {
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
    private function getRandomBaseSkuPrice() {
        return round( (rand(6,10) / 10) * 100,2);
    }

    /**
     * @param float $basePrice
     * @param int $baseSize
     * @param int $size
     * @param int $key
     * @return float
     */
    private function getRandomSkuPrice($basePrice, $baseSize, $size, $key) {
        return $basePrice * ((10 - $key) / 10) * ($size / $baseSize) + rand(0,9);
    }
}
