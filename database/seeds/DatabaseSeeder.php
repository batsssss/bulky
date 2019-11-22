<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Barbara',
            'email' => 'barbara.goss@ryerson.ca',
            'password' => bcrypt('bulky')
        ]);
    }
}
