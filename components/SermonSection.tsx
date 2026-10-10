"use client";

import { useState, useMemo } from "react";
import { INITIAL_SERMONS, Sermon } from "@/lib/sermons";
import SermonCard from "./SermonCard";
import SermonModal from "./SermonModal";
import { Search, Sparkles } from "lucide-react";

export default function SermonSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [activeSermon, setActiveSermon] = useState<Sermon | null>(null);

  // Extract unique series categories for filter pills
  const categories = useMemo(() => {
    const seriesSet = new Set(INITIAL_SERMONS.map((s) => s.series));
    return ["All", ...Array.from(seriesSet)];
  }, []);

  // Filter sermons based on search and selected series
  const filteredSermons = useMemo(() => {
    return INITIAL_SERMONS.filter((sermon) => {
      const matchesSearch =
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSeries =
        selectedSeries === "All" || sermon.series === selectedSeries;

      return matchesSearch && matchesSeries;
    });
  }, [searchQuery, selectedSeries]);

  return (
    <section id="sermons" className="py-24 bg-slate-950/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spiritual Nourishment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latest Sermons & Messages
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Immerse yourself in life-transforming teachings from the Enlightenment Series pulpit. Watch or search past messages anytime.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search sermons or speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Series Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedSeries(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSeries === category
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sermons Grid */}
        {filteredSermons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <SermonCard
                key={sermon.id}
                sermon={sermon}
                onSelect={(s) => setActiveSermon(s)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No sermons found matching your criteria.</p>
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      <SermonModal sermon={activeSermon} onClose={() => setActiveSermon(null)} />
    </section>
  );
}