"use client";

import { useState, useEffect } from "react";
import {
  FaCode,
  FaSun,
  FaMoon,
  FaComments,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck,
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";
import SpotifyPlayer from "@/components/ui/spotifyPlayer";

export default function NextJS() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const disqusConfig = {
    url: "https://example.com/nextjs",
    identifier: "nextjs",
    title: "Next.js",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Next.js</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#intro"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Introdução
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Configuração
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#exercicios"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Exercícios
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Vídeos
                </a>
              </li>
              <li>
                <a
                  href="#livros"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Livros
                </a>
              </li>
              <li>
                <a
                  href="#comentarios"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Comentários
                </a>
              </li>
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
        <section id="intro" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />
            Introdução ao Next.js
          </h2>
          <p className="text-lg mb-4">
            O Next.js é um framework React para desenvolvimento web moderno,
            focado em performance e facilidade de uso. Ele suporta renderização
            no lado do servidor (SSR), geração de páginas estáticas (SSG) e
            outros recursos avançados.
          </p>
          <p className="text-lg">
            Vamos explorar como configurar e usar o Next.js para criar
            aplicações web escaláveis e rápidas.
          </p>
        </section>

        {/* Configuração Section */}
        <section id="setup" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-green-500" />
            Configuração do Next.js
          </h2>
          <h3 className="text-xl font-semibold mb-2">1. Criar um Novo Projeto</h3>
          <p className="text-lg mb-4">
            Primeiro, crie um novo projeto com o comando:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`npx create-next-app@latest`}</code>
          </pre>
          <h3 className="text-xl font-semibold mb-2">2. Rodar o Servidor de Desenvolvimento</h3>
          <p className="text-lg mb-4">
            Após a criação, rode o servidor de desenvolvimento:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`npm run dev`}</code>
          </pre>
        </section>

        {/* Recursos Section */}
        <section id="features" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-orange-500" />
            Recursos do Next.js
          </h2>
          <ul className="list-disc pl-6 text-lg space-y-4">
            <li>Renderização no lado do servidor (SSR).</li>
            <li>Geração de páginas estáticas (SSG).</li>
            <li>API Routes para criar backends diretamente.</li>
            <li>Suporte a TypeScript integrado.</li>
          </ul>
        </section>

        {/* Exercícios Section */}
        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaClipboardCheck className="mr-2 text-yellow-500" />
            Exercícios
          </h2>
          <ul className="list-decimal list-inside text-lg space-y-4">
            <li>Crie uma página simples com Tailwind usando o Next.js.</li>
            <li>Crie páginas paralelas e um link entre elas</li>
            <li>Crie um CRUD usando Next.js e integre no front </li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Aula 1"
                src="https://www.youtube.com/embed/e6FigV2fLC8?si=D-gAUx9qnmrvlqwZ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Aula 2"
                src="https://www.youtube.com/embed/wKlKS6LlwlA?si=OT--f_5zGnH95fGX"
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
                href="https://nextjs.org/docs"
                className="text-blue-500 hover:underline"
              >
                 Documentação Oficial do Next.js
              </a> 
            </li>
            <li>
              <strong>Artigo: </strong>
              <a
                href="https://blog.geekhunter.com.br/o-que-e-next-js/"
                className="text-blue-500 hover:underline"
              >
                 Entendendo Next.js e aplicando suas funcionalidades
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
                <li><a href="https://www.cursou.com.br/informatica/programacao/javascript/next-js-iniciantes/" className="text-blue-500">Next.js para Iniciantes - Cursou</a></li>
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


