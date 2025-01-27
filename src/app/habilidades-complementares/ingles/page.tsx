"use client";

import { useState, useEffect } from "react";
import { 
  FaComments,
  FaSun, 
  FaMoon, 
  FaBook,  
  FaClipboardCheck,
  FaChalkboardTeacher
  
} from "react-icons/fa";
import { DiscussionEmbed } from "disqus-react";


export default function LearnEnglish() {
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
    url: "https://example.com/learn-english",
    identifier: "learn-english",
    title: "Aprendendo Inglês",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Aprendendo Inglês
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#ingles" className="hover:text-blue-200 transition-colors duration-200">Inglês</a></li>
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
        {/* Inglês Section */}
        <section id="ingles" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Inglês
          </h2>
          <p className="text-lg mb-4">
            O inglês é uma língua internacionalmente reconhecida e importante para comunicação global. Aqui estão algumas dicas para aprender inglês de maneira eficaz.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
            <code>
              {`# Comece com o básico
Aprenda o alfabeto e palavras simples.

# Pratique frases do dia a dia
Exemplo: "How are you?" - "I'm fine, thank you!"

# Expanda seu vocabulário
Aprenda novas palavras todos os dias.

# Assista a filmes e séries em inglês
Isso ajudará na compreensão auditiva.`}
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
              Crie uma lista de frases comuns em inglês e pratique a tradução.
            </li>
            <li>
              Assista a um vídeo em inglês e escreva um resumo sobre o que foi discutido.
            </li>
            <li>
              Tente ler um livro em inglês, começando com títulos fáceis e avançando gradualmente.
            </li>
            <li>
              Pratique com músicas: Escute sem lyrics e tradução, e tente entender o que está sendo cantado. Após isso, escute novamente a musica com a lyrics em ingles. E após, novamente, escute a música, mas com lyrics e traducao em portugues. E por fim tente a música sem lyrics, e após isto, tente cantar a música.  
            </li>
            <li>
              Pratique com os exercícios do Duolingo.  
            </li>
            <li>
              Peça para o ChatGPT gerar uma lista de 300 verbos mais comuns em ingles, e tente lembrar o significado de cada. Use Anki para salvar e praticar aqueles que você não lembra ou conhece a tradução. 
            </li>
          </ul>
        </section>

        {/* Vídeos Section */}
        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Learn English Through Story"
                src="https://www.youtube.com/embed/sAbjZm_u3AM?si=waNsIXmKLQb6DT76"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Talking In English Is So Easy"
                src="https://www.youtube.com/embed/5GQxo61UOfo?si=sf6qx3MxAfyh3GtJ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Cursos Section */}
        <section id="cursos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-yellow-500" />
            Cursos Online
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Curso:</span>
              <a
                href="https://www.duolingo.com/learnR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Duolingo - Learn</a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Curso:</span>
              <a
                href="https://www.udemy.com/course/curso-ingles-completo-para-quem-quer-ser-fluente-rapido/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Curso Inglês Completo: Para quem quer ser fluente + rápido!) - Udemy</a>
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Curso:</span>
              <a
                href="https://curso.mairovergara.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Curso de Inglês método Mairo Vergara</a>
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
