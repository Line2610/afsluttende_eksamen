import { YdelserCard } from "../components/Ydelser-card";
import { GrPersonalComputer } from "react-icons/gr";
import { IoIosRocket } from "react-icons/io";
import { IoCheckmark, IoDiamondOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdSettingsBackupRestore } from "react-icons/md";
import { PiHeadsetBold } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { IoHourglass } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { FAQ } from "../components/FAQ";
import Footer from "../components/Footer";
import { MdOutlineComputer } from "react-icons/md";

const features = [
  {
    icon: <AiOutlineSafety className="h-9 w-9 text-[#3A86FF]" />,
    title: "Sikkerhed i fokus",
    text: "Vi beskytter dit site døgnet rundt",
  },
  {
    icon: <BsSpeedometer2 className="h-9 w-9 text-[#3A86FF]" />,
    title: "Høj ydeevne",
    text: "Hurtigere site - bedre brugeroplevelse",
  },
  {
    icon: <MdSettingsBackupRestore className="h-9 w-9 text-[#3A86FF]" />,
    title: "Backup & gendannelse",
    text: "Vi har dig dækket, hvis uheldet er ude",
  },
  {
    icon: <PiHeadsetBold className="h-9 w-9 text-[#3A86FF]" />,
    title: "Support når du har brug for det",
    text: "Hurtig og kompetent hjælp",
  },
];

const faqItems = [
  {
    question: "1. Hvorfor er vedligeholdelse af WordPress vigtigt?",
    answer: "Uden løbende opdateringer bliver din hjemmeside sårbar overfor hacking, dårlige fejl og performance.",
  },
  {
    question: "2. Hvad sker der, hvis jeg ikke opdaterer min hjemmeside?",
    answer: "Din side kan blive langsom, ustabil eller i værste fald hacket, hvilket kan koste dig både kunder og troværdighed.",
  },
  {
    question: "3. Hvor ofte skal en hjemmeside opdateres?",
    answer: "WordPress, plugins og temaer bør opdateres løbende – ofte ugentligt – for at sikre stabil drift.",
  },
  {
    question: "4. Kan jeg selv vedligeholde min hjemmeside?",
    answer: "Ja, men det kræver teknisk viden og løbende opmærksomhed. Mange vælger en løsning, så de slipper for bekymringer.",
  },
  {
    question: "5. Hvad hvis min hjemmeside bliver hacket?",
    answer: "Vi kan hjælpe med at gendanne din hjemmeside fra backup og sikre den mod fremtidige angreb.",
  },
  {
    question: "6. Er der binding på jeres vedligeholdelsespakker?",
    answer: "Nej, du kan opsige din aftale når som helst.",
  },
];

