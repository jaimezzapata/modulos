import { crearUsuario, obterUsuarios, eliminarUsuario, actualizarUsuario, obtenerUsuarioCorreo } from "../repositories/RepositoryUsuario.js";

export function registrarUsuario(data) {
    return crearUsuario(data)
}

export function listarUsaurios() {
    return obterUsuarios()
}

export function modificarUsaurio(data, id) {
    return actualizarUsuario(data, id)
}

export function borrarUsuario(id) {
    return eliminarUsuario(id)
}