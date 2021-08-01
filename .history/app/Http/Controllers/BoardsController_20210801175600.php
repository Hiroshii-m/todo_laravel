<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\BoardResource;

class BoardsController extends Controller
{
    public function getBoard($b_id, $u_id)
    {
        $board = Board::where('id', '=', $b_id)->get();
        Log::debug(print_r($board, true));
        return new BoardResource(Board::find($b_id));
    }
    public function upBoard($id)
    {
        $board = Board::find($id);
    }
    public function index()
    {
        $boards = Auth::user()->boards()->paginate(10);
        return view('boards.index', compact('boards'));
    }
    // ボード作成
    public function create(Request $request)
    {
        $request->validate([
            'board_name' => 'required|max:255',
        ]);
        $board = new Board;
        Auth::user()->boards()->save($board->fill($request->all()));
        $last_id = $board->id;
        return redirect()->route('lists', ['id' => $last_id]);
    }
    // ボード削除
    public function delete($id)
    {
        // GETパラメータが数値かどうか判定する
        if(!ctype_digit($id)){
            return redirect('/boards')->with('flash_message', __('Invalid operation was performed.'));
        }

        // ボードを削除
        Auth::user()->boards()->where('id', $id)->delete();

        return redirect('/boards')->with('flash_message', __('Deleted'));
    }
}