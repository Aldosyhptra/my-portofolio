// Variant reveal bersama: satu kontainer mengatur urutan, tiap anak memakai itemIn.
// Dipakai daftar skill (about) dan daftar "Proyek lainnya" (projects).
export const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export const itemIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};
