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
                ['image' => '/images/hozmi-cola.jpeg', 'title' => 'Digestive Brew', 'hover_text' => 'Infused with roasted cumin & rock salt for instant gut comfort.'],
                ['image' => '/images/pudina-drink.jpeg', 'title' => 'Cooling Mint', 'hover_text' => 'Fresh garden mint & raw mango cooler to beat summer heat.'],
                ['image' => '/images/tetul-drinks.jpg', 'title' => 'Citrus Immunity', 'hover_text' => 'High-potency Vitamin C with Kagoji lemons & ginger root.']
            ],
            'footer_settings' => [
                'wholesale_badge' => 'Wholesale & Instant Order',
                'wholesale_title' => 'Scan or Call to Order in Bulk',
                'wholesale_desc' => 'Looking to stock our 10 Tk chilled botanical pouches at your shop or need bulk orders for events? Scan the QR code or call our direct helpline.',
                'qr_image' => '/images/qr-code.jpeg',
                'qr_badge' => 'BSTI Certified',
                'qr_title' => 'Scan to Verify',
                'qr_desc' => 'Official BSTI Approval & Lab Quality Certificate',
                'bio' => 'Natural botanical drinks crafted from cold-extracted mint, ginger, raw mango, and ancient spices for pristine digestion and pure everyday vitality.',
                'facebook_url' => 'https://facebook.com',
                'instagram_url' => 'https://instagram.com',
                'youtube_url' => '',
                'tiktok_url' => '',
                'linkedin_url' => '',
                'twitter_url' => '',
                'signature_blends' => [
                    ['name' => 'Hozmi Cola (Digestive)', 'url' => '/products/hozmi-cola'],
                    ['name' => 'Pudina Drink (Cool Mint)', 'url' => '/products/pudina-drink'],
                    ['name' => 'Citrus Boost (Vitamin C)', 'url' => '/products/citrus-boost'],
                    ['name' => 'Green Detox (Cleanse)', 'url' => '/products/green-detox'],
                ]
            ],
            'about_page' => [
                'badge' => 'THE PURE SIP STORY',
                'title' => 'Reclaiming Real Taste.',
                'highlight' => 'Born in Bangladesh.',
                'desc_1' => 'For decades, the beverage shelves in our country have been dominated by ultra-processed sodas loaded with synthetic syrup, artificial flavors, and harmful chemicals.',
                'desc_2' => 'Pure Sip Beverage was founded in Dhaka with a clear mission: reviving time-tested South Asian botanicals—from crushed Sylhet mint to roasted cumin and raw mango—into a crisp, hygienic, modern drink that heals the gut while instantly refreshing the body.',
                'stat_1_val' => '15K+', 'stat_1_label' => 'Sips Enjoyed',
                'stat_2_val' => '100%', 'stat_2_label' => 'Natural Botanical',
                'stat_3_val' => 'Tk 10', 'stat_3_label' => 'Honest Price',
                'hero_image' => '/images/banner.jpeg',
                'pillars' => [
                    ['title' => '100% Native Botanicals', 'desc' => 'We work directly with growers to source fragrant garden mint from Sylhet, sun-dried cumin, ginger, and wild raw mangoes.'],
                    ['title' => 'Zero Chemical Compromise', 'desc' => 'Strictly no synthetic food colorings, artificial carbonation syrups, or chemical preservatives. Just raw, living plants.'],
                    ['title' => 'Radical Accessibility (Tk 10)', 'desc' => 'Health should never be a luxury. By skipping costly heavy glass and distributor middlemen, we make pure organic wellness accessible to all.'],
                    ['title' => 'Small-Batch Cold Craft', 'desc' => 'Cold-extracted in controlled small batches in Dhaka to preserve vital enzymes, micronutrients, and delicate aromatic oils.'],
                ],
                'timeline' => [
                    ['step' => '01', 'title' => 'Direct Regional Sourcing', 'desc' => 'We pick fresh mint leaves, ginger roots, and seasonal green fruits at peak ripeness directly from local farmers.'],
                    ['step' => '02', 'title' => 'Gentle Cold Infusion', 'desc' => 'No heat destruction. Ingredients are cold-crushed and slow-steeped with Ayurvedic digestive spices to lock in aroma and health benefits.'],
                    ['step' => '03', 'title' => 'Hygienic Cold Pouching', 'desc' => 'Packaged inside sterile, multi-layer food-grade pouches that block UV light and lock in crisp chilled freshness.'],
                    ['step' => '04', 'title' => 'Direct Cold-Chain Supply', 'desc' => 'Dispatched chilled to local shops, eateries, and doorsteps across Dhaka within 24 hours of brewing.'],
                ]
            ],
            'our_drinks_page' => [
                'badge' => '100% BOTANICAL LINEUP',
                'title' => 'Crafted for Taste.',
                'highlight' => 'Brewed for Well-Being.',
                'subtitle' => 'Explore our handcrafted lineup of cold-extracted botanical juices. Made with raw fruits, garden mint, and Ayurvedic spices—every pouch strictly priced at just Tk 10.',
                'categories' => [
                    ['id' => 'all', 'label' => 'All Drinks'],
                    ['id' => 'digestive', 'label' => 'Digestive & Gut'],
                    ['id' => 'refreshing', 'label' => 'Cooling & Tangy'],
                    ['id' => 'immunity', 'label' => 'Immunity Boost'],
                ]
            ],
            'contact_page' => [
                'badge' => "LET'S CONNECT",
                'title' => 'Get in Touch with',
                'highlight' => 'Pure Sip Beverage',
                'subtitle' => 'Have questions about our botanical formulas, want to stock our Tk 10 pouches at your shop, or planning bulk orders for events? We are here to help.',
                'address_title' => 'Production & Office',
                'address_desc' => 'Pure Sip Beverage, Dhaka, Bangladesh',
                'email' => 'info@puresipbeverage.com',
                'hours' => 'Saturday – Thursday: 9:00 AM – 8:00 PM',
                'wholesale_banner_title' => 'Looking for Wholesale Supply in Dhaka?',
                'wholesale_banner_desc' => 'We supply insulated, chilled batches directly to grocery stores, restaurants, and eateries within 24 hours.',
                'primary_phone' => '+8801873044692',
                'dealership_phone' => '018265-813373',
                'whatsapp_phone' => '+8801873044692',
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
        $settings = SiteSetting::first() ?? SiteSetting::create([]);

        if ($request->has('brand_name')) $settings->brand_name = $request->brand_name;
        if ($request->has('header_phone')) $settings->header_phone = $request->header_phone;
        if ($request->has('banner_title')) $settings->banner_title = $request->banner_title;
        if ($request->has('banner_subtitle')) $settings->banner_subtitle = $request->banner_subtitle;

        if ($request->hasFile('banner_file')) {
            $path = $request->file('banner_file')->store('settings', 'public');
            $settings->banner_image = '/storage/' . $path;
        } elseif ($request->filled('banner_url')) {
            $settings->banner_image = $request->banner_url;
        }

        if ($request->hasFile('logo_file')) {
            $path = $request->file('logo_file')->store('settings', 'public');
            $settings->logo = '/storage/' . $path;
        } elseif ($request->filled('logo_url')) {
            $settings->logo = $request->logo_url;
        }

        if ($request->has('showcase_cards')) $settings->showcase_cards = $request->showcase_cards;
        if ($request->has('why_choose_us')) $settings->why_choose_us = $request->why_choose_us;
        if ($request->has('home_faqs')) $settings->home_faqs = $request->home_faqs;
        if ($request->has('home_testimonials')) $settings->home_testimonials = $request->home_testimonials;

        if ($request->has('footer_settings')) {
            $footerData = $request->footer_settings;
            if ($request->hasFile('qr_file')) {
                $path = $request->file('qr_file')->store('settings', 'public');
                $footerData['qr_image'] = '/storage/' . $path;
            }
            $settings->footer_settings = $footerData;
        }

        if ($request->has('about_page')) {
            $aboutData = $request->about_page;
            if ($request->hasFile('about_hero_file')) {
                $path = $request->file('about_hero_file')->store('settings', 'public');
                $aboutData['hero_image'] = '/storage/' . $path;
            }
            $settings->about_page = $aboutData;
        }

        if ($request->has('our_drinks_page')) {
            $settings->our_drinks_page = $request->our_drinks_page;
        }

if ($request->has('contact_page')) {
            $settings->contact_page = $request->contact_page;
        }

        if ($request->has('phone_primary')) $settings->phone_primary = $request->phone_primary;
        
        // এখানে phone_secondary ফাঁকা বা null আসলে যেন ডাটাবেজে নাল এরর না খায় সেজন্য ডিফল্ট ভ্যালু বা খালি স্ট্রিং সেট করা হয়েছে
        if ($request->has('phone_secondary')) {
            $settings->phone_secondary = $request->phone_secondary ?? '';
        }

        if ($request->has('whatsapp_number')) $settings->whatsapp_number = $request->whatsapp_number;
        if ($request->has('email')) $settings->email = $request->email;
        if ($request->has('address')) $settings->address = $request->address;

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

        $ingredientsInput = $request->ingredients;
        if (is_string($ingredientsInput)) {
            $ingredientsArray = array_map(function($item) {
                return ['name' => trim($item)];
            }, explode(',', $ingredientsInput));
        } else {
            $ingredientsArray = $request->ingredients ?? [];
        }

        $benefitsInput = $request->benefits;
        if (is_string($benefitsInput)) {
            $benefitsArray = array_map(function($item) {
                return ['text' => trim($item)];
            }, explode(',', $benefitsInput));
        } else {
            $benefitsArray = $request->benefits ?? [];
        }

        Product::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name) . '-' . Str::random(4),
            'tagline' => $request->tagline ?? 'Pure Botanical Blend',
            'price' => $request->price ?? 'Tk 10',
            'net_volume' => $request->net_volume ?? '200ml',
            'category' => $request->category ?? 'digestive',
            'short_description' => $request->short_description,
            'description' => $request->description ?? $request->short_description,
            'image' => $imagePath,
            'ingredients' => $ingredientsArray,
            'benefits' => $benefitsArray,
            'manufacturer' => $request->manufacturer ?? 'Pure Sip Beverage',
            'storage' => $request->storage ?? 'Keep in Refrigerator',
            'helpline' => $request->helpline ?? '01306-312372',
            'is_active' => true,
        ]);

        return back()->with('success', 'Drink created successfully!');
    }

    public function updateProduct(Request $request, Product $product): RedirectResponse
    {
        $imagePath = $product->image;
        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('products', 'public');
            $imagePath = '/storage/' . $path;
        } elseif ($request->filled('image_url')) {
            $imagePath = $request->image_url;
        }

        $ingredientsInput = $request->ingredients;
        if (is_string($ingredientsInput)) {
            $ingredientsArray = array_map(function($item) {
                return ['name' => trim($item)];
            }, explode(',', $ingredientsInput));
        } else {
            $ingredientsArray = $request->ingredients ?? $product->ingredients;
        }

        $benefitsInput = $request->benefits;
        if (is_string($benefitsInput)) {
            $benefitsArray = array_map(function($item) {
                return ['text' => trim($item)];
            }, explode(',', $benefitsInput));
        } else {
            $benefitsArray = $request->benefits ?? $product->benefits;
        }

        $product->update([
            'name' => $request->name,
            'tagline' => $request->tagline ?? $product->tagline,
            'price' => $request->price ?? $product->price,
            'net_volume' => $request->net_volume ?? $product->net_volume,
            'category' => $request->category ?? $product->category,
            'short_description' => $request->short_description ?? $product->short_description,
            'description' => $request->description ?? $product->description,
            'image' => $imagePath,
            'ingredients' => $ingredientsArray,
            'benefits' => $benefitsArray,
            'manufacturer' => $request->manufacturer ?? $product->manufacturer,
            'storage' => $request->storage ?? $product->storage,
            'helpline' => $request->helpline ?? $product->helpline,
        ]);

        return back()->with('success', 'Product updated successfully!');
    }
}