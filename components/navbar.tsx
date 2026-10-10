"use client";

import { useState } from "react";
import Link from "next/link";
import { MINISTRY_INFO, NAV_LINKS } from "@/lib/constants";
import { Menu, X, Sparkles, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-ministry-dark/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 fill-slate-950" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block">
              {MINISTRY_INFO.name}
            </span>
            <span className="text-[10px] tracking-widest text-amber-400 font-semibold uppercase block -mt-1">
              Ministry International
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={MINISTRY_INFO.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Community
          </a>
          <a
            href="#events"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
          >
            Register for Event
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ministry-surface border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={MINISTRY_INFO.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs text-center"
            >
              <MessageCircle className="w-4 h-4" />
              Join WhatsApp Community
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs text-center"
            >
              Register for Upcoming Event
            </a>
          </div>
        </div>
      )}
    </header>
  );
}