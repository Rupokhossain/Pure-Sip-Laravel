<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('logo')->nullable();
            $table->string('banner_image')->nullable();
            $table->string('banner_title')->default('100% Pure Botanical Refreshment');
            $table->text('banner_subtitle')->nullable();
            $table->string('phone_primary')->default('01306-312372');
            $table->string('phone_secondary')->default('018265-813373');
            $table->string('whatsapp_number')->default('+8801306312372');
            $table->string('email')->default('info@puresipbeverage.com');
            $table->string('address')->default('Pure Sip Beverage, Dhaka, Bangladesh');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};