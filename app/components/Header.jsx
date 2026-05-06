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
