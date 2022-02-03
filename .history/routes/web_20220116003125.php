<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('top');
});


Auth::routes();

Route::group(['middleware' => 'auth'], function(){
    // ボードクラス
    Route::get('/home', 'BoardsController@index');
    // Route::get('/boards', 'BoardsController@index')->name('boards');
    // Route::post('/boards', 'BoardsController@store');
    Route::resource('boards', 'BoardsController')->only([
        'index', 'store'
    ]);
    Route::resource('boards', 'BoardsController')->names([
        'index' => 'boards'
    ]);
    Route::delete('/boards/{id}/delete', 'BoardsController@delete')->name('boards.delete');
    Route::get('/boards/withdraw', 'BoardsController@withdraw')->name('boards.withdraw');
    Route::delete('/boards/withdraw', 'BoardsController@retire')->name('boards.retire');
    // Route::apiResources([
    //     'boards' => 'BoardsController'
    // ]);
    Route::put('/api/boards', 'BoardsController@update');
    // クラスタークラス
    Route::get('/clusters/{id}', 'ClustersController@index')->name('clusters');
    Route::post('/api/clusters', 'ClustersController@create');
    Route::put('/api/clusters', 'ClustersController@update');
    Route::delete('/api/clusters', 'ClustersController@delete');
    // TODOクラス
    Route::patch('/api/todos', 'TodosController@create');
    Route::post('/api/uptodo', 'TodosController@update');
    Route::post('/api/deltodo', 'TodosController@delete');
    Route::post('/api/updonetodo', 'TodosController@updone');
    Route::post('/api/uptimetodo', 'TodosController@uptime');
});


