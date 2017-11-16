<?php

namespace App\Api\V1\Controllers;

use Config;
use Dingo\Api\Http\FormRequest;

class ForgotPasswordRequest extends FormRequest
{
    public function rules()
    {
        return Config::get('email' => 'required|email');
    }

    public function authorize()
    {
        return true;
    }
}
