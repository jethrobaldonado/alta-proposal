import Banner from "@/components/Banner";
import Welcome from "@/components/Welcome";
import Story from "@/components/Story";
import Accomodations from "@/components/Accomodations";
import Dining from "@/components/Dining";
import Meetings from "@/components/Meetings";
import Wellness from "@/components/Wellness";
import BooknowSection from "@/components/BooknowSection";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="w-screen h-screen overflow-hidden font-sans">
          <Banner />
          <Welcome />
          <Story />
          <Accomodations />
          <Dining />
          <Meetings />
          <Wellness />
          <BooknowSection />
          <Map />
          <Footer />
      </main>
  )
}