export default function WordPressPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-4xl text-gray-950">Få en vedligeholdelses pakke fra Avazura, og bliv problemfri 24/7</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <YdelserCard title="Basis" subtitle="Optimering og opdatering" icon={<MdOutlineComputer className="h-10 w-10" />} iconBgClass="bg-[#F0DEC7]" accentClass="#F0DEC7" itemIconClass="h-8 w-8" items={["WordPress, Temaer, Plugins", "PHP-versioner", "Sikkerhedsopdateringer", "Optimering og komprimering af billeder for øget ydeevne", "Rydning af cache og optimering af database", "Staging site for helt at undgå nedetid ved opdateringer", "Månedlig rapportering af foretagede opdateringer"]} price="749 kr." period="/måned" buttonLabel="Bestil nu" buttonHref="/kontakt" />

          <YdelserCard title="Plus" subtitle="Alt i Basis + ekstra support" icon={<IoIosRocket className="h-10 w-10" />} iconBgClass="bg-[#0B1F4A]" accentClass="#0B1F4A" itemIconClass="h-8 w-8" items={["Ubegrænset antal gendannelser af backups kræver Avazura Hosting", "Ændring af standard login-URL, forhindring af brute force angreb", "Opsætning og overvågning af high performance sikkerhedssoftware", "Scanninger for malware og sikkerhedshuller", "Uptime monitorering med alarmer", "Prioriteret support"]} price="1499 kr." period="/måned" buttonLabel="Bestil nu" buttonHref="/kontakt" />

          <YdelserCard title="Premium" subtitle="Alt i Plus + fuld support" icon={<IoDiamondOutline className="h-10 w-10" />} iconBgClass="bg-[#8B1553]" accentClass="#8B1553" itemIconClass="h-8 w-8" items={["Daglig overvågning", "Månedlig check af hjemmesidens ydeevne, herunder fjernelse af midlertidige filer og caching", "Opsætning af webapplikationsfirewall (WAF)", "2FA for alle brugere", "Manuel sikkerhedsgennemgang", "Regelmæssig hastighedsoptimering", "1 times support til tilføjelser"]} price="2499 kr." period="/måned" buttonLabel="Bestil nu" buttonHref="/kontakt" />
        </div>

        <section className="mt-16 grid gap-5 rounded-3x p-6 bg-white rounded-lg shadow-sm md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="flex items-start gap-2 ">
              <div className="shrink-0 pt-1">{feature.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                <p className="text-xs leading-6 text-gray-800">{feature.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20">
          <h4 className="text-[#771041] font-bold text-center">Problemer uden vedligeholdelse</h4>
          <h2 className="text-gray-900 text-3xl text-center mt-5">Hvad sker, der hvis du ikke vedligeholder din hjemmeside?</h2>
          <p className="text-center text-gray-800 mt-6 text-[16px]">Uden løbende opdateringer kan din hjemmeside hurtigt blive usikker, langsom og ustabil</p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="space-y-10 pr-0 md:pr-8 md:border-r md:border-gray-200">
              <article>
                <h4 className="text-lg font-medium text-gray-800">1. Hackere går efter forældede hjemmesider</h4>
                <p className="text-gray-700 text-sm border-b border-gray-400 pb-4 mt-2">Forældede plugins og WordPress versioner fungerer som åbne døre. Din hjemmeside behøver ikke være stor - bare sårbar.</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Stjæle kundedata</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Ødelæggelse af din hjemmeside</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Misbrug af din server til spam</span>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-3 text-gray-800 font-medium">
                  <AiOutlineSafety className="h-8 w-8 text-[#771041]" />
                  <span className="text-[#16px]">Det kan koste dig både penge, tid og troværdighed</span>
                </div>
              </article>

              <article>
                <h4 className="text-lg font-medium text-gray-800">3. Din hjemmeside bliver langsom</h4>
                <p className="text-gray-700 text-sm border-b border-gray-400 pb-4 mt-2">Uden optimering bliver din hjemmeside tungere og langsommere over tid.</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Længere loadtid</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Dårlig brugeroplevelse</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Lavere konvertering</span>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-3 text-gray-800 font-medium">
                  <IoHourglass className="h-6 w-6 text-[#771041]" />
                  <span className="text-[#16px]">Langsomme sider skræmmer potentielle kunder væk.</span>
                </div>
              </article>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10 pl-0 md:pl-8">
              <article>
                <h4 className="text-lg font-medium text-gray-800">2. Ting begynder at stoppe med at virke</h4>
                <p className="text-gray-700 text-sm border-b border-gray-400 pb-4 mt-2">Når din hjemmeside ikke bliver opdateret, can funktioner gradvist begynde at bryde sammen.</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Knapper reagerer ikke</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Formularer fejler</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Billeder og videoer loader langsomt</span>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-3 text-gray-800 font-medium">
                  <VscGraphLine className="h-8 w-8 text-[#771041]" />
                  <span className="text-[#16px]">Dine besøgende bliver frustrerede - og forlader siden.</span>
                </div>
              </article>

              <article>
                <h4 className="text-lg font-medium text-gray-800">4. Du mister synlighed på Google</h4>
                <p className="text-gray-700 text-sm border-b border-gray-400 pb-4 mt-2">Google prioriterer hurtige og sikre hjemmesider. Hvis din side halter, gør din placering også</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Lavere placering i søgeresultater</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Mindre trafik</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#771041] text-white">
                      <IoCheckmark className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Færre kunder</span>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-3 text-gray-800 font-medium">
                  <IoMdEyeOff className="h-8 w-8 text-[#771041]" />
                  <span className="text-[#16px]">Din forretning bliver sværere at finde online</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div>
          <FAQ items={faqItems} />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
