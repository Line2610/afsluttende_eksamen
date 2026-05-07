import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="relative overflow-hidden text-center h-100">
        <Image src="/assets/footer-baggrund.webp" alt="Footer baggrundsbillede" fill className="object-cover" priority />

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
                  <FaInstagram />
                </a>

                {/* Facebook */}
                <a aria-label="Facebook" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <FaFacebook />
                </a>

                {/* LinkedIn */}
                <a aria-label="LinkedIn" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <FaLinkedin />
                </a>

                {/* YouTube */}
                <a aria-label="YouTube" href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                  <FaYoutube />
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
              <div className="w-35 h-15 rounded flex items-center justify-center">
                <Image src="/certified.webp" alt="Verified" width={200} height={50} />
              </div>
              <div className="w-35 h-15 rounded flex items-center justify-center">
                <Image src="/assets/b-mærke.webp" alt="B-mærket" width={400} height={100} />
              </div>
            </div>

            <div className="text-right">
              {/* logo - replace with real svg in /public */}
              <div className="w-58 opacity-90">
                <Image src="/assets/logo.webp" alt="Avazura" width={240} height={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
