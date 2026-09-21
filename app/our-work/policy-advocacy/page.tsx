import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import StrategicAreas from "@/components/StrategicAreas";
import {
    ArrowRight,
    CheckCircle2,
    FileText,
    Landmark,
    Scale,
    Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Policy & Advocacy | TAHA",
    description:
        "TAHA engages stakeholders and advocates for policies that support growth, competitiveness and sustainability in Tanzania's horticulture industry.",
};

const advocacyAreas = [
    {
        icon: Scale,
        title: "Trade & Market Access",
        description:
            "Advocating for policies and trade conditions that improve access to domestic, regional and international markets.",
    },
    {
        icon: FileText,
        title: "Standards & Compliance",
        description:
            "Engaging on phytosanitary, food safety and other standards affecting horticultural production and trade.",
    },
    {
        icon: Landmark,
        title: "Business Environment",
        description:
            "Working with public institutions and stakeholders to identify and address regulatory barriers affecting the industry.",
    },
    {
        icon: Users,
        title: "Stakeholder Engagement",
        description:
            "Bringing together government, private sector, farmers and development partners around issues affecting horticulture.",
    },
];

const policyFocus = [
    "Trade and market access",
    "Taxation and investment",
    "Food safety and phytosanitary requirements",
    "Agricultural regulations",
    "Infrastructure and logistics",
    "Access to finance",
];

export default function PolicyAdvocacyPage() {
    return (
        <main className="bg-white text-taha-dark">
            <Navbar />

            <PageHeader
                title="Policy & Advocacy"
                description="Engaging stakeholders and advocating for policies that support industry growth."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Work", href: "/our-work" },
                    {
                        label: "Policy & Advocacy",
                        href: "/our-work/policy-advocacy",
                    },
                ]}
            />

            <section
                id="work"
                className="bg-taha-light py-16 sm:py-20 lg:py-12"
            >
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                  
                    <StrategicAreas />

                    {/* Introduction */}
                    <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-taha">
                                <span className="h-px w-8 bg-taha" />
                                Policy & Advocacy
                            </div>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight text-taha-dark sm:text-5xl lg:text-[52px] lg:leading-[1.05]">
                                Creating an environment where horticulture can
                                grow.
                            </h2>
                        </div>

                        <div>
                            <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                                TAHA represents the interests of horticulture
                                stakeholders by engaging government
                                institutions, private-sector organisations,
                                development partners and other stakeholders on
                                policies and regulations affecting the
                                industry.
                            </p>

                            <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
                                Through evidence-based advocacy and stakeholder
                                dialogue, TAHA works to identify challenges,
                                influence policy discussions and promote a
                                business environment that supports investment,
                                competitiveness and sustainable industry
                                development.
                            </p>
                        </div>
                    </div>

                    {/* Advocacy areas */}
                    <div className="mt-20">
                        <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-taha">
                                    What We Do
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-taha-dark sm:text-3xl">
                                    Our advocacy focus
                                </h3>
                            </div>

                            <p className="max-w-md text-sm leading-6 text-neutral-500">
                                We focus on policy issues that directly affect
                                producers, exporters, processors, service
                                providers and other industry stakeholders.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
                            {advocacyAreas.map((area) => {
                                const Icon = area.icon;

                                return (
                                    <div
                                        key={area.title}
                                        className="group bg-white p-7 transition-colors hover:bg-taha-dark lg:p-8"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center bg-taha-light text-taha transition-colors group-hover:bg-taha">
                                                <Icon size={21} />
                                            </div>

                                            <ArrowRight
                                                size={17}
                                                className="text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-taha"
                                            />
                                        </div>

                                        <h4 className="mt-8 text-lg font-bold text-taha-dark transition-colors group-hover:text-white">
                                            {area.title}
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-neutral-600 transition-colors group-hover:text-white/60">
                                            {area.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Focus */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-taha">
                                <span className="h-px w-8 bg-taha" />
                                Policy Priorities
                            </div>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight text-taha-dark sm:text-5xl">
                                Issues that matter to the industry.
                            </h2>

                            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600">
                                TAHA engages on policy and regulatory matters
                                that influence the operating environment and
                                competitiveness of Tanzania's horticulture
                                industry.
                            </p>
                        </div>

                        <div className="border-y border-neutral-200">
                            {policyFocus.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-5 border-b border-neutral-200 py-5 last:border-b-0"
                                >
                                    <span className="text-xs font-bold text-taha">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <CheckCircle2
                                        size={18}
                                        className="shrink-0 text-taha"
                                    />

                                    <span className="text-base font-semibold text-neutral-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How Advocacy Works */}
            <section className="bg-taha-dark">
                <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-taha">
                                <span className="h-px w-8 bg-taha" />
                                Our Approach
                            </div>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Evidence, dialogue and representation.
                            </h2>

                            <p className="mt-6 text-base leading-8 text-white/60">
                                Effective advocacy depends on understanding
                                industry challenges and bringing the right
                                stakeholders together to find practical
                                solutions.
                            </p>
                        </div>

                        <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                            <div className="bg-taha-dark p-7">
                                <span className="text-xs font-bold text-taha">
                                    01
                                </span>

                                <h3 className="mt-8 text-lg font-bold text-white">
                                    Identify
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/55">
                                    Understand policy and regulatory challenges
                                    affecting horticulture stakeholders.
                                </p>
                            </div>

                            <div className="bg-taha-dark p-7">
                                <span className="text-xs font-bold text-taha">
                                    02
                                </span>

                                <h3 className="mt-8 text-lg font-bold text-white">
                                    Engage
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/55">
                                    Bring together members, government and
                                    relevant stakeholders to discuss solutions.
                                </p>
                            </div>

                            <div className="bg-taha-dark p-7">
                                <span className="text-xs font-bold text-taha">
                                    03
                                </span>

                                <h3 className="mt-8 text-lg font-bold text-white">
                                    Advocate
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/55">
                                    Present evidence and industry perspectives
                                    in policy and regulatory discussions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-taha-light">
                <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-20">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-taha">
                            Work With TAHA
                        </p>

                        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-taha-dark sm:text-4xl">
                            Be part of the conversation shaping horticulture.
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
                            Connect with TAHA and contribute to the development
                            of a stronger and more competitive horticulture
                            industry.
                        </p>
                    </div>

                    <Link
                        href="/membership"
                        className="inline-flex shrink-0 items-center gap-3 bg-taha-dark px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-taha-hover"
                    >
                        Join TAHA
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}