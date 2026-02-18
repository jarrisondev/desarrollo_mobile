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

calcularPromedio([4.0, 4.5, 4.2, 5.2])

