// Scripts
const propiedadesVentas = document.querySelector("#venta > .row");
const propiedadesAlquiler = document.querySelector("#alquiler > .row");

// Función para mostrar propiedades
function mostrarPropiedades(propiedades, modalidad, limit = 0) {
    if (!modalidad) return;

    let html = "";

    for (let i = 0; i < (limit || propiedades.length); i++) {
        const propiedad = propiedades[i];

        html += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" alt="${propiedad.nombre}" />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                    ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>`;
    }

    modalidad.innerHTML = html;
}
