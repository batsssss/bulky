<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Order
 * @package App
 * @property $order_date
 */
class Order extends Model
{
    /**
     * @return HasMany
     */
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }
}
