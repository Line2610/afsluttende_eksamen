import { FaUtensils } from "react-icons/fa";
import { FiShoppingCart, FiTrendingUp, FiUsers } from "react-icons/fi";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiRocket } from "react-icons/gi";

const cards = [
  {
    id: "restaurant",
    Icon: FaUtensils,
    title: "Restauranter",
    subtitle: "Få flere bookinger og takeaway-order",
    features: ["Hurtig hjemmeside", "Bedre Google synlighed", "Nem booking & bestilling"],
  },
  {
    id: "ecommerce",
    Icon: FiShoppingCart,
    title: "E-commerce",
    subtitle: "Få flere køb fra din eksisterende trafik",
    features: ["Hurtigere webshop", "Bedre udnyttelse af ads", "Øg din konverteringsrate"],
  },
  {
    id: "b2b",
    Icon: BsBriefcaseFill,
    title: "B2B/SaaS",
    subtitle: "Få flere kvalificerede leads",
    features: ["Landing pages der konverterer", "Content marketing", "SEO & organisk vækst"],
  },
  {
    id: "startup",
    Icon: GiRocket,
    title: "Startups",
    subtitle: "Få en stærk start og de første kunder",
    features: ["MVP websites", "Hurtig go-to-market", "Skalerbar vækst"],
  },
];

export default function B2b() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h3 className="text-black text-2xl text-center mb-3">Vi hjælper virksomheder med vækstambitioner</h3>
      <p className="text-black mb-10 text-center">Fra restauranter og webshops til B2B og startups tilpasser vi vores løsninger til din branche – med fokus på målbar vækst.</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ id, Icon, title, subtitle, features }) => (
          <article key={id} className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#07163a]">
              <Icon className="text-[#3A86FF]" size={40} />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-black">{title}</h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">{subtitle}</p>
            <hr className="w-full border-t border-gray-200 mb-6" />
            <ul className="space-y-4 text-left w-full px-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eef6ff] text-[#3A86FF]">✓</span>
                  <span className="text-sm text-gray-800">{f}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
