function funcao(){
    var vet = []
    for(var i=0; i<5; i++){
        var objeto = {}
        // coloca dados no objeto
        objeto.codigo = Number(prompt("Código"))
        objeto.nome = (prompt("Nome"))
        objeto.quantidade = Number(prompt("Quantidade"))
        objeto.preco = Number(prompt("Preço"))
        // coloca objeto no vetor
        vet.push(objeto)

    }
    var estoque = 0
    for(var i=0;i<5; i++){
        estoque = estoque + vet[i].quantidade

    }
        alert("Total de produtos em estoque "+ estoque)
}

