const chains = [
    {
        number: "01",
        title: "Flowers & Cuttings",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "02",
        title: "Vegetables",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=90",
    },
    {
        number: "03",
        title: "Fruits",
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1000&q=90",
    },
    {
        number: "04",
        title: "Spices & Herbs",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=90",
    },
    {
        number: "05",
        title: "Roots & Tubers",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1000&q=90",
    },
    {
        number: "06",
        title: "Horticultural Nuts",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=90",
    },
      {
        number: "07",
        title: "Horticultural Nuts1",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=90",
    },
      {
        number: "08",
        title: "Horticultural Nuts2",
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=90",
    },
     {
        number: "09",
        title: "Spices & Herbs1",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=90",
    },
];

export default function ValueChains() {
    return (
        <section
            id="value-chains"
            className="bg-taha-light py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-8 lg:flex-row lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-taha" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-taha">
                                Our Value Chains
                            </span>
                        </div>

                        <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-taha-dark sm:text-4xl lg:text-5xl">
                            From farm to{" "}
                            <span className="text-taha">market.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-neutral-500">
                        Supporting producers and businesses across Tanzania&apos;s
                        diverse horticultural value chains.
                    </p>
                </div>

                {/* Value Chain Grid */}
                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Featured Item */}
                    <article className="group relative h-[400px] overflow-hidden md:col-span-2 md:h-[340px] lg:col-span-2 lg:row-span-2 lg:h-[480px]">
                        <img
                            src={chains[0].image}
                            alt={chains[0].title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/90 via-taha-dark/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-7 sm:p-8">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                                {chains[0].number}
                            </span>

                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                {chains[0].title}
                            </h3>

                            <div className="mt-3 h-[2px] w-8 bg-taha-light transition-all duration-300 group-hover:w-16" />
                        </div>
                    </article>

                    {/* Other Items */}
                    {chains.slice(1).map((chain) => (
                        <article
                            key={chain.title}
                            className="group relative h-[210px] overflow-hidden sm:h-[230px]"
                        >
                            <img
                                src={chain.image}
                                alt={chain.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-taha-dark/85 via-taha-dark/10 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-taha-light">
                                    {chain.number}
                                </span>

                                <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                                    {chain.title}
                                </h3>

                                <div className="mt-2 h-[2px] w-7 bg-taha-light transition-all duration-300 group-hover:w-12" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}