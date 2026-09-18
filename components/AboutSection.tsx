import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="bg-taha-light py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:items-end lg:gap-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-taha" />

                            <span className="text-[20px] font-semibold uppercase tracking-[0.24em] text-taha">
                                About TAHA
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-taha-dark sm:text-5xl lg:text-[58px]">
                            Building a more competitive future for
                            <span className="text-taha">
                                {" "}
                                Tanzania&apos;s horticulture.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-12 grid gap-8 sm:mt-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
                    {/* Image */}
                    <div className="relative h-[360px] overflow-hidden sm:h-[800px] lg:h-[630px]">
                        <img
                            src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1800&q=90"
                            alt="Horticultural farming"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/60 via-transparent to-transparent" />

                        {/* Year */}
                        <div className="absolute bottom-0 left-0 bg-taha px-7 py-6 sm:px-8 sm:py-7">
                            <span className="block text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                                2004
                            </span>

                            <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/70">
                                Established
                            </span>
                        </div>

                        {/* Image Label */}
                        <div className="absolute right-0 top-0 bg-white px-5 py-4">
                            <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-taha">
                                TAHA
                            </span>

                            <span className="mt-1 block text-xs text-neutral-500">
                                Tanzania
                            </span>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="flex flex-col bg-white p-7 sm:p-9 lg:p-10">
                        <div>
                            <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                The Tanzania Horticultural Association (TAHA)
                                is an apex private sector member-based
                                organization working to strengthen the growth
                                and competitiveness of Tanzania&apos;s
                                horticultural industry.
                            </p>

                            <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                TAHA brings together producers, traders,
                                exporters, processors and other businesses
                                across the horticulture value chain.
                            </p>
                        </div>

                        <div className="my-8 h-px bg-neutral-200" />

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                            <div>
                                <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                    20+
                                </p>

                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                    Years of impact
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                    25,900+
                                </p>

                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                    Members
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                    6
                                </p>

                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                    Value chains
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-semibold tracking-tight text-taha-dark">
                                    TZ
                                </p>

                                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                    National network
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href="#"
                            className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-taha pb-2 text-sm font-semibold text-taha transition hover:border-taha-dark hover:text-taha-dark"
                        >
                            Discover TAHA

                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="mt-12 grid gap-5 border-t border-neutral-200 pt-7 sm:mt-14 sm:pt-8 lg:grid-cols-[1fr_2fr] lg:gap-10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                        Our role
                    </p>

                    <p className="max-w-3xl text-lg font-medium leading-7 tracking-tight text-neutral-700 sm:text-xl sm:leading-8">
                        Connecting people, knowledge, markets and opportunities
                        to help Tanzania&apos;s horticulture industry grow.
                    </p>
                </div>
            </div>
        </section>
    );
}