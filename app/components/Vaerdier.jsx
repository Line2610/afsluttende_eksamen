import { BiSolidInjection } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function Vaerdier() {
  return (
    <section className="flex flex-wrap gap-8 justify-center items-center mt-20 mb-30 bg-blue-200/30 py-15">
      <div className="flex items-center justify-center gap-4">
        <BiSolidInjection size={30} className="text-[#3A86FF]" />
        <h3 className="text-black text-lg font-semibold">No cure, no pay</h3>
      </div>

      <div className="flex items-center justify-center gap-4">
        <BsFillHouseFill size={30} className="text-[#3A86FF]" />
        <h3 className="text-black text-lg font-semibold">In house webhostel</h3>
      </div>

      <div className="flex items-center justify-center gap-4">
        <FaGraduationCap size={30} className="text-[#3A86FF]" />
        <h3 className="text-black text-lg font-semibold">Højtuddannede medarbejdere</h3>
      </div>

      <div className="flex items-center justify-center gap-4">
        <IoShieldCheckmarkOutline size={30} className="text-[#3A86FF]" />
        <h3 className="text-black text-lg font-semibold">Tilfredshedsgaranti</h3>
      </div>
    </section>
  );
}
