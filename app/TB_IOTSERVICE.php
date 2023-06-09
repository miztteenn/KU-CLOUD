<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TB_IOTSERVICE extends Model
{
    //
    protected $primaryKey = 'iotservice_id';
    protected $table = "TB_IOTSERVICE";
    protected $fillable = [
        'iotservice_id',
        'company_id',
        'iot_name',
        'iot_name_DW',
        'url',
        'type',
        'alias',
        'description',
        'status',
        'dataOutput',
        'strJson',
        'dataformat',
        'value_cal',
        'value_gropby',
        'updatetime_input',
    ];

    public function register()
    {
        return $this->hasOne('App\TB_REGISTER_IOT_SERVICE', 'iotservice_id');
    }

}
