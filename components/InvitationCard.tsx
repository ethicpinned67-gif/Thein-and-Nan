"use client";

import { motion } from "framer-motion";

// အပြင်ဘောင် စတင်ပေါ်လာပြီးနောက် စာသားများကို တစ်ကြောင်းပြီးတစ်ကြောင်း ၀.၁၅ စက္ကန့်စီ ခြား၍ ဖော်ပြပေးမည့် logic
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15, // စာသားတစ်ခုနှင့်တစ်ခု ကြား ခြားပေးမည့် အချိန်
      delayChildren: 0.2,
    },
  },
};

// စာကြောင်းတစ်ကြောင်းချင်းစီ အောက်မှ အပေါ်သို့ ညင်သာစွာ ကြွတက်လာမည့် animation
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function InvitationCard() {
  return (
    <section className="bg-[#FAF8F5] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-xl">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-lg border-2 border-stone-800 bg-white px-6 py-12 text-center shadow-md sm:px-12 sm:py-16"
        >
          {/* အပြင်ဘောင် အလှလိုင်း (Double border effect) */}
          <div className="pointer-events-none absolute inset-1.5 border border-stone-300" />

          {/* ခေါင်းစဉ် */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold tracking-wider text-stone-900 sm:text-3xl"
          >
            မင်္ဂလာဧည့်ခံပွဲ ဖိတ်ကြားလွှာ
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="my-6 mx-auto h-0.5 w-12 bg-stone-800"
          />

          {/* သတို့သားဘက် အချက်အလက်များ */}
          <motion.div
            variants={itemVariants}
            className="space-y-1 text-sm text-stone-700 sm:text-base"
          >
            <p className="text-xs text-stone-500 sm:text-sm">
              မကွေးတိုင်းဒေသကြီး၊ မြိုင်မြို့နယ်၊ ကျောက်ကန်ကျေးရွာနေ
            </p>
            <p className="font-semibold text-stone-900">
              ဦးကောက် + ဒေါ်သိန်းလှိုင် တို့၏သား
            </p>
            <p className="text-xs text-stone-600 sm:text-sm">
              ဦးဇေယျာမိုး + ဒေါ်ခင်စန်းတင့် တို့၏ ညီ
            </p>
          </motion.div>

          {/* သတို့သား အမည် */}
          <motion.div variants={itemVariants} className="my-4">
            <h3 className="text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl">
              မောင်သိန်းအေးမောင်
            </h3>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="my-3 text-sm font-medium text-stone-600"
          >
            နှင့်
          </motion.p>

          {/* သတို့သမီးဘက် အချက်အလက်များ */}
          <motion.div
            variants={itemVariants}
            className="space-y-1 text-sm text-stone-700 sm:text-base"
          >
            <p className="text-xs text-stone-500 sm:text-sm">
              ရှမ်းပြည်နယ်တောင်ပိုင်း၊ မိုးနဲမြို့နယ်၊ လွိုင်မြေရပ်ကွက်နေ
            </p>
            <p className="font-semibold text-stone-900">
              ဦးငယ်ငယ်ထွေး + ဒေါ်ခင်ကြည်ဝင်း တို့၏ သမီး
            </p>
            <p className="text-xs text-stone-600 sm:text-sm">
              စိုင်းညီညီထွေး၏ အမ
            </p>
          </motion.div>

          {/* သတို့သမီး အမည် */}
          <motion.div variants={itemVariants} className="my-4">
            <h3 className="text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl">
              နန်းစုမြတ်ထွေး
            </h3>
          </motion.div>

          {/* ဖိတ်ကြားစာသား */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-xs leading-relaxed text-stone-600 sm:text-sm"
          >
            တို့၏ မင်္ဂလာဦးဆွမ်းကျွေး ဧည့်ခံပွဲ အခမ်းအနားသို့ ကြွရောက်ချီးမြှင့်ပေးပါရန် လေးစားစွာ ဖိတ်ကြားအပ်ပါသည်။
          </motion.p>

          {/* နေ့ရက်နှင့် အချိန် */}
          <motion.div
            variants={itemVariants}
            className="mt-6 border-t border-stone-200 pt-4 text-xs text-stone-500 sm:text-sm"
          >
            <p className="font-medium text-stone-800">
              ၂၀၂၆ ခုနှစ်၊ ဒီဇင်ဘာလ ၅ ရက် (စနေနေ့)
            </p>
            <p className="mt-0.5">နံနက် ၆:၀၀ နာရီ မှ ၇:၀၀ နာရီအထိ</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}