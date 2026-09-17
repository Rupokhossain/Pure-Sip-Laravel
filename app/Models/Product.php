<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'tagline',
        'price',
        'net_volume',
        'image',
        'short_description',
        'ingredients',
        'benefits',
        'category',
        'is_active',
    ];

    protected $casts = [
        'ingredients' => 'array',
        'benefits' => 'array',
        'is_active' => 'boolean',
    ];
}