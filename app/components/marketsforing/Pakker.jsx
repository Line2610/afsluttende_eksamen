import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GrLineChart } from "react-icons/gr";
import { PiCrownLight } from "react-icons/pi";

export default function Pakker() {
  const PACKAGES = [
    {
      id: "starter",
      icon: <HiOutlineRocketLaunch size={30} className="text-[#3A86FF]" />,
      title: "Starter",
      description: "Perfekt til små virksomheder",
      features: ["Strategi og opsætning", "Søgeannonce", "Månedlig rapportering", "Løbende optimering"],
      price: "Fra 2.999 kr./md.",
    },
    {
      id: "Growth",
      icon: <GrLineChart size={30} className="text-[#3A86FF]" />,
      title: "Growth",
      description: "Ideelt for voksende virksomheder",
      features: ["Alt i Starter pakken ", "Shopping Ads", "Remarketing", "Udvidet søgeordsanalyse"],
      price: "Fra 5.999 kr./md.",
    },
    {
      id: "Scale",
      icon: <PiCrownLight size={30} className="text-[#3A86FF]" />,
      title: "Scale",
      description: "For store kampagner",
      features: ["Alt i Growth pakken", "Avanceret tracking", "Display og youtube Ads", "Dedikeret rådgiver"],
      price: "Fra 9.999 kr./md.",
    },
  ];

  return (
    <section className="mx-auto px-6 mt-15 mb-20">
      <div className="grid gap-8 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className="w-full border border-gray-200 rounded-lg p-10 bg-white">
            <div className="flex gap-3 items-center mb-6">
              {pkg.icon}
              <h3 className="text-2xl font-semibold text-[#001949]">{pkg.title}</h3>
            </div>
            <p className="text-base text-gray-600 mb-6">{pkg.description}</p>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#3A86FF]">•</span>
                  <span className="text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold text-black mt-10">{pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
