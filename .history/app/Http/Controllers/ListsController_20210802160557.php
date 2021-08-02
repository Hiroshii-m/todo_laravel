<?php

namespace App\Http\Controllers;

use App\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListsController extends Controller
{
    public function index($id)
    {
        $board = Auth::user()->boards()->find($id);
        // $listData = Auth::user()->lists()
        // ->leftJoin('todos', function ($join) {
        //     $join->on('lists.id', '=', 'todos.list_id')
        //         ->where('lists.user_id', '=', Auth::user()->id)
        // })
        // ->get();
        $la = Auth::user()->lists()
        ->leftJoin('posts', function ($join) {
            $join->on('users.id', '=', 'posts.user_id')
                ->where('posts.del_flg', '=', false);
        })
        ->get();
        $listData = Auth::user()->lists()
        ->leftJoin('todo', function ($join) {
            $join->on('lists.id', '=', 'todo.list_id')
                ->where('lists.user_id', '=', Auth::user()->id)
        })
        ->get();
        return view('lists.index', compact('board'));
    }
}
