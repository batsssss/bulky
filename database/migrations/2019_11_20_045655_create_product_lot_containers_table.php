<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductLotContainersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_lot_containers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_lot_id');
            $table->unsignedBigInteger('storage_location_id');
            $table->unsignedBigInteger('packaging_id');
            $table->unsignedInteger('container_num');
            $table->decimal('initial', 9, 1);
            $table->decimal('used', 9, 1)->nullable();
            $table->decimal('spilled', 9, 1)->nullable();
            $table->decimal('remaining', 9, 1);
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
        Schema::dropIfExists('product_lot_containers');
    }
}
