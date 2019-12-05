<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packagings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 63);
            $table->decimal('gram_tare_start', 5, 1);
            $table->decimal('gram_tare_end', 5, 1);
            $table->unsignedInteger('up_to_sku_size');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packagings');
    }
}
