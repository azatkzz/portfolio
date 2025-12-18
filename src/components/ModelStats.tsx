"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Height", value: "188cm" },
  { label: "Chest", value: "96cm" },
  { label: "Waist", value: "76cm" },
  { label: "Hips", value: "94cm" },
  { label: "Shoes", value: "44 EU" },
  { label: "Eyes", value: "Brown" },
  { label: "Hair", value: "Dark Brown" },
]

export function ModelStats() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFCF8] relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif italic mb-16 text-center text-zinc-400"
        >
          Measurements
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400 mb-2 group-hover:text-zinc-600 transition-colors">
                {stat.label}
              </span>
              <span className="text-xl md:text-2xl font-serif text-zinc-900 border-b border-transparent group-hover:border-zinc-200 transition-colors pb-1">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

