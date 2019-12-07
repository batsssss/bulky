<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use DateTime;
use Exception;

/**
 * Class WeighingSession
 * @package App
 * @property $id
 * @property $product_lot_container_id
 * @property $user_id
 * @property $start_datetime
 */
class WeighingSession extends Model
{
    /**
     * @return HasMany
     */
    public function weighingRecords() {
        return $this->hasMany(WeighingRecord::class);
    }

    /**
     * @return BelongsTo
     */
    public function productLotContainer() {
        return $this->belongsTo(ProductLotContainer::class);
    }

    /** UTILITIES */

    /**
     * Builds a new weighing session object
     * for the given container.
     * @param int $containerId
     * @return WeighingSession
     */
    public function buildObject($containerId) {
        $weighingSession = new WeighingSession();

        $weighingSession->product_lot_container_id = $containerId;

        /** @Todo Use logged-in user id */
        $weighingSession->user_id = 1;

        $weighingSession->start_datetime = $this->getNow();
        $weighingSession->notes = '';

        return $weighingSession;
    }

    public function getNow() {
        try {
            $now = new DateTime();
        } catch (Exception $exception) {
            $now = null;
        }

        return $now;
    }
}
