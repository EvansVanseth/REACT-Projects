import { cargarTextos } from '../localstorage.js'
import { TIPOS } from '../Constants.js'

const TEXTOS_TIPOS = {
  god: 'BUENO',
  bad: 'MALO'
}

export function List ({verVentana}){
  const textos = cargarTextos()
  const things = {
    god: 0,
    bad: 0
  }
  textos.forEach(e => {
    if(e.type === TIPOS.G) things.god++
    if(e.type === TIPOS.B) things.bad++
  });

  function cambiarVentana() {
    verVentana(0)
  }

  return (
    <div className='contenedor'>
      <h1>Ni tan mal...</h1>
      <div className='resum'>
        <p className='god-things'>{things.god}</p>
        <p className='bad-things'>{things.bad}</p>
      </div>
      <button onClick={cambiarVentana} className='btn-change-window'>NOVEDADES</button>
      <h2 className='list-title'>Pa que te lo mires</h2>
      {
        textos.map((ele)=>{
          return (
            <div key={ele.key} className='list-element'>
              <h4 className={`le-tipo-${ele.type}`}>{TEXTOS_TIPOS[ele.type]}</h4>
              <p>{ele.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}