import { HiTrophy, HiWrenchScrewdriver } from "react-icons/hi2";
import SectionHeader from "./section-header.jsx";
import { projects } from "../data/projects.js";

// Kartu proyek unggulan — data statis dari data/projects.js, tanpa GitHub API.
// Restyle arah A: surface gelap, chrome browser palsu, rasio gambar terkunci.
function ProjectCard({ project }) {
  const { title, role, summary, stack, badges, repo, demo, image, status } = project;
  const host = repo ? new URL(repo).hostname : "";
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-accent-500/10">
      {/* Gambar: bar chrome + rasio 16/10 supaya semua kartu seragam seperti mockup */}
      <div>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-zinc-900">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" aria-hidden="true" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" aria-hidden="true" />
          {host && <span className="ml-2 truncate text-[10px] font-mono text-zinc-500">{host}</span>}
        </div>
        {image ? (
          <img
            src={image}
            alt={`Tampilan ${title}`}
            className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-[16/10] bg-zinc-800" aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-display text-lg text-white font-semibold">{title}</h3>
        <p className="text-xs font-semibold text-accent-400 mb-1">{role}</p>
        <p className="text-zinc-400 text-sm mb-3">{summary}</p>

        {stack.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {stack.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-xs rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-accent-400/50 hover:text-accent-300"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {badges.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {badges.map((b) => {
              const text = typeof b === "string" ? b : b.text;
              const url = typeof b === "string" ? null : b.url;
              const cls =
                "inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 font-semibold";
              return url ? (
                <a key={text} href={url} target="_blank" rel="noopener noreferrer" className={`${cls} hover:underline`} title="Lihat bukti">
                  <HiTrophy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {text}
                </a>
              ) : (
                <span key={text} className={cls}>
                  <HiTrophy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {text}
                </span>
              );
            })}
          </div>
        )}

        {/* Hanya "masih dikerjakan" yang dirender — semua kartu "selesai" = informasi nol */}
        {status && status !== "selesai" && (
          <span className="w-fit mb-3 inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded border border-yellow-400/30 bg-yellow-400/10 text-yellow-300">
            <HiWrenchScrewdriver className="w-3.5 h-3.5" aria-hidden="true" />
            Masih dikerjakan
          </span>
        )}

        <div className="mt-auto pt-3 flex gap-3">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-400 hover:underline text-sm font-medium">
              Kode →
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-400 hover:underline text-sm font-medium">
              Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="project" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader num="04" title="Proyek Unggulan" />
        {featured.length === 0 ? (
          <p className="text-center text-gray-400">Belum ada proyek untuk ditampilkan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
