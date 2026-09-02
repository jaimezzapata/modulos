import { crearUsuario, obtenerUsuarios, eliminarUsuario, actualizarUsuario, obtenerUsuarioCorreo } from "../repositories/RepositoryUsuario.js";

export function registrarUsuario(data) {
    if (!data.nombre || !data.correo || !data.apellido || data.contrasena) {
        return new Promise.reject(new Error("Fallo manito, hagalo de nuevo..."))
    }
    return crearUsuario(data)
}

export function ListarUsuarios() {
    return obtenerUsuarios()
}

export function modificarUsuario(data, id) {
    if (!id) {
        return new Promise.reject(new Error("Fallo el id manito, hagalo de nuevo..."))
    }
    return actualizarUsuario(data, id)
}

export function borrarUsuario(id) {
    if (!id) {
        return new Promise.reject(new Error("Fallo el id manito, hagalo de nuevo..."))
    }
    return eliminarUsuario(id)
}

export function consultarUsuarioCorreo(correo) {
    if (!correo) {
        return new Promise.reject(new Error("Fallo el nombre  manito, hagalo de nuevo..."))
    }
    return obtenerUsuarioCorreo(correo)
}
