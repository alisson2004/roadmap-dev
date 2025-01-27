"use client";

import { useState, useEffect } from "react";
import { 
  FaComments,
  FaSun, 
  FaMoon, 
  FaGithub, 
  FaBook, 
  FaChalkboardTeacher, 
  FaClipboardCheck 
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";

export default function GitGitHub() {
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
    url: "https://example.com/git-github",
    identifier: "git-github",
    title: "Git e GitHub",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Git e GitHub
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#git" className="hover:text-blue-200 transition-colors duration-200">Git</a></li>
              <li><a href="#github" className="hover:text-blue-200 transition-colors duration-200">GitHub</a></li>
              <li><a href="#exercicios" className="hover:text-blue-200 transition-colors duration-200">Exercícios</a></li>
              <li><a href="#videos" className="hover:text-blue-200 transition-colors duration-200">Vídeos</a></li>
              <li><a href="#livros" className="hover:text-blue-200 transition-colors duration-200">Livros</a></li>
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
        {/* Git Section */}
        <section id="git" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaGithub className="mr-2 text-green-500" />
            Git
          </h2>
          <p className="text-lg mb-4">
            Git é um sistema de controle de versão distribuído, usado para rastrear mudanças no código ao longo do tempo.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`# Inicializando um repositório Git
git init

# Adicionando arquivos ao repositório
git add .

# Comitando mudanças
git commit -m "Primeiro commit"

# Verificando o status do repositório
git status`}
            </code>
          </pre>
        </section>

        {/* GitHub Section */}
        <section id="github" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaGithub className="mr-2 text-blue-500" />
            GitHub
          </h2>
          <p className="text-lg mb-4">
            GitHub é uma plataforma de hospedagem de código-fonte que usa Git como sistema de controle de versão.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`# Clonando um repositório do GitHub
git clone https://github.com/usuario/repositorio.git

# Criando um novo repositório no GitHub
git remote add origin https://github.com/usuario/repositorio.git

# Enviando alterações para o GitHub
git push origin master`}
            </code>
          </pre>
        </section>

        {/* Exercícios Section */}
        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaClipboardCheck className="mr-2 text-yellow-500" />
            Exercícios
          </h2>
          <ul className="list-decimal list-inside text-lg space-y-4">
            <li>
              Crie um repositório no GitHub e faça um commit inicial com uma breve descrição sobre o projeto.
            </li>
            <li>
              Clone um repositório existente e faça uma contribuição com um pull request.
            </li>
            <li>
              Crie uma branch no Git, faça modificações e depois mescle-a de volta à branch principal.
            </li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Git e GitHub - Introdução"
                src="https://www.youtube.com/embed/-l4Aa8wef8s?si=UBNYF0cyBjTu_25k"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Livros Section */}
        <section id="livros" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Livros e Leituras recomendadas
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://medium.com/reprogramabr/git-e-github-por-onde-começar-ca88a783c223" className="text-blue-500 hover:underline">Git e GitHub: por onde começar?</a>
            </li>
          </ul>
        </section>

        {/* Cursos Section */}
        <section id="cursos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-yellow-500" />
            Cursos Online
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Curso:</span>
              <a
                href="https://www.udemy.com/course/git-e-github-do-basico-ao-avancado-c-gist-e-github-pages/?couponCode=KEEPLEARNINGBR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Git e GitHub do básico ao avançado (c/ gist e GitHub Pages) - Udemy</a>
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
