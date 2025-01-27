import { useState } from "react";
import { motion } from "framer-motion";
import RoadmapSection from "@/components/RoadmapSection";
import { FiChevronDown, FiClock } from "react-icons/fi"; // Importe o ícone de relógio

const Roadmap = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const sections = [
    {
      title: "Fundamentos",
      icon: "🧠",
      items: [
        { name: "Lógica de Programação", link: "/fundamentos/logica_programacao" },
        { name: "Estruturas de Dados", link: "/fundamentos/estrutura_dados" },
        { name: "Programação Orientada a Objetos", link: "/fundamentos/class" },
        { name: "Git e GitHub", link: "/fundamentos/git" }
      ],
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Front-end",
      icon: "🎨",
      items: [
        { name: "HTML", link: "/front-end/hypertext" },
        { name: "CSS", link: "/front-end/css" },
        { name: "Tailwind", link: "/front-end/tailwind" },
        { name: "Next JS", link: "/front-end/nextjs" },
        { name: "React", link: "/front-end/react" }
      ],
      color: "from-green-400 to-blue-500",
    },
    {
      title: "Back-end",
      icon: "⚙️",
      items: [
        { name: "Node.js", link: "/back-end/node" },
        { name: "Express", link: "/back-end/express" },
      ],
      color: "from-purple-400 to-indigo-500",
    },
    {
      title: "Banco de Dados",
      icon: "💾",
      items: [
        { name: "SQL (MySQL, PostgreSQL)", link: "/banco-de-dados/sql" },
        { name: "NoSQL (MongoDB)", link: "/banco-de-dados/nosql" }
      ],
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "DevOps",
      icon: "🚀",
      items: [
        { name: "Docker", link: "/devops/docker" },
        { name: "Cloud Computing (AWS, Azure, Google Cloud)", link: "/devops/cloud-computing" }
      ],
      color: "from-blue-400 to-teal-500",
    },
    {
      title: "Habilidades Complementares",
      icon: "🌟",
      items: [
        { name: "Ingles", link: "/habilidades-complementares/ingles" },
        { name: "Metodologias Ágeis", link: "/habilidades-complementares/metodologias-ageis" },
        { name: "Testes de Software", link: "/habilidades-complementares/testes" }
      ],
      color: "from-pink-400 to-purple-500",
    },
    {
      title: "Produtividade com Pomodoro",
      icon: <FiClock />,
      items: [{ name: "Iniciar Pomodoro", link: "/pomodoro-timer" }],
      color: "from-teal-400 to-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Roadmap de Estudo DEV
      </motion.h1>
      <div className="max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RoadmapSection
              {...section}
              isExpanded={expandedSection === index}
              onToggle={() => setExpandedSection(expandedSection === index ? null : index)}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          className="bg-white text-gray-900 rounded-full p-4 shadow-lg hover:bg-gray-200 transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FiChevronDown className="transform rotate-180" size={24} />
        </button>
      </motion.div>
    </div>
  );
};

export default Roadmap;
