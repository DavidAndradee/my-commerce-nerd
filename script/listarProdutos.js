import { conection } from "./conection.js";


const lista = document.querySelector("[data-lista]")

function constroiCard(name, price, image) {
    const produto = document.createElement("div")
    produto.className = "card-produto";

    produto.innerHTML = `
                    <img class="image-card" src="${image}" alt="">
                    <div>
                        <p>${name}</p>
                        <div class="price">
                            <p>$ ${price}</p>
                            <button id="excluir" class="trash">
                                <img src="/src/assets/Vector.png" alt="">
                            </button>
                        </div>
                    </div>
                    `
    return produto;
}

async function listaProduto(){
    const listaApi = await conection.listarProduto();
    listaApi.forEach(element => lista.appendChild(constroiCard(element.nome, element.preco, element.imagem)))

}

listaProduto();
