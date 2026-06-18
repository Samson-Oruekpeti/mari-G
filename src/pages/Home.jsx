import { Link } from "react-router-dom";
import {
  CoffeeCupIllustration,
  MarigoldDivider,
  MugIcon,
  CroissantIllustration,
  SandwichIcon,
  ClockIllustration,
  PinIllustration,
} from "../components/Illustrations";

const featured = [
  {
    Icon: MugIcon,
    name: "Today's pour",
    desc: "A single-origin filter brew, changed every morning at 7.",
    price: "₦1,800",
  },
  {
    Icon: CroissantIllustration,
    name: "Fresh from the oven",
    desc: "Butter croissants, baked in small batches till noon.",
    price: "₦1,200",
  },
  {
    Icon: SandwichIcon,
    name: "Lunch special",
    desc: "One new sandwich every day — ask what's on today.",
    price: "₦3,500",
  },
];

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-hand text-2xl text-moss-dark mb-3">Good morning —</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] text-ink">
            Slow mornings,
            <br />
            good coffee.
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-md leading-relaxed">
            Marigold Café is a small room with big windows on Airport
            Road — the kind of place you mean to visit for ten minutes
            and stay for two hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="bg-marigold text-ink font-semibold px-6 py-3 rounded-full hover:bg-marigold-dark transition-colors"
            >
              See the menu
            </Link>
            <Link
              to="/contact"
              className="border border-ink/20 text-ink font-semibold px-6 py-3 rounded-full hover:border-ink/50 transition-colors"
            >
              Get directions
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm aspect-square">
          <div className="absolute inset-0 bg-marigold/15 rounded-[40%_60%_55%_45%/45%_40%_60%_55%]" />
          <CoffeeCupIllustration className="relative w-full h-full p-8" />
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-moss text-linen">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <MarigoldDivider className="mb-6 [&>span]:bg-linen/30" />
          <p className="font-display text-2xl md:text-3xl leading-relaxed">
            We keep the menu short, the beans honest, and the chairs
            comfortable enough that nobody minds when the wifi is a
            little slow.
          </p>
        </div>
      </section>

      {/* Featured items */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-hand text-2xl text-moss-dark">on the counter today</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-1">
            A few favourites
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map(({ Icon, name, desc, price }) => (
            <div
              key={name}
              className="bg-white/60 border border-ink/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <Icon className="w-12 h-12 mb-4" />
              <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
              <p className="text-ink-soft text-sm mt-2 leading-relaxed">{desc}</p>
              <p className="font-hand text-2xl text-marigold-dark mt-3">{price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/menu" className="font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4 hover:decoration-4">
            View the full menu →
          </Link>
        </div>
      </section>

      {/* Hours band */}
      <section className="bg-cocoa text-chalk">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex items-start gap-4">
            <ClockIllustration className="w-12 h-12 shrink-0" />
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">Open hours</h3>
              <ul className="text-chalk/80 space-y-1 text-sm">
                <li className="flex gap-6"><span className="w-24">Mon – Fri</span><span>7am – 7pm</span></li>
                <li className="flex gap-6"><span className="w-24">Saturday</span><span>8am – 8pm</span></li>
                <li className="flex gap-6"><span className="w-24">Sunday</span><span>9am – 4pm</span></li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <PinIllustration className="w-12 h-12 shrink-0" />
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">Find us</h3>
              <p className="text-chalk/80 text-sm leading-relaxed mb-4">
                14 Airport Road, Effurun, Delta State — two doors
                down from the print shop, look for the marigold sign.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-marigold text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-marigold-dark transition-colors"
              >
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial pinned note */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="relative bg-linen-deep border border-ink/10 rounded-sm shadow-sm rotate-[-1deg] px-10 py-10 text-center">
          <PinIllustration className="w-8 h-8 absolute -top-4 left-1/2 -translate-x-1/2" />
          <p className="font-hand text-3xl text-ink leading-snug">
            "It's the only café where the barista remembers your order
            and your dog's name. Came for the coffee, stayed for everything else."
          </p>
          <p className="mt-4 text-sm text-ink-soft">— a regular, most weekday mornings</p>
        </div>
      </section>
    </div>
  );
}
