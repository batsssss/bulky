<?php

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use App\Product;

/** @var Factory $factory */

$factory->define(Product::class, function (Faker $faker) {
    return [
        'catalogue_num' => strtoupper($faker->lexify('??'))
            . $faker->unique()->numerify('###'),
        'product_name' => $faker->randomElement(['6-Methyl', '4-Propyl', '3-Benzyl', '2-Acetyl', '1-Deoxy'])
            . ' '
            . $faker->randomElement(['azido', 'amino', 'fluoro', 'iodo', 'chloro'])
            . ' '
            . $faker->randomElement(['alpha ', 'beta ', ''])
            . $faker->randomElement(['altrose', 'glucose', 'idose', 'mannose', 'xylose']),
        'appearance' => $faker->randomElement(['White', 'Off-White', 'Colourless'])
            . ' '
            . $faker->randomElement(['Crystalline Solid', 'Amorphous Solid', 'Oil']),
        'years_to_recertify' => $faker->numberBetween(1,10),
        'lead_time' => $faker->numberBetween(7,28)
    ];
});
