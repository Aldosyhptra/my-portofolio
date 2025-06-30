import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Aldosyhptra/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork);
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

    if (loading) {
    return (
      <section className="py-10 bg-gray-700 flex items-center justify-center h-64">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-10 w-10 text-white mb-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <p className="text-white text-sm">Memuat proyek dari GitHub...</p>
        </div>
      </section>
    );
  }

    return (
    <section id="project" className="py-10 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Project Saya di GitHub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.slice(1).map((repo) => {
            const lastUpdate = new Date(repo.updated_at);
            const daysAgo = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
            const status = daysAgo <= 7 ? "in-progress" : "done";

            return (
              <div
                key={repo.id}
                className="bg-gray-100 flex flex-col shadow-lg rounded-xl p-4 hover:shadow-xl transition group hover:bg-white"
              >
                <h3 className="px-2 text-lg text-black font-semibold group-hover:scale-103 transform transition-all">{repo.name}</h3>
                <p className="px-2 text-gray-600 text-sm mb-2 group-hover:scale-101 transform transition-all">
                  {repo.description || "Tidak ada deskripsi"}
                </p>
                <p className="px-2 text-xs text-gray-500 mb-1 group-hover:scale-101 transform transition-all">
                  🛠️ {repo.language || "N/A"}
                </p>

                <span
                  className={`w-fit px-2 py-1 text-xs font-semibold rounded group-hover:scale-102 transform transition-all ${
                    status === "in-progress"
                      ? "bg-yellow-200 text-yellow-800 "
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {status === "in-progress" ? "🚧 Masih Dikerjakan" : "✅ Selesai"}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-2 text-blue-600 hover:underline text-sm group-hover:scale-105 transform transition-all"
                >
                  Lihat di GitHub →
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

