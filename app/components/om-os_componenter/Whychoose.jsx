import { TiTick } from "react-icons/ti";

export default function WhyChoose() {
  return (
    <section className="py-30">
      <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-150px max-w-6xl mx-auto px-6 mb-20 lg:px-8 items-start">
        <div className="max-w-2xl ml-25">
          <p className="text-xl font-bold tracking-tight text-[#bd0a6d]">Hvorfor vælge os?</p>
          <h2 className="mt-6 text-2xl leading-8 text-black max-w-xl">Vi kombinerer kreativitet, teknologi og forretningsforståelse</h2>
        </div>
        <div className="space-y-4 ml-20">
          <div className="flex items-center gap-3">
            <TiTick size={24} className="text-[#3A86FF] shrink-0" />
            <p className="text-lg font-semibold text-black">Lange samarbejder</p>
          </div>
          <div className="flex items-center gap-3">
            <TiTick size={24} className="text-[#3A86FF] shrink-0" />
            <p className="text-lg font-semibold text-black">Tilfredse kunder</p>
          </div>
          <div className="flex items-center gap-3">
            <TiTick size={24} className="text-[#3A86FF] shrink-0" />
            <p className="text-lg font-semibold text-black">Tæt rådgivning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
