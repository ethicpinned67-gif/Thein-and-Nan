"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function WeddingGift() {
  return (
    <section className="bg-[#FAF7F2] px-4 py-16 text-center sm:px-6 sm:py-20">
      <div className="mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* အလှ Icon */}
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
            <Gift className="h-6 w-6" />
          </div>

          <h2 className="text-xl font-bold tracking-wide text-stone-900 sm:text-2xl">
            မင်္ဂလာလက်ဖွဲ့
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">
            မင်္ဂလာမောင်နှံအား မင်္ဂလာလက်ဖွဲ့ မေတ္တာလက်ဆောင် ပေးပို့လိုပါက KBZPay ဖြင့် scan ဖတ်၍ ပေးပို့နိုင်ပါသည်။
          </p>

          <div className="my-5 mx-auto h-0.5 w-10 bg-amber-600/30 rounded-full" />

          {/* KBZPay QR ပုံအကွက် */}
          <div className="mx-auto max-w-[260px] overflow-hidden rounded-2xl border border-stone-200 shadow-md">
            <Image
              src="/kbzpay-qr.jpg"
              alt="KBZPay QR Code"
              width={400}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mt-4 text-xs font-medium text-stone-500">
            DAW NANG SU MYAT HTWE[cite: 5]
          </p>
        </motion.div>
      </div>
    </section>
  );
}