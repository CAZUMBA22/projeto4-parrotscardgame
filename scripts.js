//nomeando globais
const imgBack = [ 
'bobrossparrot', 
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot'] 

const imgEmabralhada =[]
let listacomparacao = []
contadorCartaClicada = 0
let contadorAcertos = 0

//embaralha gifs 



//recebe e filtra quantidade certa a ser passada

let quantidade = prompt('Quantas cartas?')

while(quantidade < 4 || quantidade > 14 || quantidade%2 !== 0){
 quantidade = prompt('Quantas cartas?')
}  
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}



// junta cartas em dupla na nova array e ja embaralha na saida
embaralhar(quantidade)
function embaralhar(quantidade){
    
    for(let i=0; i < quantidade/2; i++){
        imgEmabralhada.push(imgBack[i])
        imgEmabralhada.push(imgBack[i])
        }
        imgEmabralhada.sort(comparador)
        darCratas(imgEmabralhada)
    }
   

// usa quantidade recebida pra distribuir cartas
 function darCratas(imgEmabralhada){
    for(let i=0; i < quantidade; i++){
    document.querySelector('.container_cards').innerHTML += `
        <div class="card" onclick="selecionar(this)">
           <div class="back">
              <img src="./img/${imgEmabralhada[i]}.gif">
            </div>
            <div class="front">
             <img src="./img/front.png">
            </div>
        </div>   
        `
       
    }
}

//seleciona/vira carta//
function selecionar(elemento) {
    if(contadorCartaClicada < 2){
    elemento.classList.add('virada')
    listacomparacao.push(elemento.querySelector('.back img'))
    contadorCartaClicada ++
    setTimeout(comparacao, 1000)
    }
}

function comparacao(elemento){
    if(contadorCartaClicada == 2){
        contadorCartaClicada = 0
        if(listacomparacao[0].src !== listacomparacao[1].src){
        listacomparacao[0].parentNode.parentNode.classList.remove('virada') 
        listacomparacao[1].parentNode.parentNode.classList.remove('virada')
        listacomparacao = []    
        }else{
         contadorAcertos ++ 
         listacomparacao = [] 
         msgVitoria()   
        }

    }

    function msgVitoria(){
        if (quantidade/2 == contadorAcertos){
            alert('Parabens, você ganhou!!')

        }

    }
}


