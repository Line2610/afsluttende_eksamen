import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/85">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105 dark:bg-white dark:text-zinc-900">
              A
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
                Afsluttende eksamen
              </p>
              <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                Header branch
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 p-1 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-900/60 md:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              Forside
            </Link>
            <Link
              href="/Om-os"
              className="rounded-full px-4 py-2 text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              Om os
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full bg-zinc-900 px-4 py-2 text-white shadow-sm dark:bg-white dark:text-zinc-900"
            >
              Kontakt
            </Link>
          </nav>

          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Start projekt
          </Link>
        </div>
      </div>
    </header>
  );
}
import Link from "next/link";

const navigation = [
  { href: "/", label: "Forside" },
  { href: "/ydelser", label: "ydelser" },
  { href: "/Om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="bg-white/50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo til venstre */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 shrink-0">
          <img src="" alt="" className="h-8 w-8" />
          Avazura
        </Link>

        {/* Navigation i midten */}
        <nav aria-label="Primær navigation" className="flex-1 flex items-center justify-center gap-10 text-md font-medium text-white">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Knap til højre */}
        <button className="shrink-0 rounded-lg bg-[#3A86FF] px-4 py-2 text-sm font-medium text-white hover:bg-[#2563eb] transition-colors">Kontakt os</button>
      </div>
    </header>
  );
}
