import { projects } from "../data/projects.js";

// Kartu proyek unggulan — data statis dari data/projects.js, tanpa GitHub API.
function ProjectCard({ project }) {
  const { title, role, summary, stack, badges, repo, demo, image, status } = project;
  return (
    <div className="bg-gray-100 flex flex-col h-full shadow-lg rounded-xl p-4 hover:shadow-xl transition group hover:bg-white">
      {/* Slot gambar — TODO(owner): sisa nutrifood & csc-group masih placeholder */}
      {image ? (
        <img
          src={image}
          alt={`Tampilan ${title}`}
          className="w-full h-40 object-cover rounded-lg mb-3"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-40 rounded-lg mb-3 bg-gray-200" aria-hidden="true" />
      )}
      <h3 className="px-2 text-lg text-black font-semibold">{title}</h3>
      <p className="px-2 text-xs font-semibold text-blue-700 mb-1">{role}</p>
      <p className="px-2 text-gray-600 text-sm mb-2">{summary}</p>

      {stack.length > 0 && (
        <div className="px-2 mb-2 flex flex-wrap gap-1">
          {stack.map((s) => (
            <span key={s} className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
              {s}
            </span>
          ))}
        </div>
      )}

      {badges.length > 0 && (
        <div className="px-2 mb-2 flex flex-wrap gap-1">
          {badges.map((b) => {
            const text = typeof b === "string" ? b : b.text;
            const url = typeof b === "string" ? null : b.url;
            const cls = "px-2 py-0.5 text-xs bg-amber-100 text-amber-800 rounded-full font-semibold";
            return url ? (
              <a
                key={text}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cls} hover:underline`}
                title="Lihat bukti"
              >
                🏆 {text}
              </a>
            ) : (
              <span key={text} className={cls}>
                🏆 {text}
              </span>
            );
          })}
        </div>
      )}

      {status && (
        <span
          className={`w-fit px-2 py-1 text-xs font-semibold rounded ${
            status === "selesai" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {status === "selesai" ? "✅ Selesai" : "🚧 Masih dikerjakan"}
        </span>
      )}

      <div className="mt-auto pt-4 px-2 flex gap-3">
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
            Kode →
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-sm">
            Demo →
          </a>
        )}
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
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Proyek Unggulan</h2>
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
