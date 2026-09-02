import { Curso } from "../models/ModelCurso.js";

export function crearCurso(data) {
    return Curso.create(data)
}

export function obtenerCurso(data) {
    return Curso.findAll(data)
}

export function actualizarCurs(data, id) {
    return Curso.update(data, {
        where: { id_curso: id }
    })
}

export function eliminarCurso(id) {
    return Curso.destroy({
        where: { id_curso: id }
    })
}

export function obtenerCursoNombre(nombre) {
    return Curso.findOne({
        where: { nombre: nombre }
    })
}