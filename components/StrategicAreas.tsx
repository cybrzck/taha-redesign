import {
    ArrowUpRight,
    Factory,
    Handshake,
    Leaf,
    Scale,
    ShieldCheck,
    Users,
} from "lucide-react";

const areas = [
    {
        number: "01",
        title: "Market Access",
        description:
            "Connecting buyers, exporters, farmers and suppliers to expand market opportunities.",
        icon: Handshake,
    },
    {
        number: "02",
        title: "Production",
        description:
            "Supporting farmers with knowledge, technology and improved production practices.",
        icon: Leaf,
    },
    {
        number: "03",
        title: "Policy & Advocacy",
        description:
            "Engaging stakeholders and advocating for policies that support industry growth.",
        icon: Scale,
    },
    {
        number: "04",
        title: "Gender & Nutrition",
        description:
            "Promoting inclusive participation, nutrition and opportunities across communities.",
        icon: Users,
    },
    {
        number: "05",
        title: "Food Safety & Standards",
        description:
            "Supporting compliance with national, regional and international standards.",
        icon: ShieldCheck,
    },
    {
        number: "06",
        title: "Business Development",
        description:
            "Helping value chain actors improve productivity, value addition and incomes.",
        icon: Factory,
    },
];

export default function StrategicAreas() {
    return (
        <section id="work" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-8 lg:flex-row lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-taha" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha">
                                What We Do
                            </span>
                        </div>

                        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-4xl lg:text-5xl">
                            Strengthening Tanzania&apos;s{" "}
                            <span className="text-taha">
                                horticulture industry.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-neutral-500 lg:pb-1">
                        Practical support across production, markets, policy,
                        standards and business development.
                    </p>
                </div>

                {/* Areas */}
                <div className="mt-8 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
                    {areas.map((area) => {
                        const Icon = area.icon;

                        return (
                            <div
                                key={area.number}
                                className="group border-b border-r border-neutral-200 bg-white p-6 transition-all duration-300 hover:bg-taha-dark sm:p-7"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-400 transition-colors duration-300 group-hover:text-taha-light">
                                        {area.number}
                                    </span>

                                    <Icon
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-taha transition-colors duration-300 group-hover:text-taha-light"
                                    />
                                </div>

                                <div className="mt-9">
                                    <h3 className="text-lg font-semibold tracking-tight text-taha-dark transition-colors duration-300 group-hover:text-white sm:text-xl">
                                        {area.title}
                                    </h3>

                                    <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500 transition-colors duration-300 group-hover:text-white/70">
                                        {area.description}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <ArrowUpRight
                                        size={17}
                                        className="text-taha transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-taha-light"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}