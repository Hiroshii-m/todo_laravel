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
        $clusters = Auth::user()->clusters()->where('board_id', $id)->get();
        foreach($clusters as $key => $val) {
            $val['id']
        }
        
        return view('clusters.index', compact('board', 'clusters'));
    }
}
