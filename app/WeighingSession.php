<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
}
