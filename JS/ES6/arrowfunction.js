const sum = function sum(a, b) {
    return a + b
}

const arrowsum = (a, b) => a + b
console.log(sum(5,5))
console.log(arrowsum(5,5))

const greeating = (x) => {
    if(x){
        return 'Olá' + x + '!'
    } else {
        return 'Olá!'
    }
}
console.log(greeating('Joao'))
console.log(greeating())

const testeArrow = () => console.log('Testou!')
testeArrow()

const user = {
    name: 'JAO',
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log('Username' + self.name, 500)
        })
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log('Username: ' + this.name, 3000)
        })
    }
}
user.sayUserNameArrow()
user. sayUserName()