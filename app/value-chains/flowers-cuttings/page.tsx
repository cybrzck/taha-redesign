import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import ValueChainCard from "@/components/ValueChainCard";

export const metadata = {
    title: "Flowers & Cuttings | TAHA",
    description:
        "Tanzania's flower industry produces roses, hydrangeas, and other cut flowers for export markets.",
};

export default function FlowersCuttingsPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Flowers & Cuttings"
                description:
                    "Tanzania's flower industry produces roses, hydrangeas, and other cut flowers for export markets in Europe and the Middle East."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: "Value Chains", href: "/value-chains" },
                    { label: "Flowers & Cuttings", href: "/value-chains/flowers-cuttings" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/our-work" },
                        { label: "Value Chains", href: "/value-chains" },
                        { label: "Flowers & Cuttings", href: "/value-chains/flowers-cuttings" },
                    ]} />

                    <div className="grid gap-8">
                        <div className="lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                                    Flowers & Cuttings
                                </h2>

                                <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                    Tanzania's flower industry produces roses, hydrangeas, and other cut
                                    flowers for export markets in Europe and the Middle East. The sector
                                    supports thousands of smallholder farmers and creates employment
                                    opportunities, particularly for women in rural areas.
                                </p>

                                <ul className="mt-8 space-y-3 text-sm text-neutral-600">
                                    <li>
                                        <span className="font-medium text-taha-dark">Key Crops:</span>
                                        <span className="ml-2 text-neutral-600">Roses, hydrangeas, carnations, and lilies</span>
                                    </li>
                                    <li>
                                        <span className="font-medium text-taha-dark">Export Markets:</span>
                                        <span className="ml-2 text-neutral-600">Europe, Middle East, South Africa</span>
                                    </li>
                                    <li>
                                        <span className="font-medium text-taha-dark">Production Regions:</span>
                                        <span className="ml-2 text-neutral-600">Arusha, Manyara, Coast regions</span>
                                    </li>
                                </ul>

                                <div className="mt-10 pt-8 border-t border-neutral-200">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                        Industry Statistics
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-2xl font-semibold tracking-tight text-taha-dark">TZS 50B+</p>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500">Annual export value</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-semibold tracking-tight text-taha-dark">12M+</p>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500">Stems exported annually</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-semibold tracking-tight text-taha-dark">40%</p>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500">Women employment</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-semibold tracking-tight text-taha-dark">6</p>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500">Export countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ValueChainCard
                                id={1}
                                number={"01"}
                                title={"Flowers & Cuttings"}
                                image={"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=90"}
                                description={"Tanzania's flower industry produces roses, hydrangeas, and other cut flowers for export markets in Europe and the Middle East."}
                            />

                            <ValueChainCard
                                id={2}
                                number={"02"}
                                title={"Ornamentals"}
                                image={"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=90"}
                                description={"Cut flowers and ornamental plants for domestic and regional markets"}
                            />
                        </div>

                        <div className="lg:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=90"
                                alt="Flowers & Cuttings"
                                className="relative h-[420px] sm:h-[600px] lg:h-[520px] w-full object-cover rounded-lg"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/60 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 bg-taha px-7 py-6 sm:px-8 sm:py-7">
                                <span className="block text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">01</span>
                                <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/70">Flowers & Cuttings</span>
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