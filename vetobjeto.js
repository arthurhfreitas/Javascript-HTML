function funcao(){
    var vet = []
    for(var i=0; i<3; i++){
        var objeto = {}
        // coloca dados no objeto
        objeto.salario = Number (prompt("Salário: "))
        objeto.idade = Number (prompt("Idade: "))
        objeto.filhos = Number (prompt("Quantidade de Filhos: "))
        objeto.sexo = (prompt("Sexo: "))
        // coloca objeto no vetor
        vet.push(objeto)

    }

    var mediasalario = 0
    for(var i=0;i<3; i++){
        mediasalario = mediasalario + vet[i].salario
    }

    var mediafilhos = 0
    for(var i=0;i<3; i++){
        mediafilhos = mediafilhos + vet[i].filhos
    }

    var maiorsalario = vet[0].salario
    for(var i=0;i<3; i++){
        if (maiorsalario < vet[i].salario) {
            maiorsalario = vet[i].salario
        }
        
    }
    var cont = 0
    for(var i=0;i<3; i++){
        if((vet[i].salario > 1000) && (vet.sexo[i] == "F")){
            cont = cont + 1

        }
    }


        alert("A média de salarios é de: "+ mediasalario / 3 )
        alert("A média de filhos é de: "+ mediafilhos / 3 )
        alert("O Maior salario é: "+ maiorsalario)
        alert("O Percentual de: "+ (cont / 3) * 100)   
}

