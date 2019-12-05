<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class ProductSku
 * @package App
 * @property $id
 * @property $size
 * @property $price
 */
class ProductSku extends Model
{
    /**
     * @return HasMany
     */
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * @return HasMany
     */
    public function productPacks() {
        return $this->hasMany(ProductPack::class);
    }

    /**
     * @return BelongsTo;
     */
    public function product() {
        return $this->belongsTo(Product::class);
    }

    /**
     * @return BelongsTo;
     */
    public function packaging() {
        return $this->belongsTo(Packaging::class);
    }
}
