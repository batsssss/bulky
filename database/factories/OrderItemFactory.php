<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\OrderItem;

/** @var Factory $factory */

$factory->define(OrderItem::class, function (Faker $faker) {
    return [
        'filled_quantity' => 0
    ];
});
