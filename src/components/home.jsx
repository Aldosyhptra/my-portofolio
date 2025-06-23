import { motion } from 'framer-motion';
import dataPribadi from '../data';

export default function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-700 px-10 md:px-0 pt-25 mb-10 md:mb-0 md:pt-0 text-start flex flex-col md:flex-row items-center justify-center w-full h-full md:h-screen mx-auto overflow-hidden"
    >
      <motion.img
        src="img/gambaraldo.jpg"
        alt="hero"
        className="md:w-[50vw] w-50 h-100 md:h-screen object-cover rounded-2xl md:rounded-none shadow h"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        loading="lazy"
      />

      <motion.div
        className="md:w-[50vw] mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="mx-auto md:w-[30vw]">
          <p className="text-xl text-center md:text-start md:text-4xl font-bold mb-4">
            Hi, I'm {dataPribadi.name}
          </p>
          <p className="text-base md:text-lg text-gray-300 text-justify max-w-2xl">
            Hi! Saya seorang pengembang {dataPribadi.role} yang senang membangun antarmuka web yang bersih, cepat, dan intuitif. Saya telah bekerja dengan React, Next.js, Vue, Tailwind CSS, Bootstrap CSS, dan senang menjelajahi alat-alat baru untuk meningkatkan pengalaman pengguna.
          </p>

          <motion.div
            className="flex sflex-row gap-4 mt-6 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            <a href="#project">
              <button className="bg-white border-white border text-black px-8 py-3 transform hover:scale-105 hover:text-white hover:border-black hover:bg-black transition-all duration-300">
                My Project
              </button>
            </a>
            <a href="#contact">
              <button className="bg-transparent border-white border text-white px-8 py-3 transform hover:scale-105 hover:text-black hover:bg-white transition-all duration-300">
                Contact Me
              </button>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
