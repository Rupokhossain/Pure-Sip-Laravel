<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('tagline')->nullable();
            $table->string('price')->default('Tk 10');
            $table->string('net_volume')->default('200ml');
            $table->string('image')->nullable();
            $table->text('short_description')->nullable();
            $table->json('ingredients')->nullable();
            $table->json('benefits')->nullable();
            $table->string('category')->default('refreshing');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};