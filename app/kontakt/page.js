"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Formular from "./Formular";
import Footer from "../components/Footer";

export default function Kontakt() {
  return (
    <>
      <section className="relative text-white">
        {/* Baggrundsbillede */}
        <div className="absolute inset-0">
          <Image src={"/assets/kontakt-baggrund.webp"} alt="Kontakt os baggrundsbillede" fill className="object-cover" priority />

          {/* Farveoverlay over billede */}
          <div className="absolute inset-0 z-10 bg-black/40" />
        </div>

        {/* Indhold ovenpå billedet (z-20) */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 pb-16 pt-32 md:pt-36">
          <h1 className="text-center text-4xl font-light mb-14 md:text-6xl">Kontakt os</h1>

          <div className="grid items-start gap-14 lg:grid-cols-2">
            {/* Venstre kolonne: introduktion + kontaktinfo */}
            <div className="mt-10 space-y-10 pt-4">
              <div className="max-w-xl text-sm leading-relaxed text-white/90 md:text-[21px]">
                <p>Hos Avazura brænder vi for at skabe enestående resultater og bygge stærke, langvarige relationer med jer, der gør en forskel for jeres forretning.</p>

                <p className="mt-8">
                  Har I spørgsmål eller brug for rådgivning?
                  <br />
                  Kontakt os i dag – vi er klar til at hjælpe jer!
                </p>
              </div>

              {/* Kontaktoplysninger (ikon + tekst) */}
              <div className="space-y-6 text-lg font-bold text-[#bd0a6d]">
                <div className="flex items-center gap-4">
                  {/* telefon ikon */}
                  <FaPhoneAlt />
                  <a href="tel:+4542839013" className="hover:underline">
                    +45 42 83 90 13
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  {/* email ikon */}
                  <IoMdMail />
                  <a href="mailto:kontakt@avazura.com" className="hover:underline">
                    kontakt@avazura.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  {/* adresse ikon */}
                  <FaLocationDot />
                  <address className="not-italic">Christianshavns Torv 6, 1410 København K</address>
                </div>
              </div>
            </div>

            {/* Højre kolonne: formular */}
            <Formular />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
