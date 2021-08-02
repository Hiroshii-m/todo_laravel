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
        $listData = Auth::user()->lists()
        ->leftJoin('todos', function ($join) {
            $join->on('clusters.id', '=', 'todos.list_id')
                ->where('clusters.user_id', '=', Auth::user()->id);
        })
        ->get();
        return view('lists.index', compact('board'));
    }
}
