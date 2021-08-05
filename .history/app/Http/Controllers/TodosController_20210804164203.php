<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    // TODOを追加する
    public function create(Request $request)
    {
        $todo = new Todo;
        $todo->fill($request->all())->save();

    }
}
