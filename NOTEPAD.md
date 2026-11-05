# NOTEPAD — Progres Pembaruan Portfolio

Dipakai untuk melacak progres per fase (PRD.md bagian 10), keputusan pemilik, dan TODO(owner).
Update tiap fase. Jangan dihapus.

## Status fase

| Fase | Isi | Status |
|---|---|---|
| 0 | Audit | ✅ Selesai (5 Nov 2026) |
| 1 | Koreksi konten cepat | ✅ Selesai (5 Nov 2026) |
| 2 | Skills dan data | ✅ Selesai (5 Nov 2026) |
| 3 | Project | ✅ Selesai (5 Nov 2026) |
| 4 | Pengalaman + Pencapaian | ✅ Selesai (5 Nov 2026) |
| 5 | Kontak, sosial, dan CV | ⬜ Belum |
| 6 | Kualitas (Lighthouse, responsif) | ⬜ Belum |

## Fase 0 — Hasil audit (5 Nov 2026)

**Stack nyata**: React 19 + Vite 6, Tailwind CSS 4 (@tailwindcss/vite), framer-motion, react-icons/lucide-react.
Data proyek: GitHub API runtime (tanpa token, tanpa fallback) + 2 kartu hardcode (Neosia TC, Pinasthika).
Form: Formspree (`f/mdkzrwke`), endpoint hidup. Deploy: Vercel dari `main`, alur PR dari branch `perbaiki`.
Routing tidak dipakai (react-router-dom sempat di-import, tidak dirender).

**Baseline Lighthouse** (mobile, preview lokal): Performance 75 / Accessibility 78 / Best Practices 100 / SEO 83.
LCP 7,9 detik (hero JPG 338 KB + `loading="lazy"` di gambar LCP), CLS 0. Build bersih (JS 337 KB / gzip 108 KB).

**Secret scan: bersih.** 33 commit, tidak ada API key/token/.env/.pem pernah ke-track.

**Temuan kunci**
- Link Download CV 404 di produksi: href `/dist/file/CV_Aldo_Syahputra.pdf`, file sebenarnya di `public/file/` (benar: `/file/CV_Aldo_Syahputra.pdf`).
- Link Instagram rusak: `https://instagram/{user}` (kurang `.com`).
- Status proyek otomatis palsu: repo update ≤7 hari = "Masih Dikerjakan", selain itu "Selesai" (projects.jsx baris 92).
- `lang="en"`, tanpa meta description/Open Graph, `robots.txt` tidak ada (Vercel balas halaman NOT_FOUND).
- A11y 78: tombol hamburger tanpa nama aksesibel, 5 link ikon sosial tanpa label, tanpa landmark `<main>`, kontras gagal 33 item.
- Kode mati: `src/components/card.jsx`, `src/components/orb.jsx`, `src/App.css`, `src/css/orb.css`.
- Dependency tak terpakai: `gsap`, `@appletosolutions/reactbits`, `react-simple-animate`, `react-router-dom`, plus `three`/`@react-three/*`/`meshline`/`ogl` (hanya dipakai kode mati).

## Fase 1 — koreksi konten (5 Nov 2026)

Teks Hero sesuai PRD 6.1 (judul, subjudul tanpa "pengembang"/"...", baris pendukung fresh graduate · AI),
About ditulis ulang 2 paragraf rata kiri sesuai 6.2, ejaan HTML/JavaScript, placeholder form "Email kamu"/"Pesanmu",
meta title + description diisi. Tambahan (dicabut dari Fase 5, karena tautan mati): href CV `/dist/file/` → `/file/`
dan `alt="hero"` → `alt="Potret Aldo Syahputra"` sesuai 6.1. Build bersih.

Penyamaan bahasa UI (keputusan pemilik 5 Nov 2026) dikerjakan sebagai lanjutan di branch Fase 2:
semua label UI jadi Bahasa Indonesia. Masih tersisa: `lang="id"`, Open Graph, favicon check, `robots.txt`
(masuk SEO/Fase 6); tes tombol CV tetap Fase 5.

## Fase 2 — pemisahan data dan skills (5 Nov 2026)

Folder `src/data/` dibuat (named export semua): `profile.js`, `skills.js`, `experience.js`,
`achievements.js` (3 ekspor: awards, iprAndCertifications, publications), `projects.js` (kerangka, diisi Fase 3).
`data.jsx` lama dihapus. Skills ditata jadi 7 kelompok AGENTS §6; Next.js dan TypeScript masuk setelah
pemilik mengonfirmasi mengerjakan codelens-web (5 Nov 2026). Kode mati dihapus (card.jsx, orb.jsx,
App.css, orb.css, react.svg) + 11 dependency dibuang (three/react-three/gsap/reactbits/react-simple-animate/
react-router-dom/meshline/ogl/lucide-react); sisa 5 runtime + 1 devDep baru `eslint-plugin-react`
(alasan AGENTS §4: memperbaiki false-positive `no-unused-vars` untuk pemakaian JSX — tanpa plugin ini
`motion` selalu dianggap tak terpakai). Build bersih; lint 0 error, 1 warning lama navbar (handleScroll).

## Fase 3 — rombak bagian Project (5 Nov 2026)

