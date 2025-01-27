"use client";

import { useState, useEffect } from "react";
import { FaDocker, FaListOl, FaSun, FaMoon, FaComments, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";
import SpotifyPlayer from "@/components/ui/spotifyPlayer";

export default function DockerPage() {
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
    url: "https://example.com/docker",
    identifier: "docker",
    title: "Docker",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Docker</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#conceitos" className="hover:text-green-200 transition-colors duration-200">
                  Conceitos
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-green-200 transition-colors duration-200">
                  Vídeos
                </a>
              </li>
              <li>
                <a href="#exercicios" className="hover:text-green-200 transition-colors duration-200">
                  Exercícios
                </a>
              </li>
              <li>
                <a href="#livros" className="hover:text-green-200 transition-colors duration-200">
                  Livros
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-green-200 transition-colors duration-200">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#comentarios" className="hover:text-green-200 transition-colors duration-200">
                  Comentários
                </a>
              </li>
              <li>
                <a href="http://localhost:3000" className="hover:text-green-200 transition-colors duration-200">
                  Menu Principal
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="text-white p-2 rounded-full">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-12">
        {/* Docker Section */}
        <section id="docker" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaDocker className="mr-2 text-blue-500" /> Docker
          </h2>
          <p className="mb-4 text-lg">
            Docker é uma plataforma aberta para desenvolvimento, envio e execução de aplicações em containers. Ela permite que você empacote uma aplicação com todas as dependências necessárias e a execute de maneira confiável em diferentes ambientes.
          </p>
          <h3 className="text-2xl font-bold mb-2">Como instalar</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              No Windows: Baixe o instalador do Docker Desktop no site oficial:{" "}
              <a
                href="https://www.docker.com/products/docker-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Docker Desktop
              </a>.
            </li>
            <li>No Linux: Siga as instruções de instalação no site oficial para sua distribuição.</li>
            <li>No Mac: Use o Docker Desktop, também disponível no site oficial.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Comandos básicos</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              <code>docker run hello-world</code> — Executa um contêiner simples para verificar se o Docker está funcionando corretamente.
            </li>
            <li>
              <code>docker build -t nome-da-imagem .</code> — Cria uma imagem Docker a partir de um Dockerfile.
            </li>
            <li>
              <code>docker ps</code> — Lista os contêineres em execução.
            </li>
            <li>
              <code>docker stop <i>nome-do-container</i></code> — Para a execução de um contêiner.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Como usar</h3>
          <p className="mb-4 text-lg">
            Para começar a usar o Docker, você pode criar um arquivo chamado <code>Dockerfile</code> no diretório do seu projeto, que contém as instruções para criar uma imagem Docker personalizada.
          </p>
        </section>

        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Docker Tutorial"
                src="https://www.youtube.com/embed/01MR38eDXz8?si=wgAwwaSFtLNt0J2H"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <FaListOl className="mr-2 text-blue-500" /> Exercícios Práticos
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 1:</span> Crie um contêiner Docker para um servidor web simples.
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 2: </span> Construa uma imagem Docker personalizada para um aplicativo Node.js.
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 3: </span> Use o comando <code>docker-compose</code> para configurar uma aplicação com múltiplos serviços (ex: frontend e backend).
            </li>
          </ul>
        </section>

        {/* Livros Section */}
        <section id="livros" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Livros e Leituras recomendadas
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://blog.rocketseat.com.br/introducao-ao-docker-criando-um-servidor-web-com-node-js-e-subindo-para-o-container/" className="text-blue-500 hover:underline">Introdução ao Docker — Criando um servidor web com Node.js e subindo para o container</a>
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
                href="https://www.youtube.com/playlist?list=PL18bbNo7xuh84zAeNjNejyzd1GASt8Q9x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Docker para Iniciantes: Minicurso
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
