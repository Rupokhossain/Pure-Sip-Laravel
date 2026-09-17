import { Head, Link } from "@inertiajs/react";
import { 
  ArrowLeft, 
  Leaf, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  MessageCircle, 
  ThermometerSnowflake,
  Clock,
  HeartPulse
} from "lucide-react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { products } from "@/data/products";

export default function ProductDetails({ slug }) {
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f4faf4] flex flex-col justify-between selection:bg-[#183928] selection:text-white">
        <Header />
        <main className="max-w-xl mx-auto px-4 py-28 text-center space-y-5">
          <div className="w-16 h-16 bg-emerald-100 text-[#183928] rounded-full flex items-center justify-center mx-auto">
            <Leaf className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#112318]">Flavor Not Found!</h2>
          <p className="text-gray-600 text-sm">The botanical blend you requested could not be located.</p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#183928] hover:bg-[#122c1f] px-6 py-3 rounded-xl shadow transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Collection</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Head title={`${product.name} | Pure Sip Botanical Beverages`} />

      <div className="min-h-screen bg-[#f4faf4] flex flex-col justify-between selection:bg-[#183928] selection:text-white">
        <Header />

        <main className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 flex-1">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* টপ নেভিগেশন ও ব্রেডক্রাম্ব */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#183928] bg-white hover:bg-[#eef7ef] px-4 sm:px-5 py-2.5 rounded-full shadow-xs border border-emerald-900/5 transition-all group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Flavors</span>
              </Link>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-[#eef7ef] px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>100% Authentic Blend</span>
              </div>
            </div>

            {/* মূল ডিটেইলস কার্ড */}
            <div className="bg-white rounded-3xl shadow-xl shadow-emerald-950/5 border border-emerald-900/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10">
              
              {/* বাম কলাম: প্রোডাক্ট ইমেজ ও সার্টিফাইড ব্যাজ */}
              <div className="lg:col-span-5 space-y-5">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#f4faf4] border border-emerald-900/10 shadow-inner group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1622597467836-f3285f2131b7?w=600&auto=format&fit=crop&q=80";
                    }}
                  />

                  {/* প্রাইস ব্যাজ */}
                  <div className="absolute top-4 right-4 bg-[#183928] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md">
                    {product.price}
                  </div>

                  {/* ভলিউম ব্যাজ */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#183928] text-[11px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{product.netVolume} Cold Pouch</span>
                  </div>
                </div>

                {/* সেফটি হাইলাইটস */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 bg-[#f4faf4] rounded-2xl border border-emerald-900/5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#183928] shadow-xs flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#112318]">BSTI Approved</h4>
                      <p className="text-[10px] text-gray-500 font-medium">Food Grade Hygiene</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#f4faf4] rounded-2xl border border-emerald-900/5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#183928] shadow-xs flex-shrink-0">
                      <ThermometerSnowflake className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#112318]">Chilled Fresh</h4>
                      <p className="text-[10px] text-gray-500 font-medium">Zero Preservatives</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ডান কলাম: প্রোডাক্ট তথ্য, উপাদান ও অর্ডার বাটন */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* নাম ও ট্যাগলাইন */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-extrabold text-emerald-800 tracking-wider uppercase bg-[#eef7ef] px-3 py-1 rounded-md inline-block">
                      Pure Sip Beverage Special
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#112318] tracking-tight">
                      {product.name}
                    </h1>
                    <p className="text-sm sm:text-base font-semibold text-emerald-700">
                      {product.tagline}
                    </p>
                  </div>

                  {/* প্রাইসিং ও ফিচার পিলস */}
                  <div className="flex flex-wrap items-center gap-3 py-3 border-y border-gray-100">
                    <div className="text-2xl sm:text-3xl font-black text-[#183928]">
                      {product.price} <span className="text-xs text-gray-500 font-normal">/ pouch</span>
                    </div>
                    <div className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl">
                      Multi-Layer Cold Retain Pouch
                    </div>
                    <div className="text-xs font-semibold text-emerald-800 bg-[#eef7ef] px-3 py-1.5 rounded-xl flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Best Served Chilled
                    </div>
                  </div>

                  {/* বর্ণনা */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                    {product.shortDescription}
                  </p>

                  {/* বোটানিক্যাল উপাদান গ্রিড */}
                  <div className="space-y-3 pt-1">
                    <h3 className="text-xs font-extrabold text-[#112318] uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-700" />
                      <span>Used Botanical Ingredients</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.ingredients.map((ing, i) => (
                        <div key={i} className="p-4 bg-[#f8fcf8] rounded-xl border border-emerald-900/5 text-xs">
                          <p className="font-bold text-[#183928] ">{ing.name}</p>
                          <p className="text-gray-500 text-[11px] mt-0.5">{ing.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* স্বাস্থ্য উপকারিতা */}
                  <div className="space-y-3 pt-1">
                    <h3 className="text-xs font-extrabold text-[#112318] uppercase tracking-wider flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-emerald-700" />
                      <span>Health & Digestion Benefits</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                      {product.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 bg-[#f4faf4] p-2.5 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-gray-700">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ম্যানুফ্যাকচারার ও অ্যাকশন বাটন */}
                <div className="bg-[#183928] text-white p-5 sm:p-6 rounded-2xl space-y-4 mt-6 shadow-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-b border-white/10 pb-3">
                    <div>
                      <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Manufacturer</p>
                      <p className="font-semibold text-white">{product.manufacturer}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Storage Advice</p>
                      <p className="font-semibold text-white">{product.storageAdvice}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <a
                      href="tel:01306312372"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-[#112318] text-xs font-black px-6 py-3.5 rounded-xl shadow transition-all active:scale-95 whitespace-nowrap"
                    >
                      <PhoneCall className="w-4 h-4 text-[#183928]" />
                      <span>Call Order: {product.helpline}</span>
                    </a>

                    <a
                      href="https://wa.me/8801306312372"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow transition-all active:scale-95 whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Bulk Inquiry</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}