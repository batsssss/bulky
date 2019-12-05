<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('product_sku_id')->nullable();
            $table->unsignedBigInteger('product_lot_id')->nullable();
            $table->string('catalogue_num',15);
            $table->string('product_name',1023);
            $table->decimal('size', 9, 1);
            $table->decimal('price', 8, 2);
            $table->unsignedInteger('quantity');
            $table->decimal('reserved', 9, 1)->nullable();
            $table->unsignedInteger('filled_quantity')->nullable();
            $table->date('scheduled_date');
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
        Schema::dropIfExists('order_items');
    }
}
