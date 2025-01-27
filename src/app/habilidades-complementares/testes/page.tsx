"use client";

import { useState, useEffect } from "react";
import {
  FaComments,
  FaSun,
  FaMoon,
  FaCode,
  FaBook,
  FaPlayCircle,
  FaChalkboardTeacher,
  FaListOl,
  FaCheckCircle
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";


export default function TDDWithNode() {
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
    url: "https://example.com/tdd-with-node",
    identifier: "tdd-with-node",
    title: "Aprenda TDD e Automação com Node.js",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            TDD e Automação com Node.js
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#introducao" className="hover:text-indigo-300 transition-colors">
                  Introdução
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-indigo-300 transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#ferramentas" className="hover:text-indigo-300 transition-colors">
                  Ferramentas
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-indigo-300 transition-colors">
                  Construção da API
                </a>
              </li>
              <li>
                <a href="#comentarios" className="hover:text-indigo-300 transition-colors">
                  Discussões
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
        {/* Introdução */}
        <section id="introducao" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaPlayCircle className="mr-2 text-green-500" />
            Introdução ao TDD
          </h2>
          <p className="text-lg mb-4">
            Test-Driven Development (TDD) é uma abordagem que coloca os testes no centro do
            desenvolvimento. Antes de implementar uma funcionalidade, criamos um teste para
            garantir que ela cumpra os requisitos esperados. Este curso é voltado para ensinar
            a prática, evoluindo a aplicação com segurança e garantindo um código confiável.
          </p>
        </section>

        {/* Metodologia */}
        <section id="metodologia" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />
            Como aplicar
          </h2>
          <ul className="list-decimal list-inside text-lg space-y-4">
            <li>
              Configuar o ambiente de desenvolvimento usando Node.js, Jest, VSCode e outras ferramentas.
            </li>
            <li>
              Criar testes para cada funcionalidade antes de implementá-las.
            </li>
            <li>
              Garantir que os testes validem fluxos completos da aplicação, do início ao fim.
            </li>
          </ul>
        </section>

        {/* Ferramentas */}
        <section id="ferramentas" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCheckCircle className="mr-2 text-yellow-500" />
            Ferramentas e Tecnologias
          </h2>
          <ul className="list-disc list-inside text-lg space-y-4">
            <li>Node.js e Express para criar o servidor.</li>
            <li>Jest para implementar testes automatizados.</li>
            <li>Knex.js para migrações e consultas ao banco de dados.</li>
            <li>PostgreSQL como banco de dados principal.</li>
            <li>Passport e JWT para autenticação segura.</li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="TDD"
                src="https://www.youtube.com/embed/2G_mWfG0DZE?si=0tdArlfGbCZHqdoW"
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
              <strong>Artigo:</strong> <a href="hhttps://medium.com/@habbema/teste-de-software-com-node-js-749285287e1c" className="text-blue-500 hover:underline">Teste de Software com Node.js
              </a>
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
                <span className="font-bold">Exercício 1:</span> Projeto: Gerenciar Saldo Bancário
                <p className="mt-2">
                  Você deve criar uma API simples para gerenciar o saldo de uma conta bancária. A funcionalidade principal será a de calcular o saldo total com base em uma lista de transações. Utilize TDD para desenvolver a funcionalidade.
                </p>
                <p className="mt-2">
                  <span className="font-bold">Requisitos:</span>
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>A conta bancária deve iniciar com um saldo de <strong>0</strong>.</li>
                  <li>Cada transação possui:
                    <ul className="list-disc list-inside ml-4">
                      <li><strong>id:</strong> número único.</li>
                      <li><strong>tipo:</strong> pode ser entrada ou saída.</li>
                      <li><strong>valor:</strong> número positivo representando o valor da transação.</li>
                    </ul>
                  </li>
                  <li>O saldo deve ser calculado somando todas as transações do tipo entrada e subtraindo as do tipo saída.</li>
                  <li>Crie um endpoint GET <code>/saldo</code> que retorna o saldo total e a lista de transações.</li>
                </ul>
                <p className="mt-2">
                  <span className="font-bold">Etapas do Desenvolvimento:</span>
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Escreva os testes antes do código.</li>
                  <li>Use <strong>Jest</strong> como framework de testes.</li>
                </ul>
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
                          href="https://www.udemy.com/course/api-rest-nodejs-com-testes/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        > API REST em Node.JS aplicando testes (TDD) desde o princípio - Udemy
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
