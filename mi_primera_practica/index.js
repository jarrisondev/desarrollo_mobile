function Saludar (nombre) {

  return `Hola ${nombre} bienvinido a esta clase`
}


function calcularPromedio (notas) {
  const suma = notas.reduce((acc, curr)=> {
      return  acc + curr
  }, 0)
  const prom = suma / notas.length
  return prom
}

function obtenerEstado (promedio) {
  if (promedio <= 3) {
    return "Perdio"
  }else if (promedio >= 3.1 && promedio < 4) return "Aceptable"
  return "Excelente"
}


obtenerEstado(calcularPromedio([4.0, 4.5, 4.2, 5.2]))


