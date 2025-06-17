export default function Projects() {
  return (
    <section id="project" className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="text-xl font-bold">Project One</h3>
          <p className="text-gray-600">A web app built with React and Firebase.</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="text-xl font-bold">Project Two</h3>
          <p className="text-gray-600">A portfolio website using React Router and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}