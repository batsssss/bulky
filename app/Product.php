<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    public function productLots() {
        return $this->hasMany(ProductLot::class);
    }

}
