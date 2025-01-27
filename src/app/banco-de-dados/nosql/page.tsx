"use client";

import { useState, useEffect } from "react";
import { FaDatabase, FaListOl, FaSun, FaMoon, FaComments, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";
import SpotifyPlayer from "@/components/ui/spotifyPlayer";

export default function MongoDBPage() {
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
    url: "https://example.com/mongodb",
    identifier: "mongodb",
    title: "MongoDB",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">MongoDB</h1>
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
        {/* MongoDB Section */}
        <section id="mongodb" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaDatabase className="mr-2 text-green-500" /> MongoDB
          </h2>
          <p className="mb-4 text-lg">
            O MongoDB é um banco de dados NoSQL, baseado em documentos, amplamente utilizado em aplicações modernas pela sua escalabilidade e flexibilidade.
          </p>
          <h3 className="text-2xl font-bold mb-2">Como instalar</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              No Windows: Faça o download do instalador no site oficial:{" "}
              <a
                href="https://www.mongodb.com/try/download/community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                MongoDB Downloads
              </a>.
            </li>
            <li>No Linux: Use o comando <code>sudo apt install mongodb</code>.</li>
            <li>No Mac: Utilize o Homebrew: <code>brew tap mongodb/brew && brew install mongodb-community</code>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-2">Comandos básicos</h3>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              <code>use exemplo</code> — Cria ou seleciona um banco de dados chamado exemplo.
            </li>
            <li>
              <code>db.createCollection(`&quot;clientes&quot;`)</code> — Cria uma coleção chamada clientes.
            </li>
            <li>
                <code>db.clientes.insertOne({`{ "nome": "João", "idade": 30 }`})</code> — Insere um documento na coleção clientes.
            </li>

          </ul>

          <h3 className="text-2xl font-bold mb-2">Como usar</h3>
          <p className="mb-4 text-lg">
            Após instalar o MongoDB, você pode acessar o shell do MongoDB digitando <code>mongo</code> no terminal. Utilize comandos para manipular dados no banco de dados.
          </p>
        </section>

        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="noSQL"
                src="https://www.youtube.com/embed/c2M-rlkkT5o?si=9bM_Zj0yDLfYqIG2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="PostgreSQL"
                src="https://www.youtube.com/embed/xjH48f4uMtc?si=adSN_-RgN_ipPmML"
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
                        <span className="font-bold">Exercício 1:</span> Crie um banco de dados chamado <strong> leagueoflegends </strong> e duas coleções: 
                        <strong> campeoes</strong> (com os campos id, nome, role, dificuldade) e <strong> habilidades </strong> 
                         (com os campos id, nome, descricao, id_campeao).
                    </li>
                    <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <span className="font-bold">Exercício 2: </span> Insira pelo menos 5 campeões na coleção <strong>campeoes</strong> e 
                        10 habilidades na coleção <strong>habilidades</strong>. Liste todos os campeões cadastrados, ordenando pelo nome em ordem alfabética.
                    </li>
                    <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <span className="font-bold">Exercício 3: </span> Liste o nome de todos os campeões que têm a <strong>role</strong> &quot;Assassino&quot; 
                        e todas as habilidades que possuem &quot;dano&quot; na descrição.
                    </li>
                    <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <span className="font-bold">Exercício 4: </span> Liste o nome dos campeões junto com o total de habilidades que cada um possui. 
                        Mostre também o nome do campeão e o nome da habilidade mais poderosa (definida pela maior dificuldade) de cada campeão.
                    </li>
                    <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <span className="font-bold">Exercício 5: </span> Encontre o campeão com a maior dificuldade e liste os campeões que possuem 
                        mais de 5 habilidades.
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
              <strong>Artigo:</strong> <a href="https://medium.com/code-write/mongodb-descomplicado-o-guia-definitivo-para-iniciantes-em-mongodb-f5d2123bbeb4" className="text-blue-500 hover:underline">MongoDB Descomplicado</a>
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
                        href="https://cursa.app/pt/ebook-gratuito/criacao-e-manutencao-de-banco-de-dados-mongodb-do-basico-ao-avancado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      > Criação e manutenção de banco de dados MongoDB do básico ao avançado
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