<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand_name',
        'header_phone',
        'banner_title',
        'banner_subtitle',
        'banner_image',
        'logo',
        'showcase_cards',
        'why_choose_us',
        'home_faqs',
        'home_testimonials',
        'about_page',
        'our_drinks_page',
        'contact_page', 
        'footer_settings',
        'phone_primary',
        'phone_secondary',
        'whatsapp_number',
        'email',
        'address',
    ];

    protected $casts = [
        'showcase_cards' => 'array',
        'why_choose_us' => 'array',
        'home_faqs' => 'array',
        'home_testimonials' => 'array',
        'about_page' => 'array',
        'our_drinks_page' => 'array',
        'contact_page' => 'array', // <--- এটি অ্যারে বা জেসন হিসেবে কাস্ট হবে
        'footer_settings' => 'array',
    ];
}