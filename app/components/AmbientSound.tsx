"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audios/forest.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    const play = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().then(() => {
        setPlaying(true);
        setShowHint(false);
      }).catch(() => {
        startedRef.current = false;
      });
    };

    // Click/tap/tecla — ativa o áudio direto
    const gestureEvents = ["click", "touchstart", "keydown"] as const;
    gestureEvents.forEach((e) => document.addEventListener(e, play, { once: true, passive: true }));

    // Scroll — mostra convite pra clicar
    const onScroll = () => {
      if (!startedRef.current) setShowHint(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      gestureEvents.forEach((e) => document.removeEventListener(e, play));
      window.removeEventListener("scroll", onScroll);
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => {
        startedRef.current = true;
        setPlaying(true);
        setShowHint(false);
      }).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {showHint && !playing && (
        <button
          onClick={toggle}
          className="fixed bottom-20 right-6 z-50 bg-sage/90 text-white text-xs tracking-wide px-4 py-2 rounded-full backdrop-blur-sm animate-fade-in"
        >
          Toque para ativar o som
        </button>
      )}
      <button
        onClick={toggle}
        aria-label={playing ? "Silenciar som ambiente" : "Ativar som ambiente"}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-sage/80 hover:bg-sage text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm ${showHint && !playing ? "animate-pulse ring-2 ring-sage/60" : ""}`}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
}
