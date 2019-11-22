<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\ProductLot;

/** @var Factory $factory */

$factory->define(ProductLot::class, function (Faker $faker) {

    $initial = $faker->randomFloat(1, 25, 100000);
    $current = $faker->randomFloat(1, 0, floor($initial));

    $date = $faker->dateTimeBetween('-5 years');

    return [
        'lot_number' => $faker->randomElement(['SMC', 'RGL', 'NWJ', 'APZ'])
        . $faker->unique()->numberBetween(10000, 99999),
        'initial' => $initial,
        'remaining' => $current,
        'reserved' => 0.0,
        'available' => $current,
        'date_released' => $date,
        'date_certified' => $date,
        'date_expires' => $faker->dateTimeBetween('now', '+10 years')
    ];
});
