<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->string('brand_name')->default('Pure Sip')->after('logo');
            $table->string('header_phone')->default('01306-312372')->after('brand_name');
            $table->json('showcase_cards')->nullable()->after('banner_subtitle'); // ব্যানারের নিচের ছবি ও হোভার টেক্সট
        });
    }

    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn(['brand_name', 'header_phone', 'showcase_cards']);
        });
    }
};