"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

/*
  Kontakt side - klientkomponent
  - Bruger Image fra next/image med fill for baggrundsbillede
  - Formular er dynamisk, validerer lokalt og viser styled besked (success/error)
  - Ingen fetch; formdata logges i konsollen
*/

export default function Kontakt() {
  // Formular state
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  // Besked og type til styling af alert (success | error)
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Håndterer input changes generisk
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Håndterer submit: lokal validering, vis besked, nulstil form
  const handleSubmit = (e) => {
    e.preventDefault(); // forhindrer side reload

    // Simpel validering: kræv navn + email
    if (!form.name || !form.email) {
      setMessageType("error");
      setMessage("Udfyld venligst navn og email.");
      setTimeout(() => setMessage(""), 4000); // fjern besked efter 4s
      return;
    }

    // Simulerer succes (ingen netværkskald)
    setMessageType("success");
    setMessage("Tak for din besked! Vi kontakter dig snart.");
    console.log("Form data:", form); // til debug / videre behandling

    // Nulstil formularfelter
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });

    setTimeout(() => setMessage(""), 4000);
  };

  return (
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
          <div className="mt-10 rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Stillet besked: success eller error */}
              {message && (
                <div role="status" className={`mx-auto max-w-xl rounded-md px-4 py-3 text-sm font-medium shadow-sm ${messageType === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                  {message}
                </div>
              )}

              {/* Formularfelter */}
              <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Navn..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-semibold text-black placeholder:text-gray-700 outline-none" required />

              <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Virksomhed og CVR nummer..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-semibold text-black placeholder:text-gray-700 outline-none" />

              <div className="grid gap-5 md:grid-cols-2">
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Telefon nummer..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-semibold text-black placeholder:text-gray-700 outline-none" />

                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-semibold text-black placeholder:text-gray-700 outline-none" required />
              </div>

              <textarea name="message" value={form.message} onChange={handleChange} rows={8} placeholder="Kommentar..." className="w-full resize-none rounded-xl bg-white/80 px-5 py-4 font-semibold text-black placeholder:text-gray-700 outline-none" />

              <button type="submit" className="w-full cursor-pointer rounded-xl bg-[#3A86FF] py-4 text-lg font-medium text-white transition hover:bg-[#437cf0]">
                Send din besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
