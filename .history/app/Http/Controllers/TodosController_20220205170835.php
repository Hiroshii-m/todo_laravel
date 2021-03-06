<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    // TODOを削除する
    public function delete(Request $request)
    {
        Auth::user()->todos()->where('id', $request->id)->delete();
    }
    // TODOの完了状態の変更を登録
    public function updone(Request $request)
    {
        $todo = Todo::where('user_id', $request->user_id)->where('id', $request->id)->first();
        $todo->done_flg = $request->done_flg;
        $todo->save();
    }
    // 予想時間、実行時間を登録
    public function uptime(Request $request)
    {
        $todo = Todo::where('user_id', $request->user_id)->where('id', $request->id)->first();
        $todo->fill($request->only('expect_time', 'expect_minute', 'spend_time', 'spend_minute'))->save();
    }
}
