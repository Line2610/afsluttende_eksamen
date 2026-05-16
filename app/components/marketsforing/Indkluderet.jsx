import { FaHandsHelping, FaSearch, FaCog, FaPalette, FaSync, FaChartLine } from "react-icons/fa";

export default function Indkluderet() {
  return (
    <section className="flex flex-wrap gap-8 justify-center items-center mt-20 mb-30 py-15">
      <h2 className="w-full text-center text-black text-2xl mb-5">Hvad får du inkluderet?</h2>
      <div className="flex flex-col items-center gap-4">
        <FaHandsHelping size={30} className="text-[#bd0a6d]" />
        <h3 className="text-black text-lg font-semibold text-center">Strategi & rådgivning</h3>
      </div>

      <div className="flex flex-col items-center gap-4">
        <FaCog size={30} className="text-[#bd0a6d]" />
        <h3 className="text-black text-lg font-semibold text-center">Opsætning & optimering</h3>
      </div>

      <div className="flex flex-col items-center gap-4">
        <FaSearch size={30} className="text-[#bd0a6d]" />
        <h3 className="text-black text-lg font-semibold text-center">Søgeordsanalyse</h3>
      </div>

      <div className="flex flex-col items-center gap-4">
        <FaPalette size={30} className="text-[#bd0a6d]" />
        <h3 className="text-black text-lg font-semibold text-center">Annoncer & creatives</h3>
      </div>
      <div className="flex flex-col items-center gap-4">
        <FaSync size={30} className="text-[#bd0a6d]" />
        <h3 className="text-black text-lg font-semibold text-center">Løbende optimering</h3>
      </div>
      <div className="flex flex-col items-center gap-4">
        <FaChartLine size={30} className="text-[#bd0a6d]" />
        <h3 className="text-black text-lg font-semibold text-center">Rapportering & analyse</h3>
      </div>
    </section>
  );
}
