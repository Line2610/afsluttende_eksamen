import Footer from "./components/Footer";
import HeroForside from "./components/Hero-forside";
import YdelserCard from "./components/Ydelser-card";

export default function Home() {
  return (
    <main>
      <HeroForside />
      <h2 className="text-center text-4xl mt-20 mb-20 text-gray-950">Hvad har du brug for hjælp til?</h2>
      <YdelserCard />
      <Footer />
    </main>
  );
}
