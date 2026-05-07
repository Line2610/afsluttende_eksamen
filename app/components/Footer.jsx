import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="relative overflow-hidden text-center h-[400px]">
        <Image src="/footer-baggrund.webp" alt="Footer baggrundsbillede" fill className="object-cover" priority />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 px-4">
          <h3 className="text-3xl text-white">Klar til at få flere kunder?</h3>
          <h4 className="mt-4 text-white max-w-xl">Få en gratis analyse af din hjemmeside og se dine største forbedringsmuligheder</h4>
          <button className="mt-8 bg-[#3A86FF] text-white py-2 px-4 rounded hover:bg-[#2a6ed0] cursor-pointer">Få gratis møde</button>
        </div>
      </div>

      <div className="bg-[#082247]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Venstre kolonne - kontakt + sociale medier */}
            <div>
              <h3 className="text-sm text-gray-200 mb-4">Avazura ApS</h3>
              <p className="text-sm text-gray-300">+45 42 83 90 13</p>
              <p className="mt-4 text-sm text-gray-300">
                Christianshavns Torv 6,
                <br />
                1410, København K,
                <br />
                Danmark
              </p>
              <p className="mt-4 text-sm text-gray-400">CVR: 44408562</p>

              <div className="mt-6 flex gap-4">
                {/* Instagram */}
                <a aria-label="Instagram" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {/* Facebook */}
                <a aria-label="Facebook" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v7h4v-7h3l1-4h-4V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a aria-label="LinkedIn" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-2-2 2 2 0 00-2 2v6h-4v-12h4v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </a>
                {/* YouTube */}
                <a aria-label="YouTube" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 8s-.2-1.4-.8-2a2.8 2.8 0 00-2-.8C17 5 12 5 12 5s-5 0-7.2.2a2.8 2.8 0 00-2 .8C2.2 6.6 2 8 2 8s-.2 1.8-.2 3.6V14c0 1.8.2 3.6.2 3.6s.2 1.4.8 2a2.8 2.8 0 002 .8C7 21 12 21 12 21s5 0 7.2-.2a2.8 2.8 0 002-.8c.6-.6.8-2 .8-2s.2-1.8.2-3.6V11.6C22.2 9.8 22 8 22 8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 14l5-3-5-3v6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Midt-kolonne - hovedlinks */}
            <div className="flex justify-center">
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <a href="#" className="hover:underline">
                    Forside
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wordpress
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Videoredigering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Om os
                  </a>
                </li>
              </ul>
            </div>

            {/* Højre kolonne - juridiske links */}
            <div className="flex justify-end">
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <a href="#" className="hover:underline">
                    Handelsbetingelser
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privatlivspolitik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Fortrydelse, levering &amp; returnering
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* badges + big logo row */}
          <div className="mt-12 flex flex-col-reverse md:flex-row items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* small badges - use real images in /public/logos */}
              <div className="w-12 h-8 rounded flex items-center justify-center">
                <Image src="/certified.webp" alt="Verified" width={200} height={50} />
              </div>
              <div className="w-12 h-8 rounded flex items-center justify-center">
                <Image src="/b-mærke.webp" alt="B-mærket" width={400} height={100} />
              </div>
            </div>

            <div className="text-right">
              {/* logo - replace with real svg in /public */}
              <div className="w-48 opacity-90">
                <Image src="/logo.webp" alt="Avazura" width={240} height={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
