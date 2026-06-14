'use client';

import Image from "next/image";
import Link from "next/link";

const youtubeVideos = [
  {
    id: "b8eBCg4UZR0",
    title: "How Democracy Has Impacted Nigeria's Business Environment",
    duration: "18:45"
  },
  {
    id: "usdVzuhi2mk",
    title: "Discussing Employee Engagement, Retention And Productivity",
    duration: "22:10"
  },
  {
    id: "T0YFh025__s",
    title: "Understand Your Organizational Vital Signs",
    duration: "14:30"
  },
];

export default function Videocard() {
  return (
    <section className="video-hero">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none"
      >
        <source src="/videos/flowvim-bg.mp4" type="video/mp4" />
        {/* Fallback */}
        <source 
          src="https://assets.mixkit.co/videos/preview/754/754-large.mp4" 
          type="video/mp4" 
        />
      </video>

      <div className="video-content">
        <div className="hero-text">
          <h1 className="text-6xl mt-8 md:text-[4.8rem] leading-[1.05] font-medium mb-6 tracking-[-0.02em]">
            Transformative Management<br />Consulting
          </h1>
          
          <p className="text-2xl md:text-[1.65rem] text-pera-light mb-10 max-w-xl">
            Aligning People, Processes, and Performance for Sustainable Growth
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-prim px-10 py-4 rounded-full font-medium text-lg hover:bg-pera-light transition-all active:scale-[0.97]"
            >
              Book a Consultation
            </Link>
            <a 
              href="#videos" 
              className="border-2 border-white/80 hover:border-white px-10 py-4 rounded-full font-medium text-lg transition-all active:scale-[0.97]"
            >
              Watch Videos
            </a>
          </div>
        </div>

        {/* YouTube Videos - Premium Grid */}
        <div id="videos" className="yt-grid">
          {youtubeVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-card group"
            >
              <div className="yt-thumbnail">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="play-overlay">
                  <div className="play-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-prim" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5.14v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded font-mono tracking-wider">
                  {video.duration}
                </div>
              </div>
              <div className="yt-info">
                <h3>{video.title}</h3>
                <p className="text-sm">Flowvim Insights</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}