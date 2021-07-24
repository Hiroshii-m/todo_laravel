<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BoardsController extends Controller
{
    public function index()
    {
        return view('boards.index');
    }
}
