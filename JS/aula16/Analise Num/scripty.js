let num = document.getElementById('txt01')
let res = document.getElementById('res')
let show = document.getElementById('txtslc')
let vet = []

function numCond(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }   
}
function listCond(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }    
}       
function adicionar(){
    if(numCond(num.value) && !listCond(num.value, vet)){
        vet.push(Number(num.value))
        let opt = document.createElement('option')
        show.appendChild(opt)
        opt.innerHTML = `Valor ${num.value} adicionado.`
        res.innerHTML = ''
    } else {
        alert('Número invalido ou já se encontra na lista')
    }
    num.value = ''
    num.focus()
}   
function fim(){
    if(vet.length == ''){
        alert('Insira um valor antes de finalizar')
    } else {
        let tol = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        let media = 0
        for( let pos in vet) {
            soma += vet[pos]
            if( vet[pos] > maior){
                maior = vet[pos]
            } if( vet[pos] < menor){
                menor = vet[pos]
            }
        }
        media = soma / tol
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tol} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número cadastrado é ${maior}.</p>`
        res.innerHTML += `<p>O Menor número cadastrado é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A Média dos valores é igual a ${media}.</p>`
    }
}










// function adicionar(){    
//         let num = Number(txt.value)
//         let opt = document.createElement('option')
//         show.appendChild(opt)
//         opt.innerHTML = `Valor ${num} adicionado.`
//         vet.push(num)  
//         return vet
  
// }