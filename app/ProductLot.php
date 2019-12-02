<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Class ProductLot
 * @package App
 * @property $id
 * @property $lot_number
 * @property $reserved
 * @property $available
 */
class ProductLot extends Model
{
    /**
     * @return HasMany
     */
    public function productLotContainers() {
        return $this->hasMany(ProductLotContainer::class);
    }

    /**
     * @return HasMany
     */
    public function productPacks() {
        return $this->hasMany(ProductPack::class);
    }

    /**
     * @return HasMany
     */
    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * @return BelongsTo;
     */
    public function product() {
        return $this->belongsTo(Product::class);
    }

    /** FINDERS */

    /**
     * Retrieve all lots that are reserved for orders,
     * as well as their non-empty containers and related non-filled order items.
     * @return ProductLot[]
     */
    public function getToWeigh() {

        return $this->with([
            'product',
            'productLotContainers' => function($query) {
                $query->where('product_lot_containers.remaining', '>', 0)
                    ->orderBy('product_lot_containers.remaining');
            },
            'orderItems' => function($query) {
                $query->where('filled_quantity', '<', DB::raw('quantity'))
                    ->with(['order', 'productPacks']);
            }
        ])->where('reserved', '>', 0)
            ->get();
    }
}
