import {Serie} from "./Serie.js";
import {data} from "./data.js";

console.log("Hola mundo")

let tabla:HTMLElement=document.getElementById("tabla")!
let cardContainer: HTMLElement = document.getElementById("cardContainer")!;
TablaSeries(data);

function TablaSeries(listaSeries: Serie[]): void {
    let Cuerpo = document.createElement("tbody");
    for (let se of listaSeries) {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${se.id}</td>
            <td><a href="#" class="serie-link" data-id="${se.id}">${se.name}</a></td>
            <td>${se.chanel}</td>
            <td>${se.seasons}</td>
        `;
        Cuerpo.appendChild(fila);
    }
    
    let promedio = listaSeries[0].Prom(listaSeries);
    let filaPromedio = document.createElement("tr");
    filaPromedio.innerHTML = `<td colspan="4">Promedio de temporadas: ${promedio.toFixed(2)}</td>`;
    Cuerpo.appendChild(filaPromedio);

    tabla.appendChild(Cuerpo);
    agregarEventosClic(listaSeries);
}

function agregarEventosClic(listaSeries: Serie[]): void {
    const enlacesSeries = document.querySelectorAll(".serie-link");
    enlacesSeries.forEach(link => {
        link.addEventListener("click", manejarClicSerie);
    });
}

function manejarClicSerie(event: Event): void {
    event.preventDefault();
    const serieId = (event.target as HTMLElement).getAttribute("data-id");
    const serie = buscarSeriePorId(data, Number(serieId));
    if (serie) {
        mostrarCard(serie);
    }
}

function buscarSeriePorId(listaSeries: Serie[], id: number): Serie | undefined {
    for (let serie of listaSeries) {
        if (serie.id === id) {
            return serie;
        }
    }
    return undefined;
}

function mostrarCard(serie: Serie): void {
    cardContainer.style.display = "block";
    cardContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${serie.image}" alt="Trulli" width="400" height="200"/>
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}" class="btn btn-primary" target="_blank">Ver más</a>
            </div>
        </div>
    `;
    
}