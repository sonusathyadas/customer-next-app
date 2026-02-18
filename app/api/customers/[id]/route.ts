import { NextResponse } from "next/server";
import { Customer } from "../../../../models/customer";

// GET /api/customers/[id]
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {

    const id = (await params).id;
    const customer: Customer = {
        id: parseInt(id),
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA",
        createdAt: new Date("2024-01-01T10:00:00Z")
    };
    return NextResponse.json({ customer });
}