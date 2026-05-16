import B2b from "./components/B2b";
import Footer from "./components/Footer";
import HeroForside from "./components/Hero-forside";
import Vaerdier from "./components/Vaerdier";
import Pains from "./components/Pains";
import Anmeldelser from "./components/Anmeldelser";
import YdelserForside from "./components/Ydelser-forside";

export default function Home() {
  return (
    <main>
      <HeroForside />
      <Pains />
      <h2 className="text-center text-4xl mt-20 mb-20 text-gray-950">Hvad har du brug for hjælp til?</h2>
      <YdelserForside />
      <Vaerdier />
      <B2b />
      <Anmeldelser />
      <Footer />
    </main>
  );
}
