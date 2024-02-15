export function guardarTextos(Textos) {
  window.localStorage.setItem('gbd-texts', JSON.stringify(Textos))
}

export function cargarTextos() {
  const Textos = window.localStorage.getItem('gbd-texts')
  if(Textos) return JSON.parse(Textos)
  else return new Array()
}