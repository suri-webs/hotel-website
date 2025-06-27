"use client"
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="h-screen w-full max-sm:h-[50%] flex justify-center items-center">
      <div className="w-full h-[90%] relative rounded-1xl overflow-hidden flex justify-center items-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0000009c] z-10"></div>

        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="w-[120px] h-[120px] max-sm:w-[80px] max-sm:h-[80px] absolute z-20 bg-[#ffffff39] animate-pulse rounded-full flex justify-center items-center"
        >
          <p className="text-5xl text-white">
            {isPlaying ? <Pause  className="text-[#5CBB71]"/> : <Play  className="text-[#ffffff]"/>}
          </p>
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src="/Video/video.mp4"
          className="w-full h-full object-cover object-center"
          loop
          playsInline
        />
      </div>
    </section>
  );
}