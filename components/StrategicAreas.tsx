"use client";

import {
    ArrowUpRight,
    Factory,
    Handshake,
    Leaf,
    Scale,
    ShieldCheck,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { tahaApi } from "@/lib/api";
import type { StrategicArea } from "@/types/taha";

const iconMap = {
    Handshake,
    Leaf,
    Scale,
    Users,
    ShieldCheck,
    Factory,
} as const;

export default function StrategicAreas() {
    const [areas, setAreas] = useState<StrategicArea[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStrategicAreas = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await tahaApi.getStrategicAreas();

            if (!response.data) {
                throw new Error("No strategic areas were returned.");
            }

            setAreas(response.data);
        } catch (error) {
            console.error("Failed to load strategic areas:", error);

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to load strategic areas.",
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let cancelled = false;

        const loadStrategicAreas = async () => {
            try {
                const response = await tahaApi.getStrategicAreas();

                if (!response.data) {
                    throw new Error("No strategic areas were returned.");
                }

                if (!cancelled) {
                    setAreas(response.data);
                    setError(null);
                    setLoading(false);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error(
                        "Failed to load strategic areas:",
                        error,
                    );

                    setError(
                        error instanceof Error
                            ? error.message
                            : "Failed to load strategic areas.",
                    );

                    setLoading(false);
                }
            }
        };

        loadStrategicAreas();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section id="work" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
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

                {loading && (
                    <div className="mt-8 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="border-b border-r border-neutral-200 p-6 sm:p-7"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="h-3 w-6 animate-pulse bg-neutral-200" />
                                    <div className="h-5 w-5 animate-pulse bg-neutral-200" />
                                </div>

                                <div className="mt-9">
                                    <div className="h-6 w-40 animate-pulse bg-neutral-200" />
                                    <div className="mt-4 h-4 w-full animate-pulse bg-neutral-100" />
                                    <div className="mt-2 h-4 w-4/5 animate-pulse bg-neutral-100" />
                                </div>

                                <div className="mt-6 h-5 w-5 animate-pulse bg-neutral-200" />
                            </div>
                        ))}
                    </div>
                )}

                {!loading && error && (
                    <div className="mt-8 border border-neutral-200 px-6 py-8">
                        <p className="text-sm font-semibold text-taha-dark">
                            Unable to load strategic areas.
                        </p>

                        <p className="mt-2 text-sm text-neutral-500">
                            {error}
                        </p>

                        <button
                            type="button"
                            onClick={fetchStrategicAreas}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-taha transition hover:text-taha-dark"
                        >
                            Try again
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                )}

                {!loading && !error && areas.length === 0 && (
                    <div className="mt-8 border border-neutral-200 px-6 py-8">
                        <p className="text-sm text-neutral-500">
                            No strategic areas are currently available.
                        </p>
                    </div>
                )}

                {!loading && !error && areas.length > 0 && (
                    <div className="mt-8 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
                        {areas.map((area) => {
                            const Icon = iconMap[area.icon];

                            return (
                                <div
                                    key={area.id}
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
                )}
            </div>
        </section>
    );
}