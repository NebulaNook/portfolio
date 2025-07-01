const projects = [
  {
    title: "CloudBite",
    github: "https://github.com/NebulaNook/cloudbite",
    live: "https://cloudbites.netlify.app",
    description:
      "CloudBite is a full-stack cloud kitchen application built using React, Tailwind CSS, Django REST Framework, and Stripe for secure payments. It allows users to browse menu items, manage their cart, place orders, and view order history.",
  },
];

const Project = () => {
  const project = projects[0]; // single project for now

  return (
    <section className="px-4 py-10 lg:px-20">
      <div className="text-center mb-10">
        <p className="text-lg sm:text-xl text-gray-600">Browse My Recent</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Projects</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white border-2 border-black rounded-xl shadow-lg hover:shadow-xl transition">
        {/* iframe to embed live site */}
        <div className="px-4 pt-4 pb-2">
          <iframe
            src={project.live}
            title={project.title}
            className="rounded-xl w-full h-60 sm:h-72 md:h-80 lg:h-96"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        </div>

        <h1 className="text-3xl font-semibold mb-4 px-4 text-center">{project.title}</h1>

        <p className="px-8 mb-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          {project.description}
        </p>

        <div className="flex justify-center gap-6 mb-8 px-4 pb-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black rounded-full px-6 py-2 font-semibold hover:bg-black hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black rounded-full px-6 py-2 font-semibold hover:bg-black hover:text-white transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
