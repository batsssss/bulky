<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{

    /**
     * @return HasMany
     */
    public function productLots() {
        return $this->hasMany(ProductLot::class);
    }

    /**
     * @return HasMany
     */
    public function productSkus() {
        return $this->hasMany(ProductSku::class);
    }

}
