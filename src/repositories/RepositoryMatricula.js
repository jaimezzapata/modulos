import { Matricula } from "../models/ModelMatricula.js";

export function crearMatricula(data) {
    return Matricula.create(data)
}

export function obtenerMatricula(data) {
    return Matricula.findAll(data)
}

export function actualizarMatricula(data, id) {
    return Matricula.update(data, {
        where: { id_matricula: id }
    })
}

export function eliminarMatricula(id) {
    return Matricula.destroy({
        where: { id_matricula: id }
    })
}

export function obtenerMatriculasFechaInicio(fecha) {
    return Matricula.findAll({
        where: { fecha_inicio: fecha }
    })
}