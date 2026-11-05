"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import CountdownTimer from "@/components/CountdownTimer";

const weddingDate = "2026-12-05T06:00:00+06:30";

interface HeroProps {
  onOpenInvitation?: () => void;
  isOpen?: boolean;
}

export default function Hero({ onOpenInvitation, isOpen }: HeroProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        left: `${(index * 37 + 8) % 100}%`,
        delay: `${(index % 8) * -1.7}s`,
        duration: `${12 + (index % 5) * 2}s`,
      })),
    []
  );

function celebrate() {
    confetti({
      particleCount: 90,
      spread: 65,
      origin: { y: 0.75 },
      colors: ["#D4AF37", "#F5EFEB", "#E6B9B2", "#FFFFFF"],
    });

    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (audio) {
      // 👈 Intro ကျော်ရန် ဤနေရာတွင် စက္ကန့်သတ်မှတ်ပါ (ဥပမာ ၁၅ စက္ကန့်မှ စဖွင့်ရန်) 
      audio.play().catch((err) => console.log("Play error:", err));
    }

    if (onOpenInvitation) {
      onOpenInvitation();
    }

    document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#292524] text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(30,25,22,.12),rgba(30,25,22,.78)),url('/hero-bg.jpg')",
        }}
      />
      {petals.map((petal, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-12 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="section-kicker text-[#E8D8B6]"
        >
          Together with our families
        </motion.p>
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="font-display mt-5 text-[2.6rem] font-light leading-[0.95] tracking-[-0.03em] sm:mt-7 sm:text-7xl md:text-8xl"
      >
        Thein Aye Maung <span className="block py-2 text-[1.8rem] italic text-[#D4AF37] sm:text-3xl">&</span> Nan Su Myat Htwe
      </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 max-w-xs text-[10px] leading-5 tracking-[0.14em] text-white/80 sm:mt-7 sm:text-sm sm:leading-6"
        >
          REQUEST THE PLEASURE OF YOUR COMPANY
          <br />
          AS WE BEGIN OUR FOREVER
        </motion.p>
       <div className="mt-6 flex flex-col items-center gap-1 text-center text-white/90 sm:mt-9">
  <p className="text-sm font-medium tracking-wide">
    ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း
  </p>
  <p className="text-xs text-white/70">
    (မယိင်းကုန်စုံဆိုင်)
  </p>
  <p className="text-xs text-white/75">
    လွိုင်မြေရပ်ကွက်၊ မိုးနဲမြို့
  </p>
</div>
        <div className="my-5 h-px w-12 bg-[#D4AF37]/70 sm:my-8" />

        <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/70 sm:mb-5">
        Saturday · 5 December · 2026 · 6:00 AM - 7:00 AM
        </p>

        <CountdownTimer date={weddingDate} />

        {!isOpen && (
          <button
            onClick={celebrate}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/55 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#292524] sm:mt-10"
          >
            Open Invitation <ArrowDown size={14} />
          </button>
        )}
      </div>
      <span className="relative z-10 pb-5 text-[9px] tracking-[0.25em] text-white/45">
        SCROLL TO EXPLORE
      </span>
    </section>
  );
}