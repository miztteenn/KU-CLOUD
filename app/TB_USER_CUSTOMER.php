<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TB_USER_CUSTOMER extends Model
{
    //
    protected  $table = "TB_USER_CUSTOMER";

    protected $fillable = [
        'user_id','company_id'
    ];
}
