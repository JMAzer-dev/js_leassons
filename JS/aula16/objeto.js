let amigo = {nome: 'Jose',
sexo: 'M',
idade: 35,
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}Kg`)