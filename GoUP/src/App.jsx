import { useState } from 'react'
import './App.css'
import { cargarTextos, guardarTextos } from './localstorage.js'
import { Novedad } from './Components/Novedad.jsx'
import { List } from './Components/List.jsx'

function App() {
  // ESTADOS
  const [ventana, setVentana] = useState(0)
  const [textos, setTextos] = useState(cargarTextos())
  // ACTUALIZAR ESTADOS
  function crearNovedad ({text, selectedTipo}){
    if(!text || text==='') return false
    if(!selectedTipo) return false
    const newTextos = [...textos]
    const newText = {
      text: text,
      type: selectedTipo,
      key: Math.floor(Date.now() / 1000)
    }
    newTextos.push(newText)
    setTextos(newTextos)
    guardarTextos(newTextos)
    return true
  }
  function verVentana(numV) {
    setVentana(numV)
  }

  switch (ventana) {
    case 0: return (<Novedad crearNovedad={crearNovedad} verVentana={verVentana} />)
    case 1: return (<List verVentana={verVentana} />)

  }

}

export default App
