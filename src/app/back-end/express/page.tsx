"use client";

import { useState, useEffect } from "react";
import { 
  FaCode, 
  FaSun, 
  FaMoon, 
  FaComments,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck 
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";

export default function ExpressBasico() {
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
    url: "https://example.com/express-basico",
    identifier: "express-basico",
    title: "Express.js Básico",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Express.js Básico
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#introducao" className="hover:text-blue-200 transition-colors duration-200">Introdução</a></li>
              <li><a href="#modulos" className="hover:text-blue-200 transition-colors duration-200">Módulos</a></li>
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
        {/* Introdução Section */}
        <section id="introducao" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />
            Introdução ao Express.js
          </h2>
          <p className="text-lg mb-4">
            Express.js é um framework minimalista e flexível para Node.js, projetado para criar aplicações web e APIs robustas e escaláveis.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`// Instale o Express.js
$ npm install express
`}
            </code>
          </pre>
        </section>

        {/* Módulos Section */}
        <section id="modulos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />
            Recursos do Express.js
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li><strong>Middleware:</strong> Processa requisições e respostas.</li>
            <li><strong>Rotas:</strong> Gerencia endpoints de APIs.</li>
            <li><strong>Servidores:</strong> Cria servidores web com facilidade.</li>
            <li><strong>Integração:</strong> Suporte para bancos de dados e outras bibliotecas.</li>
          </ul>
        </section>

        {/* Exercícios Section */}
        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaClipboardCheck className="mr-2 text-yellow-500" />
            Exercícios
          </h2>
          <ul className="list-decimal list-inside text-lg space-y-4">
            <li>Crie uma API REST para gerenciar tarefas.</li>
            <li>Adicione autenticação usando JWT ao seu projeto Express.js.</li>
            <li>Implemente validação de dados com a biblioteca Joi.</li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Express.js para iniciantes"
                src="https://www.youtube.com/embed/DO9VAZco_64?si=m26opgRIDPvVBgl9"
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
              <strong>Documentação:</strong> <a href="https://expressjs.com/pt-br/" className="text-blue-500 hover:underline">Documentação Oficial do Express.js</a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://apidog.com/pt/blog/nodejs-express-post-request/" className="text-blue-500 hover:underline">Um Guia sobre Requisições POST com NodeJS Express</a>
            </li>
          </ul>
        </section>

        {/* Cursos Section */}
        <section id="cursos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-orange-500" />
            Cursos
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Cursos recomendados:</strong>
              <ul className="list-disc pl-6">
                <li><a href="https://www.devmedia.com.br/curso/primeiros-passos-com-express/1907" className="text-blue-500">Primeiros passos com Express - Cursa</a></li>
              </ul>
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
