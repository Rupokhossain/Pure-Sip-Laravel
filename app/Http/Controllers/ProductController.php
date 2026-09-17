<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    // হোম পেজে ফিচার্ড ড্রিংকস পাঠানো
    public function home(): Response
    {
        $products = Product::where('is_active', true)->get();

        return Inertia::render('Welcome', [
            'products' => $products,
        ]);
    }

    // আওয়ার ড্রিংকস পেজে সব ড্রিংক পাঠানো
    public function index(): Response
    {
        $products = Product::where('is_active', true)->get();

        return Inertia::render('OurDrinks', [
            'products' => $products,
        ]);
    }

    // সিঙ্গেল ড্রিংক ডিটেইলস পেজ
    public function show(string $slug): Response
    {
        $product = Product::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        $relatedProducts = Product::where('is_active', true)
            ->where('id', '!=', $product->id)
            ->take(3)
            ->get();

        return Inertia::render('ProductDetails', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}