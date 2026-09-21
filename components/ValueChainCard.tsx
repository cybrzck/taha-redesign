"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ValueChainCardProps = {
    id: number;
    number: string;
    title: string;
    image: string;
    description?: string;
};

export default function ValueChainCard({
    id,
    number,
    title,
    image,
    description,
}: ValueChainCardProps) {
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
            className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                isHovered ? "shadow-lg" : "shadow-sm"
            }`}
        >
            <Link
                href={`/value-chains/${number.toLowerCase()}`}
                className="group-hover:opacity-90 group-hover:scale-105 transition-transform"
            >
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 transform group-hover:translate-y--2 transition-transform duration-300">
                <span
                    className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light"
                >
                    {number}
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-taha-dark">
                    {title}
                </h3>

                {description && (
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}