import autorModel from "../models/autorModel.js";

export const cadastrarAutor = async (req, res) => {
    const { nome, biografia, data_nascimento, nacionalidade} = req.body;

    if(!nome){
        res.status(400).json({
            erro: "Campo nome inválido",
            mensagem: "o campo nome não pode ser nulo"
        })
        return
    }
     if(!biografia){
        res.status(400).json({
            erro: "Campo biografia inválido",
            mensagem: "o campo biografia não pode ser nulo"
        })
        return
    }
     if(!data_nascimento){
        res.status(400).json({
            erro: "Campo nome inválido",
            mensagem: "o campo data_nascimento não pode ser nulo"
        })
        return
    }
     if(!nacionalidade){
        res.status(400).json({
            erro: "Campo nome inválido",
            mensagem: "o campo nacionalidade não pode ser nulo"
        })
        return
    }
    const validaData = new Date(data_nascimento)
    if(validaData == 'invalid Date'){
        res.status(400).json({
            erro: "Data Inválida",
            mensagem:"Formato Inválido"
        })
        return
    }

    const autor = {
        nome,
        biografia,
        data_nascimento,
        nacionalidade
    }
    try {
        const novoAutor = await autorModel.create(autor);
        res
        .status(201)
        .json({mensagem: "Autor criado com sucesso", novoAutor})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensagem: "Erro interno ao cadastrar autor"})
        
    }
};