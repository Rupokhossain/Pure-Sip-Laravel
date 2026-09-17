import Header from "@/Components/Header";
import Banner from "@/Components/Banner";
import NaturalIngredients from "@/Components/NaturalIngredients";
import FeaturedJuices from "@/Components/FeaturedJuices";
import WhyChooseUs from "@/Components/WhyChooseUs";
import FrequentlyAskedQuestion from "@/Components/FrequentlyAskedQuestion";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";

export default function Welcome() {
    return (
        <>
            <div className="relative min-h-screen bg-[#f4faf4] flex flex-col selection:bg-[#183928] selection:text-white">
                {/* গ্লোবাল হেডার */}
                <Header />

                {/* হোমপেজের মূল সেকশনসমূহ */}
                <main className="flex-1">
                    <Banner />
                    <NaturalIngredients />
                    <FeaturedJuices />
                    <WhyChooseUs />
                    <FrequentlyAskedQuestion/>
                    <Testimonials/>
  
                </main>

                {/* গ্লোবাল ফুটার */}
               <Footer/>
            </div>
        </>
    );
}
