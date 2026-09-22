import { NextResponse } from "next/server";
import { mockData } from "@/data/mockData";
//hello
export async function GET() {
    return NextResponse.json({
        success: true,
        message: "Careers retrieved successfully.",
        data: mockData.careers,
    });
}
