<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BoardsController extends Controller
{
    public function index()
    {
        return view('boards.index');
    }
    public function create(Request $request)
    {
        $request->validate([
            'board_name' => 'required|max:255'
        ]);
    }
}
