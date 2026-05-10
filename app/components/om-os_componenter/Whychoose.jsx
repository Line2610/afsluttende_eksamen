export default function WhyChoose() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-40">
      <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-150px max-w-6xl mx-auto px-6 mb-20 lg:px-8 items-start">
        <div className="max-w-2xl ml-25">
          <p className="text-xl font-bold tracking-tight text-[#771041]">Hvorfor vælge os?</p>
          <h2 className="mt-6 text-2xl leading-8 text-zinc-700 dark:text-zinc-300 max-w-xl">Vi kombinerer kreativitet, teknologi og forretningsforståelse</h2>
        </div>
        <div className="space-y-4 ml-20">
          <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Lange samarbejder</p>
          <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Tilfredse kunder</p>
          <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Tæt rådgivning</p>
        </div>
      </div>
    </section>
  );
}
