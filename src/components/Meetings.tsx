import ContainerThirds from "@/components/ContainerThirds";

export default function Meetings() {
    return (
        <div className="flex flex-col justify-center items-center">
            <ContainerThirds title="Meetings & Events">
                <div>
                    <h4 className="text-xl text-altaDarkOrange mb-6">Seamless Events</h4>
                    <h5 className="text-lg mb-3">Conference Rooms</h5>
                    <p className="mb-8">
                        Our well-equipped conference rooms are designed to facilitate productivity and collaboration.
                        State-of-the-art audiovisual technology and customizable setups ensure a seamless experience for
                        your business meetings.
                    </p>
                    <h5 className="text-lg mb-3">Ballroom & Banquet Facilities</h5>
                    <p className="mb-10">
                        Celebrate life's milestones in style with our elegant ballroom and banquet facilities. Whether
                        it's a wedding reception or a gala event, our team will ensure that every detail is impeccably
                        executed.
                    </p>
                    <h5 className="text-lg mb-3">Event Planning Services</h5>
                    <p>
                        From concept to execution, our dedicated event planning team is at your service. We'll work
                        closely with you to tailor every aspect of your event, ensuring a memorable and stress-free
                        experience.
                    </p>
                </div>
            </ContainerThirds>
            <div className="w-2/3 mt-20 overflow-hidden" style={{height: '60vh'}}>
                <img src="/images/events.jpg" style={{width: '100%'}}/>
            </div>
        </div>
    )
}