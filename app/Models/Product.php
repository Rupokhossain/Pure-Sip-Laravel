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
    'category',
    'short_description',
    'image',
    'ingredients',
    'benefits',
    'manufacturer',
    'storage',
    'helpline',
    'is_active',
];

    protected $casts = [
        'ingredients' => 'array',
        'benefits' => 'array',
        'is_active' => 'boolean',
    ];
}