"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { IProject } from '@/types/IProject';
import React, { useState } from 'react';
import { defaultImage, ProjectCard } from './ProjectCard';

export default function WorksSection() {
  const { isEnglish } = useLanguage();
  const t = translations[isEnglish ? 'en' : 'pt'];
  const projects: IProject[] = t.projects;
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const openModal = (project: IProject) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="py-8 px-6 mb-40 mt-14" id="works">
      <h2 className="text-5xl font-semibold mb-20 text-center">{t.works.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            openModal={openModal}
            isEnglish={isEnglish}
          />
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
              x
            </button>
            <h2 className="text-2xl font-semibold text-white mb-4">{selectedProject.name}</h2>
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              {selectedProject.videoPath ? (
                <iframe
                  src={selectedProject.videoPath.replace('watch?v=', 'embed/')}
                  title={selectedProject.name}
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedProject.image || defaultImage}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <p className="text-gray-400 text-sm mb-4">
              {isEnglish ? 'Created on:' : 'Criado em:'} {selectedProject.createdAt}
            </p>
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2">
                {isEnglish ? 'Technologies:' : 'Tecnologias:'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="text-purple-400 text-sm bg-purple-900/20 px-2 py-1 rounded-full"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={selectedProject.videoPath || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300 ${
                  !selectedProject.videoPath ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={(e) => !selectedProject.videoPath && e.preventDefault()}
              >
                {isEnglish ? 'Access Project' : 'Acessar Projeto'}
              </a>
              {selectedProject.repositoryPath && (
                <a
                  href={selectedProject.repositoryPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  {isEnglish ? 'Access Repository' : 'Acessar Repositório'}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
