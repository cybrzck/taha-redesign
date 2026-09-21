import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";

export const metadata = {
    title: "Production | TAHA",
    description:
        "Supporting farmers with knowledge, technology and improved production practices.",
};

export default function ProductionPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Production"
                description:
                    "Supporting farmers with knowledge, technology and improved production practices"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: "Production", href: "/our-work/production" },
                ]}
            />

            <section id="work" className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/our-work" },
                        { label: "Production", href: "/our-work/production" },
                    ]} />

                    <StrategicAreas />

                    <div className="mt-12">
                        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                            Improving Production Practices
                        </h2>

                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            TAHA promotes good agricultural practices (GAP), climate-smart farming
                            techniques, and technology adoption among horticultural farmers. We provide
                            training on pest management, post-harvest handling, irrigation efficiency,
                            and soil health improvement to increase yields and quality while reducing
                            environmental impact.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    25,000+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Farmers trained
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    30-50%
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Yield increase average
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    6
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Key practice areas
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    70%
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Reduction in post-harvest loss
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    20+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Regions covered
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    15+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Improved crop varieties
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                Good Agricultural Practices
                            </p>

                            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                                <li>
                                    <span className="font-medium text-taha-dark">Integrated Pest Management:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Environmentally sound pest control methods
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Soil Health:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Soil testing, amendment, and fertility management
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Water Efficiency:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Drip irrigation and water conservation techniques
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Post-Harvest Handling:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Proper harvesting, sorting, and storage methods
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