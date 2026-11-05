import { motion } from "framer-motion";
import { awards, iprAndCertifications, publications } from "../data/achievements.js";

function AchievementCard({ label, title, meta, url, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-100 rounded-xl p-4 shadow-lg"
    >
      <p className="text-xs font-semibold text-blue-700 mb-1">{label}</p>
      <h3 className="font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-600">{meta}</p>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
          Lihat →
        </a>
      )}
    </motion.div>
  );
}

export default function Achievements() {
  // TODO(owner): tombol "Lihat dokumen pendukung" (PRD 6.6) — tampilkan setelah URL folder Google Drive tersedia.
  const cards = [
    ...awards.map((a) => ({ label: "Penghargaan", title: a.title, meta: `${a.project} · ${a.year}` })),
    ...iprAndCertifications.map((c) => ({
      label: "HKI & Sertifikat",
      title: c.count ? `${c.count}× ${c.certificate}` : c.certificate,
      meta: [c.project, c.period].filter(Boolean).join(" · "),
    })),
    ...publications.map((p) => ({ label: "Publikasi", title: p.title, meta: `${p.journal} · ${p.year}`, url: p.url })),
  ];

  return (
    <section id="pencapaian" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Pencapaian & Publikasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <AchievementCard key={c.title} {...c} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
