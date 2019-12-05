<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\Order;

/** @var Factory $factory */

$factory->define(Order::class, function (Faker $faker) {

    static $orderNum = 26500;

    return [
        'order_num' => $orderNum++,
        'order_date' => $faker->dateTimeBetween('-1 week', 'now')
    ];
});
