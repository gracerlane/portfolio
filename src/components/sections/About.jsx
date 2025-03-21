import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "TypeScript",
    "TailwindCSS",
    "CSS",
  ];

  const backendSkills = [
		"Python"
	];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-pink-80 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-black/20 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-400 py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-400 py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/20 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-inside text-black-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science and Minor in Business Finance </strong><br/>
									<span className="text-gray-500">Seattle University (2021 - 2025)</span>
                </li>
                <li>
                  <strong> Relevant Coursework: </strong> <br />
									<span className="text-gray-500">
									Data Structures <br />
									Web Development <br />
									Design and Analysis of Algorithms <br />
									Object-Oriented Development <br />
									The Art of Web Design <br />
									Foundations of Computer Science <br />
									Fundamentals of Databases <br />
									</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black/20 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Experience </h3>
              <div className="space-y-4 text-black-300">
                <div>
                  <h4 className="font-semibold ">
                    {" "}
                    Artificial Inteligence Research and Development Intern (2024 - Present)
										{" "}
                  </h4>
									<h1 className="text-gray-500">
										PortX | <span className="text-xs"> Mercer Island, WA </span>
									</h1>
                  <p>
                    {/* Conducted rigorous research to develop new company platform features that utilizes modern aritificial intelligence tools. */}
                  </p>
                </div>
								<div>
									<h4 className="font-semibold">
										{" "}
										Computer Science Grader (01/2024 - 03/2024)
										{""}
									</h4>
									<h1 className="text-gray-500">
										Seattle University | <span className="text-xs"> Seattle, WA </span>
									</h1>
									<p>
                  </p>
								</div>
								<div>
									<h4 className="font-semibold">
										{" "}
										Marketing Intern & Service Department Receptionist (Summer 2023)
										{""}
									</h4>
									<h1 className="text-gray-500">
										Dwayne Lane’s Auto Family | <span className="text-xs"> Everett, WA </span>
									</h1>
									<p>
                  </p>
                </div>
								<div>
									<h4 className="font-semibold">
										{" "}
										Information Technology Support Specialist Intern (Summer 2021 & 2022)
										{""}
									</h4>
									<h1 className="text-gray-500">
										Coastal Community Bank | <span className="text-xs"> Everett, WA </span>
									</h1>
									<p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};