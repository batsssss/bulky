<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\ProductLot;

/** @var Factory $factory */

$factory->define(ProductLot::class, function (Faker $faker) {

    return [
        'lot_number' => $faker->randomElement(['SMC', 'RGL', 'NWJ', 'APZ'])
        . $faker->unique()->numberBetween(10000, 99999),
        'initial' => 0.0,
        'remaining' => 0.0,
        'reserved' => 0.0,
        'available' => 0.0,
        'date_released' => null,
        'date_certified' => null,
        'date_expires' => null
    ];
});
