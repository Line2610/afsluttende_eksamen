export default function Boxsection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-10 mt-20">
        <p className="text-md font-semibold text-[#771041]">Sådan arbejder vi</p>
        <h2 className="text-4xl font-semibold">Fra strategi til vækst</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 place-items-center">
        <Bluebox
          title="1 Strategi"
          text={`Vi analyserer din nuvæ rende løsning
      Finder flaskehalse og muligheder
      Udarbejder en klar plan for vækst`}
        />
        <Bluebox
          title="2 Eksekvering"
          text={`Vi bygger, opsætter og lancerer
      Web, marketing og performance
      Alt samlet ét sted`}
        />
        <Bluebox
          title="3 Optimering"
          text={`Vi måler, tester og optimerer løbende
      Fokus på flere leads og salg
      Transparant rapportering`}
        />
      </div>
    </section>
  );
}

const Bluebox = ({ title, text }) => {
  return (
    <div className="rounded-lg bg-cover mb-20 h-60 bg-center bg-no-repeat p-6 text-center text-white w-full max-w-xs md:max-w-sm mx-auto" style={{ backgroundImage: "url('/assets/bluebox.webp')" }}>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mt-5 text-md leading-relaxed whitespace-pre-line">{text}</p>
    </div>
  );
};
