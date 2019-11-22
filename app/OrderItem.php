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
}
