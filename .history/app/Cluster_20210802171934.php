<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cluster extends Model
{
    protected $fillable = ['id', 'board_id', 'user_id', 'cluster_name', 'updated_at'];
}
