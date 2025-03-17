document.addEventListener("DOMContentLoaded", () => {
    const ubicacionEmpresa = [40.4205, -3.7076];
    const mapa = L.map('map').setView(ubicacionEmpresa, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);
    // Marcador empresa
    L.marker(ubicacionEmpresa).addTo(mapa)
        .bindPopup('TechNova Solutions').openPopup();
    // Obtener ubicación del cliente
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
            const ubicacionCliente = [posicion.coords.latitude, posicion.coords.longitude];
            L.Routing.control({
                waypoints: [
                    L.latLng(ubicacionCliente),
                    L.latLng(ubicacionEmpresa)
                ],
                routeWhileDragging: false
            }).addTo(mapa);
        }, (error) => {
            alert("No se pudo obtener tu ubicación. Activa la geolocalización.");
        });
    } else {
        alert("Tu navegador no soporta geolocalización.");
    }
});
