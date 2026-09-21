import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";

export const metadata = {
    title: "Food Safety & Standards | TAHA",
    description:
        "Supporting compliance with national, regional and international standards.",
};

export default function FoodSafetyPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Food Safety & Standards"
                description:
                    "Supporting compliance with national, regional and international standards"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: "Food Safety & Standards", href: "/our-work/food-safety" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/our-work" },
                        { label: "Food Safety & Standards", href: "/our-work/food-safety" },
                    ]} />

                    <StrategicAreas />

                    <div className="mt-12">
                        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                            Ensuring Food Safety
                        </h2>

                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            TAHA helps horticultural businesses meet Tanzanian Food and Drug Authority
                            (TFDA) requirements, East African Community (EAC) standards, and international
                            market requirements including GlobalGAP, MRLs (Maximum Residue Limits), and
                            phytosanitary certification. We provide training, gap analysis, and certification
                            support for exporters, packhouses, and processing facilities.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    800+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Businesses supported
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    150+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Export certifications
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    4
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Standard categories
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    TZS 20M+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Savings from MRL compliance
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    90%
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Clients passing first-time audit
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    12
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Export markets supported
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                Standards We Support
                            </p>

                            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                                <li>
                                    <span className="font-medium text-taha-dark">TFDA Standards:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Tanzanian Food and Drug Authority requirements
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">EAC Standards:</span>
                                    <span className="ml-2 text-neutral-600">
                                        East African Community harmonized standards
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">GlobalGAP:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Global Good Agricultural Practice certification
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">MRL Compliance:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Maximum Residue Limits for agrochemicals
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