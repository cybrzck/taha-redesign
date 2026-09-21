import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Board of Directors | TAHA",
    description: "Our governance structure and board members.",
};

export default function BoardPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Board of Directors"
                description="Our governance structure"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About TAHA", href: "/about" },
                    { label: "Board of Directors", href: "/about/board" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "About TAHA", href: "/about" },
                        { label: "Board of Directors", href: "/about/board" },
                    ]} />

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                                Board of Directors
                            </h2>

                            <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                TAHA's Board of Directors provides strategic governance and oversight
                                for the organization, ensuring that our activities align with our
                                mission and deliver value to our members.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-lg border border-neutral-200">
                                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-taha"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-semibold text-taha-dark">
                                        Dr. Amani Mkindi
                                    </h3>

                                    <p className="mt-2 text-sm text-neutral-500">
                                        Chairperson
                                    </p>

                                    <p className="mt-1 text-xs text-neutral-500">
                                        Large-scale Producer Exporter
                                    </p>
                                </div>

                                <div className="p-5 rounded-lg border border-neutral-200">
                                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-taha"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-semibold text-taha-dark">
                                        Fatuma Omar
                                    </h3>

                                    <p className="mt-2 text-sm text-neutral-500">
                                        Vice Chairperson
                                    </p>

                                    <p className="mt-1 text-xs text-neutral-500">
                                        Service Provider
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-lg border border-neutral-200">
                                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-taha"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-semibold text-taha-dark">
                                        Josephat Mselle
                                    </h3>

                                    <p className="mt-2 text-sm text-neutral-500">
                                        Secretary General
                                    </p>

                                    <p className="mt-1 text-xs text-neutral-500">
                                        Horticulture Farmer
                                    </p>
                                </div>

                                <div className="p-5 rounded-lg border border-neutral-200">
                                    <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-taha"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-xl font-semibold text-taha-dark":
                                    </h3>

                                    <p className="mt-2 text-sm text-neutral-500">
                                        [Name]
                                    </p>

                                    <p className="mt-1 text-xs text-neutral-500">
                                        Processor
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:order-2 lg:pt-8">
                            <div className="p-8 bg-white rounded-lg shadow-sm">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                    Governance Principles
                                </p>

                                <p className="mt-4 text-base leading-7 text-neutral-600">
                                    The Board operates according to principles of transparency,
                                    accountability, and sector representation, ensuring that all
                                    segments of Tanzania's horticulture industry have a voice in
                                    TAHA's direction and decision-making.
                                </p>

                                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                                    <li>
                                        <p className="font-medium text-taha-dark">Transparency:</p>
                                        <span className="text-taha">Open decision-making and reporting</span>
                                    </li>
                                    <li>
                                        <p className="font-medium text-taha-dark">Accountability:</p>
                                        <span className="text-taha">Regular reporting to membership</span>
                                    </li>
                                    <li>
                                        <p className="font-medium text-taha-dark">Inclusivity:</p>
                                        <span className="text-taha">Representation across all value chain segments</span>
                                    </li>
                                    <li>
                                        <p className="font-medium text-taha-dark">Sustainability:</p>
                                        <span className="text-taha">Long-term industry health</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}