import Image from "next/image";

export default function Traditionel() {
  const TRADITIONELLE = [
    {
      id: "Visitkort",
      title: "Visitkort",
      bullets: ["Professionelt og eksklusivt design", "Tilpasset jeres brand og identitet", "Flere designforslag inkluderet"],
      image: "/assets/visitkort.webp",
    },
    {
      id: "Posters/plakater",
      title: "Posters/plakater",
      bullets: ["Fanger opmærksomhed", "Stærk visuelt udtryk", "Tilpasset din målgruppe"],
      image: "/assets/poster.png",
    },
    {
      id: "Brochurer/flyers",
      title: "Brochurer/flyers",
      bullets: ["Klar og overskuelig kommunikation", "Professionelt markedsføringsmateriale", "Design der engagerer målgruppen"],
      image: "/assets/brochurer.webp",
    },
    {
      id: "Menukort",
      title: "Menukort",
      bullets: ["Elegant og æstetisk layout", "Nem og overskuelig læseoplevelse", "Matcher restaurantens visuelle stil"],
      image: "/assets/menukort.webp",
    },
    {
      id: "Diverse",
      title: "Diverse",
      bullets: ["Skræddersyede tryksager", "Konsistent visuel identitet", "Løsninger til både branding og events"],
      image: "/assets/diverse.webp",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 mt-15 mb-20">
      <h2 className="text-3xl font-normal text-[#001949] text-center">Traditionel markedsføring</h2>
      <div className="flex flex-col gap-16 mt-20">
        {TRADITIONELLE.map(({ id, title, bullets, image }) => (
          <div key={id} className="flex flex-col lg:flex-row items-stretch gap-10 rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
            <div className="flex-1 lg:max-w-2xl">
              <h3 className="text-3xl font-light text-[#001949] mb-6">{title}</h3>
              <ul className="flex flex-col gap-4">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 mt-5">
                    <span className="text-black">•</span>
                    <span className="text-md text-zinc-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end lg:w-137.5">
              <div className="w-full max-w-105 overflow-hidden rounded-2xl h-80">
                <Image src={image} alt={title} width={300} height={300} className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
