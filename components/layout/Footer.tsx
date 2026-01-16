import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-primary-foreground">
      <div className="container mx-auto px-4 py-20">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-3xl text-gradient">ULTRA</span>
              <span className="font-display text-3xl">MIRAGE</span>
            </div>

            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A world-class desert marathon in the heart of the Tunisian Sahara.
              Run beyond limits. Experience Tozeur.
            </p>

            {/* Newsletter */}
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-primary-foreground/10 text-sm placeholder:text-primary-foreground/40 focus:outline-none"
              />
              <button className="px-4 py-2 rounded-md bg-[#F5C542] text-black text-sm font-semibold hover:bg-[#e6b937] transition">
                Join
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "UMED 2026", path: "/umed-2026" },
                { name: "Past Editions", path: "/editions" },
                { name: "Register", path: "/register" }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-[#F5C542] transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-[#F5C542]" />
                Tozeur, Tunisia
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-[#F5C542]" />
                +216 71 563 742
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-[#F5C542]" />
                organisation@ultramirage.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/UltraMirageElDjerid/" },
                { icon: Instagram, href: "https://www.instagram.com/ultra_mirage/" },
                { icon: Twitter, href: "https://x.com/Ultra_Mirage" },
                { icon: Youtube, href: "https://www.youtube.com/@UltraMiragekk" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-[#F5C542] hover:text-black transition"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Ultra Mirage Sports Int Ltd · All rights reserved · Developed by Rihem Daoudi
          </p>
        </div>
      </div>
    </footer>
  );
}
