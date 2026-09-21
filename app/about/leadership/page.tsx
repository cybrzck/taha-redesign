import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Leadership | TAHA",
    description: "Meet the leadership team of the Tanzania Horticultural Association.",
};

export default function LeadershipPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Leadership"
                description="Meet our leadership team"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About TAHA", href: "/about" },
                    { label: "Leadership", href: "/about/leadership" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "About TAHA", href: "/about" },
                        { label: "Leadership", href: "/about/leadership" },
                    ]} />

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                                Leadership Team
                            </h2>

                            <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                TAHA's leadership team brings together diverse expertise from
                                across Tanzania's horticulture sector, including production,
                                marketing, policy, and business development.
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
                                        Chairperson, Board of Directors
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:order-2 lg:pt-8">
                            <div className="p-8 bg-white rounded-lg shadow-sm">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                    Governance Structure
                                </p>

                                <p className="mt-4 text-base leading-7 text-neutral-600">
                                    TAHA is governed by a Board of Directors elected from among the
                                    membership, ensuring that the organization remains accountable
                                    to its members and reflective of the sector's diversity.
                                </p>

                                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                                    <li>
                                        <p className="font-medium text-taha-dark">Board Chair:</p>
                                        <span className="text-taha">Dr. Amani Mkindi</span>
                                    </li>
                                    <li>
                                        <p className="font-medium text-taha-dark">Vice Chair:</p>
                                        <span className="text-taha">Fatuma Omar</span>
                                    </li>
                                    <li>
                                        <p className="font-medium text-taha-dark">Secretary:</p>
                                        <span className="text-taha">Josephat Mselle</span>
                                    </li>
                                    <li>
                                        <p className="font-medium text-taha-dark">Treasurer:</p>
                                        <span className="text-taha">[Name]</span>
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