import { useState } from "react"

function App(){

  const [nome, setNome] =useState('Ronaldo');

  const Formulario = (props) => {
    return (
      <>
      <h4>Formulario de Incricao</h4>
      <input className="Nome"
          name = "nome"
          placeholder="Digite seu nome..."
          onChange={(e)=>props.nome = e.target.value}
          type="text" />
      <button onClick={()=>{
        (props.texto != null) ? alert(props.texto) : alert(pops.nome)
        }}>
        CLIQUE AQUI
      </button>
      </>
    )
  }
 
  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <Formulario texto="texto enviado pelo App" />
      <Formulario texto="corinthians meu amor"/>
      <Formulario texto="Novo texto enviado pelo App"/>
      <Formulario nome={nome} />
    </div>
  )
}

export default App