<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BoardsController extends Controller
{
    public function index()
    {
        $boards = Auth::user()->boards()->paginate(10);
        // return view('boards.index', compact('boards'));
        return view('boards.index');
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
        return redirect()->route('clusters', ['id' => $last_id]);
    }
    public function update(Request $request)
    {
        $board = Board::where('user_id', '=', $request->u_id)->where('id', '=', $request->b_id)->first();
        $board->board_name = $request->text;
        $board->save();
    }
    // ボード削除
    public function delete($id)
    {
        // GETパラメータが数値かどうか判定する
        if(!ctype_digit($id)){
            return redirect('/boards')->with('flash_message', __('Invalid operation was performed.'));
        }

        // TODOを削除
        Auth::user()->todos()->where('board_id', $id)->delete();
        // クラスター（リスト）を削除
        Auth::user()->clusters()->where('board_id', $id)->delete();
        // ボードを削除
        Auth::user()->boards()->where('id', $id)->delete();

        return redirect('/boards')->with('flash_message', __('Deleted'));
    }
    // 退会ページ
    public function withdraw()
    {
        return view('member.withdraw');
    }
    // 退会する
    public function retire()
    {
        // ユーザーのTODO,クラスター(リスト),ボードを削除
        $u_id = Auth::user()->id;
        Auth::user()->todos()->where('user_id', $u_id)->delete();
        Auth::user()->clusters()->where('user_id', $u_id)->delete();
        Auth::user()->boards()->where('user_id', $u_id)->delete();
        // ユーザーを削除
        Auth::user()->delete();

        return redirect('/login')->with('flash_message', __('Deleted an membership'));
    }
}
