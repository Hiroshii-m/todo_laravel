<?php

namespace App\Http\Controllers;

use App\Cluster;
use App\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClustersController extends Controller
{
    public function index($id)
    {
        $board = Auth::user()->boards()->find($id);
        $clusters = Auth::user()->clusters()->where('board_id', $id)->get();
        $todos = [];
        if(!empty($clusters)){
            foreach($clusters as $key => $val) {
                $todos .= Auth::user()->todos()->where('cluster_id', $val['id'])->get();
            }
        }

        return view('clusters.index', compact('board', 'clusters', 'todos'));
    }
    public function create(Request $request)
    {
        $cluster = new Cluster;
        $cluster->board_id = $request->b_id;
        $cluster->cluster_name = $request->cluster_name;
    }
}
