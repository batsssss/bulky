<?php

namespace App\Http\Controllers;

use App\ProductPack;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\WeighingRecord;
use Illuminate\Support\Facades\DB;

class WeighingRecordController extends Controller
{
    /**
     * @param Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (isset($data['id'])) {
            $productPack = DB::table('product_packs')->where('id', '=', $data['id']);
        } else {
            $productPack = new ProductPack();
            $productPack->order_item_id = $data['order_item_id'];
            $productPack->product_sku_id = $data['product_sku_id'];
            $productPack->product_lot_id = $data['product_lot_id'];
            $productPack->packaging_id = $data['packaging_id'];
            $productPack->size = $data['size'];
            $productPack->tare = 0.0;
            $productPack->net = 0.0;
            $productPack->is_ready = $data['is_ready'];
            $productPack->save();
        }

        $weighingRecord = new WeighingRecord();
        $weighingRecord->weighing_session_id = $data['weighing_session_id'];
        $weighingRecord->product_pack_id = $productPack->id;
        $weighingRecord->target = $data['size'];

        $weighingRecord->save();

        $responseData = [
            'product_pack' => $productPack->toArray(),
            'weighing_record' => $weighingRecord->toArray()
        ];
        return json_encode($responseData);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function update(Request $request) {

        $data = json_decode($request->getContent(), true);

        /** @var WeighingRecord $weighingRecord */
        $weighingRecord = WeighingRecord::find($data['id']);

        $weighingRecord->tare = $data['tare'];
        $weighingRecord->net = $data['net'];
        $weighingRecord->gross= $data['gross'];
        $weighingRecord->notes= $data['notes'];

        $weighingRecord->save();

        /** @var ProductPack $productPack */
        $productPack = ProductPack::find($weighingRecord->product_pack_id);

        $productPack->tare = $data['tare'];
        $productPack->net = $data['net'];
        $productPack->packaging_id = $data['packaging_id'];
        $productPack->is_ready = true;

        $productPack->save();

        $responseData = [
            'product_pack' => $productPack->toArray(),
            'weighing_record' => $weighingRecord->toArray()
        ];

        return json_encode($responseData);
    }
}
