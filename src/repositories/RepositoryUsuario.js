import { Usuarios } from "../models/ModelUsuario.js";

export function crearUsuario(data) {
    return Usuarios.create(data)
}

export function obtenerUsuarios(data) {
    return Usuarios.findAll(data)
}

export function actualizarUsuario(data, id) {
    return Usuarios.update(data, {
        where: { id_usuario: id }
    })
}

export function eliminarUsuario(id) {
    return Usuarios.destroy({
        where: { id_usuario: id }
    })
}

export function obtenerUsuarioCorreo(correo) {
    return Usuarios.findOne({
        where: { correo: correo }
    })
}