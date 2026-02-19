import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {

    const { pathname } = request.nextUrl;

    const token = request.cookies.get("token");
    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();

}

export const config = {
    matcher: ["/protected/:path*"],
};