"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import InvitationCard from "@/components/InvitationCard";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import LoveNote from "@/components/LoveNote";
import MusicPlayer from "@/components/MusicPlayer";

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);

    const audio = (document.getElementById("bg-audio") || document.querySelector("audio")) as HTMLAudioElement | null;
    if (audio) {
      if (audio.currentTime < 10) {
        audio.currentTime = 10;
      }
      audio.play().catch((err) => {
        console.log("Audio play error:", err);
      });
    }

    setTimeout(() => {
      document.getElementById("main-content")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-800 selection:bg-amber-100">
      {/* Hero Section */}
      <Hero onOpenInvitation={handleOpenInvitation} isOpen={isOpen} />

      {/* Music Player */}
      <MusicPlayer />

      {/* အောက်ဘက် အစိတ်အပိုင်းများ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* မင်္ဂလာဖိတ်ကြားလွှာကတ် (မိဘများ၊ မောင်နှံအမည်များ) */}
            <InvitationCard />

            {/* မင်္ဂလာတည်နေရာ */}
            <Venue />

            {/* ဓာတ်ပုံများ */}
            <Gallery />

            {/* မေတ္တာဖြင့် အထူးကျေးဇူးတင်လွှာ */}
            <LoveNote />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}