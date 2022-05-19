// function parimp(n){
//     if(n%2 == 0){
//         return 'é um número par'
//     } else {
//         return ' é um número impar'
//     }
// }
// console.log(parimp(11))
// function soma(n1=0, n2=0){
//     return n1 + n2
// }
// console.log(soma(8, 9))
// let f = function fatorial(num){
//     let fat = 1
//     for(let i = num; i > 0; i--){
//        fat *= i      
//     }
//     return ` ${fat}!` 
// }
// console.log(f(5))
function fat(n){
    if(n == 1){
        return 1
    } else {
        return n * fat(n-1)
    }
}
console.log(fat())