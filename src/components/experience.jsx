import { motion } from "framer-motion";
import { experiences } from "../data/experience.js";

// Baris pengalaman — stagger fade-up saat masuk viewport (framer-motion, sesuai AGENTS §9).
export default function Experience() {
  return (
    <section id="pengalaman" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Pengalaman Kerja</h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-100 rounded-xl p-4 shadow-lg"
            >
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h3 className="font-semibold text-black">{exp.role}</h3>
                <span className="text-sm text-gray-600">{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-blue-700 mb-2">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                {exp.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {exp.note && <p className="text-xs text-gray-600 mt-2">{exp.note}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
