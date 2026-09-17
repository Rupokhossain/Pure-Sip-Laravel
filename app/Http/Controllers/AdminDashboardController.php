<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use App\Models\Product;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function index(): Response
    {
        $inquiries = Inquiry::latest()->get();
        $products = Product::latest()->get();
        
        $settings = SiteSetting::firstOrCreate([], [
            'brand_name' => 'Pure Sip',
            'header_phone' => '01306-312372',
            'banner_title' => '100% Pure Botanical Refreshment',
            'banner_subtitle' => 'Handcrafted digestive, cooling & immunity tonics brewed from authentic fruits and herbs.',
            'banner_image' => '/images/banner.jpeg',
            'logo' => '/images/logo.png',
            'showcase_cards' => [
                [
                    'image' => '/images/hozmi-cola.jpeg',
                    'title' => 'Digestive Brew',
                    'hover_text' => 'Infused with roasted cumin & rock salt for instant gut comfort.'
                ],
                [
                    'image' => '/images/pudina-drink.jpeg',
                    'title' => 'Cooling Mint',
                    'hover_text' => 'Fresh garden mint & raw mango cooler to beat summer heat.'
                ],
                [
                    'image' => '/images/tetul-drinks.jpg',
                    'title' => 'Citrus Immunity',
                    'hover_text' => 'High-potency Vitamin C with Kagoji lemons & ginger root.'
                ]
            ],
            'phone_primary' => '01306-312372',
            'phone_secondary' => '018265-813373',
            'whatsapp_number' => '+8801306312372',
            'email' => 'info@puresipbeverage.com',
            'address' => 'Pure Sip Beverage, Dhaka, Bangladesh',
        ]);

        return Inertia::render('Dashboard', [
            'inquiries' => $inquiries,
            'products' => $products,
            'settings' => $settings,
            'stats' => [
                'total_inquiries' => $inquiries->count(),
                'pending_inquiries' => $inquiries->where('status', 'pending')->count(),
                'total_products' => $products->count(),
            ],
        ]);
    }

    public function updateSettings(Request $request): RedirectResponse
    {
        $settings = SiteSetting::first() ?? new SiteSetting();

        // ১. হেডার ও লোগো
        if ($request->filled('brand_name')) {
            $settings->brand_name = $request->brand_name;
        }
        if ($request->filled('header_phone')) {
            $settings->header_phone = $request->header_phone;
        }
        if ($request->hasFile('logo_file')) {
            $path = $request->file('logo_file')->store('settings', 'public');
            $settings->logo = '/storage/' . $path;
        } elseif ($request->filled('logo_url')) {
            $settings->logo = $request->logo_url;
        }

        // ২. ব্যানার
        if ($request->filled('banner_title')) {
            $settings->banner_title = $request->banner_title;
        }
        if ($request->filled('banner_subtitle')) {
            $settings->banner_subtitle = $request->banner_subtitle;
        }
        if ($request->hasFile('banner_file')) {
            $path = $request->file('banner_file')->store('settings', 'public');
            $settings->banner_image = '/storage/' . $path;
        } elseif ($request->filled('banner_url')) {
            $settings->banner_image = $request->banner_url;
        }

        // ৩. হোভার ফিচার কার্ডস
        if ($request->has('showcase_cards')) {
            $settings->showcase_cards = $request->showcase_cards;
        }

        // ৪. ফুটার ও যোগাযোগ
        if ($request->filled('phone_primary')) {
            $settings->phone_primary = $request->phone_primary;
        }
        if ($request->filled('phone_secondary')) {
            $settings->phone_secondary = $request->phone_secondary;
        }
        if ($request->filled('whatsapp_number')) {
            $settings->whatsapp_number = $request->whatsapp_number;
        }
        if ($request->filled('email')) {
            $settings->email = $request->email;
        }
        if ($request->filled('address')) {
            $settings->address = $request->address;
        }

        $settings->save();

        return back()->with('success', 'Settings updated successfully!');
    }

    public function updateInquiryStatus(Request $request, Inquiry $inquiry): RedirectResponse
    {
        $inquiry->update(['status' => $request->status]);
        return back()->with('success', 'Inquiry updated.');
    }

    public function destroyInquiry(Inquiry $inquiry): RedirectResponse
    {
        $inquiry->delete();
        return back()->with('success', 'Inquiry removed.');
    }

    public function toggleProductStatus(Product $product): RedirectResponse
    {
        $product->update(['is_active' => !$product->is_active]);
        return back()->with('success', 'Product visibility changed.');
    }

    public function destroyProduct(Product $product): RedirectResponse
    {
        $product->delete();
        return back()->with('success', 'Product deleted.');
    }

    public function storeProduct(Request $request): RedirectResponse
    {
        $imagePath = '/images/hozmi-cola.jpeg';
        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('products', 'public');
            $imagePath = '/storage/' . $path;
        } elseif ($request->filled('image_url')) {
            $imagePath = $request->image_url;
        }

        Product::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name) . '-' . Str::random(4),
            'tagline' => $request->tagline,
            'price' => $request->price ?? 'Tk 10',
            'net_volume' => $request->net_volume ?? '200ml',
            'category' => $request->category ?? 'refreshing',
            'short_description' => $request->short_description,
            'image' => $imagePath,
            'ingredients' => $request->ingredients ?? [],
            'benefits' => $request->benefits ?? [],
            'is_active' => true,
        ]);

        return back()->with('success', 'Drink created!');
    }
}