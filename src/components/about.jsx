import { motion } from 'framer-motion';
import SectionHeader from './section-header.jsx';
import { skillGroups, coreStack } from '../data/skills.js';
import {
  FaHtml5, FaCss3, FaPython, FaFlask, FaReact, FaVuejs, FaLaravel, FaDatabase,
  FaGit, FaGithub, FaGitlab, FaMobileAlt, FaServer, FaSearch, FaRobot, FaBrain,
  FaChartLine, FaLanguage, FaPaperPlane, FaCode,
} from 'react-icons/fa';
import { SiJavascript, SiBootstrap, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

// Peta ikon per teknologi; yang tidak punya ikon resmi memakai ikon generik (FaCode).
const iconMap = {
  "HTML": FaHtml5,
  "CSS": FaCss3,
  "JavaScript": SiJavascript,
  "Bootstrap": SiBootstrap,
  "Tailwind CSS": SiTailwindcss,
  "Laravel Blade": FaLaravel,
  "Jinja": FaPython,
  "Responsive Web Design": FaMobileAlt,
  "React (Vite)": FaReact,
  "Vue.js": FaVuejs,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Laravel (PHP)": FaLaravel,
  "Flask (Python)": FaFlask,
  "REST API": FaServer,
  "Web Scraping": FaSearch,
  "MySQL": FaDatabase,
  "MongoDB": FaDatabase,
  "OpenAI API Integration": FaRobot,
  "Prompt Engineering": FaBrain,
  "Python": FaPython,
  "Hugging Face Transformers": FaCode,
  "scikit-learn": FaChartLine,
  "Git": FaGit,
  "GitHub": FaGithub,
  "GitLab": FaGitlab,
  "Postman": FaPaperPlane,
  "Indonesia (native)": FaLanguage,
};


// Stagger: kontainer mengatur urutan, tiap item memakai variant yang sama.
const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const itemIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

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
        <SectionHeader num="01" title="Tentang Saya" />
        <p className="text-gray-300 max-w-3xl mx-auto mb-4">
          Fresh graduate Sistem Informasi Universitas Jenderal Achmad Yani dengan fokus pada pengembangan front-end web dan ketertarikan pada integrasi AI. Saya menikmati menyatukan desain dan fungsi menjadi tampilan yang rapi dan nyaman dipakai.
        </p>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Pengalaman saya mencakup magang, proyek klien freelance, serta proyek expo kampus dan riset. Saat ini saya mencari kesempatan magang atau posisi junior untuk memperdalam pengalaman di dunia industri.
        </p>
      </div>
      </motion.div>

      <div className="md:w-[50vw] mt-10 md:mt-0">

                {/* Stack utama dengan bukti pemakaian di proyek nyata */}
                <div className="w-full max-w-3xl mx-auto mb-8">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">Stack utama</h3>
                  <motion.div
                    variants={listStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
                  >
                    {coreStack.map(({ item, evidence }) => {
                      const Icon = iconMap[item] || FaCode;
                      return (
                        <motion.div variants={itemIn} key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 px-3 py-2.5 hover:border-accent-400/40 transition-colors">
                          <Icon aria-hidden="true" className="w-6 h-6 text-accent-400 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white truncate">{item}</p>
                            <p className="text-[11px] leading-snug text-zinc-500">{evidence}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Kelompok pendukung */}
                {skillGroups.map((group) => (
                  <div key={group.label} className="w-full max-w-3xl mx-auto mb-8">
                    <h3 className="font-display text-base font-semibold text-white mb-3">{group.label}</h3>
                    <motion.div
                      variants={listStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="flex flex-wrap gap-2"
                    >
                      {group.items.map((item) => {
                        const Icon = iconMap[item] || FaCode;
                        return (
                          <motion.div variants={itemIn} key={item} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 transition-colors">
                            <Icon aria-hidden="true" className="w-4 h-4 text-accent-400 shrink-0" />
                            <span className="text-sm text-white">{item}</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                ))}

      </div>

    </section>
  );
}
