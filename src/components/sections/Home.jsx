import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-black bg-clip-text text-transparent leading-right">
            Hello, I'm Grace Lane
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-2xl mx-auto">
						I am a recent graduate with a B.S. in Computer Science and a minor in Business Finance from Seattle University. I enjoy new challenges to learn and grow both professionally and as an individual. I am looking to broaden my experience in the tech industry that could lead to a full time career.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-black text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-pink-500/50"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-black text-black py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:text-pink-500/50 hover:border-pink-500/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
