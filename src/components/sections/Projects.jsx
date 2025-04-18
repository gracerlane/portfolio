
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-pink-300 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center justify-center">
            <div className="p-6 rounded-xl border border-gray-500/30 ">
              <h3 className="text-xl font-bold mb-2"> Capstone Project</h3>
              <p className="text-gray-400 mb-0">
								NASA Web-based Game
              </p>
							<p className="text-gray-400 mb-4 text-sm">
								A web-based game that allows users to experience the NASA-ASU Psyche mission through a series of minigames. The game is designed to be educational and engaging, providing users with a fun way to learn about the mission and garner excitement about the mission.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {["GDScript",].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <a href="https://gracerlane.github.io/superpsyched" target="_blank" className="text-pink-400 hover:text-pink-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
