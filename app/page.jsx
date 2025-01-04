import End from "@/components/End";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Teams from "@/components/Teams";
import WebTeam from "@/components/WebTeam";


export default function Home() {
  return (
    <>
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
