import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import Partners from "@/components/Partners";

export const metadata = {
    title: "Our Partners | TAHA",
    description: "Organizations we work with to strengthen Tanzania's horticulture sector.",
};

export default function PartnersPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Our Partners"
                description="Organizations we work with"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About TAHA", href: "/about" },
                    { label: "Partners", href: "/about/partners" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-white">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "About TAHA", href: "/about" },
                        { label: "Partners", href: "/about/partners" },
                    ]} />

                    <Partners />
                </div>
            </section>

            <Footer />
        </main>
    );
}