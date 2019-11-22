<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Product
 * @package App
 * @property $id
 * @property $catalogue_num
 * @property $product_name
 * @property $lead_time
 * @property $years_to_recertify
 */
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
