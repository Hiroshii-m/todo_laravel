<?php

namespace App\Http\Controllers;

use App\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClustersController extends Controller
{
    public function index($id)
    {
        $board = Auth::user()->boards()->find($id);
        $todoData = Auth::user()->clusters()
        ->leftJoin('todos', function ($join) {
            $join->on('clusters.id', '=', 'todos.cluster_id')
                ->where('clusters.user_id', '=', Auth::user()->id);
        })
        ->get();
        return view('clusters.index', compact('board', 'todoData'));
    }
}
