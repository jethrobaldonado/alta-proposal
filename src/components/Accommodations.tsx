export default function Accommodations() {
    return (
        <div className="flex py-16 bg-waves bg-no-repeat bg-bottom">
            <div className="w-1/2 px-6 flex justify-center">
                <img src="/images/sliders/slider-1.jpg" alt="About us" style={{height: '100%', width: '100%'}}/>
            </div>
            <div className="w-1/2 px-48 flex flex-col justify-center text-sm -z-10">
                <section className="text-altaGray">
                    <h6 className="text-gray-400 text-sm mb-2">Our Accommodations</h6>
                    <h3 className="font-serif text-4xl text-altaOrange mb-6">Luxurious Retreats: Unwind in Style at Alta
                        D’ Tagaytay</h3>
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
                        className="bg-altaBrownOrange hover:bg-opacity-75 text-white text-sm py-3 px-6 font-semibold mb-12"
                    >
                        Discover ↓
                    </button>
                </section>
            </div>
        </div>
    )
}