"use client";

import { IProject } from '@/types/IProject';
import React, { useState } from 'react';

const defaultImage = 'https://betadesign.com.br/site/wp-content/themes/bds/images/no-image-found-360x250.png';
const projects: IProject[] = [
  { 
    name: 'Red-Shark API', 
    videoPath: '', 
    description: 'Red-Shark is the most secure and innovative open-source social media platform in Brazil, designed to help aspiring developers work on a large-scale project, gain real-world experience, and advance their careers—no job required!', 
    image: 'images/red-shark-back.png', 
    stacks: ['.NET (C#)', 'Aspire', 'Azure DevOps', 'Redis', 'RabbitMQ', 'SQL Server', 'SignalR', 'SeriLog', 'EF Core', 'Open Telemetry'], 
    createdAt: '17/03/2022',
    repositoryPath: 'https://github.com/H4x0rModdz/RedShark.Api',
  },
  { 
    name: 'Red-Shark Front-End', 
    videoPath: 'videos/red-shark-front.mp4', 
    description: 'Red-Shark is the most secure and innovative open-source social media platform in Brazil, designed to help aspiring developers work on a large-scale project, gain real-world experience, and advance their careers—no job required!', 
    image: 'images/red-shark-front.png', 
    stacks: ['NextJs', 'TypeScript', 'TailWind CSS', 'SignalR', 'React Icons', 'Lucid React', 'ShadCN', 'Axios', 'Toastify', 'Zod', 'Selenium'], 
    createdAt: '17/03/2022',
    repositoryPath: 'https://github.com/H4x0rModdz/RedShark.Front'
  },
  { 
    name: 'Restaurant API', 
    videoPath: '', 
    description: 'Description not added yet.', 
    image: 'images/restaurant-back.png', 
    stacks: ['.NET (C#)', 'SignalR', 'EF Core', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'Aspire'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/Restaurant.Api'
  },
  { 
    name: 'Restaurant Front-End', 
    videoPath: '', 
    description: 'Description not added yet.', 
    image: '', 
    stacks: ['.NET (C#)', 'Blazor', 'Razor Pages', 'SignalR'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/Restaurant.Front'
  },
  { 
    name: 'OwProduct', 
    videoPath: '', 
    description: 'Subscription platform for inventory management, using hexagonal architecture on the back-end. It features middleware for importing XLSX and CSV files, integration with Mercado Pago for payments, and Recharts for data visualization. Implements JWT and NextAuth for authentication, Docker for containerization, and Azure DevOps for CI/CD, ensuring scalability and security.', 
    image: '', 
    stacks: ['NextJs', 'TypeScript', 'Tailwind CSS', '.NET (C#)', 'PostgreSQL', 'Recharts', 'NextAuth', 'React Icons', 'Azure DevOps'], 
    repositoryPath: '',
    createdAt: '26/02/2025' 
  },
  { 
    name: 'LizeLoca', 
    videoPath: '', 
    description: 'Currency conversion platform with two environments: Admin and Customer. The Admin environment manages languages and integrations with digital wallet APIs, while the Customer offers an intuitive interface for secure conversions. Uses JWT and NextAuth for authentication, Docker for containerization, and Azure DevOps for CI/CD, ensuring performance and security.', 
    image: '/images/lizeloca.png', 
    stacks: ['NextJs', 'TypeScript', 'TailWind CSS', '.NET (C#)', 'Docker', 'Azure DevOps', 'NextAuth', 'SignalR', 'Mercado Pago API'], 
    createdAt: '17/03/2022',
    repositoryPath: ''
  },
  { 
    name: 'BloxTrade', 
    videoPath: '', 
    description: 'Currency conversion platform with two environments: Admin and Customer. The Admin environment manages languages and integrations with digital wallet APIs, while the Customer offers an intuitive interface for secure conversions. Uses JWT and NextAuth for authentication, Docker for containerization, and Azure DevOps for CI/CD, ensuring performance and security.', 
    image: '', 
    stacks: ['NextJs', 'TypeScript', 'Tailwind CSS', '.NET (C#)', 'PostgreSQL', 'Docker', 'Azure DevOps', 'NextAuth', 'Recharts'], 
    createdAt: '15/01/2023',
    repositoryPath: ''
  },
  { 
    name: 'Seringueiros', 
    videoPath: '', 
    description: 'The project is based on the management of properties and rubber tree plantations on a given property. We use this management to control the number of rubber tappers, the total members of the property, the work/rest days of each rubber tapper, the location of the plantation, a complete tracking of the activities performed and pending for each rubber tapper, and a system to find/enter a property.', 
    image: '/images/seringueiro.png', 
    stacks: ['Dart', 'Flutter', '.NET (C#)', 'Docker', 'PostgreSQL', 'Docker', 'Azure DevOps'], 
    createdAt: '26/02/2025' 
  },
  { 
    name: 'Personalisec', 
    videoPath: '', 
    description: 'Description not added yet.', 
    image: 'images/personalisec.png', 
    stacks: ['NextJs', 'TypeScript', 'Tailwind CSS', '.NET (C#)', 'PostgreSQL', 'Docker', 'Azure DevOps', 'NextAuth', 'Recharts'], 
    createdAt: '15/01/2023',
    repositoryPath: ''
  },
  { 
    name: 'BetGo.AI', 
    videoPath: 'videos/betgo.mp4', 
    description: 'Description not added yet.', 
    image: 'images/betgo.png', 
    stacks: ['NextJs', 'TypeScript', 'Tailwind CSS', '.NET (C#)', 'PostgreSQL', 'Docker', 'Azure DevOps', 'NextAuth', 'Recharts'], 
    createdAt: '15/01/2023',
    repositoryPath: ''
  },
  { 
    name: 'PayCoin', 
    videoPath: '', 
    description: '', 
    image: 'images/paycoin.png', 
    stacks: ['NextJs', 'TypeScript', 'Tailwind CSS', '.NET (C#)', 'PostgreSQL', 'Docker', 'Azure DevOps', 'NextAuth', 'Recharts'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://www.paycoinbr.com/'
  },
  { 
    name: 'RazPay', 
    videoPath: '', 
    description: '', 
    image: 'images/razpay.png', 
    stacks: ['NextJs', 'TypeScript', 'Tailwind CSS', '.NET (C#)', 'PostgreSQL', 'Docker', 'Azure DevOps', 'NextAuth', 'Recharts'], 
    createdAt: '15/01/2023',
    repositoryPath: ''
  },
  { 
    name: 'Clean Sharp Architecture (My Own Template)', 
    videoPath: '', 
    description: 'Description not added yet.', 
    image: 'images/clean.png', 
    stacks: ['C#', '.NET'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/CleanSharpArchitecture'
  },
  { 
    name: 'Red-Shark Mobile', 
    videoPath: '', 
    description: 'Description not added yet.', 
    image: '', 
    stacks: ['Kotlin'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/RedShark.Mobile'
  },
  { 
    name: 'RansomSharp', 
    videoPath: '', 
    description: 'This project is an educational ransomware developed in C# aimed at providing a practical understanding of the mechanisms and challenges associated with cybersecurity. It is important to emphasize that this ransomware was created solely for educational purposes and should not be used maliciously.', 
    image: 'https://raw.githubusercontent.com/H4x0rModdz/RansomSharp/main/demo.gif', 
    stacks: ['C#', 'Console App'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/RansomSharp',
    tag: 'Education'
  },
  { 
    name: 'AES Encryptor', 
    videoPath: '', 
    description: 'This is a simple AES Encryption Console Project written in C#. It allows you to encrypt and decrypt sensitive data using the Advanced Encryption Standard (AES) algorithm.', 
    image: 'https://raw.githubusercontent.com/H4x0rModdz/AES-Encryptor/main/example.png', 
    stacks: ['C#', 'Console App'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/AES-Encryptor'
  },
  { 
    name: 'LegacyRPG', 
    videoPath: '', 
    description: 'LegacyRPG is a text-based role-playing game (RPG) set in a medieval fantasy world. Players create their character, choose their class from a variety of options such as Warrior, Healer, Mage, or Rogue, and embark on an adventure filled with battles, exploration, and quests.', 
    image: '', 
    stacks: ['C#', 'Console App', 'SQLite'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/LegacyRPG'
  },
  { 
    name: 'LegacyRPG GoLang Version', 
    videoPath: '', 
    description: 'LegacyRPG is a text-based role-playing game (RPG) set in a medieval fantasy world. Players create their character, choose their class from a variety of options such as Warrior, Healer, Mage, or Rogue, and embark on an adventure filled with battles, exploration, and quests.', 
    image: '', 
    stacks: ['Go Language', 'Terminal'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/LegacyRPG-GoLang'
  },
  { 
    name: 'Nightmare', 
    videoPath: '', 
    description: 'Nightmare is an open-source malware created for educational purposes, closely resembling the well-known NoEscape tool.', 
    image: 'images/nightmare.jpg', 
    stacks: ['C#', 'Console App'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/Nightmare',
    tag: 'Education'
  },
  { 
    name: 'PythonWare', 
    videoPath: '', 
    description: 'A simple ransomware written in Python for didactic purposes. WARNING: The use of this ransomware is strictly illegal and unethical. This project is for educational and demonstration purposes only. The author is not responsible for any misuse or illegal use of this application.', 
    image: 'https://raw.githubusercontent.com/H4x0rModdz/PythonWare/main/pythonware.jpg', 
    stacks: ['Python'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/PythonWare',
    tag: 'Education'
  },
  { 
    name: 'CSGO Aimbot', 
    videoPath: 'A simple and external aimbot for CSGO. (Educational Purpose Only)', 
    description: '', 
    image: 'images/aimbot.jpg', 
    stacks: ['C#'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/CSGOAimbot',
    tag: 'Education'
  },
  { 
    name: 'External CSGO Cheat', 
    videoPath: '', 
    description: 'A simple and external cheat for CSGO. (Educational Purpose Only)', 
    image: 'images/aimbot.jpg', 
    stacks: ['C#'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/ExternalCSGOCheat',
    tag: 'Education'
  },
  { 
    name: 'AutoClick C#', 
    videoPath: '', 
    description: 'A simple autoclick developed in C#.', 
    image: 'https://media.licdn.com/dms/image/v2/C4D12AQEQQT7k6p2pRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1645291923189?e=1746057600&v=beta&t=ppoTMSpF605RHwZIfBhhevpytVNYkFCu2BVi6R-XcH8', 
    stacks: ['C#'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/AutoClick_CSharp'
  },
  { 
    name: 'Net Speed Test', 
    videoPath: '', 
    description: 'This is a simple Node.js program that measures your internet connection speed by downloading a file from a given URL. The program performs multiple speed tests and calculates the average speed in bits per second (bps), kilobits per second (Kbps), and megabits per second (Mbps).', 
    image: 'https://i.pcmag.com/imagery/articles/03xdeDG4m4n0gJG3CbFNIgm-17..v1661444591.png', 
    stacks: ['NodeJs', 'JavaScript'], 
    createdAt: '15/01/2023',
    repositoryPath: 'https://github.com/H4x0rModdz/NetSpeedTest'
  },
];

export default function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const openModal = (project: IProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-8 px-6 mb-40 mt-14">
      <h2 className="text-5xl font-semibold mb-20 text-center">Projects I've Worked On</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project: IProject, index: number) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg border-b-4 border-purple-500 mb-6"
          >
            {/* Tag Badge */}
            {project.tag && (
              <span className="absolute top-2 right-2 text-white text-sm bg-red-800 px-2 py-1 rounded-full z-10 cursor-default select-none">
                Educational Purpose
              </span>
            )}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image || defaultImage}
                alt={project.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-white text-lg font-medium">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stacks.map((stack: string, i: number) => (
                  <span
                    key={i}
                    className="text-purple-400 text-sm bg-purple-900/20 px-2 py-1 rounded-full"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => openModal(project)}
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              x
            </button>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {selectedProject.name}
            </h2>

            {/* Video or Image in Modal */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              {(selectedProject.videoPath) ? (
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
              Criado em: {selectedProject.createdAt}
            </p>
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2">Tecnologias:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stacks.map((stack: string, i: number) => (
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
              className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300 ${!selectedProject.videoPath ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={(e) => { if (!selectedProject.videoPath) e.preventDefault(); }}
            >
              Access Project
            </a>
            {selectedProject.repositoryPath && (
              <a
                href={selectedProject.repositoryPath || ''}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300 ${!selectedProject.repositoryPath ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={(e) => { if (!selectedProject.repositoryPath) e.preventDefault(); }}
              >
                Access Repository
              </a>
            )}
          </div>
          </div>
        </div>
      )}
    </section>
  );
}