"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, Church, UtensilsCrossed } from "lucide-react";

export default function Venue() {
  const mapUrl = "https://maps.app.goo.gl/BSdPjT4AawCFE8KZ6?g_st=iv";

  return (
    <section className="bg-[#FAF7F2] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-10"
        >
          {/* အပေါ်ခေါင်းစဉ် */}
          <div className="text-center">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-amber-700/80 uppercase">
              Wedding Ceremony & Location
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-wide text-stone-800 sm:text-3xl leading-snug">
              မင်္ဂလာအခမ်းအနားနှင့်<br />တည်နေရာ
            </h2>
            <div className="mx-auto my-5 h-0.5 w-12 bg-amber-600/30 rounded-full" />
          </div>

          <div className="mt-8 space-y-4">
            {/* နေ့ရက်နှင့် အချိန် အကွက် */}
            <div className="rounded-2xl bg-[#FBF9F5] p-5 sm:p-6 text-stone-800">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 rounded-lg bg-amber-100/70 p-2 text-amber-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    နေ့ရက်နှင့် အချိန်
                  </h3>
                  <p className="mt-1 text-sm font-medium text-stone-700 sm:text-base">
                    ၂၀၂၆ ခုနှစ်၊ ဒီဇင်ဘာလ ၅ ရက် (စနေနေ့)
                  </p>

                  {/* အချိန် ခွဲပြထားသော အပိုင်း */}
                  <div className="mt-4 space-y-2.5 border-t border-stone-200/60 pt-3.5">
                    {/* ဝတ်ပြုချိန် */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
                      <Clock className="h-4 w-4 text-amber-700 shrink-0" />
                      <span>ဝတ်ပြုချိန် - နံနက် (၆:၀၀) နာရီ မှ (၇:၀၀) နာရီ အထိ</span>
                    </div>

                    {/* ဧည့်ခံချိန် */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
                      <UtensilsCrossed className="h-4 w-4 text-amber-700 shrink-0" />
                      <span>ဧည့်ခံချိန် - နံနက် (၈:၀၀) နာရီ မှ (၁၂:၀၀) အထိ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ဖိတ်ကြားသည့် နေရပ် အကွက် */}
            <div className="rounded-2xl bg-[#FBF9F5] p-5 sm:p-6 text-stone-800">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 rounded-lg bg-amber-100/70 p-2 text-amber-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    ဖိတ်ကြားသည့် နေရပ်
                  </h3>
                  <p className="mt-1.5 font-medium text-stone-800 text-sm sm:text-base">
                    ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း (မယိင်းကုန်စုံဆိုင်)
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-stone-600">
                    ရှမ်းပြည်နယ်တောင်ပိုင်း၊ မိုးနဲမြို့၊ လွိုင်မြေရပ်ကွက်
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps လမ်းညွှန် ခလုတ် */}
          <div className="mt-8 text-center">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-xs sm:text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-stone-800 hover:shadow-lg active:scale-95"
            >
              <Navigation className="h-4 w-4" />
              <span>Google Maps ဖြင့် လမ်းညွှန်ကြည့်ရန်</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}