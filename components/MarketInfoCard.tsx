"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MarketInfoCardProps = {
    id: number;
    title: string;
    description: string;
    region: string;
    crops: string[];
    lastUpdated: string;
};

export default function MarketInfoCard({
    id,
    title,
    description,
    region,
    crops,
    lastUpdated,
}: MarketInfoCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsHovered(false);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`group border-e border-neutral-200 hover:border-taha transition-colors duration-300 overflow-hidden rounded-lg p-5`}
        >
            <div className="flex items-start gap-4">
                <Image
                    src="/placeholder-market.svg"
                    alt={title}
                    className="w-14 h-14 rounded-sm object-cover flex-shrink-0"
                />

                <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-taha-dark group-hover:text-taha transition-colors">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {description}
                    </p>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>
                        {region}
                    </span>

                    <span className="mx-2 text-neutral-300">/</span>

                    <span>{crops.join(", ")}</span>
                </div>

                <p className="mt-1 text-xs text-neutral-400">
                    Last updated {lastUpdated}
                </p>
            </div>
        </div>
    );
}