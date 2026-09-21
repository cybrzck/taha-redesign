import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StrategicAreas from "@/components/StrategicAreas";
import ValueChains from "@/components/ValueChains";
import MembershipSection from "@/components/MembershipSection";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <AboutSection />
                <StrategicAreas />
                <ValueChains />
                <MembershipSection />
                <Testimonials />
                <Partners />
                <Newsletter />
            </main>

            <Footer />
        </>
    );
}