import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";

export const metadata = {
    title: "Gender & Nutrition | TAHA",
    description:
        "Promoting inclusive participation, nutrition and opportunities across communities.",
};

export default function GenderNutritionPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Gender & Nutrition"
                description:
                    "Promoting inclusive participation, nutrition and opportunities across communities"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    { label: "Gender & Nutrition", href: "/our-work/gender-nutrition" },
                ]}
            />

            <section className="py-20 sm:py-24 lg:py-32 bg-taha-light">
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/our-work" },
                        { label: "Gender & Nutrition", href: "/our-work/gender-nutrition" },
                    ]} />

                    <StrategicAreas />

                    <div className="mt-12">
                        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[48px]">
                            Inclusive Participation & Nutrition
                        </h2>

                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                            TAHA is committed to promoting gender equity and social inclusion across
                            Tanzania's horticulture value chain. We implement programs that increase
                            women's participation as farmers, business owners, and leaders. Additionally,
                            we promote horticultural diversification for improved nutrition and support
                            bio-fortified crop varieties that address micronutrient deficiencies in
                            vulnerable communities.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    12,000+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Women farmers reached
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    50,000+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Community members improved nutrition
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    40%
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Women in value chains
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    6
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Nutrient-dense crops promoted
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    3
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Regional programs
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-taha-dark">
                                    20+
                                </p>
                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                                    Farmer field schools
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                                Our Programs
                            </p>

                            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                                <li>
                                    <span className="font-medium text-taha-dark">Women Empowerment:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Leadership training and market access support
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Nutrition-Sensitive Agriculture:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Diversified crop production for household nutrition
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Youth Engagement:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Empowering young farmers and agri-entrepreneurs
                                    </span>
                                </li>
                                <li>
                                    <span className="font-medium text-taha-dark">Gender Mainstreaming:</span>
                                    <span className="ml-2 text-neutral-600">
                                        Integrating gender considerations across all programs
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