import ContainerThirds from "@/components/ContainerThirds";

export default function Wellness() {
    return (
        <div className="mb-20 flex flex-col justify-center items-center">
            <ContainerThirds title="Wellness & Recreation">
                <div>
                    <h4 className="text-xl text-altaDarkOrange mb-6">Revitalize Your Senses</h4>
                    <p className="mb-10">
                        Escape the demands of daily life and rejuvenate your mind, body, and spirit at our wellness and recreation facilities. [Your Hotel Name] offers a range of options to help you achieve balance and well-being.
                    </p>
                    <h5 className="text-lg mb-3">Spa & Wellness Center</h5>
                    <p className="mb-8">
                        Pamper yourself with indulgent spa treatments designed to relax and rejuvenate. Our skilled therapists and tranquil ambiance create an oasis of serenity, allowing you to unwind and restore.
                    </p>
                    <h5 className="text-lg mb-3">Fitness Center</h5>
                    <p className="mb-10">
                        Maintain your fitness routine in our state-of-the-art fitness center, equipped with the latest exercise equipment. Our fitness facilities are designed to cater to all levels, ensuring a rewarding workout experience.
                    </p>
                    <h5 className="text-lg mb-3">Swimming Pool</h5>
                    <p>
                        Take a refreshing dip in our sparkling swimming pool, surrounded by lush landscapes. Whether it&apos;s a leisurely swim or a moment of relaxation by the poolside, our aquatic oasis provides a perfect escape.
                    </p>
                </div>
            </ContainerThirds>
            <div className="w-2/3 mt-20 overflow-hidden" style={{height: '60vh'}}>
                <img src="/images/wellness.jpg" style={{width: '100%'}}/>
            </div>
        </div>
    )
}