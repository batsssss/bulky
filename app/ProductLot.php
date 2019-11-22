<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductLot extends Model
{
    /**
     * @return HasMany
     */
    public function productLotContainers() {
        return $this->hasMany(ProductLotContainer::class);
    }

    /**
     * @return HasMany
     */
    public function productPacks() {
        return $this->hasMany(ProductPack::class);
    }

    /**
     * @return HasMany
     */
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * @return BelongsTo;
     */
    public function product() {
        return $this->belongsTo(Product::class);
    }
}
