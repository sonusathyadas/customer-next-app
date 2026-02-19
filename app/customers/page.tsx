"use client";

import { Customer } from "@/models/customer";
import { useRouter } from "next/navigation";
import  useSWR  from "swr";

async function fetcher(url:string) {
    try {
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching customers:", error);
        return [];
    }
}

export default function CustomersPage() {
    const router = useRouter();
    const { data, error, isLoading } = useSWR("/api/customers", fetcher);

    if(isLoading){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-gray-500 text-sm">Loading customers...</div>
            </div>
        );
    }

    if(error){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-red-500 text-sm">Failed to load customers. Please try again later.</div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
                    <p className="text-gray-500 mt-1">A list of all registered customers.</p>
                </div>

                <div>
                    <button className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                        onClick={() => router.push("/customers/add")}
                    >
                        Add Customer
                    </button>
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                    {/* Scrollable wrapper for responsiveness */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">

                            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600">
                                <tr>
                                    {["Name", "Email", "Phone", "Address"].map((heading) => (
                                        <th
                                            key={heading}
                                            className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-widest"
                                        >
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {data.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="px-6 py-12 text-center text-gray-400 text-sm"
                                        >
                                            No customers found.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((customer: Customer, index: number) => (
                                        <tr
                                            key={customer.id}
                                            className={`transition-colors duration-150 hover:bg-indigo-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                }`}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    {/* Avatar placeholder */}
                                                    <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                        {customer.name?.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        {customer.name}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">

                                                <a href={`mailto:${customer.email}`}
                                                    className="text-sm text-indigo-600 hover:underline"
                                                >
                                                    {customer.email}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {customer.phone}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                                {customer.address}
                                            </td>

                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    {data.length > 0 && (
                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-400">
                            Showing {data.length} customer{data.length !== 1 ? "s" : ""}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}