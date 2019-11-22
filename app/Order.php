<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    /**
     * @return HasMany
     */
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }
}
