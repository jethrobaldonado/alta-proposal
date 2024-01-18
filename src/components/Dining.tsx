import ContainerThirds from "@/components/ContainerThirds";

export default function Dining() {
    return (
        <div className="flex flex-col justify-center items-center">
            <ContainerThirds title="Dining">
                <div>
                    <h4 className="text-xl text-altaDarkOrange mb-6">Culinary Excellence</h4>
                    <p className="mb-10">
                        Indulge your palate with a culinary journey at [Restaurant Name], where every dish is a masterpiece
                        crafted by our talented chefs. Our dining experiences cater to diverse tastes and preferences,
                        ensuring a feast for all the senses.
                    </p>
                    <h5 className="text-lg mb-3">In-Room Dining</h5>
                    <p className="mb-8">
                        For the ultimate in convenience, enjoy our delectable offerings in the comfort of your room. Our
                        in-room dining menu features a curated selection of dishes available 24/7, ensuring that your
                        cravings are satisfied at any hour.
                    </p>
                    <h5 className="text-lg mb-3">Private Events</h5>
                    <p>
                        Elevate your special occasions with our catering services. Whether it's an intimate gathering or a
                        grand celebration, our culinary team will create a bespoke menu that exceeds your expectations.
                    </p>
                </div>
            </ContainerThirds>
            <div className="w-2/3 mt-20 overflow-hidden" style={{ height: '60vh' }}>
                <img src="/images/dining.jpg" style={{ width: '100%'}}/>
            </div>
        </div>
    )
}