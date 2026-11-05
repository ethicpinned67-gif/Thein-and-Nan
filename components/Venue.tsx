"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Venue() {
  const mapUrl = "https://maps.app.goo.gl/BSdPjT4AawCFE8KZ6?g_st=iv";

  return (
    <section className="bg-[#FAF7F2] px-4 py-16 text-center sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
          <MapPin className="h-6 w-6" />
        </div>

        <h2 className="text-xl font-bold tracking-wide text-stone-900 sm:text-2xl">
          မင်္ဂလာဧည့်ခံပွဲ တည်နေရာ
        </h2>

        <div className="my-4 mx-auto h-0.5 w-10 bg-amber-600/40" />

        <div className="space-y-1 text-sm text-stone-600 sm:text-base">
          <p className="font-medium text-stone-800">
            ရှမ်းပြည်နယ်တောင်ပိုင်း၊ မိုးနဲမြို့နယ်၊ လွိုင်မြေရပ်ကွက်
          </p>
          <p className="text-xs text-stone-500 sm:text-sm">
            ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း (မယိင်းကုန်စုံဆိုင်) တို့၏ နေအိမ်မင်္ဂလာသို့
          </p>
        </div>

        {/* Google Maps ခလုတ် */}
        <div className="mt-8">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:bg-stone-800 hover:shadow-lg sm:text-sm"
          >
            <Navigation className="h-4 w-4" />
            <span>Google Maps ဖြင့် လမ်းညွှန်ကြည့်ရန်</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}