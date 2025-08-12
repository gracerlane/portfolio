import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const About = () => {
  const hardSkills = [
    "React",
    "HTML",
    "TypeScript",
    "TailwindCSS",
    "CSS",
		"JavaScript",
		"Python",
		"SQL",
		"Java",
		"API Development",
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
			title: "Commercial Systems Intern (06/2025 – Present)",
			company: "Tektronix | Beaverton, OR",
			description: "Leading the development of a Power BI dashboard to deliver actionable insights into commercial systems performance. Assisting in software development and testing, collaborating with senior engineers to implement new features, optimize existing functionality, and apply industry-standard development practices."
		},
		{
			title: "Artificial Intelligence R&D Intern (06/2024 – 04/2025)",
			company: "PortX | Mercer Island, WA",
			description: "Researched and prototyped AI-powered features for the company platform, leveraging modern machine learning tools. Partnered with cross-functional teams to integrate AI-driven solutions into production workflows."
		},
		{
			title: "Computer Science Grader (01/2024 – 03/2024)",
			company: "Seattle University | Seattle, WA",
			description: "Evaluated programming assignments for over 20 students, ensuring grading consistency and accuracy. Provided constructive, actionable feedback to support student learning and technical growth."
		},
		{
			title: "Marketing Intern & Service Department Receptionist (05/2023 – 09/2023)",
			company: "Dwayne Lane’s Auto Family | Everett, WA",
		description: "Created and scheduled targeted social media content, analyzing engagement metrics to refine marketing strategies. Represented the company at community events to strengthen brand presence and customer relationships. Oversaw front-desk operations, providing phone and in-person support while coordinating service appointments with staff."
		},
		{
			title: "IT Support Specialist Intern (06/2021 – 09/2021 & 06/2022 – 09/2022)",
			company: "Coastal Community Bank | Everett, WA",
			description: "Provided technical support for employees, diagnosing, and resolving hardware and software issues. Deployed and configured over 100 laptops, and assisted in maintaining secure, reliable network systems."
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

						<div className="rounded-xl p-6">
							<h3 className="text-xl font-bold mb-4"> Hard Skills </h3>
							<div className="flex flex-wrap gap-2">
								{hardSkills.map((tech, key) => (
									<span
										key={key}
										className="bg-gray-400/10 text-black py-1 px-3 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
						<div className="rounded-xl p-6">
							<h3 className="text-xl font-bold mb-4"> Soft Skills </h3>
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
            <div className="p-6 rounded-xl border-black/20 border">
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
						<div className="p-6 rounded-xl border-black/20 border">
							<h3 className="text-xl font-bold mb-0">Experience</h3>
							<div className="p-0">
								{experiences.map((job, index) => (
									<div key={index}>
										<h4
											className="font-semibold cursor-pointer flex justify-between items-center mt-4"
											onClick={() => toggleJob(index)}
										>
											{job.title}
											<span className="p-0.5 text-pink-300">{openJob === index ? "-" : "+"}</span>
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