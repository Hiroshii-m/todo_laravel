<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\BoardsCollection;

class BoardsController extends Controller
{
    // public function getBoards()
    // {
    //     return new BoardsCollection(Auth::user()->boards()->paginate(10));
    // }
    public function index()
    {
        $boards = Auth::user()->boards()->paginate(10);
        return view('boards.index', compact('boards'));
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