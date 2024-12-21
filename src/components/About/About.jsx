import React from "react"

export const About = () => {
  return (
    <section className="bg-teal-50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-indigo-800">About Me</h3>
      <p className="p-6 mt-4 bg-white text-teal-800 rounded-lg shadow-lg">
        -I am a backend developer with a strong passion for creating efficient,
        scalable, and maintainable server-side solutions.
        My work revolves around designing APIs, managing data workflows, and ensuring systems are both secure and high-performing.
        -I bring expertise in database management, cloud computing, and modern development practices like containerization and CI/CD pipelines.
        I thrive in dynamic environments, solving complex problems, and optimizing processes to meet both technical and business goals.
      </p>
      <div className="p-6 mt-6 bg-white text-teal-800 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold text-indigo-800">
          Skills & Strengths
        </h4>
        <ul className="list-disc ml-6 mt-2 text-teal-600">
          <li>Proficient in React and Tailwind CSS</li>
          <li>Experienced in C++ for game development</li>
          <li>Deep understanding of game mechanics and optimization</li>
          <li>Strong communication skills, both with teams and clients</li>
          <li>
            Always keeping up to date with the latest technologies and best
            practices
          </li>
        </ul>
      </div>
    </section>
  )
}
