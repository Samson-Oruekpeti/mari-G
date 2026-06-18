import { MarigoldDivider, MarigoldMark } from "../components/Illustrations";

const menu = [
  {
    category: "Coffee & drinks",
    items: [
      { name: "House filter", price: "₦1,500" },
      { name: "Cappuccino", price: "₦1,800" },
      { name: "Flat white", price: "₦1,900" },
      { name: "Pour over, single origin", price: "₦2,200" },
      { name: "Iced latte", price: "₦2,000" },
      { name: "Hot chocolate", price: "₦1,700" },
      { name: "Chai latte", price: "₦1,800" },
      { name: "Zobo cooler", price: "₦1,400" },
    ],
  },
  {
    category: "Morning",
    items: [
      { name: "Akara & pap", price: "₦1,600" },
      { name: "Shakshuka", price: "₦2,800" },
      { name: "Avocado toast", price: "₦2,400" },
      { name: "Granola & yoghurt bowl", price: "₦2,200" },
      { name: "Sweet pancakes, short stack", price: "₦2,000" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Butter croissant", price: "₦1,200" },
      { name: "Banana bread, slice", price: "₦1,300" },
      { name: "Cinnamon roll", price: "₦1,500" },
      { name: "Nigerian meat pie", price: "₦900" },
      { name: "Chin chin, cup", price: "₦700" },
    ],
  },
  {
    category: "Lunch",
    items: [
      { name: "Jollof rice & grilled chicken", price: "₦3,800" },
      { name: "Suya wrap", price: "₦3,200" },
      { name: "Grilled chicken sandwich", price: "₦3,000" },
      { name: "Moi moi & house salad", price: "₦2,600" },
      { name: "Vegetable soup & bread", price: "₦2,800" },
    ],
  },
];

function MenuRow({ name, price }) {
  return (
    <div className="flex items-baseline gap-3 py-1.5">
      <span className="font-body text-[15px] sm:text-base text-chalk/95">{name}</span>
      <span className="flex-1 border-b border-dotted border-chalk/25 translate-y-[-4px]" />
      <span className="font-hand text-xl text-marigold shrink-0">{price}</span>
    </div>
  );
}

export default function Menu() {
  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="font-hand text-2xl text-moss-dark mb-2">what we're serving</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink">The Menu</h1>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Written up fresh each morning. The board changes a little with
          the seasons, so don't be surprised if your favourite gets a
          short rest.
        </p>
      </section>

      {/* Chalkboard */}
      <section className="bg-cocoa text-chalk">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {menu.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-4">
                  <MarigoldMark className="w-6 h-6" />
                  <h2 className="font-hand text-3xl text-marigold">{group.category}</h2>
                </div>
                <div>
                  {group.items.map((item) => (
                    <MenuRow key={item.name} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <MarigoldDivider className="mb-6" />
        <p className="text-ink-soft text-sm leading-relaxed">
          Most things here can go dairy-free with oat milk, no extra
          charge. Tell your server about any allergies and we'll talk
          you through what's safe — everything is made in one small
          kitchen, so we can't promise a fully nut- or gluten-free
          space.
        </p>
      </section>
    </div>
  );
}
