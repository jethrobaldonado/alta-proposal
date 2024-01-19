'use client'
import React, {useRef} from 'react'
import {Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax'
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
    const parallax = useRef<IParallax>(null!);

    return (
        <main className="w-screen h-dvh font-sans overflow-x-hidden">
            <Banner
                handleClick={() => router.push('/amenities')}
            />
            <Welcome/>
            <Story/>
            <Accommodations/>
            <Dining/>
            <Meetings/>
            <Wellness/>
        </main>
    )
}
