<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItem extends Model
{
    /**
     * @return HasMany
     */
    public function productPacks() {
        return $this->hasMany(ProductPack::class);
    }

    /**
     * @return BelongsTo;
     */
    public function order() {
        return $this->belongsTo(Order::class);
    }

    /**
     * @return BelongsTo;
     */
    public function productLot() {
        return $this->belongsTo(ProductLot::class);
    }

    /**
     * @return BelongsTo;
     */
    public function productSku() {
        return $this->belongsTo(ProductSku::class);
    }

    /** UTILITIES */

    /**
     * If an order item has fewer saved packs than its quantity,
     * add the remaining number of packs using default data from the order item.
     * @param array $orderItems
     * @return array
     */
    public function addMissingPacks($orderItems) {
        $productPack = new ProductPack();

        foreach ($orderItems as $key => $orderItem) {
            $packCount = count($orderItem['product_packs']);

            for ($i = $packCount; $i <= $orderItem['quantity'] - 1; $i++) {
                $orderItems[$key]['product_packs'][$i]
                    = $productPack->buildFromOrderItem($orderItem);
            }
        }

        return $orderItems;
    }
}
