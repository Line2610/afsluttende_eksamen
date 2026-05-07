"use client";

import { useState } from "react";

export default function Formular() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setMessageType("error");
      setMessage("Udfyld venligst navn og email.");
      setTimeout(() => setMessage(""), 4000);
      return;
    }

    setMessageType("success");
    setMessage("Tak for din besked! Vi kontakter dig snart.");
    console.log("Form data:", form);

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
    <div className="mt-10 rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/*  besked: success eller error */}
        {message && (
          <div role="status" className={`mx-auto max-w-xl rounded-md px-4 py-3 text-sm font-medium shadow-sm ${messageType === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
            {message}
          </div>
        )}

        {/* Formularfelter */}
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Navn..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-medium text-black placeholder:text-gray-700 outline-none" required />

        <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Virksomhed og CVR nummer..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-medium text-black placeholder:text-gray-700 outline-none" />

        <div className="grid gap-5 md:grid-cols-2">
          <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Telefon nummer..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-medium text-black placeholder:text-gray-700 outline-none" />

          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email..." className="w-full rounded-xl bg-white/80 px-5 py-4 font-medium text-black placeholder:text-gray-700 outline-none" required />
        </div>

        <textarea name="message" value={form.message} onChange={handleChange} rows={8} placeholder="Kommentar..." className="w-full resize-none rounded-xl bg-white/80 px-5 py-4 font-medium text-black placeholder:text-gray-700 outline-none" />

        <button type="submit" className="w-full cursor-pointer rounded-xl bg-[#3A86FF] py-4 text-lg font-medium text-white transition hover:bg-[#437cf0]">
          Send din besked
        </button>
      </form>
    </div>
  );
}
