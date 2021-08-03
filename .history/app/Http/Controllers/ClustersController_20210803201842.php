<?php

namespace App\Http\Controllers;

use App\Cluster;
use App\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class ClustersController extends Controller
{
    public function index($id)
    {
        $board = Auth::user()->boards()->find($id);
        $clusters = Auth::user()->clusters()->where('board_id', $id)->get();
        $todos = Auth::user()->todos()->where('board_id', $id)->get();

        return view('clusters.index', compact('board', 'clusters', 'todos'));
    }
    // クラスター（リスト）を作成
    public function create(Request $request)
    {
        $cluster = new Cluster;
        $cluster->fill($request->all())->save();
        return $cluster->id;
    }
    // クラスター（リスト）を更新
    public function update(Request $request)
    {
        // $cluster = Cluster::find($request->id);
        $cluster = Cluster::where('user_id', $request->user_id)->where('id', $request->id)->first();
        $cluster->cluster_name = $request->cluster_name;
        $cluster->save();
    }
    // クラスター（リスト）を削除
    public function delete(Request $request)
    {
        Cluster::where('user_id', $request->user_id)->where('id', $request->id)->delete();
    }
}
