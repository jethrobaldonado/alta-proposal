export default function Story() {
    const settings = {};
    const images = [
        {
            original: '/images/sliders/slider-1.jpg',
            thumbnail: '/images/sliders/slider-1.jpg',
        },
        {
            original: '/images/sliders/slider-2.jpg',
            thumbnail: '/images/sliders/slider-2.jpg',
        },
        {
            original: '/images/sliders/slider-3.jpg',
            thumbnail: '/images/sliders/slider-3.jpg',
        },
        {
            original: '/images/sliders/slider-4.jpg',
            thumbnail: '/images/sliders/slider-4.jpg',
        },
        {
            original: '/images/sliders/slider-5.jpg',
            thumbnail: '/images/sliders/slider-5.jpg',
        },
    ];

    return (
        <div className="flex">
            <div className="w-1/2 bg-altaDarkOrange h-screen text-white px-32 flex flex-col justify-center text-sm bg-waves bg-no-repeat bg-left-bottom">
                <h6 className="text-gray-400 text-sm mb-2">Alta D’ Tagaytay</h6>
                <h3 className="font-serif text-4xl mb-6">Our Story</h3>
                <p className="mb-10">
                    Established in [Year], [Your Hotel Name] has been a beacon of hospitality in [City/Area]. Our
                    journey is rooted in a passion for providing exceptional service and creating a welcoming space for
                    travelers from around the world.
                </p>
                <h4 className="text-xl font-semibold mb-4">Awards and Accolades</h4>
                <p className="mb-6">
                    [Your Hotel Name] has proudly received [XYZ Awards] for excellence in hospitality. These accolades
                    reflect our unwavering commitment to delivering a world-class experience to our guests.
                </p>
                <p className="mb-12">
                    Discover the [Your Hotel Name] difference – where every stay is not just a stay but a remarkable
                    journey.
                </p>
                <button
                    className="text-altaDarkOrange bg-white hover:bg-opacity-75 text-sm py-3 px-6 font-semibold mb-12 w-1/3"
                >
                    Learn More →
                </button>
            </div>
            <div className="w-1/2 h-screen">
                <img src="/images/sliders/slider-1.jpg" style={{ height: '100%', width: 'auto'}}/>
            </div>
        </div>
    );
}