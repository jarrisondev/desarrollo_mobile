const estudiantes = [
  {
    nombre: 'Juan',
    asignatura: "Desarrollo Móvil",
    calificaciones: [4.0, 4.5, 4.2, 5.2]
  },
  {
    nombre: 'María',
    asignatura: "Desarrollo Móvil",
    calificaciones: [3.5, 4.0, 3.8, 4.1]
  },
  {
    nombre: 'Carlos',
    asignatura: "Desarrollo Móvil",
    calificaciones: [2.5, 3.0, 2.8, 3.2]
  },
  {
    nombre: 'Ana',
    asignatura: "Desarrollo Móvil",
    calificaciones: [5.0, 4.8, 4.9, 5.0]
  },
  {
    nombre: 'Pedro',
    asignatura: "Desarrollo Móvil",
    calificaciones: [1.5, 2.0, 2.5, 2.0]
  }
]


function calcularPromedio(notas) {
  const suma = notas.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  const prom = suma / notas.length
  return prom
}

function obtenerEstado(promedio) {
  if (promedio <= 3) {
    return "Perdio"
  } else if (promedio >= 3.1 && promedio < 4) return "Aceptable"
  return "Excelente"
}

function mostrarReporte(estudiante) {
  const prom = calcularPromedio(estudiante.calificaciones)
  const estado = obtenerEstado(prom)

  console.log(`El estudiante ${estudiante.nombre} tiene un promedio de ${prom.toFixed(2)} y su estado es: ${estado}`)
}

estudiantes.forEach(estudiante => {
  mostrarReporte(estudiante)
})

