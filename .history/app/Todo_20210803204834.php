<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['id', 'cluster_id', 'list_id', 'user_id', 'todo_name', 'done_flg', 'expect_time', 'spend_time', 'updated_at'];
}
