<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeighingRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weighing_records', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('weighing_session_id');
            $table->unsignedBigInteger('product_pack_id');
            $table->decimal('target', 9, 1);
            $table->decimal('tare', 9, 1);
            $table->decimal('net', 9, 1);
            $table->decimal('gross', 9, 1);
            $table->string('notes', 127);
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
        Schema::dropIfExists('weighing_records');
    }
}
