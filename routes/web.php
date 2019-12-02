<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Uncomment to view all product and order data instead of using React
//Route::get('/products', 'ProductController@index');
Route::get('/jsonpicker', 'WeighingController@orderPicker');
Route::get('/jsonform/{containerId}', 'WeighingController@weighingForm');

// Uncomment to load React components
Route::view('/{path?}', 'app');