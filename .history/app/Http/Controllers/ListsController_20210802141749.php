<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListsController extends Controller
{
    public function index($id)
    {
        Auth::user()->boards()->where('id', $id)->first();
        return view('lists.index');
    }
}
