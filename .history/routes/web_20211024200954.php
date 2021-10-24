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

Route::get('/home', function () {
    return view('boards');
});

Route::group(['middleware' => 'auth'], function(){
    Route::get('/boards', 'BoardsController@index')->name('boards');
    Route::post('/boards', 'BoardsController@create');
    Route::delete('/boards/{id}/delete', 'BoardsController@delete')->name('boards.delete');
    Route::get('/boards/withdraw', 'BoardsController@withdraw')->name('boards.withdraw');
    Route::delete('/boards/withdraw', 'BoardsController@retire')->name('boards.retire');
    Route::get('/clusters/{id}', 'ClustersController@index')->name('clusters');
});

Auth::routes();


