const fs = require("fs");
const tareas = fs.readFileSync("./tareas.json", {encoding:"utf-8"});

let tareasParseadas = JSON.parse(tareas)
var args = process.argv[2]

switch(args){
    case "listar": 
         for (let i = 0; i < tareasParseadas.length; i++){
             console.log("tarea ", i+1)
             console.log("Titulo: ", tareasParseadas[i].titulo)
             console.log("Estado: ", tareasParseadas[i].estado)
             console.log("-----------------------------------")
        }
        break;

    case undefined:
        console.log("atención - Tienes que pasar una acción.");
        break;

    case "progreso":
        for (let i = 0; i < tareasParseadas.length; i++){
            if(tareasParseadas[i].estado == "en progreso"){
            console.log("tarea ", i+1)
            console.log("Titulo: ", tareasParseadas[i].titulo)
            console.log("Estado: ", tareasParseadas[i].estado)
            console.log("-----------------------------------")
            }
        }
        break;

    case "terminada":
        for (let i = 0; i < tareasParseadas.length; i++){
            if(tareasParseadas[i].estado == "terminada"){
            console.log("tarea ", i+1)
            console.log("Titulo: ", tareasParseadas[i].titulo)
            console.log("Estado: ", tareasParseadas[i].estado)
            console.log("-----------------------------------")
            }
        }
        break;

    case "pendiente":
        for (let i = 0; i < tareasParseadas.length; i++){
            if(tareasParseadas[i].estado == "pendiente"){
            console.log("tarea ", i+1)
            console.log("Titulo: ", tareasParseadas[i].titulo)
            console.log("Estado: ", tareasParseadas[i].estado)
            console.log("-----------------------------------")
            }
        }
        break;
        default:
            console.log("No entiendo que quieres hacer")

}

