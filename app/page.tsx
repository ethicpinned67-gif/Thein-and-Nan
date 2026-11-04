"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import MusicPlayer from "@/components/MusicPlayer";

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Open Invitation နှိပ်လိုက်ချိန် လုပ်ဆောင်မည့် function
  const handleOpenInvitation = () => {
    setIsOpen(true);

    // MusicPlayer component ထဲရှိ bg-audio ကို လှမ်းဖွင့်ခြင်း
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (audio) {
      if (audio.currentTime < 10) {
        audio.currentTime = 10; // ၁၀ စက္ကန့်မှ စတင်ဖွင့်မည်
      }
      audio.play().catch((err) => {
        console.log("Audio play error:", err);
      });
    }

    // Main content သို့ ချောမွေ့စွာ scroll ဆင်းပေးခြင်း
    setTimeout(() => {
      document.getElementById("main-content")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-800 selection:bg-amber-100">
      {/* ပင်မ Hero အပိုင်း */}
      <Hero onOpenInvitation={handleOpenInvitation} isOpen={isOpen} />

      {/* အမြဲတမ်း ညာဘက်အောက်ထောင့်တွင် ပေါ်နေမည့် Music Player */}
      <MusicPlayer />

      {/* ဖိတ်စာဖွင့်ပြီးမှ ပေါ်လာမည့် အပိုင်းများ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Timeline />
            <Venue />
            <Gallery />
            <RSVP />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}