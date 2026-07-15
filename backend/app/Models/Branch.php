<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Branch extends Model
{
    use HasFactory, Notifiable;
      protected $fillable = [
        'branch_name',
        'slug',
        'branch_code',
        'address',
        'city',
        'province',
        'postal_code',
        'contat_number',
        'email',
        'latitude',
        'longitude',
        'business_hours',
        'description',
        'featured_image',
        'status',
    ];
}
