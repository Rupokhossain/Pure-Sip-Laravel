import { useState, useEffect } from "react";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    location: "Dhanmondi, Dhaka",
    role: "Verified Sipper",
    drink: "Hozmi Cola (Digestive)",
    rating: 5,
    feedback:
      "Hozmi Cola is an absolute lifesaver after heavy biryani dinners! The real cumin and ginger blend relieves bloating within minutes. Unbeatable quality at just Tk 10.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    location: "Sylhet Sadar",
    role: "Clinical Nutritionist",
    drink: "Pudina Drink (Cool Mint)",
    rating: 5,
    feedback:
      "The combination of fresh raw mango and crushed Sylhet mint gives an instant energy boost during intense summer heat. Love that there are zero artificial preservatives!",
  },
  {
    id: 3,
    name: "Farhan Kabir",
    location: "Chittagong",
    role: "Retail Partner",
    drink: "Assorted 6-Pack",
    rating: 5,
    feedback:
      "The chilled pouch packaging is extremely convenient and customers keep coming back for more every day. Authentic traditional taste in a modern, hygienic pack.",
  },
  {
    id: 4,
    name: "Sadia Rahman",
    location: "Gulshan, Dhaka",
    role: "University Student",
    drink: "Citrus Boost",
    rating: 5,
    feedback:
      "So refreshing! It replaced synthetic energy sodas for me during exam weeks. Natural citrus flavor without any excessive artificial sweetness.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviews[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 w-full bg-[#f4faf4] selection:bg-[#183928] selection:text-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#183928] text-emerald-300 text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>COMMUNITY REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#112318] tracking-tight">
            Loved by 15,000+ Sippers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Genuine experiences from everyday people who made Pure Sip their go-to botanical refreshment.
          </p>
        </div>

        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl transition-all duration-500"
        >
          <Quote className="absolute top-6 right-8 w-16 h-16 text-emerald-900/10 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-gray-700 ml-1.5">5.0 / 5.0</span>
              </div>

              <span className="inline-flex items-center text-xs font-bold text-[#183928] bg-[#eef7ef] px-3.5 py-1 rounded-full">
                {activeReview.drink}
              </span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#112318] leading-relaxed tracking-tight min-h-[80px] flex items-center">
              &ldquo;{activeReview.feedback}&rdquo;
            </p>

            <div className="pt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#183928] text-white flex items-center justify-center font-black text-lg shadow-md">
                  {activeReview.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#112318]">
                    {activeReview.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {activeReview.location} • <span className="font-semibold text-emerald-800">{activeReview.role}</span>
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-800 bg-[#eef7ef] px-3 py-1.5 rounded-full font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Review"
            className="w-12 h-12 rounded-full bg-white hover:bg-[#183928] text-[#183928] hover:text-white shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#183928]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Review"
            className="w-12 h-12 rounded-full bg-white hover:bg-[#183928] text-[#183928] hover:text-white shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}