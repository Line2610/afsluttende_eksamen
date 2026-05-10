import Hero from "../components/om-os_componenter/Hero";
import Boxsection from "../components/om-os_componenter/Bluebox";
import WhyChoose from "../components/om-os_componenter/Whychoose";
import Bgbox from "../components/om-os_componenter/Baggrundbox";
import Carosuel from "../components/om-os_componenter/Carosuel";

export default function OmOsPage() {
  return (
    <main>
      <Hero />
      <Boxsection />
      <WhyChoose />
      <Bgbox />
      <Carosuel />
    </main>
  );
}
