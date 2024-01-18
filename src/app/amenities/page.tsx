'use client';
import {WifiIcon} from "@heroicons/react/20/solid";
import {CheckIcon, GlobeAltIcon, TvIcon, ViewfinderCircleIcon} from "@heroicons/react/16/solid";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <main className="w-screen h-screen font-sans overflow-hidden">
            <div className="flex">
                <div className="w-1/2 px-6">
                    <img src="/images/sliders/slider-1.jpg" alt="About us" style={{height: '100%', width: '100%'}}/>
                </div>
                <div className="w-1/2 px-48 flex flex-col justify-center text-sm">
                    <section className="text-altaGray">
                        <h3 className="font-serif text-4xl text-altaOrange mb-6">First Hotel Room</h3>
                        <p className="mb-4">
                            At Alta D’ Tagaytay, we pride ourselves on providing a unique and personalized
                            experience
                            for
                            our guests.
                        </p>
                        <div className="mb-16">
                            <h4>What we offer</h4>
                            <ul className="pl-4 mt-4">
                                <li className="mb-2 flex">
                                    <CheckIcon className="h-6 w-6 text-altaDarkOrange mr-4"/>
                                    King size bed
                                </li>
                                <li className="mb-2 flex">
                                    <CheckIcon className="h-6 w-6 text-altaDarkOrange mr-4"/>
                                    Free Breakfast
                                </li>
                                <li className="mb-2 flex">
                                    <TvIcon className="h-6 w-6 text-altaDarkOrange mr-4"/>
                                    TV with internet connectivity
                                </li>
                                <li className="mb-2 flex">
                                    <CheckIcon className="h-6 w-6 text-altaDarkOrange mr-4"/>
                                    Air conditioning
                                </li>
                                <li className="mb-2 flex">
                                    <WifiIcon className="h-6 w-6 text-altaDarkOrange mr-4"/>
                                    Wifi anywhere
                                </li>
                            </ul>
                        </div>
                        <button
                            className="bg-altaBrownOrange hover:bg-opacity-65 text-white text-sm py-3 px-6 font-semibold mb-12"
                            onClick={() => router.push('/amenities/view')}
                        >
                            Preview
                        </button>
                    </section>
                </div>
            </div>
        </main>
    )
}
