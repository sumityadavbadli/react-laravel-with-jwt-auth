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


Route::get('/test',function(){
   return response()->json([
       'message' => "You done it",
   ],200);
});

Route::post('auth/register', 'Api\UserController@register');
Route::post('auth/login', 'Api\UserController@login');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('user', 'Api\UserController@getAuthUser');
});