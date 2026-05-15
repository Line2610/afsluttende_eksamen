"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

export function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center cursor-pointer justify-between px-6 py-4 bg-white hover:bg-gray-50 transition">
        <h3 className="text-left text-lg font-semibold text-gray-700">{question}</h3>
        <span className="shrink-0 text-gray-800">{isOpen ? <IoRemove className="h-6 w-6" /> : <IoAdd className="h-6 w-6" />}</span>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-10 border-t border-gray-600">
          <p className="text-base text-gray-700 flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">•</span>
            <span>{answer}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQ({ items = [] }) {
  return (
    <section className="mt-20 mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">FAQ</h2>

      <div className="space-y-0">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
