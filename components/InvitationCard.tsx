"use client";

import { motion } from "framer-motion";

export default function InvitationCard() {
  return (
    <section className="bg-[#FAF8F5] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg border-2 border-stone-800 bg-white px-6 py-12 text-center shadow-md sm:px-12 sm:py-16"
        >
          {/* အပြင်ဘောင် အလှလိုင်း (Double border effect) */}
          <div className="pointer-events-none absolute inset-1.5 border border-stone-300" />

          {/* ခေါင်းစဉ် */}
          <h2 className="text-2xl font-bold tracking-wider text-stone-900 sm:text-3xl">
            မင်္ဂလာဧည့်ခံပွဲ ဖိတ်ကြားလွှာ
          </h2>

          <div className="my-6 mx-auto h-0.5 w-12 bg-stone-800" />

          {/* သတို့သားဘက် အချက်အလက်များ */}
          <div className="space-y-1 text-sm text-stone-700 sm:text-base">
            <p className="text-xs text-stone-500 sm:text-sm">
              မကွေးတိုင်းဒေသကြီး၊ မြိုင်မြို့နယ်၊ ကျောက်ကန်ကျေးရွာနေ
            </p>
            <p className="font-semibold text-stone-900">
              ဦးကောက် + ဒေါ်သိန်းလှိုင် တို့၏သား
            </p>
            <p className="text-xs text-stone-600 sm:text-sm">
              ဦးဇေယျာမိုး + ဒေါ်ခင်စန်းတင့် တို့၏ ညီ
            </p>
          </div>

          {/* သတို့သား အမည် */}
          <div className="my-4">
            <h3 className="text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl">
              သိန်းအေးမောင်
            </h3>
          </div>

          <p className="my-3 text-sm font-medium text-stone-600">
            နှင့်
          </p>

          {/* သတို့သမီးဘက် အချက်အလက်များ */}
          <div className="space-y-1 text-sm text-stone-700 sm:text-base">
            <p className="text-xs text-stone-500 sm:text-sm">
              ရှမ်းပြည်နယ်တောင်ပိုင်း၊ မိုးနဲမြို့နယ်၊ လွိုင်မြေရပ်ကွက်နေ
            </p>
            <p className="font-semibold text-stone-900">
              ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း တို့၏ သမီး
            </p>
            <p className="text-xs text-stone-600 sm:text-sm">
              စိုင်းညီညီထွေး၏ အမ
            </p>
          </div>

          {/* သတို့သမီး အမည် */}
          <div className="my-4">
            <h3 className="text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl">
              နန်းစုမြတ်ထွေး
            </h3>
          </div>

          {/* ဖိတ်ကြားစာသား */}
          <p className="mt-8 text-xs leading-relaxed text-stone-600 sm:text-sm">
            တို့၏ မင်္ဂလာဦးဆွမ်းကျွေး ဧည့်ခံပွဲ အခမ်းအနားသို့ ကြွရောက်ချီးမြှင့်ပေးပါရန် လေးစားစွာ ဖိတ်ကြားအပ်ပါသည်။
          </p>

          {/* နေ့ရက်နှင့် အချိန် */}
          <div className="mt-6 border-t border-stone-200 pt-4 text-xs text-stone-500 sm:text-sm">
            <p className="font-medium text-stone-800">၂၀၂၆ ခုနှစ်၊ ဒီဇင်ဘာလ ၅ ရက် (စနေနေ့)</p>
            <p className="mt-0.5">နံနက် ၆:၀၀ နာရီ မှ ၇:၀၀ နာရီအထိ</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}