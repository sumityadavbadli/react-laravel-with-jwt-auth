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

Route::get('/redirect/{social}','Auth\LoginController@socialLogin')->where('social','twitter|facebook|linkedin|google');

Route::get('{slug}', function() {
    return view('home');
})->where('slug', '(?!api)([A-z\d-\/_.]+)?');