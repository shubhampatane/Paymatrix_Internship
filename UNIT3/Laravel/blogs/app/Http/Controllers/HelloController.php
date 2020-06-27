<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
   public function something(){
    $variable = "Shubham, from controller";
    return view('sub_views.hello',[
        'somedata' => $variable,
    ]);
   }
}
