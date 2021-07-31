<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\BoardsCollection;

class BoardsController extends Controller
{
    public function getBoards()
    {
        Log::debug(print_r(Board::paginate(), true));
        Log::debug(print_r(Board::all(), true));
        return new BoardsCollection(Board::paginate());
    }
    public function index()
    {
        return view('boards.index');
    }
    public function create(Request $request)
    {
        $request->validate([
            'board_name' => 'required|max:255',
        ]);
        $board = new Board;
        Auth::user()->boards()->save($board->fill($request->all()));
        return redirect('/lists');
    }
}
