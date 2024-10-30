import { data } from "./data.js";
console.log("Hola mundo");
var tabla = document.getElementById("tabla");
var cardContainer = document.getElementById("cardContainer");
TablaSeries(data);
function TablaSeries(listaSeries) {
    var Cuerpo = document.createElement("tbody");
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var se = listaSeries_1[_i];
        var fila = document.createElement("tr");
        fila.innerHTML = "\n            <td>".concat(se.id, "</td>\n            <td><a href=\"#\" class=\"serie-link\" data-id=\"").concat(se.id, "\">").concat(se.name, "</a></td>\n            <td>").concat(se.chanel, "</td>\n            <td>").concat(se.seasons, "</td>\n        ");
        Cuerpo.appendChild(fila);
    }
    var promedio = listaSeries[0].Prom(listaSeries);
    var filaPromedio = document.createElement("tr");
    filaPromedio.innerHTML = "<td colspan=\"4\">Promedio de temporadas: ".concat(promedio.toFixed(2), "</td>");
    Cuerpo.appendChild(filaPromedio);
    tabla.appendChild(Cuerpo);
    agregarEventosClic(listaSeries);
}
function agregarEventosClic(listaSeries) {
    var enlacesSeries = document.querySelectorAll(".serie-link");
    enlacesSeries.forEach(function (link) {
        link.addEventListener("click", manejarClicSerie);
    });
}
function manejarClicSerie(event) {
    event.preventDefault();
    var serieId = event.target.getAttribute("data-id");
    var serie = buscarSeriePorId(data, Number(serieId));
    if (serie) {
        mostrarCard(serie);
    }
}
function buscarSeriePorId(listaSeries, id) {
    for (var _i = 0, listaSeries_2 = listaSeries; _i < listaSeries_2.length; _i++) {
        var serie = listaSeries_2[_i];
        if (serie.id === id) {
            return serie;
        }
    }
    return undefined;
}
function mostrarCard(serie) {
    cardContainer.style.display = "block";
    cardContainer.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img src=\"".concat(serie.image, "\" alt=\"Trulli\" width=\"400\" height=\"200\"/>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\" target=\"_blank\">Ver m\u00E1s</a>\n            </div>\n        </div>\n    ");
}
