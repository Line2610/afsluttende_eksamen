import Image from "next/image";
import { FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export default function HeroForside() {
  return (
    <>
      <section className="relative w-full overflow-hidden -mt-35 py-15" style={{ minHeight: "800px" }}>
        <video className="absolute inset-0 h-full w-full scale-155 object-cover object-center" autoPlay muted loop playsInline poster="/assets/hero_forside.webp">
          <source src="/assets/Waves_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#071126]/55" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-between px-6 py-12 lg:px-8" style={{ minHeight: "660px" }}>
          <div className="max-w-4xl pt-4 text-white">
            <h1 className="text-4xl font-light tracking-tight sm:text-4xl lg:text-6xl mt-35">
              <span className="block mb-3">Vi bygger digital vækst</span>
              <span>der kan mærkes</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">Hurtigere websites, bedre marketing og én partner til det hele.</p>
            <div className="mt-15 flex flex-wrap gap-8">
              <button className="rounded-xl bg-[#3A86FF] px-6 py-3 text-base font-medium text-white transition hover:bg-[#2563eb]">Få gratis analyse</button>
              <button className="rounded-xl border-2 border-[#3A86FF] bg-transparent px-6 py-3 text-base font-medium text-white transition hover:bg-[#3A86FF]/10">Se cases</button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 w-full">
          <div className="w-full border-t border-white/10 bg-white/12 backdrop-blur-sm">
            <div className="mr-23 mx-auto max-w-6xl grid gap-6 px-4 py-4 text-white sm:grid-cols-3 sm:gap-8 sm:px-10">
              <div className="flex items-center gap-4">
                <FiZap className="h-10 w-10 shrink-0 text-[#3A86FF]" />
                <div>
                  <p className="text-2xl font-light sm:text-2xl">4.2s → 1.3s</p>
                  <p className="text-lg text-white/90">Loadtid forbedret</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiTrendingUp className="h-10 w-10 shrink-0 text-[#3A86FF]" />
                <div>
                  <p className="text-2xl font-light sm:text-2xl">+32%</p>
                  <p className="text-lg text-white/90">Flere leads</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiUsers className="h-10 w-10 shrink-0 text-[#3A86FF]" />
                <div>
                  <p className="text-2xl font-light sm:text-2xl">Én partner</p>
                  <p className="text-lg text-white/90">Web, ads og SEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-2xl font-light text-white sm:text-xl">Trusted by</p>

          <div className="mt-12 grid items-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Image src="/assets/cg_logo.png" alt="Carlsen Gulve" width={240} height={64} className="h-14 w-auto object-contain" />
            <Image src="/assets/k_logo.png" alt="Kolumbia" width={200} height={50} className="h-10 w-auto object-contain" />
            <Image src="/assets/mvs_logo.png" alt="Mens Vi Strikker" width={240} height={64} className="h-12 w-auto object-contain" />
            <Image src="/assets/ttc_logo.png" alt="Trekantens Trailercenter" width={240} height={64} className="h-12 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
