import { useState, useEffect } from 'react';
import { profile } from '../data/profile.js';
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setSending(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mdkzrwke", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setShowModal(true);
      } else {
        setError("Terjadi kesalahan saat mengirim. Silakan coba lagi.");
      }
    } catch {
      setError("Gagal terhubung. Periksa koneksi atau hubungi lewat WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b to-gray-700 px-10 md:px-0 my-10 md:mb-0 text-start flex flex-col md:flex-row items-center justify-center w-full h-full mx-auto overflow-hidden"
    >
      <div className="p-8 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Hubungi Saya</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot Formspree — spam terisi otomatis dibuang; ganti dengan reCAPTCHA bila perlu */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input
            type="email"
            name="email"
            placeholder="Email kamu"
            aria-label="Email kamu"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Pesanmu"
            aria-label="Pesanmu"
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Mengirim\u2026" : "Kirim"}
          </button>
          {error && (
            <p role="alert" className="text-sm text-red-300">
              {error}
            </p>
          )}
        </form>

        {/* MODAL SUCCESS */}
        {showModal && (
          <div className="fixed z-50 inset-0" role="dialog" aria-modal="true" aria-labelledby="modal-judul">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={() => setShowModal(false)}
              aria-hidden="true"
            />
            <div className="relative flex items-center justify-center min-h-full px-4">
              <div className="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 id="modal-judul" className="text-lg leading-6 font-medium text-gray-900">
                      Pesan Terkirim!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        Terima kasih telah menghubungi saya. Saya akan membalas secepatnya.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    autoFocus
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none transition sm:w-auto sm:text-sm"
                    >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Links */}
        <aside className="md:fixed relative md:top-1/2 md:left-0 md:-translate-y-1/2 md:z-50 p-2 md:p-4 flex flex-col items-center justify-center gap-3 md:gap-0">
          <p className="md:rotate-90 md:mb-10 md:ml-1 ml-0 -mb-5 text-gray-500 dark:text-gray-400 cursor-default select-none">
            Media Sosial
          </p>
          <div className="flex flex-row md:flex-col items-center gap-2 md:gap-0">
            <div className="h-px w-12 hidden md:block md:w-px md:h-12 bg-gray-300"></div>
            <div className="flex flex-row md:flex-col items-center gap-2 my-5">
              <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" className="text-3xl text-gray-500 hover:text-white transition-all" />
              </a>
              <a href={`https://wa.me/${profile.phone}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp aria-hidden="true" className="text-3xl text-gray-500 hover:text-white transition-all" />
              </a>
              <a href={`https://www.instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram aria-hidden="true" className="text-3xl text-gray-500 hover:text-white transition-all" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin aria-hidden="true" className="text-3xl text-gray-500 hover:text-white transition-all" />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <SiGmail aria-hidden="true" className="text-3xl text-gray-500 hover:text-white transition-all" />
              </a>
            </div>
            <div className="h-px w-12 hidden md:block md:w-px md:h-12 bg-gray-300"></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
