import {
  StorefrontIllustration,
  PlantIllustration,
  MugIcon,
  MarigoldMark,
  MarigoldDivider,
} from "../components/Illustrations";

const pillars = [
  {
    Icon: MugIcon,
    title: "Slow mornings",
    desc: "No queue-jumping, no rushing your last sip. We'd rather you stay an hour too long.",
  },
  {
    Icon: PlantIllustration,
    title: "Local & simple",
    desc: "Beans roasted nearby, produce from the Effurun market, a menu short enough to read in one breath.",
  },
  {
    Icon: MarigoldMark,
    title: "Everyone's welcome",
    desc: "Students with one laptop charger between them, aunties after church, the okada man on his break.",
  },
];

const team = [
  { initial: "D", name: "Doris Eghosa", role: "Co-founder & roaster" },
  { initial: "E", name: "Emeka Brown", role: "Head baker" },
  { initial: "U", name: "Ufuoma Okolie", role: "Front of house lead" },
];

export default function About() {
  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center">
        <p className="font-hand text-2xl text-moss-dark mb-2">how we got here</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink">Our story</h1>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-ink-soft leading-relaxed mb-4">
            Marigold started in 2019 as a flask of filter coffee and a
            card table outside Doris's gate, set up on Saturday mornings
            for neighbours on their way to the market. The flask ran
            out by nine most weeks.
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            Two years and a small loan later, she and Emeka took the
            corner unit on Airport Road — the one with the big windows
            that catch the morning light — and painted the door the
            colour of the marigolds her mother grew along the fence
            back home.
          </p>
          <p className="text-ink-soft leading-relaxed">
            The card table is gone, but the spirit hasn't moved much:
            good coffee, made simply, for whoever's nearby.
          </p>
        </div>
        <div className="order-1 md:order-2 max-w-md mx-auto w-full">
          <StorefrontIllustration className="w-full h-auto" />
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-linen-deep">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <MarigoldDivider className="mb-6" />
            <h2 className="font-display text-3xl font-semibold text-ink">What we believe in</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map(({ Icon, title, desc }) => (
              <div key={title} className="text-center px-4">
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="font-hand text-2xl text-moss-dark">behind the counter</p>
          <h2 className="font-display text-3xl font-semibold text-ink mt-1">Meet the team</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {team.map((t) => (
            <div key={t.name} className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-marigold/20 border-2 border-marigold flex items-center justify-center">
                <span className="font-hand text-3xl text-marigold-dark">{t.initial}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mt-4">{t.name}</h3>
              <p className="text-ink-soft text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
