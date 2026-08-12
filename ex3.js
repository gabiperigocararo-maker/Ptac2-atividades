const  produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 }, 
    { id: 2, nome: 'Caderno', preco: 25 },
     { id: 3, nome: 'Lápis', preco: 1.2 }
        ];

const ate5 = produtos.filter(c => c.preco < 5)
                     .map(c => c.nome)

console.log (ate5)