"use client";

import { useState, useEffect } from "react";
import { 
  FaComments,
  FaSun, 
  FaMoon, 
  FaBook, 
  FaListOl,
  FaClipboardCheck
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";


export default function AgileMethodology() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const disqusConfig = {
    url: "https://example.com/agile-methodology",
    identifier: "agile-methodology",
    title: "Metodologia Ágeis",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Metodologias Ágeis
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#introducao" className="hover:text-blue-200 transition-colors duration-200">Introdução</a></li>
              <li><a href="#metodos" className="hover:text-blue-200 transition-colors duration-200">Métodos</a></li>
              <li><a href="#exemplos" className="hover:text-blue-200 transition-colors duration-200">Exemplos</a></li>
              <li><a href="#comentarios" className="hover:text-blue-200 transition-colors duration-200">Comentários</a></li>
              <li><a href="http://localhost:3000" className="hover:text-blue-200 transition-colors duration-200">Menu Principal</a></li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="text-white p-2 rounded-full">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-12">
        {/* Introdução Section */}
        <section id="introducao" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Introdução
          </h2>
          <p className="text-lg mb-4">
            As metodologias ágeis são abordagens de gestão de projetos que focam na flexibilidade, colaboração e entregas incrementais. Elas são especialmente úteis em ambientes dinâmicos, como o desenvolvimento de software.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`# O que são Metodologias Ágeis?
As metodologias ágeis visam aumentar a eficiência e flexibilidade no desenvolvimento de projetos.

# Princípios Ágeis
- Entregar valor rapidamente.
- Colaborar com o cliente.
- Responder a mudanças.
- Manter equipes motivadas e auto-organizadas.`}
            </code>
          </pre>
        </section>

        {/* Métodos Section */}
        <section id="metodos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaClipboardCheck className="mr-2 text-yellow-500" />
            Métodos Ágeis
          </h2>
          <ul className="list-decimal list-inside text-lg space-y-4">
            <li>
              Scrum: Um framework ágil para gerenciamento de projetos focado em ciclos curtos de trabalho chamados sprints.
            </li>
            <li>
              Kanban: Sistema visual para gerenciar o fluxo de trabalho, com ênfase na eficiência e redução de desperdícios.
            </li>
            <li>
              Extreme Programming (XP): Foca em melhorar a qualidade do código e a flexibilidade no desenvolvimento de software.
            </li>
            <li>
              Lean: Foca em melhorar a eficiência eliminando desperdícios em todos os processos do projeto.
            </li>
            <li>
              Design Thinking: Envolve empatia com o usuário para criar soluções inovadoras e centradas no cliente.
            </li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Scrum"
                src="https://www.youtube.com/embed/vpKlvPGaReI?si=lwpzCFJl1kKaS0ra"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="O QUE É KANBAN BOARD"
                src="https://www.youtube.com/embed/Sqri66bJOb8?si=9vPy88-Rl4-mKgeN"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Lean"
                src="https://www.youtube.com/embed/lB5oZK1guKM?si=qkN78S7-wagm09Ob"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Livros Section */}
        <section id="Artigo" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Livros e Leituras recomendadas
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://www.iugu.com/blog/metodologia-scrum-lean-kanban" className="text-blue-500 hover:underline">Tudo sobre metodologia Scrum, Lean e Kanban
              </a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://medium.com/agile-mindset/scrum-versus-kanban-framework-vesus-metodo-25b29db8bf78" className="text-blue-500 hover:underline">Scrum é um framework, Kanban um Método. Entenda!</a>
            </li>
          </ul>

        </section>
        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaListOl className="mr-2 text-green-500" />
            Lista de Exercícios
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 1:</span> <a href="https://drive.google.com/file/d/1r7D9UZr3OkACxXFG97zqdg7vROiM8PIp/view" className="text-blue-500 hover:underline"> 10 Questões Ágeis PMP com Soluções Detalhada </a> 
            </li>

          </ul>
        </section>

        {/* Comentários Section */}
        <section id="comentarios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaComments className="mr-2 text-yellow-500" />
            Comentários e Dúvidas
          </h2>
          <DiscussionEmbed shortname="roadmapdev" config={disqusConfig} />
        </section>
      </main>

    </div>
  );
}
