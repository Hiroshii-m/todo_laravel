<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = ['id', 'board_id', 'cluster_id', 'user_id', 'todo_name', 'done_flg', 'expect_time', 'spend_time', 'expect_minute', 'spend_minute', 'updated_at'];
}
