import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  Check,
  CircleCheck,
  Factory,
  GraduationCap,
  Handshake,
  Leaf,
  Megaphone,
  ShieldCheck,
  Sprout,
  Store,
  Users,
  WalletCards,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Discover TAHA membership categories, benefits, fees, application process and payment options.",
};

const applicationUrl = "https://taha.or.tz/application-registration/";

const benefits = [
  {
    icon: Users,
    title: "Powerful Network",
    description:
      "Connect with thousands of horticulture stakeholders across Tanzania and international markets.",
  },
  {
    icon: Store,
    title: "Market Access",
    description:
      "Connect with buyers, exhibitions, trade opportunities and export logistics.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge & Training",
    description:
      "Access industry information, training, standards and good agricultural practices.",
  },
  {
    icon: Megaphone,
    title: "Policy Influence",
    description:
      "Have your voice represented in discussions affecting Tanzania's horticulture industry.",
  },
  {
    icon: Handshake,
    title: "Business Support",
    description:
      "Receive support tailored to your business, farm, organisation or service.",
  },
];

const categories = [
  {
    number: "01",
    title: "Comprehensive",
    subtitle: "For established horticultural businesses",
    description: "Large-scale producers, exporters and large-scale processors.",
    fee: "TZS 2,000,000",
    icon: Factory,
    benefits: [
      "Policy advocacy",
      "Finance linkages",
      "Packhouse access",
      "Marketing support",
    ],
  },
  {
    number: "02",
    title: "Allied",
    subtitle: "For horticulture service providers",
    description:
      "Agro-input dealers, financial institutions and other service providers.",
    fee: "TZS 1,000,000",
    icon: Building2,
    benefits: [
      "Brand exposure",
      "Market access",
      "Policy support",
      "Logistics facilitation",
    ],
  },
  {
    number: "03",
    title: "Associate",
    subtitle: "For farmers, groups and processors",
    description:
      "Smallholder farmers, medium-scale farmers, groups and processors.",
    fee: null,
    icon: Sprout,
    benefits: [
      "Training",
      "Inputs access",
      "Market linkage",
      "Agronomy support",
      "Business development",
    ],
    subFees: [
      ["Individuals ≤5 acres", "TZS 100,000"],
      ["Medium-scale >5 acres", "TZS 200,000"],
      ["Groups", "TZS 20,000/member"],
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Eligibility",
    description:
      "Choose the membership category that matches your business or horticultural activity.",
    icon: Users,
  },
  {
    number: "02",
    title: "Verification",
    description:
      "Associate applicants may undergo field verification, while Allied applicants undergo product evaluation.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Consultation",
    description:
      "Engage with the relevant TAHA teams for orientation, support and business linkage.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Payment",
    description:
      "Pay the applicable membership fee using the official payment channels.",
    icon: WalletCards,
  },
  {
    number: "05",
    title: "Activation",
    description: "Membership becomes active once payment is confirmed.",
    icon: CircleCheck,
  },
];

const paymentPeriods = [
  ["Q1", "Jan – Mar", "100%"],
  ["Q2", "Apr – Jun", "75%"],
  ["Q3", "Jul – Sep", "50%"],
  ["Q4", "Oct – Dec", "25%"],
];

const paymentMethods = [
  {
    title: "Vodacom M-Pesa",
    badge: "M-PESA",
    steps: [
      "Dial *150*00#",
      "Select 4 - Pay by M-PESA",
      "Select 4 - Business Number",
      "Enter 123123",
      "Enter reference 118866",
      "Enter the membership fee",
      "Enter your PIN",
      "Enter 1 to complete",
    ],
  },
  {
    title: "Mixx by Yas",
    badge: "MIXX",
    steps: [
      "Dial *150*50*1#",
      "Enter payment number 118866",
      "Enter the membership fee",
      "Enter your PIN",
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 bg-taha" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
        {children}
      </span>
    </div>
  );
}

export default function MembershipPage() {
  return (
    <main className="bg-white text-taha-dark">
      <Navbar />

      {/* Hero */}
     <section className="relative overflow-hidden bg-taha-dark text-white">
    <Image
        src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2200&q=90"
        alt="Tanzania horticulture"
        fill
        priority
        sizes="100vw"
        className="object-cover"
    />

    <div className="absolute inset-0 bg-taha-dark/80" />

    <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <SectionLabel>TAHA Membership</SectionLabel>

        <div className="mt-5 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                    Grow with <span className="text-taha">TAHA.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    Connect with markets, knowledge, business opportunities
                    and a national network shaping Tanzania&apos;s
                    horticulture industry.
                </p>
            </div>

            <div className="lg:justify-self-end">
                <a
                    href={applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-taha px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-taha-hover"
                >
                    Apply for Membership
                    <ArrowUpRight size={17} />
                </a>
            </div>
        </div>

        <div className="mt-9 grid border-y border-white/15 sm:grid-cols-3">
            <div className="border-b border-white/15 px-0 py-5 sm:border-b-0 sm:border-r sm:px-6">
                <div className="text-3xl font-semibold">20+</div>
                <div className="mt-1 text-sm text-white/60">
                    Years of impact
                </div>
            </div>

            <div className="border-b border-white/15 px-0 py-5 sm:border-b-0 sm:border-r sm:px-6">
                <div className="text-3xl font-semibold">25,900+</div>
                <div className="mt-1 text-sm text-white/60">
                    Members reached
                </div>
            </div>

            <div className="px-0 py-5 sm:px-6">
                <div className="text-3xl font-semibold">03</div>
                <div className="mt-1 text-sm text-white/60">
                    Membership categories
                </div>
            </div>
        </div>
    </div>
</section>

      {/* Benefits */}
      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div>
              <SectionLabel>Why Join TAHA</SectionLabel>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                Membership built around{" "}
                <span className="text-taha">your growth.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
                TAHA brings together the people, businesses and institutions
                shaping Tanzania&apos;s horticulture sector.
              </p>
            </div>

            <div className="grid border-l border-t border-neutral-200 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className={`border-b border-r border-neutral-200 p-5 ${
                      index === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-300">
                        0{index + 1}
                      </span>

                      <Icon size={19} strokeWidth={1.5} className="text-taha" />
                    </div>

                    <h3 className="mt-6 text-base font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-taha-light">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="max-w-2xl">
            <SectionLabel>Membership Categories</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Choose where your business{" "}
              <span className="text-taha">fits.</span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.number}
                  className="bg-white p-5 transition hover:-translate-y-0.5 sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] text-neutral-300">
                      {category.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center bg-taha-light text-taha">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-taha">
                    {category.subtitle}
                  </p>

                  <h3 className="mt-1.5 text-xl font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {category.description}
                  </p>

                  {category.fee ? (
                    <div className="mt-5 border-y border-neutral-200 py-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                        Annual membership
                      </p>

                      <p className="mt-1 text-xl font-semibold">
                        {category.fee}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-5 border-y border-neutral-200 py-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                        Membership fees
                      </p>

                      <div className="mt-3 space-y-2">
                        {category.subFees?.map(([label, amount]) => (
                          <div
                            key={label}
                            className="flex justify-between gap-3 text-xs"
                          >
                            <span className="text-neutral-500">{label}</span>

                            <span className="font-semibold">{amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                      Key benefits
                    </p>

                    <ul className="mt-3 space-y-2">
                      {category.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <Check size={14} className="shrink-0 text-taha" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-taha transition hover:text-taha-dark"
                  >
                    Apply in this category
                    <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>How It Works</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                From application to{" "}
                <span className="text-taha">active membership.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-500">
              A straightforward process designed to connect you with the right
              TAHA services and opportunities.
            </p>
          </div>

          <div className="mt-7 grid gap-px bg-neutral-200 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-taha">
                      {step.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-neutral-300"
                    />
                  </div>

                  <h3 className="mt-7 text-base font-semibold">{step.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-neutral-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border border-neutral-200 p-5">
              <div className="flex gap-3">
                <Leaf size={19} className="shrink-0 text-taha" />

                <div>
                  <h3 className="text-sm font-semibold">
                    Associate verification
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    TAHA may conduct a field visit to verify land size,
                    irrigation and horticultural activity.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 p-5">
              <div className="flex gap-3">
                <ShieldCheck size={19} className="shrink-0 text-taha" />

                <div>
                  <h3 className="text-sm font-semibold">
                    Allied product evaluation
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Allied applicants undergo product or service screening by
                    the relevant TAHA team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="bg-taha-dark text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div>
              <SectionLabel>Membership Payment</SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Simple and <span className="text-taha">official.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                New members pay a pro-rated fee according to the quarter in
                which they join. Renewing members pay the full annual fee.
              </p>

              <div className="mt-6 overflow-hidden border border-white/10">
                <div className="grid grid-cols-3 border-b border-white/10 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30">
                  <span>Quarter</span>
                  <span>Period</span>
                  <span>Payable</span>
                </div>

                {paymentPeriods.map(([quarter, period, percentage]) => (
                  <div
                    key={quarter}
                    className="grid grid-cols-3 border-b border-white/10 px-4 py-3 text-xs last:border-0"
                  >
                    <span className="font-semibold">{quarter}</span>

                    <span className="text-white/40">{period}</span>

                    <span className="font-semibold text-taha-light">
                      {percentage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.title}
                    className="border border-white/10 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <WalletCards size={18} className="text-taha" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                        {method.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold">
                      {method.title}
                    </h3>

                    <ol className="mt-4 space-y-2">
                      {method.steps.map((instruction, index) => (
                        <li
                          key={instruction}
                          className="flex gap-2 text-xs text-white/45"
                        >
                          <span className="font-mono text-[9px] text-taha">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/10 p-5">
                  <div className="flex items-center gap-3">
                    <Banknote size={18} className="text-taha" />

                    <h3 className="text-sm font-semibold">Bank Deposit</h3>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    Stanbic Bank, Arusha Branch
                    <br />
                    TAHA Membership Subscription
                    <br />
                    Account: 912001196411
                  </p>
                </div>

                <div className="border border-taha/30 bg-taha/5 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-taha-light">
                    Payment reference
                  </p>

                  <p className="mt-2 text-xl font-semibold">118866</p>

                  <p className="mt-1 text-xs text-white/35">
                    Use official payment channels only.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-3 border border-white/10 p-4">
                <Building2 size={18} className="shrink-0 text-taha" />

                <p className="text-xs leading-5 text-white/45">
                  <strong className="text-white">Important:</strong> TAHA staff
                  are not permitted to receive membership payments directly, in
                  cash or through personal accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-taha-light">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-between gap-6 border-t border-neutral-200 pt-7 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taha">
                Ready to join?
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                Build your next opportunity with{" "}
                <span className="text-taha">TAHA.</span>
              </h2>

              <p className="mt-3 text-xs text-neutral-500">
                Customer Relations Unit: +255 763 718 849
              </p>
            </div>

            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-3 bg-taha px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-taha-hover"
            >
              Apply Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
