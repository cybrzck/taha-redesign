import axios from "axios";
import type {
    ApiResponse,
    Membership,
    Partner,
    StrategicArea,
    Testimonial,
    ValueChain,
    NewsArticle,
    Event,
    Project,
    Publication,
    Report,
    Download,
    UsefulLink,
    TeamMember,
    BoardMember,
    MarketInfo,
    MarketOpportunity,
    ExportMarket,
    TradeInfo,
    ContactInfo,
    Career,
    Tender,
    SearchResult,
    StrategicArea as StrategicAreaType,
    Membership as MembershipType,
    ValueChain as ValueChainType,
    Testimonial as TestimonialType,
    Partner as PartnerType,
    MembershipCategory,
    RelatedResource,
    CTASectionProps,
    BreadcrumbItem,
    Statistic,
    PageHeaderProps,
} from "@/types/taha";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const tahaApi = {
    getStrategicAreas: async () => {
        const response = await api.get<ApiResponse<StrategicAreaType[]>>(
            "/mock/strategic-areas",
        );
        return response.data;
    },

    getValueChains: async () => {
        const response = await api.get<ApiResponse<ValueChainType[]>>(
            "/mock/value-chains",
        );
        return response.data;
    },

    getMembership: async () => {
        const response = await api.get<ApiResponse<MembershipType>>(
            "/mock/membership",
        );
        return response.data;
    },

    getTestimonials: async () => {
        const response = await api.get<ApiResponse<TestimonialType[]>>(
            "/mock/testimonials",
        );
        return response.data;
    },

    getPartners: async () => {
        const response = await api.get<ApiResponse<PartnerType[]>>(
            "/mock/partners",
        );
        return response.data;
    },

    getNewsArticles: async () => {
        const response = await api.get<ApiResponse<NewsArticle[]>>(
            "/mock/news",
        );
        return response.data;
    },

    getEvents: async () => {
        const response = await api.get<ApiResponse<Event[]>>("/mock/events");
        return response.data;
    },

    getProjects: async () => {
        const response = await api.get<ApiResponse<Project[]>>("/mock/projects");
        return response.data;
    },

    getPublications: async () => {
        const response = await api.get<ApiResponse<Publication[]>>(
            "/mock/publications",
        );
        return response.data;
    },

    getReports: async () => {
        const response = await api.get<ApiResponse<Report[]>>("/mock/reports");
        return response.data;
    },

    getDownloads: async () => {
        const response = await api.get<ApiResponse<Download[]>>("/mock/downloads");
        return response.data;
    },

    getUsefulLinks: async () => {
        const response = await api.get<ApiResponse<UsefulLink[]>>(
            "/mock/useful-links",
        );
        return response.data;
    },

    getMarketInfo: async () => {
        const response = await api.get<ApiResponse<MarketInfo[]>>(
            "/mock/market-info",
        );
        return response.data;
    },

    getMarketOpportunities: async () => {
        const response =
            await api.get<ApiResponse<MarketOpportunity[]>>(
                "/mock/market-opportunities",
            );
        return response.data;
    },

    getExportMarkets: async () => {
        const response = await api.get<ApiResponse<ExportMarket[]>>(
            "/mock/export-markets",
        );
        return response.data;
    },

    getTradeInfo: async () => {
        const response = await api.get<ApiResponse<TradeInfo[]>>(
            "/mock/trade-info",
        );
        return response.data;
    },

    getCareers: async () => {
        const response = await api.get<ApiResponse<Career[]>>("/mock/careers");
        return response.data;
    },

    getTenders: async () => {
        const response = await api.get<ApiResponse<Tender[]>>("/mock/tenders");
        return response.data;
    },

    getContactInfo: async () => {
        const response = await api.get<ApiResponse<ContactInfo>>("/mock/contact");
        return response.data;
    },
};

export default api;