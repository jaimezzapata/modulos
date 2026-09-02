import { crearCurso, obtenerCurso, eliminarCurso, actualizarcurso, obtenerCursoNombre } from "../repositories/RepositoryCurso.js";

export function registrarCurso(data) {
    if (!data.nombre || !data.descripcion || !data.duracion) {
        return new Promise.reject(new Error("Fallo manito, hagalo de nuevo..."))
    }
    return crearCurso(data)
}

export function ListarUCurso() {
    return obtenerCurso()
}

export function modificarCurso(data, id) {
    if (!id) {
        return new Promise.reject(new Error("Fallo el id manito, hagalo de nuevo..."))
    }
    return actualizarCurso(data, id)
}

export function borrarCurso(id) {
    if (!id) {
        return new Promise.reject(new Error("Fallo al borrar el curso manito, hagalo de nuevo..."))
    }
    return eliminarCurso(id)
}

export function consultarCursoNombre(nombre) {
    if (!nombre) {
        return new Promise.reject(new Error("Fallo el nombre  manito, hagalo de nuevo..."))
    }
    return obtenerCursoNombre(nombre)
}

