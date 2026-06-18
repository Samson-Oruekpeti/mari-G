import { Link } from "react-router-dom";
import { MarigoldMark } from "./Illustrations";

export default function Footer() {
  return (
    <footer className="bg-cocoa text-chalk">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <MarigoldMark className="w-7 h-7" />
            <span className="font-display text-lg font-semibold">Marigold Café</span>
          </div>
          <p className="text-chalk/70 text-sm leading-relaxed max-w-xs">
            A small corner room with big windows, slow mornings, and coffee
            worth lingering over.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-hand text-2xl text-marigold mb-2">Find us</p>
          <p className="text-chalk/80 leading-relaxed">
            14 Airport Road<br />
            Effurun, Delta State<br />
            Nigeria
          </p>
        </div>

        <div className="text-sm">
          <p className="font-hand text-2xl text-marigold mb-2">Open hours</p>
          <ul className="text-chalk/80 space-y-1">
            <li className="flex justify-between gap-6"><span>Mon – Fri</span><span>7am – 7pm</span></li>
            <li className="flex justify-between gap-6"><span>Saturday</span><span>8am – 8pm</span></li>
            <li className="flex justify-between gap-6"><span>Sunday</span><span>9am – 4pm</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-chalk/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-chalk/50">
          <p>© {new Date().getFullYear()} Marigold Café. Made with care, served warm.</p>
          <div className="flex gap-5">
            <Link to="/menu" className="hover:text-chalk transition-colors">Menu</Link>
            <Link to="/contact" className="hover:text-chalk transition-colors">Contact</Link>
            <a href="#top" className="hover:text-chalk transition-colors">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
