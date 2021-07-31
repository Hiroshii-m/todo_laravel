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
});
Route::get('/lists', 'ListsController@index')->name('lists');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('boards.index');
