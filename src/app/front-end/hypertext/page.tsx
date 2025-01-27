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

export default function HTMLBasico() {
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
    url: "https://example.com/html-basico",
    identifier: "html-basico",
    title: "HTML Básico",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            HTML Básico
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#estruturas" className="hover:text-blue-200 transition-colors duration-200">Estruturas</a></li>
              <li><a href="#tags" className="hover:text-blue-200 transition-colors duration-200">Tags HTML</a></li>
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
            Estruturas HTML
          </h2>
          <p className="text-lg mb-4">
            HTML é a linguagem de marcação usada para estruturar conteúdo na web. Aqui, vamos aprender sobre as estruturas básicas de uma página HTML.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Básico</title>
  </head>
  <body>
    <h1>Bem-vindo ao HTML!</h1>
    <p>Este é um exemplo básico de estrutura de página HTML.</p>
  </body>
</html>`}
            </code>
          </pre>
        </section>

        {/* Tags Section */}
        <section id="tags" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-green-500" />
            Tags HTML Comuns
          </h2>
          <p className="text-lg mb-4">
            As tags HTML são elementos que definem a estrutura e o conteúdo da página. Aqui estão algumas das mais utilizadas.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`<h1> - Título principal</h1>
<p> - Parágrafo de texto</p>
<a href="https://www.exemplo.com"> - Link</a>
<ul> - Lista não ordenada
<ol> - Lista ordenada
<li> - Item da lista`}
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
            <li>Crie uma página HTML simples com um título e um parágrafo de texto.</li>
            <li>Adicione uma lista ordenada com 3 itens.</li>
            <li>Crie uma página HTML que exiba uma música, com formatação para destacar as estrofes e outras partes da música.</li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
                title="HTML em uma hora"
                src="https://www.youtube.com/embed/HD13eq_Pmp8?si=ho77_D6ZaSGiFRUZ"
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
              <strong>Artigo:</strong> <a href="https://medium.com/nisia/o-que-é-html-98259a6f1639" className="text-blue-500 hover:underline">O que é HTML mesmo? Por Diandra Andrade</a>
            </li>
          </ul>
        </section>

        <section id="cursos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <FaChalkboardTeacher className="mr-2 text-yellow-500" />
                    Cursos Online
                  </h2>
                  <ul className="space-y-4">
                    <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <span className="font-bold">Curso 1:</span> 
                      <a
                        href="https://cursos.devsamurai.com.br/Frontend%20-%20HTML%20B%C3%A1sico.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      > Frontend - HTML Básico - Dev Samurai
                      </a>
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
