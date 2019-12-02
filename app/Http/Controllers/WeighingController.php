<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use DateTime;

use App\ProductLot;
use App\ProductLotContainer;
use App\OrderItem;
use App\Packaging;
use App\WeighingSession;

class WeighingController extends Controller
{
    public function orderPicker() {

        $lotsToWeigh = (new ProductLot)->getToWeigh();
        return $lotsToWeigh->toJson();
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

        $weighingSession = new WeighingSession();
        $weighingSession->id = 1;
        $weighingSession->product_lot_container_id = $containerId;
        $weighingSession->user_id = 1;
        $weighingSession->start_datetime = new DateTime();

        /** @var Collection $packagings */
        $packagings = Packaging::pluck('name', 'id');

        return json_encode([
            'container' => $container,
            'session' => $weighingSession->toArray(),
            'packagings' => $packagings->toArray()
        ]);
    }
}
