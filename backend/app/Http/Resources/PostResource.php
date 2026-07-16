<?php

namespace App\Http\Resources;

use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id,
        'category' => new CategoryResource(
                        $this->whenLoaded('category')),
        'author' => new AuthorResource(
                    $this->whenLoaded('author')),
        'title' => $this->title,
        'slug' => $this->slug,
        'excerpt' => $this->excerpt,
        'content' => $this->content,
        'featured_image' => $this->featured_image
                ? Storage::disk('public')->url($this->featured_image)
                : null,
        'published_at' => $this->published_at,
        ];
    }
}
