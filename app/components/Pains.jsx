import { LuClock4 } from "react-icons/lu";
import { RiMegaphoneFill } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { BsQuestionLg } from "react-icons/bs";

const pains = [
  {
    title: "Langsom hjemmeside",
    description: "Hver ekstra sekund koster dig kunder.",
    icon: "clock",
  },
  {
    title: "Ineffektive annoncer",
    description: "Du betaler for trafik der ikke konverterer.",
    icon: "megaphone",
  },
  {
    title: "Mangler overblik",
    description: "For mange leverandører og ingen helhed.",
    icon: "grid",
  },
  {
    title: "Ingen klar strategi",
    description: "Du ved ikke, hvad der egentlig virker.",
    icon: "question",
  },
];

function PainIcon({ type }) {
  const iconClass = "relative z-20 h-7 w-7 text-[#3A86FF]";

  if (type === "clock") return <LuClock4 className={iconClass} aria-hidden="true" />;
  if (type === "megaphone") return <RiMegaphoneFill className={iconClass} aria-hidden="true" />;
  if (type === "grid") return <IoGridOutline className={iconClass} aria-hidden="true" />;
  return <BsQuestionLg className={iconClass} aria-hidden="true" />;
}

export default function Pains() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight text-black md:text-4xl">Små problemer. Store konsekvenser</h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
        {pains.map((pain) => (
          <article key={pain.title} className="flex items-start gap-5">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center mt-4 rounded-full bg-[#eef1ff] shadow-sm md:h-16 md:w-16">
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-[#F3F4FD]" />
              <PainIcon type={pain.icon} />
            </div>

            <div className="pt-2">
              <h4 className="text-lg font-bold tracking-tight text-[#8a1650] md:text-[1.1rem]">{pain.title}</h4>
              <p className="mt-5 max-w-xs font-semibold text-sm leading-snug text-black md:text-[0.9rem]">{pain.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
