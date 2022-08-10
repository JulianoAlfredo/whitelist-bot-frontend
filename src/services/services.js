import API from "../api/api.ts"


export default function criarDatabase(IdBot, perguntas, resposta, aprovado, tituloEmbed, corEmbed, tempoCollector){
        API.post(`http://localhost:3001/criardb/${IdBot}`, {
            "id": String(IdBot),
            "PERGUNTAS_RESPOSTAS": [
                {"1": [{ "type": 'USER_WRITE', "enunciado": "Qual seu nome?", "respostas": [], "resposta_correta": [] }]},
                {"2": [{
                    "type": 'USER_CHOOSE', "enunciado": "O que é RDM?", "respostas": [
                        {
                            "resposta": 'Dar a bunda',
                            "value": '1'
                        },
                        {
                            "resposta": 'Dar o cu',
                            "value": '2'
                        },
                        {
                            "resposta": 'Deitar no pau',
                            "value": '3'
                        },
                        {
                            "resposta": 'Matar sem motivo',
                            "value": '4'
                        },
                    ], 
                "resposta_correta": resposta
                }],
            }],
            "mensagem_aprovado": aprovado,
            "titulo_embed": tituloEmbed,
            "cor_embed": corEmbed,
            "tempo_colletor": tempoCollector,
        }, { headers: { 'Content-Type': 'application/json' } })
    }

