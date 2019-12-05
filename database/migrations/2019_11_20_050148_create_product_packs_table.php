<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductPacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_packs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_lot_id');
            $table->unsignedBigInteger('product_sku_id')->nullable();
            $table->unsignedBigInteger('packaging_id');
            $table->unsignedBigInteger('storage_location_id')->nullable();
            $table->unsignedBigInteger('order_item_id')->nullable();
            $table->unsignedInteger('size');
            $table->decimal('tare', 9, 1);
            $table->decimal('net', 9, 1);
            $table->boolean('is_ready')->default(false);
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
        Schema::dropIfExists('product_packs');
    }
}
