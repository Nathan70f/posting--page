document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#postForm");
    const tituloInput = document.querySelector("#titulo");
    const conteudoInput = document.querySelector("#conteudo");
    const tituloRenderizar = document.querySelector("#renderizador-titulo");
    const conteudoRenderizar = document.querySelector("#renderizador-conteudo");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        const data = {
            title: tituloInput.value,
            body: conteudoInput.value,
            userId: 1
        };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            });

            const result = await response.json();
            
            // Exibe o resultado na tela
            tituloRenderizar.innerHTML = `Título: ${result.title}`;
            conteudoRenderizar.innerHTML = `Conteúdo: ${result.body}`;

            // Limpa os campos do formulário
            tituloInput.value = "";
            conteudoInput.value = "";

        } catch (error) {
            console.error("Erro ao enviar o post:", error);
        }
    });
});

