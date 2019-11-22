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
}
