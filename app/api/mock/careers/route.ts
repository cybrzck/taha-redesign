import { NextResponse } from "next/server";
import { mockData } from "@/data/mockData";

export async function GET() {
    return NextResponse.json({
        success: true,
        message: "Careers retrieved successfully.",
        data: mockData.careers,
    });
}