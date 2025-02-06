"use client"

import { useState, useEffect } from "react"
import { FaCode, FaListOl, FaSun, FaMoon, FaComments, FaBook, FaChalkboardTeacher } from "react-icons/fa"
import { DiscussionEmbed } from "disqus-react"

export default function EstruturaDeDados() {
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
    url: "https://example.com/estrutura-dados-nodejs",
    identifier: "estrutura-dados-nodejs",
    title: "Estrutura de Dados — Implementando Arrays com Node.js",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Estrutura de Dados — Arrays com Node.js</h1>
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
      <FaCode className="mr-2 text-blue-500" />O que são Arrays em Estrutura de Dados?
    </h2>

    {/* Introdução sobre Estruturas de Dados */}
    <p className="mb-4 text-lg">
      <strong>O que são Estruturas de Dados?</strong><br />
      Estruturas de dados são formas organizadas de armazenar e gerenciar dados em um programa, permitindo operações eficientes como inserção, remoção, busca e ordenação. Elas são essenciais para resolver problemas complexos, otimizar o desempenho de algoritmos e organizar informações de maneira lógica e acessível.
    </p>

    {/* Introdução sobre Arrays em Node.js */}
    <p className="mb-4 text-lg">
      <strong>Arrays em Node.js</strong><br />
      Arrays são uma das estruturas de dados mais básicas e poderosas. Em Node.js, um array é uma lista ordenada de elementos que podem ser de qualquer tipo (números, strings, objetos, etc.). Eles são dinâmicos, ou seja, podem crescer ou diminuir de tamanho conforme necessário.
    </p>

    {/* Características Principais */}
    <p className="mb-4 text-lg"><strong>Características Principais:</strong></p>
    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
      <li><strong>Índices:</strong> Cada elemento em um array é acessado por um índice numérico, começando do 0.</li>
      <li>
        <strong>Métodos Úteis:</strong>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li><code>push()</code> e <code>pop()</code>: Adicionam e removem elementos do final do array.</li>
          <li><code>shift()</code> e <code>unshift()</code>: Adicionam e removem elementos do início do array.</li>
          <li><code>map()</code>, <code>filter()</code>, <code>reduce()</code>: Permitem manipular e transformar arrays de forma funcional.</li>
          <li><code>slice()</code> e <code>splice()</code>: Copiam ou modificam partes do array.</li>
        </ul>
      </li>
      <li><strong>Arrays Multidimensionais:</strong> Arrays podem conter outros arrays, criando estruturas como matrizes.</li>
      <li><strong>Iteração:</strong> É possível percorrer arrays usando loops (<code>for</code>, <code>forEach</code>) ou métodos funcionais.</li>
    </ul>

    {/* Por que usar Arrays? */}
    <p className="mb-4 text-lg"><strong>Por que usar Arrays?</strong></p>
    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
      <li><strong>Simplicidade:</strong> Fáceis de implementar e entender.</li>
      <li><strong>Versatilidade:</strong> Podem armazenar diferentes tipos de dados e são amplamente utilizados em algoritmos.</li>
      <li><strong>Eficiência:</strong> Acesso rápido a elementos por índice.</li>
    </ul>

    {/* Aplicações Práticas */}
    <p className="mb-4 text-lg"><strong>Aplicações Práticas:</strong></p>
    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
      <li>Armazenar listas de usuários, produtos ou tarefas.</li>
      <li>Implementar pilhas, filas e outras estruturas de dados.</li>
      <li>Processar dados em operações de transformação, filtragem e agregação.</li>
    </ul>
  </section>


        <section id="videos" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Arrays em Node.js"
                src="https://www.youtube.com/embed/eSaRJe2qOV0?si=qxOV2fYj6wP23gp9"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/MweeZn1rR8s?si=rZgXSNM-R1HNRh5Z"
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
            {/* Exercício 1 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 1:</span>  
              Crie um array chamado <code>bandas</code> contendo pelo menos 5 objetos, cada um representando uma banda.  
              Cada objeto deve ter as propriedades <code>nome</code>, <code>genero</code> e <code>anoFundacao</code>.  
              Exiba todas as bandas no console.
            </li>

            {/* Exercício 2 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 2:</span>  
              Adicione uma nova banda ao array <code>bandas</code> utilizando o método <code>push()</code>.  
              Em seguida, exiba apenas os nomes das bandas no console.
            </li>

            {/* Exercício 3 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 3:</span>  
              Filtre apenas as bandas de rock do array <code>bandas</code> e exiba o resultado no console.
            </li>

            {/* Exercício 4 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 4:</span>  
              Ordene o array <code>bandas</code> pelo ano de fundação (da mais antiga para a mais recente).  
              Exiba o array ordenado no console.
            </li>

            {/* Exercício 5 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 5:</span>  
              Crie um array chamado <code>filmes</code> contendo pelo menos 5 objetos, cada um representando um filme.  
              Cada objeto deve ter as propriedades <code>titulo</code>, <code>genero</code> e <code>anoLancamento</code>.  
              Exiba todos os filmes no console.
            </li>

            {/* Exercício 6 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 6:</span>  
              Utilize <code>map()</code> para criar um novo array contendo apenas os títulos dos filmes.  
              Exiba o novo array no console.
            </li>

            {/* Exercício 7 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 7:</span>  
              Crie um array chamado <code>animes</code> contendo pelo menos 5 animes diferentes.  
              Em seguida, remova o terceiro anime do array sem usar o método <code>splice()</code>.  
              Exiba o array atualizado no console.
            </li>

            {/* Exercício 8 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 8:</span>  
              Crie um array chamado <code>favoritos</code> que combine <code>bandas</code>, <code>filmes</code> e <code>animes</code>.  
              Exiba apenas os 3 primeiros itens desse novo array.
            </li>

            {/* Exercício 9 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 9:</span>  
              Verifique se existe algum filme de ação no array <code>filmes</code> usando o método <code>some()</code>.  
              Exiba a resposta no console.
            </li>

            {/* Exercício 10 */}
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Exercício 10:</span>  
              Encontre um anime específico dentro do array <code>animes</code> usando <code>find()</code>.  
              Caso o anime exista, exiba seus detalhes no console; caso contrário, exiba a mensagem <u>Anime não encontrado</u>.
            </li>
          <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <span className="font-bold">Exercício 11:</span> Crie um array chamado <code>music</code> que contenha objetos representando bandas dos anos 90. Cada objeto deve ter as seguintes propriedades:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li><code>nome</code>: Nome da banda.</li>
              <li><code>genero</code>: Gênero musical da banda.</li>
              <li><code>anoFundacao</code>: Ano de fundação da banda.</li>
            </ul>
            Em seguida, exiba os detalhes de cada banda no console, no seguinte formato:
            <pre className="bg-gray-200 dark:bg-gray-600 p-3 rounded-md mt-2">
              Banda: [Nome da Banda]
              Gênero: [Gênero Musical]
              Ano de Fundação: [Ano de Fundação]
            </pre>
          </li>
          <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <span className="font-bold">Exercício 12:</span>  
            Reutilize o array <code>music</code> do exercício anterior. Agora, antes de exibir as bandas no console, ordene-as em ordem crescente de ano de fundação (da mais antiga para a mais nova).  
            Utilize o método <code>sort()</code> para realizar a ordenação e um loop <code>for</code> para exibir os dados.  
            O formato da saída no console deve ser:
            <pre className="bg-gray-200 dark:bg-gray-600 p-3 rounded-md mt-2">
              Banda: [Nome da Banda]  
              Gênero: [Gênero Musical]  
              Ano de Fundação: [Ano de Fundação]  
            </pre>
          </li>
          </ul>
        </section>

        <section id="livros" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2 text-red-500" />
            Leituras Recomendadas
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <span className="font-bold">Artigo:</span> 
              <a
                href="https://medium.com/@jonathanjuliani/arrays-em-node-js-javascript-dominando-a-estrutura-de-dados-mais-versátil-fa02da38d767"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Resumindo Estrutura de Dados — Implementando Arrays com NodeJS/Javascript
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
                href="https://www.udemy.com/course/dominando-o-javascript-uma-base-solida-para-iniciantes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              > Aprenda tudo o que é importante sobre os fundamentos da linguagem JavaScript - Udemy
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
    </div>
  )
}