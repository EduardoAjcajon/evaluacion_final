import { lista_de_componentes } from "./data.js";

lista_de_componentes.forEach((cada_componente) => {
    let div_root = document.querySelector(".root");
    let div_componentes= document.createElement("div");
    div_componentes.classList.add("div_componentes");
    div_componentes.innerHTML = `
        <h1 class="titulo">${cada_componente.nombre}</h1>
        <p class="texto">${cada_componente.descripcion}</p>
        <div class="btn">Boton</div>
    `;

    div_root.appendChild(div_componentes);


    let btn = document.querySelector(".btn");
    function cambiar_borders (){
        div_componentes.classList.add("quitar_bordr");
    }

    btn.addEventListener(`click`, cambiar_borders)
});

