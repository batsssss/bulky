<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\ProductLotContainer;

/** @var Factory $factory */

$factory->define(ProductLotContainer::class, function (Faker $faker) {
    return [
        'spilled' => 0.0
    ];
});
