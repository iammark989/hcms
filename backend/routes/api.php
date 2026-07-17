<?php

use App\Http\Controllers\API\AuthorController;
use App\Http\Controllers\API\BranchController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/authors',[AuthorController::class,'index']);
Route::get('/posts',[PostController::class,'index']);
Route::get('/branches',[BranchController::class,'index']);

Route::get('/categories/{slug}',[CategoryController::class,'show']);
Route::get('/posts/{slug}',[PostController::class,'show']);
Route::get('/branches/{slug}',[BranchController::class,'show']);