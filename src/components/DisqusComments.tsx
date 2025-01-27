import { useEffect } from "react";

interface DisqusProps {
  identifier: string;
  title: string;
  url: string;
}

export default function DisqusComments({ identifier, title, url }: DisqusProps) {
  useEffect(() => {
    // Carrega o script do Disqus após o componente ser montado
    const script = document.createElement("script");
    script.src = "https://roadmapdev.disqus.com/embed.js";
    script.setAttribute("data-timestamp", +new Date() as unknown as string);
    document.body.appendChild(script);

    return () => {
      // Limpeza: remove o script do Disqus ao desmontar o componente
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="disqus_thread"></div>
      <script>
        {`
          var disqus_config = function () {
            this.page.url = "${url}";  // Substitua pela URL da sua página
            this.page.identifier = "${identifier}"; 
            this.page.title = "${title}"; /
        `}
      </script>
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </div>
  );
}
