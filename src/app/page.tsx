'use client'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
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
        <main className="w-screen h-screen font-sans overflow-x-hidden">
            <Parallax ref={parallax} pages={8}>
                <ParallaxLayer
                    offset={0}
                >
                    <Banner
                        handleClick={() => router.push('/amenities')}
                    />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.8}
                >
                    <Welcome/>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                >
                    <Story/>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={0.4}
                >
                    <Accommodations/>
                </ParallaxLayer>
                <ParallaxLayer
                    speed={1}
                    offset={4}
                >
                        <Dining/>
                </ParallaxLayer>
                <ParallaxLayer
                    speed={1}
                    offset={5}
                >
                    <Meetings/>
                </ParallaxLayer>
                <ParallaxLayer
                    speed={0.4}
                    offset={6}
                >
                    <Wellness/>
                </ParallaxLayer>
            </Parallax>


        </main>
    )
}
