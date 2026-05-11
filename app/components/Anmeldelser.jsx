"use client";

import { useMemo, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const reviews = [
  {
    title: "Hvad vores kunder siger om os",
    description:
      "Vi har haft et helt fantastisk samarbejde med Avazura. Vi stod i en situation, hvor vi skulle have lanceret en hjemmeside hurtigt og med et ret stort tidspres, og her leverede de virkelig over alle forventninger.De fik ikke bare udviklet en virkelig flot hjemmeside med ekstrem høj performance — de hjalp også med billeder og video, så hele løsningen fremstod professionel og gennemført fra start. Deres hosting er samtidig utroligt hurtig, noget vi ærligt talt ikke har oplevet før, og prisen er fair og konkurrencedygtig med andre hostingudbydere, som slet ikke leverer samme performance.Som nystartet virksomhed har deres strategiske rådgivning været guld værd. De har hjulpet os med at få godt fat i markedet, og med deres hjælp til Google Ads og Meta Ads har vi fået en stabil strøm af kunder — faktisk så mange, at vi har kunnet opfylde vores drøm om at købe et fedt kontor til virksomheden.Det, der virkelig adskiller dem fra andre, er deres fokus på vores succes frem for deres egen bundlinje. De står altid klar med gode svar, sparring og en hjælpende hånd — der er simpelthen ingen smalle steder hos dem.Uden dem havde vi ikke været på det niveau, vi er i dag. Vi er dybt taknemmelige for alt det, de har gjort for os.",
    author: "Flyttefokus Admin",
    rating: 5,
  },

  {
    description: "Jeg har haft en virkelig god oplevelse med dem! De er søde til at hjælpe, hurtige og effektive, og så er deres in-house hosting nok det bedste og hurtigste jeg har oplevet. Ud over alt det tekniske, har de også været rigtig gode til at producere diverse medier som billeder og videoer.",
    author: "Mikkel Jensen",
    rating: 5,
  },

  {
    description: "Avazura har gjort en mærkbar forskel for vores forretning. De har optimeret vores hjemmeside markant, så den nu er både hurtigere, mere professionel og langt bedre til at konvertere besøgende til kunder.Vi har fået hurtig og kompetent hjælp, og de er virkelig gode til at forklare, hvad der virker – og hvorfor. Det har givet os en langt bedre forståelse for online salg og hjulpet os til at sælge mere.Vi kan varmt kan anbefale Avazura til andre virksomheder, der vil løfte deres online tilstedeværelse og omsætning.",
    author: "Mens vi strikker",
    rating: 5,
  },

  {
    description: "Vi driver en kombineret fysisk og online forretning hvor vi det sidste år har outsourcet en stor del af vores markedsføring til Avazura. De får 5 stjerner fordi de har været dygtige til at kombinere deres viden om markedsføring med den viden som er specifik for vores forretning. At mestrer dette er en forudsætning for at skabe ekstraordinære resultater og I modsætning til andre markertings-virksomheder har Avazura vist en stor vilje til at forstå vores forretning. Det har givet gode resultater og vi er glade for at forsætte samarbejdet med dem.",
    author: "Alexander Kaarfast",
    rating: 5,
  },

  {
    description: "Jeg har haft en rigtig god oplevelse med Avazura. Deres videoredigering med visuelle effekter er super skarp og kreativ. Deres digitale markedsføring rammer plet, og min hjemmeside kører hurtigt og stabilt takket være deres performance webhosting.Klart en virksomhed, jeg vil anbefale.",
    author: "Peter Thunholm",
    rating: 5,
  },

  {
    description: "Professionelt og kvalitetsbevidst samarbejdeJeg har haft fornøjelsen af at samarbejde med Avazura i forbindelse med udarbejdelsen af min hjemmeside, og jeg er yderst tilfreds med både proces og resultat. Virksomheden udviste stor professionalisme, lydhørhed over for mine ønsker samt en stærk æstetisk og teknisk forståelse.Kommunikationen var struktureret og effektiv, og projektet blev løst med høj kvalitet og inden for aftalte rammer. Hjemmesiden fremstår nu som en visuel og funktionel helhed, der understøtter mit faglige virke på bedste vis.Jeg kan derfor give Avazura mine varmeste anbefalinger.",
    author: "Zeynep C, Mindyrebareverden",
    rating: 5,
  },

  {
    description: "Jeg har fået en super service af Oliver.Vi købte en ny hjemmeside og fik brugt 20.000 kroner på 6 mdr til marketing.Det har boostet vores online omsætning, og vi er klar til investere 100.000 i det kommende år med Oliver.Tak igen for den gode behandling og stabilt samarbejde.",
    author: "Usman Khan",
    rating: 5,
  },
];

function StarIcon() {
  return <IoStarSharp className="h-8 w-8 text-[#f6ec68]" aria-hidden="true" />;
}

function clampText(text, maxLength = 260) {
  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export default function Anmeldelser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const activeReview = reviews[activeIndex];

  const displayedDescription = useMemo(() => {
    return expanded ? activeReview.description : clampText(activeReview.description, 260);
  }, [activeReview.description, expanded]);

  const goToPrevious = () => {
    setExpanded(false);
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setExpanded(false);
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="bg-[#041526] px-6 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
        <div className="max-w-xl">
          <h2 className="bg-linear-to-r from-[#b6a9ff] via-[#7aa5ff] to-[#2f7bff] bg-clip-text text-5xl font-light leading-tight text-transparent md:text-6xl lg:text-8xl">{reviews[0].title}</h2>
          <div className="mt-10 h-1 w-72 bg-white/90" />
        </div>

        <div className="relative rounded-2xl bg-white/16 px-16 py-8 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10 md:px-20 md:py-10 lg:min-h-110">
          <button type="button" onClick={goToPrevious} aria-label="Forrige anmeldelse" className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 text-white/90 transition hover:text-white">
            <FaArrowLeft className="h-7 w-7" />
          </button>

          <div className="flex justify-start gap-2 text-[#9fcfff] md:gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>

          <button type="button" onClick={goToNext} aria-label="Næste anmeldelse" className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-white/90 transition hover:text-white">
            <FaArrowRight className="h-7 w-7" />
          </button>

          <div className="mt-10 space-y-8 text-white/90">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
                {activeIndex + 1} / {reviews.length}
              </p>

              <p className="max-w-3xl text-base font-light leading-relaxed text-white/90 md:text-lg lg:text-xl">{displayedDescription}</p>
            </div>

            <h4 className="text-[1.2rem] font-medium text-white/95">- {activeReview.author}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
