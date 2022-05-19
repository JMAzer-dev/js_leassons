feather.replace();

var hora = new Date().getHours();
var min = new Date().getMinutes();
function horaDia(){
    
    var d = document.getElementById('desenho')
    var titulo = document.getElementById('titulo')
    var escreva = document.getElementById('mostra');
    var icon = document.createElement('i')
    var icone = document.getElementById('icone')
    if(hora < 12 && hora > 4){
        titulo.innerHTML = `Bom Dia`
        escreva.innerHTML = `Agora são ${hora}:${min} da manhã.`;
        document.body.style.background = '#FFDEAD';
        document.getElementById('imagem').src = 'manha.jpg';
    } else if(hora > 11 && hora < 18){
        
        titulo.innerHTML = `Boa Tarde`
        escreva.innerHTML = `Agora são ${hora}:${min} da tarde.`;
        document.body.style.background = '#D99467';
        document.getElementById('imagem').src = 'tarde.jpg';
        d.setAttribute('data-feather', 'x')
    }else{
        titulo.innerHTML = `Boa Noite`
        escreva.innerHTML = `Agora são ${hora}:${min} da noite.`;
        document.body.style.background = '#323232';
        document.getElementById('imagem').src = 'noite.jpg';
        icone.appendChild(icon)
        icon.setAttribute("class", "moon")
    }
}

