<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class WeighingRecord
 * @package App
 * @property $id
 * @property $weighing_session_id
 * @property $product_pack_id
 * @property $target
 * @property $tare
 * @property $net
 * @property $gross
 * @property $notes
 */
class WeighingRecord extends Model
{
    /**
     * @return BelongsTo
     */
    public function weighingSession() {
        return $this->belongsTo(WeighingSession::class);
    }

    /**
     * @return BelongsTo
     */
    public function productPack() {
        return $this->belongsTo(ProductPack::class);
    }
}
