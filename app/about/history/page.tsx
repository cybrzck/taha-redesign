import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Our History | TAHA",
    description: "The history of the Tanzania Horticultural Association since 2004.",
};

export default function HistoryPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Our History"
                description="TAHA's journey since 2004 building a stronger horticulture industry"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About TAHA", href: "/about" },
                    { label: "Our History", href: "/about/history" },
                ]}
            />

            <section id="about" className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "About TAHA", href: "/about" },
                        { label: "Our History", href: "/about/history" },
                    ]} />

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                                Building a legacy since 2004
                            </h2>

                            <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                The Tanzania Horticultural Association was founded in 2004 as
                                a platform for horticulture stakeholders to come together, share
                                experiences, and address the challenges facing Tanzania's
                                horticulture sector. What started as a small group of passionate
                                producers has grown into a national organization with over 25,900
                                members across the country.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7">
                                <div>
                                    <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                        20+
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        Years of impact
                                    </p>
                                </div>

                                <div>
                                    <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                        25,900+
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        Members reached
                                    </p>
                                </div>

                                <div>
                                    <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                        6
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        Value chains
                                    </p>
                                </div>

                                <div>
                                    <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                        Tanzania
                                    </p>
                                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        National network
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 border-t border-neutral-200 pt-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                    Our role
                                </p>

                                <p className="max-w-3xl text-lg font-medium leading-7 tracking-tight text-neutral-700 sm:text-xl sm:leading-8">
                                    Connecting people, knowledge, markets and opportunities to help
                                    Tanzania's horticulture industry grow.
                                </p>
                            </div>
                        </div>

                        <div className="relative lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1800&q=90"
                                alt="TAHA history timeline"
                                className="relative h-[420px] sm:h-[600px] lg:h-[520px] w-full object-cover rounded-lg"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/60 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 bg-taha px-7 py-6 sm:px-8 sm:py-7">
                                <span className="block text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">2004</span>
                                <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/70">Established</span>
                            </div>

                            <div className="absolute right-0 top-0 bg-white px-5 py-4">
                                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-taha">TAHA</span>
                                <span className="mt-1 block text-xs text-neutral-500">Tanzania</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}