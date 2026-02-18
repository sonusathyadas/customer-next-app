
import { db } from "../lib/db";

export async function getCustomers() {
    return await db.customer.findMany({
        include: { loans: true },
    });
}

export async function getCustomerById(id: string) {
    return await db.customer.findUnique({
        where: { id },
        include: { loans: true },
    });
}

export async function createCustomer(data: {
    name: string;
    email: string;
    phone: string;
    address?: string;
    }) {
    return await db.customer.create({ data });
}
