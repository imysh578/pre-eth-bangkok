import React from "react";
import Link from "next/link";
import ClientMap from "./components/ClientMap"; // ClientMap 불러오기

export default function Home() {
    return (
        <div>
            <ClientMap/>

            <Link href="/">
                <div
                    className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <span>Back to main Page</span>
                </div>
            </Link>
        </div>

    );
}
