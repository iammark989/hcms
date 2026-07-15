<?php

namespace App\Models;

use App\Models\Author;
use App\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Post extends Model
{
     use HasFactory, Notifiable;
      protected $fillable = [
        'category_id',
        'author_id',
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'status',
        'published_at',
    ];

    public function category():BelongsTo{
       return $this->belongsTo(Category::class);
    }

    public function author():BelongsTo{
       return $this->belongsTo(Author::class);
    }

}
