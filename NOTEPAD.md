# NOTEPAD — Progres Pembaruan Portfolio

Dipakai untuk melacak progres per fase (PRD.md bagian 10), keputusan pemilik, dan TODO(owner).
Update tiap fase. Jangan dihapus.

## Status fase

| Fase | Isi | Status |
|---|---|---|
| 0 | Audit | ✅ Selesai (5 Nov 2026) |
| 1 | Koreksi konten cepat | ⬜ Belum |
| 2 | Skills dan data | ⬜ Belum |
| 3 | Project | ⬜ Belum |
| 4 | Bagian baru (Pengalaman, Pencapaian) | ⬜ Belum |
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

## Keputusan pemilik (5 Nov 2026)

1. Hapus semua kode mati dan dependency tak terpakai.
2. Sidebar sosial: pertahankan semua — WhatsApp (nomor tetap dipakai wa.me), Instagram (link diperbaiki), GitHub, LinkedIn, Email.
3. File `public/file/CV_Aldo_Syahputra.pdf` = CV terbaru; cukup perbaiki link-nya.
4. LinkedIn `linkedin.com/in/aldo-syahputra-87b625373` = akun benar.
5. `PRD.md`/`AGENTS.md` masuk `.gitignore` (tidak naik GitHub). Ditambah aturan `.env` pencegah kebocoran secret.

## TODO(owner) tersisa

- URL folder Google Drive bukti (sertifikat, penghargaan, HKI).
- Jumlah tim peserta Innovatect dan Technovation (bila diketahui).
- Nama skema BNSP persis, nama LSP, dan status akreditasi SINTA jurnal (jika boleh diklaim).
- Izin klien CSC untuk repo `SCS_Project` + keputusan penamaan.
- Konfirmasi peran di `codelens-web` (menentukan Next.js/TypeScript muncul di Skills).
- Status repo `AyamKuy`, `manajemen-pengeluaran`, `InspeksiMobilJogja`, `digitalisasi-surat`, `stickersukicau` (layak tampil / milik klien / belum matang).
- Screenshot atau link demo untuk proyek unggulan.
- Angka dampak (jumlah halaman, skor Lighthouse per proyek) bila sudah diukur.
- Apakah akun Instagram `aldosyhptraa` layak ditampilkan sebagai kontak profesional.
