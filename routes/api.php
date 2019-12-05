<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/order-picker', 'WeighingController@orderPicker');
Route::get('/order-item', 'WeighingController@orderItem');
Route::get('/product-lots', 'WeighingController@productLot');
Route::get('/product-lot-container', 'WeighingController@productLotContainer');
Route::get('/weighing-form/{containerId}', 'WeighingController@weighingForm');