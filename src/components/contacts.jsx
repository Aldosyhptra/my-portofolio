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
    </section>
  );
}
