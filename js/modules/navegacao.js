export function configurarNavegacao(renderizarPagina) {
    document.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function (evento) {
            evento.preventDefault();

            let pagina = link.getAttribute("href")
                .replace(".html", "");

            if (pagina === "index") {
                pagina = "inicio";
            }

            window.location.hash = pagina;
        });
    });

    window.addEventListener("hashchange", function () {
        let pagina = window.location.hash.replace("#", "");

        if (pagina === "index" || pagina === "") {
            pagina = "inicio";
        }

        renderizarPagina(pagina);
    });
}