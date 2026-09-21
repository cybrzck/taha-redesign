"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="mb-8 border-b border-neutral-200 pb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-neutral-500">
                {items.map((item, index) => (
                    <li key={index} className="relative">
                        {index > 0 ? (
                            <span className="separator bg-neutral-300 mx-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 rotate-180"
                                    viewBox="0 0 6 10"
                                >
                                    <path fill="currentColor" d="M6 10L3 3 0 7 3 10Z" />
                                </svg>
                            </span>
                        ) : null}
                        <Link
                            key={item.label}
                            href={item.href || "#"}
                            className="hover:text-taha transition-colors"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}