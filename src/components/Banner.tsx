import Image from "next/image";

export default function Banner({ handleClick }: any) {
    return (
        <div className="flex flex-col justify-center items-center bg-hero-image h-screen w-screen bg-cover text-white">
            <div className="flex flex-col justify-center items-center w-1/3">
                <Image src="/images/mountain.svg" alt="Mountain Logo" width="300" height="80" className="mb-1"/>
                <h1 className="font-serif text-7xl text-center mb-3">Alta D’ Tagaytay</h1>
                <div className="text-center font-sans mb-3">
                    Discover unparalleled luxury and comfort at <b>Alta D’ Tagaytay</b>, where every moment is crafted
                    to make your stay truly memorable.
                </div>
                <div>
                    <button
                        className="flex justify-center items-center bg-opacity-5 hover:bg-opacity-45 bg-white border-white border border-solid py-2 px-4 rounded-full shadow"
                        onClick={handleClick}
                    >
                        <Image src="/images/360-icon-2.png" alt="360" width={18} height={18} className="mr-3"/>
                        Virtual Tour
                    </button>
                </div>
            </div>
        </div>
    );
}