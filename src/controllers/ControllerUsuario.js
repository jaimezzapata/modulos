import { registrarUsuario, ListarUsuarios, modificarUsuario, borrarUsuario } from "../services/ServiciosUsuario.js";

export function crear(req, res) {
    registrarUsuario(req.body)
    .then((response)=>{
        res.status(201).json(response)
    })
    .catch((error)=>{
        res.status(400).json({error: error.message})
    })
}

export function listar(req, res) {
    ListarUsuarios()
    .then((response)=>{
        res.status(200).json(response)
    })
    .catch((error)=>{
        res.status(500).json({error: error.message})
    })
}