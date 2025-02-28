// import React from 'react';

// const stacks = {
//   'Programming Languages': [
//     'C#',
//     'Go',
//     'C++',
//     'Dart',
//     'Python',
//     'Php',
//     'JavaScript',
//     'TypeScript',
//   ],
//   'Frameworks': [
//     '.NET',
//     'Flutter',
//     'Next.js',
//     'Vue.js',
//     'Angular',
//     'Laravel',
//     'Express',
//     'Tailwind CSS',
//     'Bootstrap',
//     'Django',
//     'FastAPI',
//     'Flask',
//     'Qt',
//     'ASP.NET Core',
//     'Entity Framework',
//     'Xamarin',
//     'MAUI',
//     'Svelte',
//     'Symfony',
//     'CodeIgniter',
//     'Fiber',
//   ],
//   'Libraries': [
//     'React',
//     'Redux',
//     'Zustand',
//     'React Query',
//     'Boost',
//     'NumPy',
//     'Pandas',
//     'TensorFlow',
//     'PyTorch',
//     'Material-UI',
//     'Chakra UI',
//     'Styled Components',
//     'Jest',
//     'Cypress',
//     'Pytest',
//     'PHPUnit',
//   ],
//   'Databases': [
//     'PostgreSQL',
//     'MongoDB',
//     'MySQL',
//     'SQL Server',
//     'Sqlite',
//     'Oracle SQL',
//   ],
//   'Tools & Others': [
//     'Git',
//     'Docker',
//     'REST APIs',
//     'GraphQL',
//     'CI/CD',
//     'Kubernetes',
//     'AWS',
//     'Azure',
//     'Google Cloud Platform',
//     'Vercel',
//     'Netlify',
//     'Linux',
//     'Bash/Shell Scripting',
//     'Nginx',
//     'Apache',
//     'WebSockets',
//     'gRPC',
//     'RabbitMQ',
//     'Kafka',
//     'ElasticSearch',
//     'Prometheus',
//     'Grafana',
//     'Terraform',
//     'Ansible',
//     'GitHub Actions',
//     'GitLab CI',
//     'Jira',
//     'Confluence',
//     'Swagger/OpenAPI',
//     'Postman',
//     'Insomnia',
//     'Visual Studio',
//     'VS Code',
//     'JetBrains IDEs',
//     'Figma',
//     'Node.js',
//     'Jenkins',
//     'Vite',
//     'Webpack',
//   ],
//   'Languages': [
//     'Portuguese',
//     'English',
//     'Spanish',
//   ],
// };

// function SkillLevelBar({ level = 5 }) {
//   const totalLevels = 5;
//   return (
//     <div className="flex space-x-1">
//       {Array.from({ length: totalLevels }, (_, i) => (
//         <div
//           key={i}
//           className={`w-4 h-4 rounded-full transition-colors duration-300 ${
//             i < level ? 'bg-blue-500' : 'bg-gray-400'
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

// export default function MyStacksSection() {
//   return (
//     <section className="py-8 transition-opacity duration-300">
//       <h2 className="text-4xl font-bold mb-8 text-white text-center">My Skills</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {Object.entries(stacks).map(([category, items], index) => (
//           <div key={index} className="bg-gray-900 p-4 rounded-lg">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
//               {category}
//             </h3>
//             <ul className="space-y-2">
//               {items.map((item, i) => (
//                 <li
//                   key={i}
//                   className="flex justify-between items-center p-2 rounded hover:bg-gray-800 transition-colors duration-300"
//                 >
//                   <span className="text-gray-300">{item}</span>
//                   <SkillLevelBar level={5} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
