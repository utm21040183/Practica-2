import { modeloAlumnos } from "../models/alumno.model.js";
modeloAlumnos.create({
    name:"Kareli",
    apepat:"Tapia",
    edad: 20
})

export const test=()=>{
    console.log("Se manda a llamar correctamente el controlador")
}