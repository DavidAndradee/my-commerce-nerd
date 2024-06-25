async function listarProduto() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome,preco,imagem) {

    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}

async function excluirProduto() {
  
    alert('Não foi possivel excluir o produto')
    // const conexao = await fetch("http://localhost:3000/produtos", {
    //     method: "DELETE",
    //     headers: {
    //         "Content-type" : "application/json"
    //     },
    //     body: JSON.stringify({
    //         nome: nome
    //     })
    // });

    // const conexaoConvertida = await conexao.json()
    // return conexaoConvertida;
}

export const conection = {
    listarProduto,
    criaProduto,
    excluirProduto
}
