<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\ProductLot;
use App\ProductLotContainer;
use App\OrderItem;
use App\Packaging;
use App\WeighingSession;
use Illuminate\Support\Facades\Date;

class WeighingController extends Controller
{
    public function orderPicker() {

        $lotsToWeigh = (new ProductLot)->getToWeigh();
        return $lotsToWeigh->toJson();
    }

    public function orderItem() {

        $orderData = (new ProductLot)->getToOrder();
        return $orderData->toJson();
    }

    public function productLot() {

        $orderData = (new ProductLot)->getProductLotData();
        return $orderData->toJson();
    }

    public function productLotContainer() {

        $orderData = (new ProductLot)->getProductLotContainer();
        return $orderData->toJson();
    }

    public function weighingForm($containerId) {

        if (! ProductLotContainer::where('id', $containerId)->exists()) {
            return [];
            /** @TODO redirect back to order picker with flash error */
        }

        $container = (new ProductLotContainer)->getForWeighingForm($containerId);

        if (empty($container)) {
            return [];
            /** @TODO show flash that nothing to weigh */
        }

        $container = $container->toArray();

        $container['product_lot']['order_items'] = (new OrderItem)->addMissingPacks(
            $container['product_lot']['order_items']
        );

        $data['container'] = $container;

        if (empty($container['weighing_sessions'])) {
            $weighingSession = (new WeighingSession)->buildObject($containerId);
            $weighingSession->save();
            $container['weighing_sessions'][] = $weighingSession->toArray();
        }

        /** @var Collection $packagings */
        $packagings = Packaging::pluck('name', 'id');

        return json_encode([
            'container' => $container,
            'packagings' => $packagings->toArray()
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function update(Request $request) {

        $data = json_decode($request->getContent(), true);

        /** @var WeighingSession $weighingSession */
        $weighingSession = WeighingSession::find($data['id']);

        $weighingSession->gross_before = $data['gross_before'];
        $weighingSession->gross_after = $data['gross_after'];
        $weighingSession->removed = $data['gross_before'] - $data['gross_after'];
        $weighingSession->spilled = 0.0;
        $weighingSession->notes = $data['notes'];
        $weighingSession->rating = $data['rating'];
        $weighingSession->end_datetime = (new WeighingSession())->getNow();

        $weighingSession->save();

        return json_encode([
            'weighing_session' => $weighingSession->toArray()
        ]);
    }
}
