$(document).ready(function () {
    const imagenes = [
        { src: "../imagenes/imagenes/desarrollo_web.png", titulo: "Desarrollo Web" },
        { src: "../imagenes/imagenes/ui_ux_design.png", titulo: "Diseño de Interfaz Web" },
        { src: "../imagenes/imagenes/mobile_app_development.png", titulo: "Aplicación Móvil en Desarrollo" },
        { src: "../imagenes/imagenes/app_prototype.png", titulo: "Prototipo de App Móvil" }
    ];
    const galeriaContainer = $("#galeria-container");
    imagenes.forEach(imagen => {
        let imgElement = `
            <a href="${imagen.src}" data-fancybox="galeria" data-caption="${imagen.titulo}">
                <img src="${imagen.src}" alt="${imagen.titulo}">
            </a>
        `;
        galeriaContainer.append(imgElement);
    });
    $("[data-fancybox]").fancybox();
});
