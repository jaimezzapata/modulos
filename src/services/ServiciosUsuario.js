import { crearUsuario, obtenerUsuarios, eliminarUsuario, actualizarUsuario, obtenerUsuarioCorreo } from "../repositories/RepositoryUsuario.js";

export function registrarUsuario(data) {
    return crearUsuario(data)
}

export function ListarUsuarios() {
    return obtenerUsuarios()
}

export function modificarUsuario(data, id) {
    return actualizarUsuario(data, id)
}

export function borrarUsuario(id) {
    return eliminarUsuario(id)
}
