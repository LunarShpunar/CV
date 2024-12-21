import React from "react";

const Project = ({ title, description, tags, githubLink }) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 py-1 px-3 rounded-full text-sm font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
