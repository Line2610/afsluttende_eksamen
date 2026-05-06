import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
      <section className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Afsluttende eksamen</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">Projektet er klar. Start med at bygge jeres komponenter, sider og data-flow herfra.</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>App Router er sat op</li>
          <li>JavaScript og JSX er aktivt</li>
          <li>Tailwind er klar til styling</li>
        </ul>
      </section>
      <Footer />
    </main>
  );
  return <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-20 dark:bg-zinc-950"></main>;

}
