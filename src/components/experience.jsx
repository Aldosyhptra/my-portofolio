import { motion } from "framer-motion";
import SectionHeader from "./section-header.jsx";
import { experiences } from "../data/experience.js";

// Timeline vertikal (restyle arah A): garis + titik; titik berdenyut untuk posisi berjalan.
export default function Experience() {
  return (
    <section id="pengalaman" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader num="02" title="Pengalaman Kerja" />
        <div className="relative ml-2 border-l border-white/10 pl-6 md:pl-8 space-y-5">
          {experiences.map((exp, i) => {
            const berjalan = exp.period.includes("sekarang");
            return (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Titik timeline, ditempatkan tepat di atas garis vertikal */}
                <span
                  aria-hidden="true"
                  className={
                    "absolute -left-[30px] md:-left-[38px] top-2 w-3 h-3 rounded-full border-2 " +
                    (berjalan
                      ? "bg-accent-500 border-accent-300 motion-safe:animate-pulse"
                      : "bg-zinc-700 border-zinc-500")
                  }
                />
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 shadow-lg hover:border-accent-400/40 transition-colors">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                    <span className="text-sm text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-accent-400 mb-2">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                  <ul className="text-sm text-zinc-400 list-disc pl-5 space-y-1">
                    {exp.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {exp.note && <p className="text-xs text-zinc-500 mt-2">{exp.note}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
