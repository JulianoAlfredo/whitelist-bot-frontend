import API from "../api/api.ts"


export default function criarDatabase(IdBot, perguntas, resposta, aprovado, tituloEmbed, corEmbed, tempoCollector){
        API.post(`http://localhost:3001/criardb/${IdBot}`, {
            "id": String(IdBot),
            "PERGUNTAS_RESPOSTAS": perguntas,
            "mensagem_aprovado": aprovado,
            "titulo_embed": tituloEmbed,
            "cor_embed": corEmbed,
            "tempo_colletor": tempoCollector,
        }, { headers: { 'Content-Type': 'application/json' } })
    }

