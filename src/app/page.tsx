'use client'

import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import Story from "@/components/Story";
import Accommodations from "@/components/Accommodations";
import Dining from "@/components/Dining";
import Meetings from "@/components/Meetings";
import Wellness from "@/components/Wellness";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <main className="w-screen h-screen font-sans overflow-x-hidden">
            <Banner
                handleClick={() => router.push('/amenities')}
            />
            <Welcome/>
            <Story/>
            <Accommodations/>
            <div className="flex flex-col justify-center items-center">
                <Dining/>
                <Meetings/>
                <Wellness/>
            </div>
        </main>
    )
}
