<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index() {

        $products = Product::with('productLots', 'productSkus')->get();

        return view('products.index', compact('products'));
    }
}
