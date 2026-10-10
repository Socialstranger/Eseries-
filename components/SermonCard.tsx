"use client";

import { Play, Clock, User } from "lucide-react";
import { Sermon } from "@/lib/sermons";

interface SermonCardProps {
  sermon: Sermon;
  onSelect: (sermon: Sermon) => void;
}

export default function SermonCard({ sermon, onSelect }: SermonCardProps) {
  return (
    <div 
      onClick={() => onSelect(sermon)}
      className="group bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col shadow-lg hover:shadow-amber-500/10"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img
          src={sermon.thumbnailUrl}
          alt={sermon.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
        
        {/* Play Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shadow-xl group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
          </div>
        </div>

        {/* Series Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
          {sermon.series}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-1.5">
            {sermon.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {sermon.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium text-slate-300">{sermon.preacher}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{sermon.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}