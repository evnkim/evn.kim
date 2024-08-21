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
  <div className="flex flex-col mb-1 p-4 border rounded-md border-gray-300 dark:border-gray-600 shadow-sm">
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
      title: "ScGAN",
      description:
        "Used generative modeling to aid High-temp superconductor discovery; presented at APS March Meeting 2023. Published in the Journal of Physics: Condensed Matter.",
      tags: ["ML", "Python", "TensorFlow", "Physics"],
      demoLink: "https://doi.org/10.1088/1361-648X/acfdebA",
    },
    {
      title: "Quadratic Flow",
      description: "WIP.",
      tags: ["ML", "Python", "PyTorch", "CV"],
    },
    {
      title: "Intuision",
      description:
        "Building a new style of learning – imagine interactive scenes in-place of the static diagrams of a standard textbook. Integrated AI features to edit and generate animations, provide chatbot assistance, and save user learning preferences.Description of Project 2. Highlight the key features and your role in the project.",
      tags: ["React", "MERN", "LLM", "RAG", "Web"],
      githubLink: "https://github.com/essence-learning/intuision",
    },
    {
      title: "Pigeon",
      description:
        "An email client with automated email response generation utilizing RAG. Developed with the HackMIT team to aid the HackMIT logistics team.",
      tags: ["React", "Flask", "RAG", "Web", "LLM"],
      githubLink: "https://github.com/techx/pigeon",
    },
    {
      title: "Plume",
      description:
        "The all-in-one judging and registration platform for HackMIT 2024. I sepcifically built the discord verification system to allow users to interact with one another on a discord server.",
      tags: ["React", "Flask", "PostgreSQL", "Discord", "Web"],
    },
    {
      title: "Hexblend",
      description:
        "The 1st place winnner of MIT's annual web.lab hackathon: a multiplayer color mixing game.",
      tags: ["React", "MERN", "Socket.IO", "Web"],
      demoLink: "https://hexblend.onrender.com/",
    },
    {
      title: "Slipping Hexagons",
      description:
        "An educational YouTube Channel which teaches unique physics concepts with a computational animation library (Manim). Over 50k views and 2.5k subscribers.",
      tags: ["Manim", "Physics", "Graphic Production"],
      demoLink: "https://youtube.com/@slippinghexagons",
    },
    {
      title: "Piper the Pika",
      description:
        "A recreation of the classic game Sonic the Hedgehog with added twists. Built in < 1 month, supporting multiple levels and map imports from an SVG.",
      tags: ["C#", "Game Design"],
      githubLink: "https://github.com/evnkim/piper-the-pika",
    },
    {
      title: "evnkim.github.io",
      description:
        "This website! Built with Next.js, Tailwind CSS, and Vercel.",
      tags: ["Next.js", "Tailwind CSS", "Web"],
      githubLink: "https://github.com/evnkim/evnkim.github.io",
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
      <div className="mb-8">
        <h4 className="mb-2">Filter by tag:</h4>
        <div className="flex flex-wrap gap-2">
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
