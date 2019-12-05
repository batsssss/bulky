<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeighingSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weighing_sessions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('product_lot_container_id');
            $table->dateTime('start_datetime');
            $table->dateTime('end_datetime')->nullable();
            $table->decimal('gross_before', 9, 1)->nullable();
            $table->decimal('gross_after', 9, 1)->nullable();
            $table->decimal('removed', 9, 1)->nullable();
            $table->decimal('spilled', 9, 1)->nullable();
            $table->string('notes', 127)->nullable();
            $table->unsignedInteger('rating')->nullable();
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
        Schema::dropIfExists('weighing_sessions');
    }
}
