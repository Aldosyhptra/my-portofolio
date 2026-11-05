import dataPribadi from '../data';
import { motion } from 'framer-motion';
import { FaReact, FaVuejs, FaLaravel, FaPython, FaHtml5, FaCss3, FaFlask } from 'react-icons/fa';
import { SiNextdotjs, SiBootstrap, SiTailwindcss, SiJavascript } from 'react-icons/si';


export default function About() {

  return (
    <section id="about" className=" w-full mx-auto py-10 md:py-20 px-10 md:px-0 h-full flex flex-col gap-10 items-center justify-center">
      <motion.div
        className="md:w-[50vw] mt-10 md:mt-0"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
      <div>
        <span className="flex items-center mb-5 md:mb-10">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="shrink-0 px-4 text-white text-xl md:text-3xl">Tentang Saya</span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>
        <p className="text-gray-300 max-w-3xl mx-auto mb-4">
          Fresh graduate Sistem Informasi Universitas Jenderal Achmad Yani dengan fokus pada pengembangan front-end web dan ketertarikan pada integrasi AI. Saya menikmati menyatukan desain dan fungsi menjadi tampilan yang rapi dan nyaman dipakai.
        </p>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Pengalaman saya mencakup magang, proyek klien freelance, serta proyek kompetisi dan riset di kampus. Saat ini saya mencari kesempatan magang atau posisi junior untuk memperdalam pengalaman di dunia industri.
        </p>
      </div>
      </motion.div>

      <motion.div
        className="md:w-[50vw] mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >

        <div className="w-full max-w-3xl mx-auto md:mb-10 mb-15 ">
          <h3 className="text-xl font-semibold mb-2 text-center">Bahasa & Teknologi Yang Dikuasai</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-white">
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaHtml5 className="w-10 h-10 text-cyan-400 " />
              <span className="mt-2 transition-transform group-hover:scale-110">HTML</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaCss3 className="w-10 h-10 text-white transition-transform" />
              <span className="mt-2 transition-transform group-hover:scale-110">CSS</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <SiJavascript className="w-10 h-10 text-yellow-300" />
              <span className="mt-2 transition-transform group-hover:scale-110">JavaScript</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaPython className="w-10 h-10 text-yellow-300 transition-transform" />
              <span className="mt-2 transition-transform group-hover:scale-110">Python</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaFlask className="w-10 h-10 text-yellow-300 transition-transform" />
              <span className="mt-2 transition-transform group-hover:scale-110">Flask</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <SiBootstrap className="w-10 h-10 text-yellow-300" />
              <span className="mt-2 transition-transform group-hover:scale-110">Bootstrap</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <SiTailwindcss className="w-10 h-10 text-yellow-300" />
              <span className="mt-2 transition-transform group-hover:scale-110">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-center">Bahasa & Teknologi Yang Saat Ini Sedang Dipelajari</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-white">
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaReact className="w-10 h-10 text-cyan-400 " />
              <span className="mt-2 transition-transform group-hover:scale-110">React</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <SiNextdotjs className="w-10 h-10 text-white" />
              <span className="mt-2 transition-transform group-hover:scale-110">Next.js</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaVuejs className="w-10 h-10 text-green-500" />
              <span className="mt-2 transition-transform group-hover:scale-110">Vue.js</span>
            </div>
            <div className="group flex flex-col items-center transition-all transform hover:scale-105">
              <FaLaravel className="w-10 h-10 text-red-500" />
              <span className="mt-2 transition-transform group-hover:scale-110">Laravel</span>
            </div>
          </div>
        </div>

      </motion.div>

    </section>
  );
}
