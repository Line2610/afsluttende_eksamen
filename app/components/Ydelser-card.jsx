const services = [
  {
    title: "Online marketing",
    description: "Målrettet markedsføring, der skaber vækst og øger din synlighed",
    items: [
      {
        title: "Videoredigering",
        description: "Professionelle videoer, der fanger",
        href: "/videoredigering",
      },
      {
        title: "Markedsføring",
        description: "Strategisk markedsføring",
        href: "/markedsføring",
      },
      {
        title: "Søgemaskineoptimering",
        description: "Bedre placeringer. Mere organisk trafik",
        href: "/søgemaskineoptimering",
      },
    ],
  },
  {
    title: "Digitale løsninger",
    description: "Stærke websites og tekniske løsninger, der skaber resultater",
    items: [
      {
        title: "Hosting",
        description: "Hurtig, sikker og stabil hosting",
        href: "/hosting",
      },
      {
        title: "Software",
        description: "Skræddersyet software til din forretning",
        href: "/software",
      },
      {
        title: "WordPress",
        description: "Fleksible løsninger i verdens mest benyttede CMS",
        href: "/wordpress",
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function YdelserCard() {
  return (
    <section aria-label="Ydelser" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/5 md:p-8">
            <header className="px-1 pb-8 pt-2 md:px-6">
              <h3 className="text-xl font-light tracking-tight text-[#001949] md:text-[2rem]">{service.title}</h3>
              <p className="mt-3 max-w-md text-base leading-snug text-zinc-700 md:text-lg">{service.description}</p>
            </header>

            <div className="border-t border-zinc-200">
              {service.items.map((item, index) => (
                <div key={item.title} className={`flex items-center justify-between gap-6 px-1 py-5 md:px-6 ${index !== service.items.length - 1 ? "border-b border-zinc-200" : ""}`}>
                  <div className="min-w-0">
                    <a href={item.href} className="block text-xl font-light text-zinc-800 hover:text-[#3A86FF] transition md:text-2xl">
                      {item.title}
                    </a>
                    <p className="mt-1 max-w-lg text-sm leading-snug text-zinc-600 md:text-base">{item.description}</p>
                  </div>

                  <a href={item.href} aria-label={item.title} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[#3A86FF] transition hover:bg-zinc-200">
                    <ArrowIcon />
                  </a>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
