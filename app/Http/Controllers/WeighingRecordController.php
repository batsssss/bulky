<?php

namespace App\Http\Controllers;

use App\ProductPack;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\WeighingRecord;

class WeighingRecordController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $productPack = new ProductPack();
        $productPack->order_item_id = $data['order_item_id'];
        $productPack->product_sku_id = $data['product_sku_id'];
        $productPack->product_lot_id = $data['product_lot_id'];
        $productPack->packaging_id = $data['packaging_id'];
        $productPack->size = $data['size'];
        $productPack->is_ready = $data['is_ready'];
        $productPack->id = 32;

        $weighingRecord = new WeighingRecord();
        $weighingRecord->weighing_session_id = 1;
        $weighingRecord->product_pack_id = $productPack->id;
        $weighingRecord->target = $data['size'];
        $weighingRecord->id = 89;

        $responseData = [
            'product_pack' => $productPack->toArray(),
            'weighing_record' => $weighingRecord->toArray()
        ];
        return json_encode($responseData);
    }

}
