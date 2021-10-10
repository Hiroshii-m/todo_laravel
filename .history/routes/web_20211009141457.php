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

Route::group(['middleware' => 'auth'], function(){
    Route::get('/boards', 'BoardsController@index')->name('boards');
    Route::post('/boards', 'BoardsController@create');
    Route::post('/upboard', 'BoardsController@upBoard');
    Route::delete('/boards/{id}/delete', 'BoardsController@delete')->name('boards.delete');
    Route::get('/boards/withdraw', 'BoardsController@withdraw')->name('boards.withdraw');
    Route::delete('/boards/withdraw', 'BoardsController@retire')->name('boards.retire');
    Route::get('/clusters/{id}', 'ClustersController@index')->name('clusters');
});

Route::group(['middleware' => 'web'], function(){
    Route::post('/upboard', 'BoardsController@upBoard');
});

Auth::routes();


