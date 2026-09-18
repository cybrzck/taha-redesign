const partners = [
    "Development Partner",
    "Agriculture Partner",
    "Trade Partner",
    "Food Systems Partner",
    "Market Partner",
    "Technology Partner",
];

export default function Partners() {
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

            <div className="relative mt-12 overflow-hidden border-y border-neutral-200">
                <div className="flex w-max motion-safe:animate-partners">
                    {items.map((partner, index) => (
                        <div
                            key={`${partner}-${index}`}
                            className="flex h-24 w-[220px] shrink-0 items-center justify-center border-r border-neutral-200 px-5 text-center sm:h-28 sm:w-[260px]"
                        >
                            <span className="text-sm font-semibold text-neutral-400 transition-colors duration-300 hover:text-taha">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}