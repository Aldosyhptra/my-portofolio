import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills.js';
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
  "Inggris (menengah)": FaLanguage,
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
        <div className="flex items-center mb-5 md:mb-10">
          <span className="h-px flex-1 bg-gray-300"></span>
          <h2 className="shrink-0 px-4 text-white text-xl md:text-3xl">Tentang Saya</h2>
          <span className="h-px flex-1 bg-gray-300"></span>
        </div>
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

                {skillGroups.map((group) => (
          <div key={group.label} className="w-full max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-2 text-center">{group.label}</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-white">
              {group.items.map((item) => {
                const Icon = iconMap[item] || FaCode;
                return (
                  <div key={item} className="group flex flex-col items-center transition-all transform hover:scale-105">
                    <Icon aria-hidden="true" className="w-10 h-10 text-cyan-400" />
                    <span className="mt-2 transition-transform group-hover:scale-110">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </motion.div>

    </section>
  );
}
