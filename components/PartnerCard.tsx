"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PartnerCardProps = {
    id: number;
    name: string;
    logo: string;
    description?: string;
};

export default function PartnerCard({
    id,
    name,
    logo,
    description,
}: PartnerCardProps) {
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
            className={`flex h-24 w-[220px] shrink-0 items-center justify-center border-r border-neutral-200 px-5 text-center sm:h-28 sm:w-[260px] transition-colors duration-300 group-hover:text-taha group-hover:bg-taha-light ${
                isHovered ? "opacity-90" : ""
            }`}
        >
            <Image
                src={logo}
                alt={name}
                className="h-4 w-28 sm:h-28 w-24 object-contain"
            />

            <span
                className="mt-2 text-sm font-semibold text-neutral-400 transition-colors duration-300 group-hover:text-taha"
            >
                {name}
            </span>
        </div>
    );
}