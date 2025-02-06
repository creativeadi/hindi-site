import End from "@/components/End";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Teams from "@/components/Teams";
import WebTeam from "@/components/WebTeam";
import EventPage from "@/components/eventsection";


export default function Home() {
  return (
    <>
    <section>
    <div>
      <EventPage />
      </div>
      </section>
      <Photo />
      <div>
        <Teams />
      </div>
      <div>
        <End />
      </div>
      <div>
        <WebTeam />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
