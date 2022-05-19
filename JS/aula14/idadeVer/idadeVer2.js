function verifica(){
    var sexM = document.querySelector('input#sexoM').checked
    var sexF = document.querySelector('input#sexoF').checked
    var escreva = document.getElementById('res')
    var ano = document.getElementById('txtano').value
    var atual = new Date().getFullYear()
    var idade = atual - ano
    var img = document.createElement('img')
    var imagens = document.getElementById('imagens')
    var genero = ''
    if( ano == '' || ano > atual || sexF == false && sexM == false){
        alert('[ERRO] Preencha os campos corretamente')
    } else{ 
        if(sexM == true){
            genero = 'Homem'
        } else{
            genero = 'Mulher'
        }
        if(idade <= 14 && genero == 'Homem'){
                img.setAttribute('src', 'menino.png')
                } else if(idade <= 30 && genero == 'Homem'){
                    img.setAttribute('src', 'jovemM.png')
                } else if(idade <= 50 && genero == 'Homem'){
                    img.setAttribute('src', 'adultoM.png')
                } else if(idade > 50 && genero == 'Homem'){
                    img.setAttribute('src', 'idoso.png')
                } 
        if(idade <= 14 && genero == 'Mulher'){
            img.setAttribute('src', 'menina.png')
        }   else if(idade <= 30 && genero == 'Mulher'){
                img.setAttribute('src', 'jovemF.png')
        }   else if(idade <= 50 && genero == 'Mulher'){
                img.setAttribute('src', 'adultoF.png')
        }   else if(idade > 50 && genero == 'Mulher'){
                img.setAttribute('src', 'idosa.png')
        }
        escreva.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        imagens.appendChild(img)
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center'
    }
}