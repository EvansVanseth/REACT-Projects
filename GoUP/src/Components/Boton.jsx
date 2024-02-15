// eslint-disable-next-line react/prop-types
export function BOTON ({children, tipo, selectedTipo, setTipo}) {
  const classnames = `btn-${tipo} ${selectedTipo===tipo ? ' selected' : ''}`
  return (
    <button onClick={setTipo} className={classnames}>{children}</button>
  )
}
