<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   public function index()
    {
        return CategoryResource::collection(Category::orderBy('name')->get());
    }

    public function show($slug)
    {
         $category = Category::query()
        ->with([
            'posts' => function ($query) {
                $query
                    ->with(['author', 'category'])
                    ->where('status', 'published')
                    ->orderByDesc('published_at');
            }
        ])
        ->where('slug', $slug)
        ->firstOrFail();

        return new CategoryResource($category);
    }
}
