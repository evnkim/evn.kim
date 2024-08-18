"use client";

import React, { useState, useMemo, MouseEventHandler } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Tag: React.FC<{
  name: string;
  isButton: boolean;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLSpanElement>;
}> = ({ name, isButton = false, isSelected = false, onClick = () => {} }) => (
  <span
    className={`inline-block rounded-full px-2 py-0.5 text-xs ${
      isButton
        ? isSelected
          ? "cursor-pointer bg-cyan-700 text-white dark:bg-cyan-300 dark:text-gray-800"
          : "cursor-pointer bg-cyan-300 text-gray-800 dark:bg-cyan-800 dark:text-gray-200 hover:bg-cyan-400 dark:hover:bg-cyan-600"
        : "bg-cyan-300 text-gray-800 dark:bg-cyan-800 dark:text-gray-200"
    }`}
    onClick={onClick}
  >
    {name}
  </span>
);

const ProjectBox: React.FC<{
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  tags: string[];
}> = ({ title, description, githubLink, demoLink, tags }) => (
  <div className="flex flex-col mb-8 p-4 border rounded-md border-gray-300 dark:border-gray-600 shadow-sm">
    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <div className="flex space-x-4">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <FiGithub size={20} />
            </Link>
          )}
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <FiExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
    <div className="flex mt-auto pt-4 space-x-2">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "A brief description of Project 1. This is where you can elaborate on the technologies used and the purpose of the project.",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      demoLink: "https://demo.project1.com",
    },
    {
      title: "Project 2",
      description:
        "Description of Project 2. Highlight the key features and your role in the project.",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      githubLink: "https://github.com/yourusername/project2",
    },
    // Add more projects as needed
  ];

  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set(projects.flatMap((project) => project.tags));
    return ["All", ...tags];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8 flex space-x-2 items-center">
        <h4>Filter by tag:</h4>
        {allTags.map((tag) => (
          <Tag
            key={tag}
            name={tag}
            isButton={true}
            isSelected={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
