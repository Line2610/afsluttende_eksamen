"use client";
import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "CEO",
    image: "/assets/CEO.webp",
    description: "Leder med vision for digital transformation",
  },
  {
    id: 2,
    title: "Udvikling",
    image: "/assets/code.webp",
    description: "Teknologi der skaber resultater",
  },
  {
    id: 3,
    title: "Marketing",
    image: "/assets/Marketing.webp",
    description: "Strategier der driver vækst",
  },
  {
    id: 4,
    title: "Video",
    image: "/assets/video.webp",
    description: "Visuelt storytelling der engagerer",
  },
  {
    id: 5,
    title: "Social Media",
    image: "/assets/SOME.webp",
    description: "Community building og engagement",
  },
];

export default function Carosuel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = slides[activeSlide];

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
  };

  return (
    <section className="py-40 flex items-center justify-center">
      <div className="w-full mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black mb-12">Vi er et enageret team med ét mål. Din vækst.</h2>

        {/* Karusuel */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-10 mb-8 mx-auto relative max-w-4xl">
          <button type="button" onClick={goToPreviousSlide} aria-label="Forrige billede" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition hover:bg-white dark:bg-zinc-800 dark:text-white">
            <span className="text-2xl leading-none">‹</span>
          </button>

          <button type="button" onClick={goToNextSlide} aria-label="Næste billede" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition dark:bg-zinc-800 dark:text-white">
            <span className="text-2xl leading-none">›</span>
          </button>

          <div className="flex justify-center mb-8">
            <div className="relative w-80 h-80">
              <Image key={activeSlide} src={current.image} alt={current.title} fill className="object-cover rounded-lg" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">{current.title}</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">{current.description}</p>
        </div>

        {/* Navigationsprikker */}
        <div className="flex justify-center space-x-3 mb-8">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setActiveSlide(index)} className={`w-3 h-3 rounded-full transition ${activeSlide === index ? "bg-[#771041]" : "bg-zinc-300 dark:bg-zinc-600"}`} />
          ))}
        </div>

        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Kontakt os i dag</button>
      </div>
    </section>
  );
}
