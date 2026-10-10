import { MINISTRY_INFO } from "@/lib/constants";
import { ArrowRight, Play, Calendar, Sparkles, MessageCircle } from "lucide-react";
import SermonSection from "@/components/SermonSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-sky-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to {MINISTRY_INFO.name}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Illuminating Hearts. <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                Transforming Lives.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {MINISTRY_INFO.description} Experience powerful teachings, connect with an empowered faith community, and grow in purpose.
            </p>

            {/* CTA Action Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#events"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                Register for Next Event
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sermons"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Play className="w-4 h-4 fill-slate-200" />
                Watch Sermons
              </a>
            </div>

            {/* Quick Community Stats / Banner */}
            <div className="pt-8 flex items-center gap-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Weekly Services & Events</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Active WhatsApp Community</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-2 border border-slate-700/60 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl bg-slate-950 flex flex-col items-center justify-center p-6 text-center border border-slate-800/80 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-amber-400 ml-1" />
                </div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  Featured Message
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Walking in the Light of Truth
                </h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Day 2 Sermon Library & Player Architecture Complete.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sermon Section Integration */}
      <SermonSection />
    </div>
  );
}