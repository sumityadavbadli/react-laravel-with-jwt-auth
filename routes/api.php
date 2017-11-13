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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::group(['prefix'=> 'auth'],function(){
    Route::post('/register','Auth\RegisterController@register');
    Route::post("/login",'Auth\LoginController@login');
});

Route::middleware(['jwt_auth'])->group(function(){
   Route::get('/hello',function(){
       return "Cool dude";
   });
});
