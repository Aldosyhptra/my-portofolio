import dataPribadi from '../data';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail} from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
      <aside className="md:fixed relative md:top-1/2 md:left-0 md:-translate-y-1/2 md:z-50 p-2 md:p-4 flex flex-col items-center justify-center gap-3 md:gap-0">
        <p className="md:rotate-90 md:mb-10 text-gray-500 dark:text-gray-400">Follow Me</p>
        <div className='flex flex-row md:flex-col items-center gap-2 md:gap-0'>
          <div className="h-px w-12 md:w-px md:h-12 bg-gray-300"></div>

          <div className='flex flex-row md:flex-col items-center gap-2 my-5'>
              <a href={`https://github.com/${dataPribadi.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-white transition-all">
                  <FaGithub className="text-3xl text-gray-500 dark:text-gray-400 hover:text-white transition-all" />
              </a>
              <a href={`https://wa.me/${dataPribadi.phone}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-white transition-all">
                  <FaWhatsapp className="text-3xl text-gray-500 dark:text-gray-400 hover:text-white transition-all" />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&to=${dataPribadi.email}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-white transition-all">
                  <SiGmail className="text-3xl text-gray-500 dark:text-gray-400 hover:text-white transition-all" />
              </a>
              
          </div>
          <div className="h-px w-12 md:w-px md:h-12 bg-gray-300"></div>
        </div>
      </aside>
    </section>
  );
}
