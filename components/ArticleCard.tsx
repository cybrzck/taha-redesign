"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ArticleCardProps = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
};

export default function ArticleCard({
    id,
    title,
    slug,
    excerpt,
    image,
    category,
    date,
}: ArticleCardProps) {
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
            className={`group border-e border-neutral-200 hover:border-taha transition-colors duration-300 overflow-hidden rounded-lg`}
        >
            <Link
                href={`/news/${slug}`}
                className="group-hover:opacity-90 transition-opacity"
            >
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="p-5">
                <span
                    className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400"
                >
                    {date}
                </span>

                <h3
                    className="mt-2 text-lg font-semibold tracking-tight text-taha-dark group-hover:text-taha transition-colors"
                >
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {excerpt}
                </p>
            </div>
        </div>
    );
}