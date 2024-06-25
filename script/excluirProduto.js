// import { conection } from "./conection.js"

document.querySelectorAll('.trash').forEach(button => {
        button.addEventListener('click', async (event) => {
            alert('Não foi possivel excluir o produto!!!!')
            const id = event.currentTarget.getAttribute('data-id');
            await excluiProduto(id);
            await listarProduto();
        });
    });



