// 1 - var , let e const
var x = 10
var y = 15
if(y>10){
    var x = 5
    console.log(x)
}

console.log(x)

let b = 15
let a = 10

if(b > 10){
    let a = 5
    console.log('a= '+ a)
}
console.log('a= '+ a)

let i=100
console.log('i= '+ i)
for(i=1; i<5; i++) {
    console.log('i= '+i)
}

const name = 'pedro'
function logName() {
    const name = 'joao'
    console.log('const in  '+name)
}
console.log('const fora '+name)

logName()