<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class `List` extends Model
{
    protected $fillable = ['id', 'board_id', 'user_id', 'list_name', 'updated_at'];
}
