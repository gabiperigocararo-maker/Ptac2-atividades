function buscarProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
     const Produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 }, 
    { id: 2, nome: 'Caderno', preco: 25 },
    { id: 3, nome: 'Lápis', preco: 1.2 }
              ]

              resolve(Produtos.find(c => c.id === id))
        }, 300)
     })
}

async function MostrarProdutos() {
    console.log ('Buscando Produto...')
    const item = await buscarProduto(2)
    console.log('Produto encontrado!' , item)
}

MostrarProdutos()