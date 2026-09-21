import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";

export const metadata = {
    title: "About TAHA | Tanzania Horticultural Association",
    description:
        "Learn about the Tanzania Horticultural Association, our work, and our mission to strengthen Tanzania's horticultural industry.",
};


export default function AboutPage() {
       
    return (
   

        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="About TAHA"
                description="The Tanzania Horticultural Association is a private sector member-based organization working to strengthen the growth and competitiveness of Tanzania's horticultural industry."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About TAHA", href: "/about" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "About TAHA", href: "/about" },
                    ]} />

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                The Tanzania Horticultural Association (TAHA) is an apex
                                private sector member-based organization working to strengthen
                                the growth and competitiveness of Tanzania's horticultural
                                industry. Since our establishment in 2004, we have been
                                connecting producers, traders, exporters, processors and
                                other businesses across the horticulture value chain.
                            </p>

                            <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                TAHA brings together stakeholders from all segments of the
                                horticulture sector to advocate for enabling policies, promote
                                good agricultural practices, facilitate market access, and
                                support the development of sustainable value chains that
                                benefit Tanzanian farmers and businesses.
                            </p>
                        </div>

                        <div className="lg:order-2 lg:pt-8">
                            <StrategicAreas />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}