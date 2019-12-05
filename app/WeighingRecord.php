<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
