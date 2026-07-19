<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        return PostResource::collection(Post::query()
                                        ->with(['author', 'category'])
                                        ->where('status', 'published')
                                        ->orderByDesc('published_at')
                                        ->paginate(6)
    );
    }
    public function show($slug){
         $post = Post::query()
        ->with(['author', 'category'])
        ->where('status', 'published')
        ->where('slug', $slug)
        ->firstOrFail();

    return new PostResource($post);
    }
}
