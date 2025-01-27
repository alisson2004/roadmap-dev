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


export default function TailwindCSS() {
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
    url: "https://example.com/tailwind-css",
    identifier: "tailwind-css",
    title: "Tailwind CSS",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Tailwind CSS
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
            Estruturas Tailwind CSS
          </h2>
          <p className="text-lg mb-4">
            Tailwind CSS é um framework CSS utilitário-first que permite criar designs personalizados diretamente no HTML. Vamos explorar as estruturas básicas de uma página usando Tailwind CSS.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-50">
    <h1 class="text-4xl font-bold text-center">Bem-vindo ao Tailwind CSS!</h1>
    <p class="text-lg text-center">Este é um exemplo básico de estrutura usando Tailwind CSS.</p>
  </body>
</html>`}
            </code>
          </pre>
        </section>

        {/* Utilização Section */}
        <section id="utilizacao" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-green-500" />
            Como Utilizar o Tailwind CSS
          </h2>
          <p className="text-lg mb-4">
            Para começar a usar o Tailwind, você precisa incluir o arquivo CSS no seu projeto. Você pode fazer isso de várias formas, mas uma das maneiras mais fáceis é via CDN. Aqui estão as etapas para configurar o Tailwind no seu projeto:
          </p>
          <h3 className="text-xl font-semibold mb-2">1. Instalar o Tailwind CSS</h3>
          <p className="text-lg mb-4">
            Primeiro, instale o Tailwind CSS e o plugin <code>@tailwindcss/vite</code> usando o npm:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`npm install tailwindcss @tailwindcss/vite`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">2. Configurar o Plugin Vite</h3>
          <p className="text-lg mb-4">
            Em seguida, adicione o plugin do Tailwind no arquivo de configuração do Vite (<code>vite.config.ts</code>):
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">3. Importar o Tailwind CSS</h3>
          <p className="text-lg mb-4">
            No seu arquivo CSS, importe o Tailwind:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`@import "tailwindcss";`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">4. Iniciar o Processo de Build</h3>
          <p className="text-lg mb-4">
            Agora, rode o comando abaixo no terminal para iniciar o processo de build:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`npm run dev`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold mb-2">5. Usar o Tailwind CSS no HTML</h3>
          <p className="text-lg mb-4">
            No seu arquivo HTML, certifique-se de incluir o arquivo CSS compilado:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>`}
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
            <li>Crie uma página HTML simples com Tailwind CSS e um título centralizado.</li>
            <li>Crie um botão estilizado com Tailwind que mude de cor ao passar o mouse.</li>
            <li>Construa uma lista com itens utilizando classes de espaçamento e tipografia do Tailwind.</li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Tailwind CSS em uma hora"
                src="https://www.youtube.com/embed/SUavcwCCLN8?si=vQY6Zfw4ptIwPRxz"
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
              <strong>Artigo:</strong> <a href="https://www.freecodecamp.org/portuguese/news/o-que-e-tailwind-css-um-guia-para-iniciantes/">O que é Tailwind CSS? Um guia para iniciantes por Soham De Royr</a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Documentação:</strong> <a href="https://tailwindui.com/documentation">Documentação Completa do Tailwind</a>
            </li>
          </ul>
        </section>

        <section id="cursos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-orange-500" />
            Cursos e Leituras
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Cursos recomendados:</strong>
              <ul className="list-disc pl-6">
                <li><a href="https://cursa.com.br/home/course/curso-gratuito-tailwindcss-2-iniciante/82" className="text-blue-500">Tailwind CSS - Cursa</a></li>
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

    </div>
  );
}


