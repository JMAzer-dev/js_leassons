var idade = 22
var grau = 'Analfabeto'
console.log(`Idade: ${idade} anos, Grau de escolaridade: ${grau}.`)
 if(idade < 16){
        console.log('Não pode votar.')
    }else if(idade < 18 || idade > 70 || grau == 'Analfabeto'){
            grau.toString()
            console.log('Voto facultativo.')
        }else{
            console.log('Voto obrigatório.')
        }
       
    