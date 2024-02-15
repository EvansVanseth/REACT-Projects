import { useState } from 'react'
import { TIPOS } from '../Constants.js'
import { BOTON } from './Boton.jsx'

// eslint-disable-next-line react/prop-types
export function Novedad({crearNovedad, verVentana}) {
  // ESTADOS
  const [text, setText] = useState('')
  const [selectedTipo, selectTipo] = useState(undefined)
  // ACTUALIZAR ESTADOS
  function changeText(event){
    setText(event.target.value)
  }
  function setGod() { selectTipo(TIPOS.G) }
  function setBad() { selectTipo(TIPOS.B) }
  function guardarDatos (){
    if(crearNovedad({text: text, selectedTipo: selectedTipo})) {
      setText('')
      selectTipo(undefined)
    }
  }
  function cambiarVentana() {
    verVentana(1)
  }

  return (
    <div className='contenedor'>
      <h1>¿Novedades?</h1>
      <textarea onChange={changeText} value={text} placeholder='Aqui puedes escribir una corta descripción de algo que acabe de ocurrir' cols="30" rows="10"></textarea>
      <h2>¿Como lo valoras?</h2>
      <p>Indica si lo que ha ocurrido lo has sentido como algo bueno o malo</p>
      <div className='select-type'>
        <BOTON tipo={TIPOS.G} selectedTipo={selectedTipo} setTipo={setGod}>BUENO</BOTON>
        <BOTON tipo={TIPOS.B} selectedTipo={selectedTipo} setTipo={setBad}>MALO</BOTON>
      </div>
      <button onClick={guardarDatos} className='btn-add'>GUARDAR</button>
      <button onClick={cambiarVentana} className='btn-change-window'>LISTA</button>
    </div>
  )
}