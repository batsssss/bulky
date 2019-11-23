<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ProductLot;

class WeighingController extends Controller
{
    public function orderPicker() {

        $lotsToWeigh = ProductLot::with([
            'product',
            'productLotContainers',
            'orderItems' => function($query) {
                $query->with('order');
            }
        ])->where('reserved', '>', 0)
            ->get();

        return $lotsToWeigh->toJson();
    }
}
