import axios from "axios";
import type {
    ApiResponse,
    Membership,
    Partner,
    StrategicArea,
    Testimonial,
    ValueChain,
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
        const response = await api.get<ApiResponse<StrategicArea[]>>(
            "/mock/strategic-areas",
        );

        return response.data;
    },

    getValueChains: async () => {
        const response = await api.get<ApiResponse<ValueChain[]>>(
            "/mock/value-chains",
        );

        return response.data;
    },

    getMembership: async () => {
        const response = await api.get<ApiResponse<Membership>>(
            "/mock/membership",
        );

        return response.data;
    },

    getTestimonials: async () => {
        const response = await api.get<ApiResponse<Testimonial[]>>(
            "/mock/testimonials",
        );

        return response.data;
    },

    getPartners: async () => {
        const response = await api.get<ApiResponse<Partner[]>>(
            "/mock/partners",
        );

        return response.data;
    },
};

export default api;