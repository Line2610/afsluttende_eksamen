"use client";

import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

function CheckIcon({ colorClass = "h-6 w-6 text-gray-800" }) {
  return <IoIosCheckmarkCircle className={colorClass} />;
}

export function YdelserCard({ title, subtitle, icon, iconBgClass = "bg-[#F1DDBB]", items = [], price, period = "/måned", buttonLabel = "Bestil nu", buttonHref = "/kontakt", itemIcon: ItemIcon = null, itemIconClass = "h-7 w-7" }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] ring-1 ring-black/10 md:p-6">
      <header>
        <div className="flex items-center gap-3">
          <div className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBgClass}`}>{icon}</div>
          <div>
            <h3 className="text-2xl font-medium text-gray-950 md:text-3xl">{title}</h3>
            <p className="text-sm text-gray-800 md:text-base">{subtitle}</p>
          </div>
        </div>
      </header>

      <ul className="mt-4 flex-1 space-y-0">
        {items.map((item) => (
          <li key={item} className="flex text-gray-800 items-start gap-3 border-t border-gray-300 py-3 text-xs md:text-base">
            <span className="shrink-0 pt-0.5 text-gray-800">{ItemIcon ? <ItemIcon className={itemIconClass} /> : <CheckIcon className={`h-6 w-6 text-gray-800`} />}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-end justify-between gap-4">
        <div className="flex items-end gap-2">
          <span className="text-2xl ml-4 font-semibold text-gray-950 md:text-3xl">{price}</span>
          <span className="pb-0.5 text-sm text-gray-950/90">{period}</span>
        </div>
      </div>

      <Link href={buttonHref} className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#3A86FF] px-6 py-2.5 text-base font-semibold text-white transition hover:bg-[#2c73e8]">
        {buttonLabel}
      </Link>
    </article>
  );
}

export function YdelserGrid({ plans = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <YdelserCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}
