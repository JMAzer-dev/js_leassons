function passada() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //alert('[ERRO] Preencha todos os campos')
        res.innerHTML = 'Impossivel contar!'
    }  else { 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p <= 0) {
            alert('[ERRO] Alterando passo para 1')
            p = 1;
        } else { //Decrescente
            res.innerHTML = "Contando: <br>"
            if (i > f){
                while(i >= f){
                    i-=p
                    res.innerHTML += `${i} `
                }    
            } else { //Crescente
                for ( let c = i ; c <= f ; c += p) {
                    res.innerHTML += `${c} `
                }
            }
        }   
    }    
}

































// while(i < f){
//     res.innerHTML = `${i}`    
//     i+=p