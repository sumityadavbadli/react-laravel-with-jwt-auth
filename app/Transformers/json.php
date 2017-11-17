<?php
 
namespace App\Transformers;
 
class Json
{
    public static function response($data = null, $message = null, $status = null)
    {
        return [
            'data'    => $data,
            'message' => $message,
            'status' => $status,
        ];
    }
}