import { profile } from '../data/profile.js';

// Hero split (restyle arah A): badge open-to-work, nama gradasi aksen, foto dengan overlay gelap.
// Animasi masuk hero memakai CSS (.hero-in-*) — elemen LCP harus tampil sebelum React/framer jalan.
export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 px-10 md:px-0 pt-25 mb-10 md:mb-0 md:pt-0 text-start w-full h-full md:h-screen mx-auto overflow-hidden"
    >
      {/* Kontainer Flex utama */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full z-10">
        {/* Konten Kiri */}
        <div className="hero-in-left md:w-[50vw] mt-10 md:mt-0 order-1 md:order-0">
          <div className="mx-auto md:w-[30vw]">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-300 mb-4">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Terbuka untuk magang &amp; posisi junior front-end
            </p>
            <h1 className="text-xl text-center md:text-start md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
              Hi, saya <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">{profile.name}</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-300 max-w-2xl">
              {profile.role} yang fokus membangun antarmuka web yang rapi, fungsional, dan nyaman dipakai.
            </p>
            <p className="text-sm md:text-base text-zinc-400 mt-2 max-w-2xl">
              Fresh graduate Sistem Informasi · tertarik pada integrasi AI.
            </p>

            <div className="hero-in-up flex flex-row justify-center items-center md:justify-start md:items-start gap-4 mt-6 h-full">
              {/* Tombol langsung di <a> — <button> di dalam <a> tidak valid HTML */}
              <a
                href="/file/CV_Aldo_Syahputra.pdf"
                download
                className="rounded-lg bg-accent-600 border border-accent-500 text-white px-5 md:px-6 py-3 font-semibold whitespace-nowrap hover:bg-accent-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
              >
                Unduh CV
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 text-white px-5 md:px-6 py-3 font-semibold whitespace-nowrap hover:bg-white/10 hover:border-white/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>

        {/* Gambar Kanan — gradasi kiri menyatu ke panel teks (desktop) */}
        <div className="hero-in-right relative md:w-[50vw] w-50 h-50 md:h-screen overflow-hidden rounded-2xl md:rounded-none shadow order-0 md:order-1 select-none">
          <img
            src="img/gambaraldo.webp"
            alt="Potret Aldo Syahputra"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="hidden md:block absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
