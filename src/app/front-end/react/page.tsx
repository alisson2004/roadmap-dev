"use client";

import { useState, useEffect } from "react";
import { 
  FaCode, 
  FaSun, 
  FaMoon, 
  FaComments, 
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck 
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";
import SpotifyPlayer from "@/components/ui/spotifyPlayer";

export default function ReactBasics() {
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
    url: "https://example.com/react-basics",
    identifier: "react-basics",
    title: "React Basics",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            React Basics
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#estruturas" className="hover:text-blue-200 transition-colors duration-200">Estruturas</a></li>
              <li><a href="#utilizacao" className="hover:text-blue-200 transition-colors duration-200">Utilização</a></li>
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
        {/* Estruturas Section */}
        <section id="estruturas" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />
            Estruturas React
          </h2>
          <p className="text-lg mb-4">
            React é uma biblioteca JavaScript para criar interfaces de usuário. Vamos explorar a estrutura básica de um componente React.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`import React from 'react';

function App() {
  return (
    <div>
      <h1>Bem-vindo ao React!</h1>
      <p>Este é um exemplo básico de um componente React.</p>
    </div>
  );
}

export default App;`}
            </code>
          </pre>
        </section>

        {/* Utilização Section */}
        <section id="utilizacao" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-green-500" />
            Como Utilizar React
          </h2>
          <p className="text-lg mb-4">
            Para começar a usar React, siga os passos abaixo:
          </p>
          <h3 className="text-xl font-semibold mb-2">1. Criar um Projeto React</h3>
          <p className="text-lg mb-4">
            Use o comando abaixo para criar um projeto React com <code>create-react-app</code>:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`npx create-react-app meu-projeto`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">2. Estrutura do Projeto</h3>
          <p className="text-lg mb-4">
            Após criar o projeto, a estrutura básica será como mostrado abaixo:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`meu-projeto/
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...`}
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
            <li>Crie um componente React que exibe uma mensagem de boas-vindas.</li>
            <li>Adicione um botão que altera o texto exibido ao ser clicado.</li>
            <li>Construa o jogo da forca utilizando React e JS.</li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Aula 1"
                src="https://www.youtube.com/embed/hd2B7XQAFls?si=VNFy0jzuUYQOqAAK"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Aula 2"
                src="https://www.youtube.com/embed/MwBO1HUEoR0?si=wX9wN45EPzoUOM9a"
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
            Livros e Leituras Recomendadas
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Documentação: </strong>
              <a
                href="https://pt-br.react.dev"
                className="text-blue-500 hover:underline"
              >
                 Documentação Oficial do  React
              </a> 
            </li>
            <li>
              <strong>Artigo: </strong>
              <a
                href="https://www.freecodecamp.org/portuguese/news/react-para-principiantes-um-guia-do-react-js-para-programadores-de-front-end/"
                className="text-blue-500 hover:underline"
              >
                 React para principiantes: um guia do React.js para programadores de front-end por Flavio Copes
              </a> 
            </li>
            <li>
              <strong>Artigo: </strong>
              <a
                href="https://pt-br.react.dev/learn"
                className="text-blue-500 hover:underline"
              >
                 Aprenda React by React DEV
              </a> 
            </li>
          </ul>
        </section>
        <section id="cursos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-orange-500" />
            Cursos
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Cursos recomendados:</strong>
              <ul className="list-disc pl-6">
                <li><a href="https://cursa.app/pt/curso-gratuito/react-js-gae" className="text-blue-500">React JS - Cursa</a></li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="comentarios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaComments className="mr-2 text-yellow-500" />
            Comentários e Dúvidas
          </h2>
          <DiscussionEmbed shortname="roadmapdev" config={disqusConfig} />
        </section>
      </main>

      <SpotifyPlayer />
    </div>
  );
}