<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// পাবলিক ডায়নামিক পেজসমূহ
Route::get('/', [ProductController::class, 'home'])->name('home');
Route::get('/our-drinks', [ProductController::class, 'index'])->name('drinks.index');
Route::get('/products/{slug}', [ProductController::class, 'show'])->name('drinks.show');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/inquiries', [InquiryController::class, 'store'])->name('inquiries.store');

// অ্যাডমিন ড্যাশবোর্ড (Auth Protected)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    
    // ইনকোয়ারি রাউটস
    Route::patch('/admin/inquiries/{inquiry}/status', [AdminDashboardController::class, 'updateInquiryStatus'])->name('admin.inquiries.status');
    Route::delete('/admin/inquiries/{inquiry}', [AdminDashboardController::class, 'destroyInquiry'])->name('admin.inquiries.destroy');
    
    // প্রোডাক্ট রাউটস
    Route::post('/admin/products', [AdminDashboardController::class, 'storeProduct'])->name('admin.products.store');
    Route::post('/admin/products/{product}', [AdminDashboardController::class, 'updateProduct'])->name('admin.products.update');
    Route::patch('/admin/products/{product}/toggle', [AdminDashboardController::class, 'toggleProductStatus'])->name('admin.products.toggle');
    Route::delete('/admin/products/{product}', [AdminDashboardController::class, 'destroyProduct'])->name('admin.products.destroy');

    // সাইট সেটিংস ও ব্র্যান্ডিং
    Route::post('/admin/settings', [AdminDashboardController::class, 'updateSettings'])->name('admin.settings.update');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';