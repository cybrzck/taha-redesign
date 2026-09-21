"use client";

import Link from "next/link";
import Image from "next/image";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PageHeaderProps = {
    title: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    image?: string;
    showBreadcrumb?: boolean;
};

export default function PageHeader({
    title,
    description,
    breadcrumbs,
    image,
    showBreadcrumb = true,
}: PageHeaderProps) {
    return (
        <section className="relative overflow-hidden border-b border-neutral-200 bg-taha-light">
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {showBreadcrumb && breadcrumbs?.length ? (
                    <nav
                        className="border-b border-neutral-200 py-5"
                        aria-label="Breadcrumb"
                    >
                        <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
                            {breadcrumbs.map((item, index) => (
                                <li
                                    key={`${item.label}-${index}`}
                                    className="flex items-center gap-2"
                                >
                                    {index > 0 && (
                                        <span
                                            className="text-neutral-300"
                                            aria-hidden="true"
                                        >
                                            /
                                        </span>
                                    )}

                                    {index === breadcrumbs.length - 1 ? (
                                        <span className="font-semibold text-taha-dark">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={item.href || "#"}
                                            className="transition-colors hover:text-taha"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                ) : null}

                <div
                    className={`grid gap-5 py-8 sm:py-10 lg:py-12 ${
                        image
                            ? "lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16"
                            : "lg:grid-cols-[1fr_0.7fr] lg:items-end"
                    }`}
                >
                    <div className="max-w-3xl">
                        <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-taha">
                            <span className="h-px w-8 bg-taha" />
                            TAHA
                        </div>

                        <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-taha-dark sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>

                        {description && (
                            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                                {description}
                            </p>
                        )}
                    </div>

                    {image && (
                        <div className="relative">
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-3 -left-3 h-16 w-16 border-l-2 border-b-2 border-taha" />
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute right-0 top-0 hidden h-full w-px bg-neutral-200 lg:block" />
        </section>
    );
}