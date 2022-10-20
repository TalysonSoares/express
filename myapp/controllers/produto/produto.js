const produtos = [
    {
        "id": 1,
        "nome": "produto 1"
    },
    {
        "id": 2,
        "nome": "produto 2"
    },
]




function listar() {
    return JSON.stringify(produtos);
}

function criar() {
    return "Criar produto"
}

function atualizar() {
    return "Atualizar produto"
}

function deletar() {
    return "Deletar produto"
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar,
}