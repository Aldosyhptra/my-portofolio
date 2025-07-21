import { motion } from 'framer-motion';
import dataPribadi from '../data';
import Orb from './orb';

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-gray-700 to-black px-10 md:px-0 pt-25 mb-10 md:mb-0 md:pt-0 text-start w-full h-full md:h-screen mx-auto overflow-hidden"
    >
      {/* Orb background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Orb />
      </div>

      {/* Blur layer di atas Orb */}
      <div className="absolute w-full inset-0 z-[5] pointer-events-none flex justify-center items-center">
        <div className="w-full h-[100%] backdrop-blur-md bg-white/5 rounded-xl" />
      </div>

      {/* Kontainer Flex utama */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full z-10">
        {/* Konten Kiri */}
        <motion.div
          className="md:w-[50vw] mt-10 md:mt-0 order-1 md:order-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="mx-auto md:w-[30vw]">
            <p className="text-xl text-center md:text-start md:text-4xl font-bold mb-4 text-white">
              Hi, I'm {dataPribadi.name}
            </p>
            <p className="text-base md:text-lg text-gray-300 text-justify max-w-2xl">
              Hi! Saya seorang pengembang {dataPribadi.role} yang senang membangun antarmuka web yang bersih, cepat, dan intuitif...
            </p>

            <motion.div
              className="flex flex-row justify-center items-center md:justify-start md:items-start gap-4 mt-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
              <a href="/file/CV_Aldo_Syahputra.pdf" download>
                <button className="bg-white border-white border text-black px-8 py-3 transform hover:scale-105 hover:text-white hover:border-black hover:bg-black transition-all duration-300">
                  Download CV
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

        {/* Gambar Kanan */}
        <motion.img
          src="img/gambaraldo.jpg"
          alt="hero"
          className="md:w-[50vw] w-50 h-50 md:h-screen object-center object-cover rounded-2xl md:rounded-none shadow order-0 md:order-1 select-none"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
