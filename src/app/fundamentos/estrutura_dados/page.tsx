"use client"

import { useState, useEffect } from "react"
import { FaCode, FaListOl, FaSun, FaMoon, FaComments, FaBook, FaChalkboardTeacher } from "react-icons/fa"
import { DiscussionEmbed } from "disqus-react"

export default function LogicaDeProgramacao() {
  const [isDarkMode, setIsDarkMode] = useState(false)


  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(prefersDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)  
  }

  const disqusConfig = {
    url: "https://example.com/logica-programacao",
    identifier: "logica-programacao",
    title: "Lógica de Programação",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Lógica de Programação</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#conceitos" className="hover:text-blue-200 transition-colors duration-200">Conceitos</a></li>
              <li><a href="#videos" className="hover:text-blue-200 transition-colors duration-200">Vídeos</a></li>
              <li><a href="#exercicios" className="hover:text-blue-200 transition-colors duration-200">Exercícios</a></li>
              <li><a href="#livros" className="hover:text-blue-200 transition-colors duration-200">Livros</a></li>
              <li><a href="#cursos" className="hover:text-blue-200 transition-colors duration-200">Cursos</a></li>
              <li><a href="#comentarios" className="hover:text-blue-200 transition-colors duration-200">Comentários</a></li>
              <li><a href="http://localhost:3000" className="hover:text-blue-200 transition-colors duration-200">Menu Principal</a></li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="text-white p-2 rounded-full">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-12">
        <section id="conceitos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCode className="mr-2 text-blue-500" />O que é Lógica de Programação?
          </h2>
          <p className="mb-4 text-lg">
          Lógica de programação é a habilidade de desenvolver sequências racionais para resolver problemas, independentemente de sua natureza. Essas sequências recebem o nome de algoritmos. O conceito de algoritmo é bastante amplo e pode ser aplicado em diversas áreas do cotidiano. No entanto, no contexto da tecnologia da informação, os algoritmos são adaptados para linguagens de programação com o objetivo de automatizar processos. <br></br><br></br>
          Por exemplo, ao ir à padaria comprar pão, seguimos um algoritmo para realizar essa tarefa. Nesse processo, organizamos os passos de forma lógica e coerente para alcançar o objetivo final. Não faz sentido, por exemplo, sair de casa e só depois lembrar-se de pegar a carteira. Além disso, é importante destacar que diversos algoritmos podem solucionar o mesmo problema, e, desde que funcionem, não há uma única maneira correta de realizá-lo. Porém, é válido considerar a eficiência de cada solução ao compará-las.
          </p>
          <p className="mb-4 text-lg">Alguns conceitos fundamentais da lógica de programação incluem:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
            <li>Variáveis e tipos de dados</li>
            <li>Estruturas de controle (if/else, switch)</li>
            <li>Estruturas de repetição (for, while)</li>
            <li>Funções e procedimentos</li>
            <li>Arrays e estruturas de dados básicas</li>
          </ul>
        </section>

        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Aula 1"
                src="https://www.youtube.com/embed/CjqID5jnt6c?si=-NQTHB-ptzvhfS_s"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/JYuanjMc7-E?si=ouulGlCKz4iX4bf0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Nyam6lfIozQ?si=g-h6xDY2HtmeO5mr"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/lvxlgdbiadg?si=YKA9_f_B1BS29qsi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/b0wdsEeL9Qs?si=vMpcobYhuWygPXZn"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/mqUENFTPaJ4?si=uSaldHEDy_V4sd3p"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/cEsja73uCv0?si=sn1X6siKJ3EXiXuI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/lI_zXy8QXKw?si=UVvABqQooIatwfbv"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="exercicios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaListOl className="mr-2 text-green-500" />
            Lista de Exercícios
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 1:</span> Crie um programa que calcule a média de três números.
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 2:</span> Desenvolva um algoritmo que determine se um número é par
              ou ímpar.
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 3:</span> Crie um programa que recebe um numero e mostra a tabuada de 1 a 10.
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 4:</span> Crie um program que funciona como uma calculadora em que o usuário pode escolher a operação matemática
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 5:</span> Escreva um programa que recebe, via teclado, notas de um aluno. Assim que uma nota em branco for fornecida, o programa deve calcular a média das notas fornecidas anteriormente e mostrar na tela.
            </li>
          </ul>
        </section>

        <section id="livros" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Livros Recomendados
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Livro 1:</span> <a
              href="https://www.scribd.com/document/643577280/Logica-de-Programacao-com-node-js-Allan-Lima-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover: underline" 
              > Lógica de Programação Com Node - Js - Allan Lima
              </a>
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

        <section id="comentarios" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaComments className="mr-2 text-yellow-500" />
            Comentários e Dúvidas
          </h2>
          {}
          <DiscussionEmbed shortname="roadmapdev" config={disqusConfig} />
        </section>
      </main>
    </div>
  )
}
