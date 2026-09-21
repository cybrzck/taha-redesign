import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Vision & Mission | TAHA",
    description: "TAHA's vision and mission for Tanzania's horticultural industry.",
};

export default function VisionMissionPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Vision & Mission"
                description="Our direction and purpose for Tanzania's horticulture sector"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About TAHA", href: "/about" },
                    { label: "Vision & Mission", href: "/about/vision-mission" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-white">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "About TAHA", href: "/about" },
                        { label: "Vision & Mission", href: "/about/vision-mission" },
                    ]} />

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                                Our Vision
                            </h2>

                            <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                A competitive, sustainable and market-driven horticulture sector
                                that empowers Tanzanian farmers and businesses to thrive in
                                regional and international markets.
                            </p>

                            <h2 className="mt-10 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                                Our Mission
                            </h2>

                            <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                To strengthen the growth and competitiveness of Tanzania's
                                horticultural industry by connecting producers to markets,
                                advocating for enabling policies, promoting good agricultural
                                practices, and supporting value chain development.
                            </p>

                            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
                                <div>
                                    <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                        3
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        Strategic Areas
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                        6
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        Value Chains
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                        25,900+
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        Members
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                        Since
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        2004
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:order-2 lg:pt-8">
                            <div className="p-8 bg-white rounded-lg shadow-sm">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                    Our Approach
                                </p>

                                <p className="mt-4 text-base leading-7 text-neutral-600">
                                    TAHA operates across six strategic areas, supporting the entire
                                    horticulture value chain from production through to market access,
                                    policy advocacy, and business development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}