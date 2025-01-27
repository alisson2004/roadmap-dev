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


export default function ClassesFuncoesModulos() {
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
    url: "https://example.com/classes-funcoes-modulos",
    identifier: "classes-funcoes-modulos",
    title: "Classes, Funções e Módulos",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Classes, Funções e Módulos
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#classes" className="hover:text-blue-200 transition-colors duration-200">Classes</a></li>
              <li><a href="#funcoes" className="hover:text-blue-200 transition-colors duration-200">Funções</a></li>
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
        {/* Classes Section */}
        <section id="classes" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />
            Classes
          </h2>
          <p className="text-lg mb-4">
            Classes são estruturas que permitem agrupar dados e métodos relacionados, promovendo a organização e o reuso de código.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  emitirSom() {
    console.log(\`\${this.nome} está emitindo um som.\`);
  }
}

// Usando a classe
const cachorro = new Animal("Rex", "Cachorro");
cachorro.emitirSom(); // Rex está emitindo um som.`}
            </code>
          </pre>
        </section>

        {/* Funções Section */}
        <section id="funcoes" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-green-500" />
            Funções
          </h2>
          <p className="text-lg mb-4">
            Funções são blocos de código reutilizáveis que realizam uma tarefa específica.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`function somar(a, b) {
  return a + b;
}

const resultado = somar(5, 3);
console.log(resultado); // 8`}
            </code>
          </pre>
        </section>

        {/* Módulos Section */}
        <section id="modulos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-purple-500" />
            Módulos
          </h2>
          <p className="text-lg mb-4">
            Módulos são arquivos que agrupam código relacionado, como classes e funções.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`// arquivo.js
export function saudacao(nome) {
  return \`Olá, \${nome}!\`;
}

// main.js
import { saudacao } from './arquivo.js';
console.log(saudacao("João")); // Olá, João!`}
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
              Crie uma classe chamada <code>Banda</code> com propriedades para <code>genero</code> e <code>origem</code> e um método <code>descrever()</code>.
            </li>
            <li>
              Escreva uma função que receba um array de números e retorne apenas os números pares.
            </li>
            <li>
              Crie um módulo que exporte uma função chamada <code>calcularMedia</code>, que recebe um array de números e retorna a média.
            </li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
                title="Aula 1"
                src="https://www.youtube.com/embed/pbb0jzXt_xA?si=6CMR2_PwagxiKAfs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
                title="Aula 2"
                src="https://www.youtube.com/embed/vEaXCspfdn4?si=SZbXFAbu5eBxNrm7"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
                title="Aula 3"
                src="https://www.youtube.com/embed/y2ZynuzG0VI?si=BKb7G9B50aqo7hnA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
                title="Aula 4"
                src="https://www.youtube.com/embed/iohhj-k9L6s?si=b19xN69TqUPug4JV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
                title="Aula 5"
                src="https://www.youtube.com/embed/ePGzhdjrIWs?si=p5OsJF_70nBvTr_r"
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
              <strong>Artigo:</strong> <a href="https://medium.com/@habbema/nodejs-p-o-o-b35425e6d4c6" className="text-blue-500 hover:underline">NodeJS: P.O.OProgramação Orientada a Objetos em Node.js</a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://medium.com/@habbema/node-js-funções-251844f28b88" className="text-blue-500 hover:underline">Node.js: FunçõesExplorando Funções em Node.js</a>
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
                        href="https://www.udemy.com/share/109FNM3@qKso8dS_DDKtsvZavcMUuoXSLMyrkDmPZ5r7jEPm6i-q1dJANKFM_PbbjnoY20vF_Q==/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      > Dominando o JavaScript: uma base sólida para iniciantes - Udemy
                      </a>
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
