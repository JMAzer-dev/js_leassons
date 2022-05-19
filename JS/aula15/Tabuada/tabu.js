function tabuada() {
    let num = document.getElementById('numero')
    let sel = document.getElementById('seltabu')  
    if (num.value.length == 0) {
        alert('Informe um número')

    } else {
        let c = 0
        let n = Number(num.value)
        while(c <= 10){
        let opt = document.createElement('option');
        sel.appendChild(opt);
        opt.text += `${n} X ${c} = ${n*c}`;
        c++;
        } 
    }
}

//     } else {
//         let n = Number(num.value)
//         for(let c = 0; c <= 10; c++){  
//         let opt = document.createElement('option')   
//         opt.text += `${n} x ${c} = ${n*c}`
//         sel.appendChild(opt)       
//         }       
//     }
// }