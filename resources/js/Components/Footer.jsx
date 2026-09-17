import { Link } from "@inertiajs/react";
import {
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f2317] text-white selection:bg-emerald-400 selection:text-[#0f2317] relative overflow-hidden pt-20 pb-12">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* ================= Wholesale & QR Action Card ================= */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#183928] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              <span>Wholesale & Instant Order</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Scan or Call to Order in Bulk
            </h3>

            <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed font-normal">
              Looking to stock our 10 Tk chilled botanical pouches at your shop
              or need bulk orders for events? Scan the QR code or call our
              direct helpline.
            </p>

            <div className="pt-2">
              <a
                href="tel:01306312372"
                className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-[#112318] text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#183928]" />
                <span>Call Helpline: 01306-312372</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left flex-shrink-0">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-[#f4faf4] rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
              <img
                src="/images/qr-code.jpeg"
                alt="Pure Sip Order QR Code"
                className="w-full h-full object-contain p-2"
              />
            </div>

            <div className="space-y-1 text-[#112318] max-w-[160px]">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-[#eef7ef] px-2 py-0.5 rounded-full uppercase">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>BSTI Certified</span>
              </div>
              <h4 className="text-sm font-black">Scan to Verify</h4>
              <p className="text-[11px] text-gray-500 leading-tight font-normal">
                Official BSTI Approval & Lab Quality Certificate
              </p>
            </div>
          </div>
        </div>

        {/* ================= Footer Navigation Links ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 relative rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="/images/logo.jpeg"
                  alt="Pure Sip Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-black text-xl text-white tracking-wider uppercase">
                Pure Sip
              </span>
            </Link>

            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-sm font-normal">
              Natural botanical drinks crafted from cold-extracted mint, ginger,
              raw mango, and ancient spices for pristine digestion and pure
              everyday vitality.
            </p>

            <div className="flex items-center gap-3 text-emerald-200">
              <a
                href="https://wa.me/8801306312372"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Signature Blends */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-emerald-400 tracking-widest uppercase">
              Signature Blends
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/75">
              <li>
                <Link
                  href="/products/hozmi-cola"
                  className="hover:text-white transition-colors"
                >
                  Hozmi Cola (Digestive)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pudina-drink"
                  className="hover:text-white transition-colors"
                >
                  Pudina Drink (Cool Mint)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/citrus-boost"
                  className="hover:text-white transition-colors"
                >
                  Citrus Boost (Vitamin C)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/green-detox"
                  className="hover:text-white transition-colors"
                >
                  Green Detox (Cleanse)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-emerald-400 tracking-widest uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-drinks"
                  className="hover:text-white transition-colors"
                >
                  Our Drinks
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-emerald-400 tracking-widest uppercase">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-emerald-100/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Pure Sip Beverage, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>01306-312372 / 018265-813373</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>info@puresipbeverage.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= Copyright Bar ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/50 font-medium">
          <p>
            © {new Date().getFullYear()} Pure Sip Beverage. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-emerald-300 transition-colors">
              Licensing
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}