"use client";

import { useState, useEffect } from "react";
import { FaDatabase, FaListOl, FaSun, FaMoon, FaComments, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";
import SpotifyPlayer from "@/components/ui/spotifyPlayer";

export default function MySQLPostgreSQL() {
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
    url: "https://example.com/mysql-postgresql",
    identifier: "mysql-postgresql",
    title: "MySQL e PostgreSQL",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">MySQL e PostgreSQL</h1>
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
        {/* MySQL Section */}
        <section id="mysql" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaDatabase className="mr-2 text-green-500" /> MySQL
          </h2>
          <p className="mb-4 text-lg">
            O MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente usado, conhecido por sua simplicidade e eficiência em ambientes web.
          </p>
          <h3 className="text-2xl font-bold mb-2">Como instalar</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              No Windows: Faça o download do instalador no site oficial:{" "}
              <a
                href="https://dev.mysql.com/downloads/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                MySQL Downloads
              </a>.
            </li>
            <li>No Linux: Use o comando <code>sudo apt install mysql-server</code>.</li>
            <li>No Mac: Utilize o Homebrew: <code>brew install mysql</code>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Comandos básicos</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              <code>CREATE DATABASE exemplo;</code> — Cria um banco de dados chamado exemplo.
            </li>
            <li>
              <code>USE exemplo;</code> — Seleciona o banco de dados para uso.
            </li>
            <li>
              <code>
                CREATE TABLE clientes (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100));
              </code>{" "}
              — Cria uma tabela chamada clientes.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Como usar</h3>
          <p className="mb-4 text-lg">
            Após instalar o MySQL, você pode acessar o cliente de linha de comando digitando <code>mysql -u root -p</code>. Use os comandos SQL para gerenciar seus bancos de dados.
          </p>
        </section>

        {/* PostgreSQL Section */}
        <section id="postgresql" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaDatabase className="mr-2 text-blue-500" /> PostgreSQL
          </h2>
          <p className="mb-4 text-lg">
            O PostgreSQL é um banco de dados relacional de código aberto altamente robusto, conhecido por sua conformidade com os padrões SQL e recursos avançados, como suporte a JSON e dados geoespaciais.
          </p>
          <h3 className="text-2xl font-bold mb-2">Como instalar</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              No Windows: Faça o download do instalador no site oficial:{" "}
              <a
                href="https://www.postgresql.org/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                PostgreSQL Downloads
              </a>.
            </li>
            <li>No Linux: Use o comando <code>sudo apt install postgresql</code>.</li>
            <li>No Mac: Utilize o Homebrew: <code>brew install postgresql</code>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Comandos básicos</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              <code>CREATE DATABASE exemplo;</code> — Cria um banco de dados chamado exemplo.
            </li>
            <li>
              <code>\c exemplo</code> — Conecta-se ao banco de dados exemplo.
            </li>
            <li>
              <code>
                CREATE TABLE clientes (id SERIAL PRIMARY KEY, nome VARCHAR(100));
              </code>{" "}
              — Cria uma tabela chamada clientes.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Como usar</h3>
          <p className="mb-4 text-lg">
            Após instalar o PostgreSQL, você pode acessar o cliente de linha de comando digitando <code>psql -U postgres</code>. Use comandos SQL e ferramentas como o <em>pgAdmin</em> para gerenciar seus bancos de dados.
          </p>
        </section>

        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="MySQL"
                src="https://www.youtube.com/embed/5OdVJbNCSso?si=QZiRAqhrhNORI14u"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="PostgreSQL"
                src="https://www.youtube.com/embed/f4k7mweehI4?si=OPRrmzQZR3pgf5pJ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaListOl className="mr-2 text-blue-500" /> Exercícios Práticos
            </h2>
            <ul className="space-y-4">
                <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold">Exercício 1:</span> Crie um banco de dados chamado <strong>musica</strong> e duas tabelas:
                <strong> bandas</strong> (com os campos id, nome, ano_formacao, genero) e <strong>albuns</strong> 
                (com os campos id, nome, id_banda, ano_lancamento).
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold">Exercício 2:</span> Insira pelo menos 5 bandas na tabela <strong>bandas</strong> e 
                10 álbuns na tabela <strong>albuns</strong>. Liste todas as bandas cadastradas, ordenando pelo nome em ordem alfabética.
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold">Exercício 3:</span> Liste os nomes de todos os álbuns lançados a partir do ano 2010 e 
                todas as bandas que pertencem ao gênero Rock.
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold">Exercício 4:</span> Liste os nomes das bandas junto com o total de álbuns lançados 
                por cada uma e mostre o nome da banda e o nome do álbum mais recente de cada banda.
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold">Exercício 5:</span> Encontre a banda mais antiga (com o menor ano de formação) e 
                liste as bandas que têm mais de 2 álbuns lançados.
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
              <strong>Artigo:</strong> <a href="https://medium.com/@habbema/explorando-o-mysql-f8e637395aac" className="text-blue-500 hover:underline">Explorando o MySQL por Hugo Habbema</a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <strong>Artigo:</strong> <a href="https://medium.com/@netosapag/explorando-os-principais-conceitos-de-sql-básico-ao-avançado-d8bfef0921f" className="text-blue-500 hover:underline">Explorando os principais conceitos de SQL — básico ao avançado</a>
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
                        href="https://www.youtube.com/playlist?list=PLH_lE515NYR2yvvnkx4iEfUuf-xVkTYBw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      > SQL Completo por Softblue Cursos
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