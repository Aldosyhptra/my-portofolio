// Header section seragam: nomor mono + judul display, rata kiri (restyle arah A).
export default function SectionHeader({ num, title, desc }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="font-mono text-sm tracking-widest text-accent-400 mb-1">{num}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {desc && <p className="text-zinc-400 mt-2 max-w-2xl">{desc}</p>}
    </div>
  );
}