"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
    {
        number: "01",
        title: "Comprehensive",
        description:
            "Large-scale producers, exporters and large-scale processors.",
    },
    {
        number: "02",
        title: "Allied",
        description:
            "Service providers including input suppliers, technology companies, financial institutions, logistics and consultants.",
    },
    {
        number: "03",
        title: "Associate",
        description:
            "Small growers, groups, associations and individuals involved in horticultural activities.",
    },
];

function MemberCounter() {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.4 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const target = 25900;
        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1,
            );

            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(target * eased));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [started]);

    return (
        <div ref={ref} className="mt-3 flex items-end">
            <span className="text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                {count.toLocaleString()}
            </span>

            <span className="mb-1 ml-1 text-2xl text-taha-light">
                +
            </span>
        </div>
    );
}

export default function MembershipSection() {
    return (
        <section
            id="membership"
            className="bg-taha-dark py-14 text-white sm:py-16 lg:py-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-5 border-b border-white/15 pb-7 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-taha-light" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha-light">
                                Membership
                            </span>
                        </div>

                        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                            Be part of{" "}
                            <span className="text-taha-light">
                                the network.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-6 text-white/60 lg:ml-auto">
                        Join a national network connecting producers,
                        businesses, service providers and organizations across
                        Tanzania&apos;s horticulture industry.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[0.85fr_1.4fr]">
                    <div className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:py-9 lg:pr-12">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                            TAHA Network
                        </p>

                        <MemberCounter />

                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                            Members connected through Tanzania&apos;s
                            horticulture industry.
                        </p>

                        <Link
                            href="#"
                            className="group mt-6 inline-flex items-center gap-2 border-b border-taha-light pb-1.5 text-sm font-semibold text-white transition hover:border-white"
                        >
                            Become a Member
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="lg:pl-12">
                        {categories.map((category) => (
                            <div
                                key={category.number}
                                className="group grid gap-4 border-b border-white/15 py-6 last:border-b-0 sm:grid-cols-[60px_1fr] sm:py-7"
                            >
                                <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 transition-colors group-hover:text-taha-light">
                                    {category.number}
                                </span>

                                <div>
                                    <div className="flex items-center justify-between gap-5">
                                        <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                            {category.title}
                                        </h3>

                                        <ArrowRight
                                            size={16}
                                            className="shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-taha-light"
                                        />
                                    </div>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-3 border-t border-white/15 pt-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                        Why join TAHA
                    </span>

                    <p className="max-w-3xl text-base font-medium leading-6 tracking-tight text-white/75 sm:text-lg">
                        Access a stronger industry network, business
                        opportunities, knowledge and collective representation
                        across Tanzania&apos;s horticulture sector.
                    </p>
                </div>
            </div>
        </section>
    );
}