<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;
use App\Order;

class ProductController extends Controller
{
    public function index() {

        $products = Product::with('productLots', 'productSkus')
            ->orderBy('catalogue_num')
            ->get();

        $orders = Order::with(['orderItems' => function($query) {
            $query->with('productLot');
            $query->orderBy('catalogue_num');
        }])->get();

        return view('products.index', compact('products', 'orders'));
    }
}
