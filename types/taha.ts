export type StrategicAreaIcon =
    | "Handshake"
    | "Leaf"
    | "Scale"
    | "Users"
    | "ShieldCheck"
    | "Factory";

export interface StrategicArea {
    id: number;
    number: string;
    title: string;
    description: string;
    icon: StrategicAreaIcon;
    detailedDescription?: string;
    keyActivities?: string[];
    impact?: string;
    relatedResources?: RelatedResource[];
}

export interface ValueChain {
    id: number;
    number: string;
    title: string;
    image: string;
    description?: string;
    overview?: string;
    keyCrops?: string[];
    productionRegions?: string[];
    exportMarkets?: string[];
    challenges?: string[];
    opportunities?: string[];
    relatedResources?: RelatedResource[];
}

export interface MembershipCategory {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    fee?: string;
    subFees?: [string, string][];
    benefits: string[];
    eligibility?: string[];
}

export interface Membership {
    totalMembers: number;
    categories: MembershipCategory[];
}

export interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
}

export interface Partner {
    id: number;
    name: string;
    logo?: string;
    website?: string;
    description?: string;
    category?: "development" | "agriculture" | "trade" | "food-systems" | "market" | "technology";
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface RelatedResource {
    id: number;
    title: string;
    type: "publication" | "report" | "link" | "download";
    url: string;
    description?: string;
}

export interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    category: "news" | "announcement" | "success-story";
    author: string;
    date: string;
    tags?: string[];
    featured?: boolean;
}

export interface Event {
    id: number;
    title: string;
    slug: string;
    description: string;
    image?: string;
    startDate: string;
    endDate?: string;
    location: string;
    type: "conference" | "workshop" | "training" | "exhibition" | "meeting";
    registrationUrl?: string;
    featured?: boolean;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    image: string;
    status: "active" | "completed" | "upcoming";
    startDate: string;
    endDate?: string;
    partners: string[];
    valueChains: string[];
    regions: string[];
    budget?: string;
    objectives: string[];
    achievements?: string[];
}

export interface Publication {
    id: number;
    title: string;
    slug: string;
    description: string;
    coverImage: string;
    type: "report" | "guide" | "brief" | "newsletter" | "study";
    category: string;
    author: string;
    date: string;
    pages: number;
    language: string;
    downloadUrl: string;
    fileSize: string;
    tags?: string[];
}

export interface Report {
    id: number;
    title: string;
    slug: string;
    description: string;
    coverImage?: string;
    category: string;
    date: string;
    pages: number;
    downloadUrl: string;
    fileSize: string;
}

export interface Download {
    id: number;
    title: string;
    description: string;
    category: string;
    fileType: "pdf" | "doc" | "xls" | "zip";
    fileSize: string;
    downloadUrl: string;
    date: string;
}

export interface UsefulLink {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    email?: string;
    linkedin?: string;
}

export interface BoardMember {
    id: number;
    name: string;
    position: string;
    organization: string;
    bio: string;
    image: string;
}

export interface MarketInfo {
    id: number;
    title: string;
    description: string;
    region: string;
    crops: string[];
    priceRange?: string;
    lastUpdated: string;
    source: string;
}

export interface MarketOpportunity {
    id: number;
    title: string;
    description: string;
    market: string;
    crop: string;
    requirements: string[];
    deadline?: string;
    contact: string;
}

export interface ExportMarket {
    id: number;
    country: string;
    flag: string;
    crops: string[];
    requirements: string[];
    tariffs: string;
    marketSize: string;
    contact: string;
}

export interface TradeInfo {
    id: number;
    title: string;
    description: string;
    category: "regulations" | "standards" | "procedures" | "agreements";
    date: string;
    downloadUrl?: string;
}

export interface ContactInfo {
    office: {
        name: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
    }[];
    departments: {
        name: string;
        email: string;
        phone: string;
        description: string;
    }[];
}

export interface Career {
    id: number;
    title: string;
    department: string;
    location: string;
    type: "full-time" | "part-time" | "contract" | "internship";
    description: string;
    requirements: string[];
    responsibilities: string[];
    deadline: string;
    applicationUrl: string;
}

export interface Tender {
    id: number;
    title: string;
    reference: string;
    description: string;
    category: "goods" | "services" | "works" | "consultancy";
    publishedDate: string;
    closingDate: string;
    downloadUrl: string;
    contact: string;
}

export interface SearchResult {
    id: number;
    title: string;
    description: string;
    url: string;
    type: "page" | "article" | "publication" | "project" | "event";
}

export interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    image?: string;
}

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface CTASectionProps {
    title: string;
    description?: string;
    primaryAction: {
        label: string;
        href: string;
    };
    secondaryAction?: {
        label: string;
        href: string;
    };
    background?: "light" | "dark" | "green";
}

export interface Statistic {
    value: string;
    label: string;
}