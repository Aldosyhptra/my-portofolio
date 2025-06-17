export default function Home() {
  return (
    <section id="home" className="bg-gradient-to-b from-gray-700 text-start flex flex-col md:flex-row items-center justify-center gap-8 w-full h-screen mx-auto">
        <img src="/public/img/gambaraldo.jpg" alt=""  className="w-80 h-90 object-cover rounded-2xl shadow hover:scale-105 transition-all transform transition-300"/>
        <div className="">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Aldo Syahputra</h1>
            <p className="text-lg text-gray-300 text-justify max-w-2xl mx-auto">Hi! Saya seorang pengembang Front-End yang senang membangun antarmuka web yang bersih, cepat, dan intuitif. Saya telah bekerja dengan React, Next.js, Tailwind CSS, Bootstrap CSS, dan senang menjelajahi alat-alat baru untuk meningkatkan pengalaman pengguna.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-white border-white border text-black px-8 py-3 transform hover:scale-105 hover:text-white hover:border-black hover:bg-black transition-all duration-300">My Project</button>
            <button className="bg-transparent border-white border text-white px-8 py-3 transform hover:scale-105 hover:text-black hover:bg-white transition-all duration-300">Contact Me</button>
        </div>
        </div>
    </section>
  );
}