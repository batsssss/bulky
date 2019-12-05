<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductPack extends Model
{
    /**
     * @return HasMany
     */
    public function weighingRecords() {
        return $this->hasMany(WeighingRecord::class);
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

    /**
     * @return BelongsTo;
     */
    public function packaging() {
        return $this->belongsTo(Packaging::class);
    }

    /**
     * @return BelongsTo;
     */
    public function storageLocation() {
        return $this->belongsTo(StorageLocation::class);
    }

    /**
     * @return BelongsTo;
     */
    public function orderItem() {
        return $this->belongsTo(OrderItem::class);
    }

    /** UTILITIES */

    /**
     * Builds an array of Packaging data from the given Order Item data.
     * @param array $orderItem
     * @return array
     */
    public function buildFromOrderItem($orderItem) {
        return [
            'product_lot_id' => $orderItem['product_lot_id'],
            'product_sku_id' => $orderItem['product_sku_id'],
            'packaging_id' => $orderItem['product_sku']['packaging_id'],
            'order_item_id' => $orderItem['id'],
            'size' => $orderItem['size'],
            'is_ready' => false,
            'packaging' => $orderItem['product_sku']['packaging']
        ];
    }
}
