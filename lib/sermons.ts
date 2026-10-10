export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  series: string;
  description: string;
  videoUrl: string; // YouTube Embed URL or Video Source
  thumbnailUrl: string;
}

export const INITIAL_SERMONS: Sermon[] = [
  {
    id: "1",
    title: "Walking in the Light of Truth",
    preacher: "Pastor David O.",
    date: "October 4, 2026",
    duration: "45 mins",
    series: "The Enlightenment Collection",
    description: "Discover how walking in divine truth shifts your perspective and dismantles fear, bringing absolute clarity to your daily walk.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "The Power of Focused Faith",
    preacher: "Minister Sarah Jenkins",
    date: "September 27, 2026",
    duration: "52 mins",
    series: "Kingdom Authority",
    description: "Faith is not passive; it is an active spiritual force. Learn how to direct your faith towards your God-given assignment.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1510936420272-359194270274?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Desire",
    preacher: "sir Jacob Bright.",
    date: "September 20, 2026",
    duration: "38 mins",
    series: "The Enlightenment Collection",
    description: "A deep dive into Romans 12:2. Understand how spiritual transformation begins in the renewing of thought patterns.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
  },
];