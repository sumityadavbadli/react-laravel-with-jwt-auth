<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Mockery\Exception;
use Validator;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */


    public function register(Request $request)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if($validator->fails()){
            return response()->json([
                "error" => 'validation_error',
                "message" => $validator->errors(),
            ], 422);
        }

        $request->merge(['password' => Hash::make($request->password)]);
        try{
            User::create($request->all());
            return response()->json(['status','registered successfully'],200);
        }
        catch(Exception $e){
            return response()->json([
                "error" => "could_not_register",
                "message" => "Unable to register user"
            ], 400);
        }

    }


}
