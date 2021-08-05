<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    // TODOを追加する
    public function create(Request $request)
    {
        $todo = new Todo;
        $todo->fill($request->all())->save();
        return $todo->id;
    }
    // TODOを変更する
    public function update(Request $request)
    {
        $todo = Todo::where('user_id', $request->user_id)->where('id', $request->id)->first();
        $todo->todo_name = $request->todo_name;
        $todo->save();
    }
}
