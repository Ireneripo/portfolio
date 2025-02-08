function ProjectsSection() {
  const projects = [
    {
      name: "OhMyFood",
      img: "/images/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg",
      repo: "https://github.com/Ireneripo/IreneRiportella_3_20122020",
      website: "https://ireneripo.github.io/IreneRiportella_3_20122020/",
    },
    {
      name: "Word Game",
      img: "/images/andrey-metelev-DEuansgqjns-unsplash.jpg",
      repo: "https://github.com/Ireneripo/project-wordle",
      website: "https://project-wordle-tau.vercel.app/",
    },
    {
      name: "Toast",
      img: "/images/suhash-villuri-GXV8HgWIPLo-unsplash.jpg",
      repo: "https://github.com/Ireneripo/project-toast",
      website: "https://project-toast-psi.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-5 bg-black text-white text-center"
    >
      <h2 className="text-3xl font-bold">PROJECTS</h2>

      <div className="mt-5 flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black w-full md:max-w-xs rounded-lg overflow-hidden shadow-md shadow-white"
          >
            <div
              className="h-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.img})` }}
            ></div>

            <div className="p-4 text-center">
              <p className="text-md font-semibold">{project.name}</p>

              {/* Smaller Icons */}
              <div className="flex items-center justify-center space-x-3 mt-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github-logo.svg"
                    alt="GitHub"
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/code.png"
                    alt="Website"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
