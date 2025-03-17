document.addEventListener("DOMContentLoaded", () => {
    fetch("../js/noticias.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(noticias => {
            console.log(noticias);
            const contenedor = document.getElementById("noticias-container");
            contenedor.innerHTML = "";
            noticias.forEach(noticia => {
                const noticiaElement = document.createElement("div");
                noticiaElement.classList.add("noticia");
                noticiaElement.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p><strong>Fecha:</strong> ${noticia.fecha}</p>
                    <p>${noticia.resumen}</p>
                    <p><strong>Importancia:</strong> ${noticia.importancia}</p>
                    <a href="${noticia.enlace}" target="_blank">Leer más</a>
                `;
                contenedor.appendChild(noticiaElement);
            });
        })
        .catch(error => {
            console.error("Error cargando noticias:", error);
            document.getElementById("noticias-container").innerHTML = `<p style="color:red;">Error al cargar las noticias.</p>`;
        });
});
