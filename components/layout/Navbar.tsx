"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "UMED 2026", path: "/umed-2026" },
    { name: "Edition 2026", path: "/edition-2026" },
    { name: "Past Editions", path: "/editions" },
    { name: "Tozeur", path: "/tozeur" },
    { name: "Organization", path: "/organization" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/ultramirage-logo.jpg"
              alt="Ultra Mirage Logo"
              width={44}
              height={44}
              priority
              className="object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl text-gradient">ULTRA</span>
              <span className="font-display text-xl text-foreground">
                MIRAGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "text-[#F5C542]"
                        : "text-muted-foreground hover:text-[#F5C542]"
                    }
                  `}
                >
                  {link.name}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#F5C542]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/auth">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button
                size="sm"
                className="bg-[#F5C542] text-black font-semibold
                 hover:bg-[#e6b937]
                 shadow-lg shadow-[#F5C542]/30
                 transition-all duration-200"
              >
                Register Now
              </Button>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "text-[#F5C542]"
                          : "text-muted-foreground hover:text-[#F5C542]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Link href="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </Link>

                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full bg-[#F5C542] text-black font-semibold
                               hover:bg-[#e6b937]"
                  >
                    Register Now
                  </Button>
                </Link>
                <div className="flex justify-center pt-3">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
