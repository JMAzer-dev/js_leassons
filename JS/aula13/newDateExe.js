// var hora = new Date().getHours()
// var min = new Date().getMinutes()
// var agora = hora + ':' + min
var hora = 4
var agora = 4
if(hora > 4 && hora < 12){
    console.log(`Bom dia, são exatamente ${agora}.`)
} else if(hora < 18 && hora > 11){
    console.log(`Boa tarde, são exatamente ${agora}.`)
}else{
    console.log(`Boa noite, são exatamente ${agora}.`)
}
