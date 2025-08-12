import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent leading-right">
            Hello, I'm Grace Lane
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
						I am a Computer Science major in my final year, passionate about web development and AI. I love creating interactive and dynamic web applications that provide great user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-pink-500/50"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-pink-400/50 text-pink-400 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-pink-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
