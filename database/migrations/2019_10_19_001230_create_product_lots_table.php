<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductLotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_lots', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id');
            $table->string('lot_number', 15);
            $table->decimal('initial', 9, 1);
            $table->decimal('remaining', 9, 1);
            $table->decimal('reserved', 9, 1)->nullable();
            $table->decimal('available', 9, 1);
            $table->date('date_released');
            $table->date('date_certified')->nullable();
            $table->date('date_expires')->nullable();
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
        Schema::dropIfExists('product_lots');
    }
}
