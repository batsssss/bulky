<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\ProductSku;

/** @var Factory $factory */

$factory->define(ProductSku::class, function (Faker $faker) {

    return [
        'packaging_id' => 1,
        'size' => 1,
        'price' => 0.00
    ];
});
