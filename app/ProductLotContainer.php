<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductLotContainer extends Model
{
    /**
     * @return HasMany
     */
    public function weighingSessions() {
        return $this->hasMany(WeighingSession::class);
    }

    /**
     * @return BelongsTo;
     */
    public function productLot() {
        return $this->belongsTo(ProductLot::class);
    }

    /**
     * @return BelongsTo;
     */
    public function packaging() {
        return $this->belongsTo(Packaging::class);
    }

    /**
     * @return BelongsTo;
     */
    public function storageLocation() {
        return $this->belongsTo(StorageLocation::class);
    }

    /** FINDERS */

    /**
     * Retrieves container data with associated models
     * necessary for launching a weighing form.
     * @param int $id
     * @return ProductLotContainer|null
     */
    public function getForWeighingForm($id) {

        return $this->with([
            'storageLocation',
            'packaging',
            'productLot' => function($query) {
                $query->with([
                    'product',
                    'orderItems' => function($query) {
                        $query->with([
                            'order',
                            'productPacks' => function($query) {
                                $query->with('weighingRecords');
                            },
                            'productSku' => function($query) {
                                $query->with('packaging');
                            }
                        ]);
                    }
                ]);
            },
            'weighingSessions' => function($query) {
                $query->whereNull('end_datetime');
            }
        ])->where('id', '=', $id)
            ->whereHas('productLot', function($query) {
                $query->where('reserved', '>', 0);
            })->first();
    }
}
