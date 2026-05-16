"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Forside" },
  { href: "/ydelser", label: "ydelser" },
  { href: "/Om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="sticky top-4 bg-white/30 z-50 rounded-2xl shadow-lg backdrop-blur-md mt-4 mx-25">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-2 py-2 lg:px-8">
        {/* Logo til venstre */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[#001949] shrink-0">
          <img src="assets/avazura_logo.webp" alt="logo" className="h-22 w-15" />
          <span className="font-light tracking-[0.35em] uppercase">AVAZURA</span>
        </Link>

        {/* Navigation i midten */}
        <nav aria-label="Primær navigation" className="flex-1 flex items-center justify-center gap-15 text-lg font-medium text-black/80">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[#3A86FF]">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Knap til højre */}
        <div className="shrink-0">
          <button onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className="rounded-lg bg-[#3A86FF] px-6 py-2 text-lg font-medium text-white hover:bg-[#2563eb] transition-colors">
            {showTooltip ? "kontakt@avazura.dk" : "Kontakt os"}
          </button>
        </div>
      </div>
    </header>
  );
}
