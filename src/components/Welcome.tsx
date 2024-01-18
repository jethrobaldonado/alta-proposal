import Image from "next/image";

export default function Welcome() {
    return (
        <div className="flex py-16">
            <div className="w-1/2 px-32 flex flex-col justify-center text-sm bg-about-text bg-no-repeat bg-left-bottom">
                <section className="text-altaGray">
                    <h6 className="text-gray-400 text-sm mb-2">About Us</h6>
                    <h3 className="font-serif text-4xl text-altaOrange mb-6">Welcome to Alta D’ Tagaytay</h3>
                    <p className="mb-4">
                        Discover unparalleled luxury and comfort at Alta D’ Tagaytay, where every moment is crafted to
                        make
                        your stay truly memorable. Nestled in the heart of Tagaytay, our hotel combines modern
                        sophistication with warm hospitality, creating an oasis for both business and leisure travelers.
                    </p>
                    <p className="mb-16">
                        At Alta D’ Tagaytay, we pride ourselves on providing a unique and personalized experience for
                        our guests.
                    </p>
                    <button
                        className="bg-altaBrightOrange hover:bg-opacity-75 text-white text-sm py-3 px-6 font-semibold mb-12">Book
                        Now →
                    </button>
                </section>
                <section
                    className="font-serif text-altaDarkOrange italic text-4xl w-3/4 px-4 ml-6 border-l-4 border-altaLightOrange">
                    “Where business works & leisure stays”
                </section>
            </div>
            <div className="w-1/2 p-4">
                <img src="/images/welcome-image.png" alt="About us" style={{height: '100%', width: 'auto'}}/>
            </div>
        </div>
    );
}