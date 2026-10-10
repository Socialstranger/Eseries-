import Link from "next/link";
import { MINISTRY_INFO, NAV_LINKS } from "@/lib/constants";
import {
  MessageCircle,
  Building2,
  CreditCard,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Ministry Info & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {MINISTRY_INFO.name}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {MINISTRY_INFO.description}
            </p>
            {/* WhatsApp Community Direct Callout */}
            <div className="pt-2">
              <a
                href={MINISTRY_INFO.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Join Ministry WhatsApp Group
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admin" className="hover:text-amber-400 transition-colors">
                  Staff Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ministry Giving & Bank Details */}
          <div id="give">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Direct Giving / Payment Details
            </h3>
            <div className="space-y-3 text-xs bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">
                    {MINISTRY_INFO.paymentDetails.bankName}
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    Account: {MINISTRY_INFO.paymentDetails.accountNumber}
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Name: {MINISTRY_INFO.paymentDetails.accountName}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <CreditCard className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Mobile Money / Paybill</p>
                  <p className="text-slate-400 text-[11px]">
                    Paybill: {MINISTRY_INFO.paymentDetails.mobileMoneyPaybill} | Acc: {MINISTRY_INFO.paymentDetails.mobileMoneyAccount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Social Handles */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="space-y-2.5 text-xs mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{MINISTRY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{MINISTRY_INFO.contactPhone}</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-slate-300 mb-3">Official Channels:</p>
            <div className="flex items-center gap-3 text-slate-400">
              {/* YouTube SVG */}
              <a
                href={MINISTRY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram SVG */}
              <a
                href={MINISTRY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href={MINISTRY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.587 9 4.75V8z"/>
                </svg>
              </a>
              {/* X / Twitter SVG */}
              <a
                href={MINISTRY_INFO.socials.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="p-2 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {MINISTRY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}