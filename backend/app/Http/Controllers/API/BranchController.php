<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BranchResource;
use App\Models\Branch;
use Illuminate\Http\Request;

class BranchController extends Controller
{
      public function index(){
        return BranchResource::collection(Branch::query()
                                            ->where('status','=','active')
                                            ->get()
        );
    }
}
