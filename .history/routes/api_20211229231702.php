<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => 'api'], function(){
//     Route::post('/upboard', 'BoardsController@upBoard');
//     Route::post('/newcluster', 'ClustersController@create');
//     Route::post('/upcluster', 'ClustersController@update');
//     Route::post('/delcluster', 'ClustersController@delete');
//     Route::post('/createtodo', 'TodosController@create');
//     Route::post('/uptodo', 'TodosController@update');
//     Route::post('/deltodo', 'TodosController@delete');
//     Route::post('/updonetodo', 'TodosController@updone');
//     Route::post('/uptimetodo', 'TodosController@uptime');
// });