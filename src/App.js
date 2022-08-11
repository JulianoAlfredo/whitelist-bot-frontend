import {react, useState} from "react"
import criarDatabase from "./services/services"
import "./styles/app.css"
let countResposta = 0
let perguntas = []
function App() {
  
  let [IdBot, setIdBot] = useState("")

  let [enunciado, setEnunciado] = useState("")
  let [type, setType] = useState("")
  let [resposta1, setResposta1] = useState("")
  let [resposta2, setResposta2] = useState("")
  let [resposta3, setResposta3] = useState("")
  let [resposta4, setResposta4] = useState("")

  let [resposta, setRespostaCorreta] = useState("")
  let [aprovado, setAprovado] = useState("")
  let [tituloEmbed, setTituloEmbed] = useState("")
  let [corEmbed, setCorEmbed] = useState("")
  let [tempoCollector, settempoCollector] = useState("")


    async function addResposta(){
          perguntas.push({
            "id": countResposta,
            "type": type, 
            "enunciado": enunciado, 
            "respostas": [
                {
                    "resposta": resposta1,
                    "value": '1'
                },
                {
                    "resposta": resposta2,
                    "value": '2'
                },
                {
                    "resposta": resposta3,
                    "value": '3'
                },
                {
                    "resposta": resposta4,
                    "value": '4'
                },
            ], 
    }
    )
    countResposta++
    console.log(perguntas)
    }
  return (
    <div className="App">
      <form className="formData">
        <input className="idbot" onChange={(evt) => setIdBot(evt.target.value)}/>

        <input className="enunciado" placeholder="Enunciado" onChange={(evt) => setEnunciado(evt.target.value)}/>
        <input className="type" placeholder="Type" onChange={(evt) => setType(evt.target.value)}/>
        <input className="resposta" placeholder="Resposta n1" onChange={(evt) => setResposta1(evt.target.value)}/>
        <input className="resposta" placeholder="Resposta n2" onChange={(evt) => setResposta2(evt.target.value)}/>
        <input className="resposta" placeholder="Resposta n3" onChange={(evt) => setResposta3(evt.target.value)}/>
        <input className="resposta" placeholder="Resposta n4" onChange={(evt) => setResposta4(evt.target.value)}/>

        <button onClick={(evt) => {addResposta(); evt.preventDefault()} }>Clique aqui para adicionar resposta!</button>


        <input className="aprovado" onChange={(evt) => setAprovado(evt.target.value)}/>
        <input className="tituloEmbed" onChange={(evt) => setTituloEmbed(evt.target.value)}/>
        <input className="corEmbed" onChange={(evt) => setCorEmbed(evt.target.value)}/>
        <input className="tempoCollector" onChange={(evt) => settempoCollector(evt.target.value)}/>

        <button onClick={() => {criarDatabase(IdBot, perguntas, resposta, aprovado, tituloEmbed, corEmbed, tempoCollector)}}>Clique para enviar</button>
      </form>
      
    </div>
  );
}

export default App;
