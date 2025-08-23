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
      },
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Automated attendance management using face recognition with TensorFlow and Keras.",
      image: "/images/projects/face-attendance.png",
      role: "AI/ML Developer",
      techStack: ["TensorFlow", "Keras", "OpenCV", "Tkinter", "Python"],
      links: {
        github: "#",
        liveDemo: "#",
      },
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution handling 500+ products with secure authentication.",
      image: "/images/projects/ecommerce.png",
      role: "Full Stack Developer",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      links: {
        github: "#",
        liveDemo: "#",
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
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-70">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
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
      </div>
    </section>
  );
}