`data/projects.js` diisi 8 Proyek Unggulan urut sesuai PRD §7 (nama repo diverifikasi via GitHub API:
`telogo-putri-project`, `indot5-synthesis-mdebertav3-detection`, `MountServ`, `pengenalan-emosi`,
`SearchEngineNutriFood`, `SCS_Project`, `codelens-web`, `my-portofolio`). Ringkasan kartu memakai
deskripsi repo milik pemilik sendiri. `projects.jsx` ditulis ulang: sumber data statis (GitHub API
tidak dipakai lagi — status "Selesai"/"Masih Dikerjakan" otomatis palsu dan fallback "Tidak ada
deskripsi"/"N/A" ikut hilang), kartu memuat peran, tag stack, lencana bukti, tombol bersyarat
("Kode"/"Demo" hanya bila ada tujuan), dan slot gambar placeholder netral.
Keputusan pemilik (5 Nov 2026): peran codelens-web = Front-End Developer; kartu CSC Group tampil
dengan link repo SCS_Project (izin klien aman). Status NutriFood dan codelens-web = null
(tanpa lencana) karena tidak ada bukti — jangan ditebak.

Penyesuaian setelah diskusi pemilik (5 Nov 2026): badge "Juara 1 Innovatect" TETAP di kartu
MountServ, tapi kini bisa ditautkan ke bukti (badge = `string | { text, url }`); URL postingan
Instagram prodi akan dikirim pemilik lalu diisi ke `badges[0].url`. Placeholder gambar dibuat
netral tanpa teks — untuk proyek back-end (Tlogo Putri, tanpa akses repo FE) tidak ada
janji "tangkapan layar menyusul"; Tlogo Putri tidak punya URL live (keputusan pemilik).
Tangkapan layar dikirim pemilik sebagian, satu per satu.

Deviasi sadar: (1) pengayaan GitHub API (bintang) TIDAK diimplementasi — tidak ada kriteria
penerimaan yang menuntutnya, dan data statis sudah jadi sumber kebenaran; pintu terbuka bila perlu
(tambah `lib/github.js` best-effort). (2) Bagian "Proyek Lainnya" (opsional di PRD) tidak dibuat.
Fase 3 dikerjakan di branch `fase-2` sesuai arahan pemilik (PR di-merge setelah fase ini).

## Fase 4 — bagian Pengalaman + Pencapaian & Publikasi (5 Nov 2026)

Komponen baru `experience.jsx` (3 baris dari `data/experience.js`) dan `achievements.jsx`
(2 penghargaan + 2 entri HKI/sertifikat + 1 publikasi dari `data/achievements.js`), disusun
setelah bagian Tentang sesuai urutan PRD §6. Navbar bertambah item "Pengalaman" (desktop + mobile).
Animasi stagger fade-up memakai **framer-motion** (`whileInView`) — AGENTS §9 menetapkan
framer-motion; markup `data-aos` di PRD §6.3 tidak dipakai (AOS tidak terpasang, tanpa dep baru).
Tombol "Lihat dokumen pendukung" (PRD §6.6) sengaja belum dibuat — menunggu URL folder Google
Drive dari pemilik (TODO di bawah).

## Keputusan pemilik (5 Nov 2026)

1. Hapus semua kode mati dan dependency tak terpakai.
2. Sidebar sosial: pertahankan semua — WhatsApp (nomor tetap dipakai wa.me), Instagram (link diperbaiki), GitHub, LinkedIn, Email.
3. File `public/file/CV_Aldo_Syahputra.pdf` = CV terbaru; cukup perbaiki link-nya.
4. LinkedIn `linkedin.com/in/aldo-syahputra-87b625373` = akun benar.
5. `PRD.md`/`AGENTS.md` masuk `.gitignore` (tidak naik GitHub). Ditambah aturan `.env` pencegah kebocoran secret.
6. Semua label UI diseragamkan Bahasa Indonesia, termasuk tombol hero "Unduh CV"/"Hubungi Saya" — PRD 6.1 menulis tombol
   itu dalam Inggris; deviasi ini disadari dan dicatat.

## TODO(owner) tersisa

- URL folder Google Drive bukti (sertifikat, penghargaan, HKI).
- Jumlah tim peserta Innovatect dan Technovation (bila diketahui).
- Nama skema BNSP persis, nama LSP, dan status akreditasi SINTA jurnal (jika boleh diklaim).
- Ganti nama repo `SCS_Project` → "CSC" (opsional; kartu sudah tampil dengan nama "CSC Group Website").
- ~~Peran di `codelens-web`~~ → sudah dikonfirmasi: Front-End Developer.
- Status repo `AyamKuy`, `manajemen-pengeluaran`, `InspeksiMobilJogja`, `digitalisasi-surat`, `stickersukicau` (layak tampil / milik klien / belum matang).
- Screenshot proyek (dikirim pemilik menyusul, satu per satu) untuk proyek yang punya UI. ✅ 4/6: `portofolio.png`, `codelens-web.png`, `mountserv.png`, `pengenalan-emosi.png` (di `img/proyek/`). Catatan: PNG 1,58 MB — perlu dikompres/webp saat Fase 6 (anggaran gambar).
- Folder Google Drive dokumen pendukung (PRD 6.6) — bisa menampung file bukti IG di atas.
- ~~URL postingan IG Innovatect~~ → sudah dipasang: `https://www.instagram.com/p/C8HYT82SPAk/` (bukti: pengumuman resmi @siunjaya "Juara 1 Tim 11 - Mountserv" + dokumentasi penerimaan hadiah).
- Angka dampak (jumlah halaman, skor Lighthouse per proyek) bila sudah diukur.
- Apakah akun Instagram `aldosyhptraa` layak ditampilkan sebagai kontak profesional.
