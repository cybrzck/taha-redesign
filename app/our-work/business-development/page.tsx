import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";

export const metadata = {
    title: "Business Development | TAHA",
    description:
        "Helping value chain actors improve productivity, value addition and incomes.",
};

export default function BusinessDevelopmentPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Business Development"
                description:
                    "Helping value chain actors improve productivity, value addition and incomes"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: "Business Development", href: "/our-work/business-development" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/our-work" },
                        { label: "Business Development", href: "/our-work/business-development" },
                    ]} />

                    <StrategicAreas />

                    <div className="mt-12">
                        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                            Growing Horticultural Enterprises
                        </h2>

                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            TAHA's business development services focus on improving the competitiveness
                            and profitability of horticultural enterprises. We support value addition
                            through processing technology, business management training, access to finance,
                            and linkage to input suppliers. Our incubator programs support start-ups and
                            SMEs in developing innovative horticultural products and services.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    5,000+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    SMEs supported
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    300%
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Average profitability increase
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    20+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Innovative products
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    TZS 500M+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Access to finance facilitated
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    8
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Value chain interventions
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    15+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Incubator graduates
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                Our Services
                            </p>

                            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                                <li>
                                    <span className="font-medium text-taha-dark">Business Management:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Training in financial literacy, record-keeping, and strategic planning
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Value Addition:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Processing technology and product development support
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Finance Access:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Credit facilitation and investment linkage support
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Input Linkage:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Connection to quality input suppliers and distributors
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