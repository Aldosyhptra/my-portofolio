import dataPribadi from '../data';
import { FaReact, FaVuejs, FaLaravel, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiBootstrap, SiTailwindcss } from 'react-icons/si';


export default function About() {
    const skills = [
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 65 },
    { name: 'Vue.js', level: 65 },
    { name: 'Laravel', level: 70 },
    { name: 'Python', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Bootstrap CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
  ];

  return (
    <section id="about" className="bg-gray-900 w-full mx-auto py-10 px-10 md:px-0 h-full flex flex-col gap-10 items-center justify-center">

      <div>
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-gray-300 max-w-3xl text-justify mx-auto">Hi! Aku {dataPribadi.name}, mahasiswa yang lagi menempuh studi di Universitas Achmad Yani Yogyakarta dengan jurusan Sistem Informasi dan saat ini lagi fokus banget memperdalam dunia {dataPribadi.role}. Aku suka bikin tampilan web yang nggak cuma enak dilihat, tapi juga nyaman dipakai.

        Dunia coding buatku seperti puzzle yang seru, apalagi ketika bisa nyatuin desain dan fungsi jadi satu tampilan yang utuh. Aku biasa pakai React, Tailwind CSS, dan sekarang lagi rajin eksplor hal-hal baru di dunia web development.

        Walaupun masih mahasiswa, aku semangat banget buat belajar langsung di dunia industri. Aku lagi nyari kesempatan magang buat nambah pengalaman, belajar kerja tim, dan tentunya nerusin passion-ku di bidang teknologi.</p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-2 text-center">Bahasa & Teknologi yang Dikuasai</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-white">
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <FaReact className="w-10 h-10 text-cyan-400 " />
            <span className="mt-2">React</span>
          </div>
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <SiNextdotjs className="w-10 h-10 text-white" />
            <span className="mt-2">Next.js</span>
          </div>
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <FaVuejs className="w-10 h-10 text-green-500" />
            <span className="mt-2">Vue.js</span>
          </div>
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <FaLaravel className="w-10 h-10 text-red-500" />
            <span className="mt-2">Laravel</span>
          </div>
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <FaPython className="w-10 h-10 text-yellow-300" />
            <span className="mt-2">Python</span>
          </div>
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <SiBootstrap className="w-10 h-10 text-yellow-300" />
            <span className="mt-2">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center transform transition-all hover:scale-105">
            <SiTailwindcss className="w-10 h-10 text-yellow-300" />
            <span className="mt-2">Tailwind CSS</span>
          </div>
        </div>
      </div>

    </section>
  );
}
