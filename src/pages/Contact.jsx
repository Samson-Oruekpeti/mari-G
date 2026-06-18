import { useState } from "react";
import { PinIllustration, ClockIllustration, MarigoldMark } from "../components/Illustrations";

function MapIllustration({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 500 280" className={className} fill="none">
      <rect width="500" height="280" fill="#ECE0C9" />
      {/* blocks */}
      <rect x="30" y="30" width="120" height="80" fill="#E5D6B5" />
      <rect x="200" y="40" width="90" height="60" fill="#E5D6B5" />
      <rect x="340" y="20" width="120" height="90" fill="#E5D6B5" />
      <rect x="40" y="160" width="100" height="90" fill="#E5D6B5" />
      <rect x="320" y="170" width="140" height="80" fill="#E5D6B5" />
      {/* roads */}
      <rect x="0" y="120" width="500" height="22" fill="#F4ECDC" />
      <rect x="240" y="0" width="20" height="280" fill="#F4ECDC" />
      <path d="M0 131h500" stroke="#3A2A1F" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
      <path d="M250 0v280" stroke="#3A2A1F" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
      <text x="270" y="118" fontFamily="Karla, sans-serif" fontSize="11" fill="#5C4A3B">Airport Road</text>
      <text x="180" y="160" fontFamily="Karla, sans-serif" fontSize="11" fill="#5C4A3B" transform="rotate(-90 180 160)">Market Lane</text>
      {/* pin */}
      <g transform="translate(232,86)">
        <PinIllustration className="w-12 h-12" />
      </g>
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Front-end demo only — wire this up to a real endpoint (Supabase
    // table, Formspree, EmailJS, etc.) before going live.
    setStatus("sent");
  }

  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center">
        <p className="font-hand text-2xl text-moss-dark mb-2">we'd love to see you</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink">Come say hello</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <div className="flex items-start gap-4 mb-8">
            <PinIllustration className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-1">Address</h2>
              <p className="text-ink-soft leading-relaxed">
                14 Airport Road, Effurun<br />
                Delta State, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <ClockIllustration className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-1">Hours</h2>
              <ul className="text-ink-soft text-sm space-y-1">
                <li className="flex gap-6"><span className="w-24">Mon – Fri</span><span>7am – 7pm</span></li>
                <li className="flex gap-6"><span className="w-24">Saturday</span><span>8am – 8pm</span></li>
                <li className="flex gap-6"><span className="w-24">Sunday</span><span>9am – 4pm</span></li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <MarigoldMark className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="font-display text-xl font-semibold text-ink mb-1">Reach us directly</h2>
              <p className="text-ink-soft text-sm">hello@marigoldcafe.example</p>
              <p className="text-ink-soft text-sm">+234 800 000 0000</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-ink/10">
            <MapIllustration className="w-full h-56" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-linen-deep rounded-2xl p-8">
          <h2 className="font-display text-xl font-semibold text-ink mb-1">Send a message</h2>
          <p className="text-ink-soft text-sm mb-6">
            Catering, private bookings, or just to say hi — we read everything.
          </p>

          {status === "sent" ? (
            <div className="bg-moss/10 border border-moss/30 rounded-xl p-6 text-center">
              <p className="font-hand text-2xl text-moss-dark">Message sent — thank you!</p>
              <p className="text-ink-soft text-sm mt-2">We'll get back to you within a day or two.</p>
              <button
                onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                className="mt-4 text-sm font-semibold underline text-ink"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/20 bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-marigold resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-linen font-semibold py-3 rounded-full hover:bg-cocoa transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
