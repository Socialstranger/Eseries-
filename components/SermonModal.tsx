"use client";

import { X, Clock, User, Calendar, Play } from "lucide-react";
import { Sermon } from "@/lib/sermons";

interface SermonModalProps {
  sermon: Sermon | null;
  onClose: () => void;
}

export default function SermonModal({ sermon, onClose }: SermonModalProps) {
  if (!sermon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-ministry-surface border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div>
            <span className="text-[10px] font-semibold tracking-widest text-amber-400 uppercase">
              {sermon.series}
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight">
              {sermon.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video bg-slate-950 w-full">
          <iframe
            src={sermon.videoUrl}
            title={sermon.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Sermon Details Footer */}
        <div className="p-6 space-y-4 bg-slate-900/40">
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-slate-200">{sermon.preacher}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{sermon.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{sermon.duration}</span>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {sermon.description}
          </p>
        </div>

      </div>
    </div>
  );
}