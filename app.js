import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config()  //usar la lbreria dotenv

mongoose.connect(process.env.urlbase)  
.then(()=>{
    console.log("Funciona la conexión a la bd")
})

.catch((error)=>{
    console.log("No funciona la conexión a la bd", error)
})

//generar servidor local
const app=express();

//para darle seguridad al servidor local
app.use(cors())

//el servidor corre del puerto 4000 al 5000
app.listen(4000, ()=>{
    console.log("Se escucha correctamente el servidor")
})

test()