<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->json('why_choose_us')->nullable()->after('showcase_cards');
            $table->json('home_faqs')->nullable()->after('why_choose_us');
            $table->json('home_testimonials')->nullable()->after('home_faqs');
        });
    }

    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn(['why_choose_us', 'home_faqs', 'home_testimonials']);
        });
    }
};