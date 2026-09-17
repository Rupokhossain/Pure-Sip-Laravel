<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'logo',
        'brand_name',
        'header_phone',
        'banner_image',
        'banner_title',
        'banner_subtitle',
        'showcase_cards',
        'phone_primary',
        'phone_secondary',
        'whatsapp_number',
        'email',
        'address',
    ];

    protected $casts = [
        'showcase_cards' => 'array',
    ];
}