import { IProject } from '@/types/IProject';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const defaultImage = 'https://betadesign.com.br/site/wp-content/themes/bds/images/no-image-found-360x250.png';



interface ProjectCardProps {
  project: IProject;
  openModal: (project: IProject) => void;
  isEnglish: boolean;
}

export function ProjectCard({ project, openModal, isEnglish }: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        relative group overflow-hidden rounded-lg border-b-4 border-purple-500 mb-6
        transition-all duration-700 transform 
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.image || defaultImage}
          alt={project.name}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-4 bg-gray-950">
        <h3 className="text-white text-lg font-medium">{project.name}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stacks.map((stack, i) => (
            <span key={i} className="text-purple-400 text-sm bg-purple-900/20 px-2 py-1 rounded-full">
              {stack}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => openModal(project)}
        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        {isEnglish ? 'View Details' : 'Ver Detalhes'}
      </button>
    </div>
  );
}
