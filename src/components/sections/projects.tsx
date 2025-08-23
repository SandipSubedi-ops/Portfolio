"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Human Resource Management (HR) Module",
      description:
        "Developed a full HR module integrated into a PMS with both backend APIs and frontend web application.",
      image: "/HRFront.png",
      role: "Full Stack Developer",
      techStack: {
        backend: [
          "ASP.NET Core 8",
          "C#",
          "Dapper ORM",
          "SQL Server/MySQL",
          "Swagger (OpenAPI)",
          "Serilog",
        ],
        frontend: [
          "React 18",
          "TypeScript",
          "Next.js",
          "React Hook Form",
          "Yup",
          "Material UI",
          "Zustand",
        ],
      },
      links: {
        github: "https://github.com/SandipSubedi-ops",
        liveDemo: "#",
        doc: "/",
      },
    },
    {
      title: "Real-Time Age & Gender Detection",
      description:
        "Computer vision system for real-time age & gender detection with high accuracy and fast inference.",
      image: "/sandiprealtimeageandgender.png",
      role: "AI/ML Developer",
      techStack: ["TensorFlow", "OpenCV", "React", "Python"],
      links: {
        github: "#",
        liveDemo: "#",
        doc: "/Age_and__Gender_Detection.pdf",
      },
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Automated attendance management using face recognition with TensorFlow and Keras.",
      image: "/faceRecognitoin.jfif",
      role: "AI/ML Developer",
      techStack: ["TensorFlow", "Keras", "OpenCV", "Tkinter", "Python"],
      links: {
        github: "#",
        liveDemo: "#",
        doc: "/final report 2.pdf",
      },
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution handling 500+ products with secure authentication.",
      image: "/ecommerce.png",
      role: "Full Stack Developer",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      links: {
        github: "#",
        liveDemo: "#",
        doc: "",
      },
    },
    {
      title: "Adventours Tourism Portal",
      description:
        "Trip booking and management system with API integrations, improving booking efficiency.",
      image: "/adventour.png",
      role: "Full Stack Developer",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "API Integrations",
      ],
      links: {
        github: "#",
        liveDemo: "#",
        doc: "",
      },
    },
  ];
  return (
    <section className="relative min-h-screen bg-gray-100 dark:bg-[#161D1F] py-14 px-10 lg:px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A showcase of my work in full-stack development, AI/ML, and system
          design.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-70 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {project.role}
                </p>

                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Tech Stack:
                  </h4>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {Array.isArray(project.techStack)
                      ? project.techStack.map((tech, i) => (
                          <li
                            key={i}
                            className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            {tech}
                          </li>
                        ))
                      : Object.entries(project.techStack).map(
                          ([section, stack], i) => (
                            <li key={i} className="w-full text-xs">
                              <span className="font-semibold capitalize">
                                {section}:{" "}
                              </span>
                              {stack.join(", ")}
                            </li>
                          )
                        )}
                  </ul>
                </div>

                {/* New Button */}
                <div className="mt-5">
                  {project.links.doc ? (
                    // ✅ Show button if doc exists
                    <a
                      href={project.links.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex justify-center items-center h-[36px] w-full overflow-hidden border-[.01px] border-gray-800 bg-purple-600"
                    >
                      <div className="relative z-[3] text-sm text-white">
                        View Docs
                      </div>

                      {/* animated border line */}
                      <span className="absolute inset-0 pointer-events-none">
                        <span className="absolute top-0 left-0 w-full h-[2px] bg-purple-400 animate-border-top" />
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-400 animate-border-bottom" />
                        <span className="absolute top-0 left-0 h-full w-[2px] bg-purple-400 animate-border-left" />
                        <span className="absolute top-0 right-0 h-full w-[2px] bg-purple-400 animate-border-right" />
                      </span>
                    </a>
                  ) : (
                    // ❌ If doc not found, show "Private"
                    <div className="flex justify-center items-center h-[36px] w-full border border-gray-500 bg-gray-300 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 cursor-not-allowed">
                      Private
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl h-60 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-3xl font-bold">
            ...
          </div>
        </div>
      </div>
    </section>
  );
}
