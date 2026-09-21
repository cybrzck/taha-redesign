import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";

export const metadata = {
    title: "Market Access | TAHA",
    description:
        "Connecting buyers, exporters, farmers and suppliers to expand market opportunities for Tanzania's horticulture.",
};

export default function MarketAccessPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Market Access"
                description:
                    "Connecting buyers, exporters, farmers and suppliers to expand market opportunities"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: "Market Access", href: "/our-work/market-access" },
                ]}
            />

            <section id="work" className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/our-work" },
                        { label: "Market Access", href: "/our-work/market-access" },
                    ]} />

                    <StrategicAreas />

                    <div className="mt-12">
                        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                            Expanding Market Opportunities
                        </h2>

                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            TAHA facilitates connections between smallholder farmers and regional/international
                            buyers, organizes trade missions, and supports the development of market linkages
                            that enable horticultural producers to access better prices and broader markets.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    15,000+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Farmers reached
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    40+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Export markets
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    8
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Trade missions
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    TZS 150M+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Total trade value facilitated
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    60%
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Smallholder beneficiaries
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                How We Help
                            </p>

                            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                                <li>
                                    <span className="font-medium text-taha-dark">Market intelligence:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Real-time price data and market trend analysis
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Trade facilitation:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Buyer-seller matching and trade mission organization
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Export support:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Documentation assistance and compliance guidance
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Packhouse access:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Grading and packing facility connections
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}