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
import SpotifyPlayer from "@/components/ui/spotifyPlayer";

export default function NodeBasico() {
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
    url: "https://example.com/node-basico",
    identifier: "node-basico",
    title: "Node.js Básico",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Node.js Básico
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#introducao" className="hover:text-green-200 transition-colors duration-200">Introdução</a></li>
              <li><a href="#modulos" className="hover:text-green-200 transition-colors duration-200">Módulos</a></li>
              <li><a href="#exercicios" className="hover:text-green-200 transition-colors duration-200">Exercícios</a></li>
              <li><a href="#videos" className="hover:text-green-200 transition-colors duration-200">Vídeos</a></li>
              <li><a href="#livros" className="hover:text-green-200 transition-colors duration-200">Livros</a></li>
              <li><a href="#comentarios" className="hover:text-green-200 transition-colors duration-200">Comentários</a></li>
              <li><a href="http://localhost:3000" className="hover:text-green-200 transition-colors duration-200">Menu Principal</a></li>
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
            <FaCode className="mr-2 text-green-500" />
            Introdução ao Node.js
          </h2>
          <p className="text-lg mb-4">
            Node.js é uma plataforma de execução de JavaScript construída sobre o motor V8 do Chrome. Ele é amplamente utilizado para criar aplicações escaláveis e de alta performance.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`// Instale o Node.js
$ node --version
$ npm init
`}
            </code>
          </pre>
        </section>

        {/* Módulos Section */}
        <section id="modulos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-green-500" />
            Módulos Importantes
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li><strong>fs:</strong> Trabalha com o sistema de arquivos.</li>
            <li><strong>http:</strong> Cria servidores web básicos.</li>
            <li><strong>path:</strong> Gerencia caminhos de arquivos.</li>
            <li><strong>os:</strong> Obtém informações sobre o sistema operacional.</li>
          </ul>
        </section>

        {/* Exercícios Section */}
        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaClipboardCheck className="mr-2 text-yellow-500" />
            Exercícios
          </h2>
          <ul className="list-decimal list-inside text-lg space-y-4">
            <li>Crie um API usando node e Express</li>
            <li>Creie uma confirmação de e-mail no cadastro de usuário com Next.js e Node.js</li>
            
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Node.js para iniciantes"
                src="https://www.youtube.com/embed/TlB_eWDSMt4"
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
              <strong>Livro:</strong> <a href="https://nodejs.org/pt/learn/getting-started/introduction-to-nodejs" className="text-blue-500 hover:underline">Aprenda node pelo site oficial</a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Livro:</strong> <a href="https://blog.rocketseat.com.br/dominando-node-js-um-guia-pratico-para-iniciantes/" className="text-blue-500 hover:underline">Dominando Node.js: Um Guia Prático para Iniciantes</a>
              </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Livro:</strong> <a href="https://medium.com/@alexjosesilva/10-razões-para-programar-em-nodejs-express-mongodb-2d97ab5df1f9" className="text-blue-500 hover:underline">10 razões para programar em nodejs + express + mongodb</a>
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
                        <li><a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/?couponCode=KEEPLEARNINGBR" className="text-blue-500">Node.js do Zero a Maestria com diversos Projetos - Udemy</a></li>
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

      <SpotifyPlayer />
    </div>
  );
}
