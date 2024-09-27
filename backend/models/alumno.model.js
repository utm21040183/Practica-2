import { Schema, model } from "mongoose"


const EsquemaAlumnos = new Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    edad:{
        type:Number
    }
})

//genera el modelo
export const modeloAlumnos = new model("Tabla de registro de alumnos", EsquemaAlumnos)