<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    //

    public static function insertRecord($request) {

    	$rs = new Blog();

        $rs->title = $request->get('name');
        $rs->body = $request->get('body');

        $rs->save();

        return $rs;

    }
}
