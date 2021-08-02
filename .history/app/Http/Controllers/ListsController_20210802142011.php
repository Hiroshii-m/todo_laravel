<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListsController extends Controller
{
    public function index($id)
    {
        $data = Auth::user()->boards()->find($id);
        return view('lists.index', compact('data'));
    }
}
