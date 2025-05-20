import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "TypeScript",
    "TailwindCSS",
    "CSS",
		"JavaScript",
  ];

  const backendSkills = [
		"Python",
		"MySQL",
		"Java",
	];

	const softSkills = [
		"Problem-Solving",
		"Team Collaboration",
		"Agile Methodologies",
		"Scrum",
		"Critical Thinking",
	];

	const [openJob, setOpenJob] = useState(null);

	const toggleJob = (job) => {
    setOpenJob(openJob === job ? null : job);
  };

	const experiences = [
		{
      title: "Artificial Intelligence Research and Development Intern (06/2024 - 04/2025)",
      company: "PortX | Mercer Island, WA",
      description: "Conducted rigorous research to develop new company platform features that utilize modern artificial intelligence tools. Collaborated with cross-functional teams to integrate AI-driven solutions into existing workflows.",
    },
    {
      title: "Computer Science Grader (01/2024 - 03/2024)",
      company: "Seattle University | Seattle, WA",
      description: "Assisted professors in grading programming assignments and providing constructive feedback to students. Managed grades for over 20 students.",
    },
    {
      title: "Marketing Intern & Service Department Receptionist (05/2023 - 09/2023)",
      company: "Dwayne Lane’s Auto Family | Everett, WA",
      description: "Created social media content and analyzed customer engagement data. Took on addiional responsibilities as a receptionist, including answering phones and assisting customers with inquiries.",
    },
    {
      title: "Information Technology Support Specialist Intern (06/2021 - 09/2021 & 06/2022 - 09/2022)",
      company: "Coastal Community Bank | Everett, WA",
      description: "Provided technical support for employees, including troubleshooting hardware and software issues. Assisted in the setup and maintenance of computer systems and networks. Built over 100 laptops for new and current employees.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
				
        <div className="max-w-5xl mx-auto px-4">
					<h2 className="mx-auto w-40 text-3xl font-bold mb-8 bg-black bg-clip-text text-transparent text-center">
						{" "}
						About Me
					</h2>
          <div className="rounded-xl p-8 border-black/20 border">
            <p className="text-gray-300 mb-6">
              
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-400/10 text-black py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-400/10 text-black-400 py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
						<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> Skills </h3>
							<div className="flex flex-wrap gap-2">
								{softSkills.map((tech, key) => (
									<span
										key={key}
										className="bg-gray-400/10 text-black-400 py-1 px-3 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/20 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-inside text-black-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science and Minor in Business Finance </strong><br/>
									<span className="text-gray-500 text-sm">Seattle University (2021 - 2025)</span><br/>
									<span className="text-gray-500 text-sm">GPA: 3.9</span>
                </li>
								<li>
                  <strong> Awards and Honors: </strong> <br />
									<span className="text-gray-500 text-sm">
									Magna Cum Laude <br />
									Alpha Sigma Nu Honor Society <br />
									Dean's List <br />
									President's List <br />
									</span>
                </li>
								<li>
                  <strong> Relevant Coursework: </strong> <br />
									<span className="text-gray-500 text-sm">
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
							<h3 className="text-xl font-bold mb-0">Experience</h3>
							<div className="p-0">
								{experiences.map((job, index) => (
									<div key={index}>
										<h4
											className="font-semibold cursor-pointer flex justify-between items-center mt-4"
											onClick={() => toggleJob(index)}
										>
											{job.title}
											<span className="text-pink-300">{openJob === index ? "-" : "+"}</span>
										</h4>
										<h5 className="text-gray-500 text-xs mb-0">{job.company}</h5>

										<div
											className={`overflow-hidden transition-all duration-300 ease-in-out ${
												openJob === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
											}`}
										>
											<p className="text-gray-600 bg-gray-100 p-2 rounded-lg text-xs">
												{job.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
      </RevealOnScroll>
    </section>
  );
};