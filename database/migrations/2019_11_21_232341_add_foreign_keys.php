<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_lots', function (Blueprint $table) {
            $table->foreign('product_id')->references('id')->on('products');
        });

        Schema::table('product_lot_containers', function (Blueprint $table) {
            $table->foreign('product_lot_id')->references('id')->on('product_lots');
            $table->foreign('storage_location_id')->references('id')->on('storage_locations');
            $table->foreign('packaging_id')->references('id')->on('packagings');
        });

        Schema::table('product_packs', function (Blueprint $table) {
            $table->foreign('product_lot_id')->references('id')->on('product_lots');
            $table->foreign('product_sku_id')->references('id')->on('product_skus');
            $table->foreign('storage_location_id')->references('id')->on('storage_locations');
            $table->foreign('packaging_id')->references('id')->on('packagings');
            $table->foreign('order_item_id')->references('id')->on('order_items');
        });

        Schema::table('product_skus', function (Blueprint $table) {
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('packaging_id')->references('id')->on('packagings');
        });

        Schema::table('order_items', function (Blueprint $table) {
            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('product_sku_id')->references('id')->on('product_skus');
            $table->foreign('product_lot_id')->references('id')->on('product_lots');
        });

        Schema::table('weighing_sessions', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('product_lot_container_id')->references('id')->on('product_lot_containers');
        });

        Schema::table('weighing_records', function (Blueprint $table) {
            $table->foreign('weighing_session_id')->references('id')->on('weighing_sessions');
            $table->foreign('product_pack_id')->references('id')->on('product_packs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_lots', function (Blueprint $table) {
            $table->dropForeign(['product_lots_product_id_foreign']);
        });

        Schema::table('product_lot_containers', function (Blueprint $table) {
            $table->dropForeign(['product_lot_containers_product_lot_id_foreign']);
            $table->dropForeign(['product_lot_containers_storage_location_id_foreign']);
            $table->dropForeign(['product_lot_containers_packaging_id_foreign']);
        });

        Schema::table('product_packs', function (Blueprint $table) {
            $table->dropForeign(['product_packs_product_lot_id_foreign']);
            $table->dropForeign(['product_packs_product_sku_id_foreign']);
            $table->dropForeign(['product_packs_storage_location_id_foreign']);
            $table->dropForeign(['product_packs_packaging_id_foreign']);
            $table->dropForeign(['product_packs_order_item_id_foreign']);
        });

        Schema::table('product_skus', function (Blueprint $table) {
            $table->dropForeign(['product_skus_product_id_foreign']);
            $table->dropForeign(['product_skus_packaging_id_foreign']);
        });

        Schema::table('order_items', function (Blueprint $table) {
            $table->dropForeign(['order_items_order_id_foreign']);
            $table->dropForeign(['order_items_product_sku_id_foreign']);
            $table->dropForeign(['order_items_product_lot_id_foreign']);
        });

        Schema::table('weighing_sessions', function (Blueprint $table) {
            $table->dropForeign(['weighing_sessions_user_id_foreign']);
            $table->dropForeign(['weighing_sessions_product_lot_container_id_foreign']);
        });

        Schema::table('weighing_records', function (Blueprint $table) {
            $table->dropForeign(['weighing_records_weighing_session_id_foreign']);
            $table->dropForeign(['weighing_records_product_pack_id_foreign']);
        });
    }
}
