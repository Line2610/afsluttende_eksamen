"use client";

import { FcGoogle } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const ADS = [
  {
    id: "google",
    logo: <FcGoogle size={30} />,
    title: "Google ads",
    bullets: ["Synlighed øverst i Google søgeresultat", "Målretning mod relevante søgeord", "Hurtige resultater og målbár performance", "Perfekt til leads, salg og bookings"],
    image: "/assets/google.webp",
  },
  {
    id: "youtube",
    logo: <FaYoutube size={30} className="text-red-500" />,
    title: "Youtube ads",
    bullets: ["Visuelle annoncer der fanger opmærksomhed", "Perfekt til brand og produktintro", "Målret via interesser og videoer", "Skalerbar til kampagner og konverteringer"],
    image: "/assets/youtube.webp",
  },
  {
    id: "meta",
    logo: <SiMeta size={30} className="text-blue-600" />,
    title: "Meta ads",
    bullets: ["Stærke målretningsmuligheder på sociale medier", "Visuelt format og karussel-annoncer", "Godt til både awareness og salg", "Integration med shop og kataloger"],
    image: "/assets/meta.webp",
  },
  {
    id: "tiktok",
    logo: <SiTiktok size={30} className="text-black" />,
    title: "Tiktok ads",
    bullets: ["Korte, engagerende videoer", "Hurtig viral potentiale", "Perfekt til unge målgrupper", "Kreative formats for høj rækkevidde"],
    image: "/assets/tiktok.webp",
  },
  {
    id: "linkedin",
    logo: <FaLinkedin size={30} className="text-blue-700" />,
    title: "Linkedin ads",
    bullets: ["B2B-fokuseret målretning", "Leadgen-formularer og content promotion", "Højere kvalitet i leads", "Velegnet til beslutningstagere og virksomheder"],
    image: "/assets/linkedin.webp",
  },
];

function Bullet({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#3A86FF] text-[#3A86FF]">✓</span>
      <span className="text-sm text-zinc-700">{text}</span>
    </li>
  );
}

export default function Ads() {
  const [active, setActive] = useState(0);
  const current = ADS[active];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <nav aria-label="Annonce-typer" className="mb-8 flex items-center gap-8 border-b border-zinc-200 pb-6">
        {ADS.map((ad, idx) => (
          <button key={ad.id} onClick={() => setActive(idx)} aria-selected={active === idx} className={`flex items-center gap-2 text-lg font-light transition ${active === idx ? "text-[#001949] border-b-2 border-[#3A86FF] pb-3" : "text-zinc-500 hover:text-[#3A86FF]"}`}>
            <div className="shrink-0">{ad.logo}</div>
            {ad.title}
          </button>
        ))}
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-light text-[#001949]">{current.title}</h2>
          <ul className="mt-8 flex flex-col gap-4">
            {current.bullets.map((b, i) => (
              <Bullet key={i} text={b} />
            ))}
          </ul>

          <div className="mt-15">
            <a href="#" className="inline-block rounded-full bg-[#3A86FF] px-6 py-3 text-white hover:bg-[#2563eb] transition">
              Se pakker
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-2xlp-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <Image src={current.image} alt={current.title} width={760} height={300} className="h-auto w-500px object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
