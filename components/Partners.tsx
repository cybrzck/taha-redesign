"use client";

import { useEffect, useState } from "react";
import { tahaApi } from "@/lib/api";
import type { Partner } from "@/types/taha";

export default function Partners() {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPartners = async () => {
        try {
            const response = await tahaApi.getPartners();

            if (!response.data) {
                throw new Error("No partners were returned.");
            }

            setPartners(response.data);
            setError(null);
        } catch (error) {
            console.error("Failed to load partners:", error);

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to load partners.",
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let cancelled = false;

        const loadPartners = async () => {
            try {
                const response = await tahaApi.getPartners();

                if (!response.data) {
                    throw new Error("No partners were returned.");
                }

                if (!cancelled) {
                    setPartners(response.data);
                    setError(null);
                    setLoading(false);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error("Failed to load partners:", error);

                    setError(
                        error instanceof Error
                            ? error.message
                            : "Failed to load partners.",
                    );

                    setLoading(false);
                }
            }
        };

        loadPartners();

        return () => {
            cancelled = true;
        };
    }, []);

    const items = [...partners, ...partners];

    return (
        <section className="overflow-hidden border-t border-neutral-200 bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha">
                        Our Development Partners
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-taha-dark sm:text-4xl">
                        Working together for impact
                    </h2>
                </div>
            </div>

            {loading && (
                <div className="relative mt-12 overflow-hidden border-y border-neutral-200">
                    <div className="flex">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex h-24 w-[220px] shrink-0 items-center justify-center border-r border-neutral-200 px-5 sm:h-28 sm:w-[260px]"
                            >
                                <div className="h-4 w-28 animate-pulse bg-neutral-200" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {!loading && error && (
                <div className="mx-auto mt-12 max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <div className="border-y border-neutral-200 py-8 text-center">
                        <p className="text-sm font-semibold text-taha-dark">
                            Unable to load partners.
                        </p>

                        <p className="mt-2 text-sm text-neutral-500">
                            {error}
                        </p>

                        <button
                            type="button"
                            onClick={fetchPartners}
                            className="mt-5 text-sm font-semibold text-taha transition hover:text-taha-dark"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            )}

            {!loading && !error && partners.length === 0 && (
                <div className="mx-auto mt-12 max-w-[1400px] px-5 sm:px-8 lg:px-12">
                    <div className="border-y border-neutral-200 py-8 text-center">
                        <p className="text-sm text-neutral-500">
                            No development partners are currently available.
                        </p>
                    </div>
                </div>
            )}

            {!loading && !error && partners.length > 0 && (
                <div className="relative mt-12 overflow-hidden border-y border-neutral-200">
                    <div className="flex w-max motion-safe:animate-partners">
                        {items.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="flex h-24 w-[220px] shrink-0 items-center justify-center border-r border-neutral-200 px-5 text-center sm:h-28 sm:w-[260px]"
                            >
                                <span className="text-sm font-semibold text-neutral-400 transition-colors duration-300 hover:text-taha">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}