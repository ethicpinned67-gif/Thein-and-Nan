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

          {/* ထိပ်စီး ခေါင်းစဉ် */}
          <h2 className="text-2xl font-bold tracking-wider text-stone-900 sm:text-3xl">
            မင်္ဂလာဧည့်ခံပွဲ ဖိတ်ကြားလွှာ
          </h2>

          <div className="my-6 mx-auto h-0.5 w-12 bg-stone-800" />

          {/* သတို့သားဘက် မိဘအမည်များနှင့် နေရပ် */}
          <div className="space-y-1 text-sm text-stone-700 sm:text-base">
            <p className="font-semibold text-stone-900">
              ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း
            </p>
            <p className="text-xs text-stone-600 sm:text-sm">
              (မယိင်းကုန်စုံဆိုင်)
            </p>
            <p className="text-xs text-stone-500 sm:text-sm">
              မိုးနဲမြို့၊ လွိုင်မြေရပ်ကွက်
            </p>
            <p className="pt-2 text-xs text-stone-600">
              တို့၏ သား
            </p>
          </div>

          {/* သတို့သား အမည် */}
          <div className="my-4">
            <h3 className="text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl">
              Thein Aye Maung
            </h3>
          </div>

          <p className="my-2 text-sm font-medium text-stone-600">
            နှင့်
          </p>

          {/* သတို့သမီးဘက် မိဘအမည်များ */}
          <div className="space-y-1 text-sm text-stone-700 sm:text-base">
            <p className="font-semibold text-stone-900">
              ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း
            </p>
            <p className="text-xs text-stone-600 sm:text-sm">
              (မယိင်းကုန်စုံဆိုင်)၊ မိုးနဲမြို့
            </p>
            <p className="pt-2 text-xs text-stone-600">
              တို့၏ သမီး
            </p>
          </div>

          {/* သတို့သမီး အမည် */}
          <div className="my-4">
            <h3 className="text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl">
              Nan Su Myat Htwe
            </h3>
          </div>

          {/* ဖိတ်ကြားလွှာ အောက်ခြေ စာသား */}
          <p className="mt-8 text-xs leading-relaxed text-stone-600 sm:text-sm">
            တို့၏ မင်္ဂလာဦးဆွမ်းကျွေး ဧည့်ခံပွဲ အခမ်းအနားသို့ ကြွရောက်ချီးမြှင့်ပေးပါရန် လေးစားစွာ ဖိတ်ကြားအပ်ပါသည်။
          </p>

          <div className="mt-6 border-t border-stone-200 pt-4 text-xs text-stone-500 sm:text-sm">
            <p className="font-medium text-stone-800">၂၀၂၆ ခုနှစ်၊ ဒီဇင်ဘာလ ၅ ရက် (စနေနေ့)</p>
            <p className="mt-0.5">နံနက် ၆:၀၀ နာရီ မှ ၇:၀၀ နာရီအထိ</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}