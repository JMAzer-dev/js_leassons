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
    if(ano == '' || sexM == false && sexF == false){
        alert('Preencha todos os campos com *')
    } else if(sexM == true){
        genero = 'homem'
    } if(sexF == true){
        genero = 'mulher'
    }  
    escreva.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    if(idade < 15 && genero == 'homem'){
    imagens.appendChild(img)
    img.setAttribute('src', 'menino.png')
    escreva.style.textAlign = 'center'
    imagens.style.textAlign = 'center' 
    } else if(idade < 15 && genero == 'mulher'){
        imagens.appendChild(img)
        img.setAttribute('src', 'menina.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    } else if(idade <= 30 && genero == 'homem'){
        imagens.appendChild(img)
        img.setAttribute('src', 'jovemM.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    } else if(idade <= 30 && genero == 'mulher'){
        imagens.appendChild(img)
        img.setAttribute('src', 'jovemF.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    }
    else if(idade < 51 && genero == 'homem'){
        imagens.appendChild(img)
        img.setAttribute('src', 'adultoM.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    }
    else if(idade < 51 && genero == 'mulher'){
        imagens.appendChild(img)
        img.setAttribute('src', 'adultoF.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    }
    else if(idade > 50 && genero == 'homem'){
        imagens.appendChild(img)
        img.setAttribute('src', 'idoso.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    }
    else if(idade > 50 && genero == 'mulher'){
        imagens.appendChild(img)
        img.setAttribute('src', 'idosa.png')
        escreva.style.textAlign = 'center'
        imagens.style.textAlign = 'center' 
    }
}