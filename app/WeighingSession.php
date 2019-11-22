<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WeighingSession extends Model
{
    /**
     * @return HasMany
     */
    public function weighingRecords() {
        return $this->hasMany(WeighingRecord::class);
    }
}
