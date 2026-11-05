"use client";

import { motion } from "framer-motion";

export default function LoveNote() {
  return (
    <section className="bg-[#FAF8F5] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-[#D4AF37]/20 bg-white p-8 text-center shadow-sm sm:p-12"
        >
          {/* အသဲပုံလေး */}
          <div className="text-2xl">🤍</div>

          {/* အဓိက ခေါင်းစဉ် */}
          <h2 className="font-display mt-4 text-2xl font-light text-stone-800 sm:text-3xl">
            မေတ္တာဖြင့် အထူးကျေးဇူးတင်စွာဖြင့်
          </h2>

          <div className="my-5 mx-auto h-px w-16 bg-[#B08C4A]/40" />

          {/* ကျေးဇူးတင်စကား အပိုဒ်တို */}
          <p className="mx-auto max-w-md text-xs leading-relaxed text-stone-600 sm:text-sm sm:leading-7">
            ကျွန်ုပ်တို့၏ မင်္ဂလာအခမ်းအနားသို့ မေတ္တာစေတနာ အပြည့်ဖြင့် ကြွရောက်ချီးမြှင့်ပေးကြပါသော ချစ်ခင်လေးစားရပါသော မိဘဆွေမျိုး မိတ်သဟာယ အပေါင်းတို့အား လှိုက်လှဲစွာ အထူးကျေးဇူးတင်ရှိအပ်ပါသည်။
          </p>

          {/* အောက်ခြေ မောင်နှံစာသား */}
          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#B08C4A]">
              မေတ္တာမင်္ဂလာအဖြာဖြာဖြင့်
            </p>
            <p className="font-display mt-1 text-sm italic text-stone-700 sm:text-base">
              မောင်သိန်းအေးမောင် & နန်းစုမြတ်ထွေး
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}