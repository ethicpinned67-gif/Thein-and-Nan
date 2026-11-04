"use client";

import { motion } from "framer-motion";
import { Clock, Home, Calendar } from "lucide-react";

export default function Venue() {
  return (
    <section id="venue" className="bg-[#F1EAE3] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-[#D4AF37]/30 bg-white p-8 shadow-sm sm:p-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B08C4A]">
            Wedding Ceremony & Location
          </span>
          <h2 className="font-display mt-3 text-3xl font-light text-stone-800 sm:text-4xl">
            မင်္ဂလာအခမ်းအနားနှင့် တည်နေရာ
          </h2>

          <div className="my-6 mx-auto h-px w-16 bg-[#B08C4A]/40" />

          <div className="mt-8 grid gap-6 text-left sm:grid-cols-2">
            {/* အချိန်နှင့် နေ့ရက် */}
            <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F5] p-5 border border-stone-100">
              <Calendar className="mt-1 h-5 w-5 shrink-0 text-[#B08C4A]" />
              <div>
                <h3 className="font-medium text-stone-800">နေ့ရက်နှင့် အချိန်</h3>
                <p className="mt-1 text-sm text-stone-600">
                  ၂၀၂၆ ခုနှစ်၊ ဒီဇင်ဘာလ ၅ ရက် (စနေနေ့)
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-stone-500">
                  <Clock className="h-3.5 w-3.5 text-[#B08C4A]" />
                  <span>နံနက် ၆:၀၀ နာရီ မှ ၇:၀၀ နာရီအထိ</span>
                </div>
              </div>
            </div>

            {/* တည်နေရာ လိပ်စာ */}
            <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F5] p-5 border border-stone-100">
              <Home className="mt-1 h-5 w-5 shrink-0 text-[#B08C4A]" />
              <div>
                <h3 className="font-medium text-stone-800">ဖိတ်ကြားသည့် နေရပ်</h3>
                <p className="mt-1 text-sm font-medium text-stone-700">
                  ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  (မယိင်းကုန်စုံဆိုင်)
                </p>
                <p className="mt-2 text-xs text-stone-600">
                  မိုးနဲမြို့၊ လွိုင်မြေရပ်ကွက်
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}