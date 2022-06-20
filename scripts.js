//nomeando array de gifs
const imgBack = [ 
'bobrossparrot', 
'explodyparrot',
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot'] 

//embaralha gifs 



//recebe e filtra quantidade

let quantidade = prompt('Quantas cartas?')

while(quantidade < 4 || quantidade > 14 || quantidade%2 !== 0){
 quantidade = prompt('Quantas cartas?')
}  
darCratas(quantidade)

// junta cartas nova array
function embaralhar(quantidade){
    const imgEmabralhada =[]
    for(let i=0; i < quantidade; i++){
        imgEmabralhada.push(imgBack[i])
        imgEmabralhada.push(imgBack[i])
        }
        darCratas(imgEmabralhada)
    }


// usa quantidade recebida pra distribuir cartas
 function darCratas(imgEmabralhada){
    for(let i=0; i < quantidade; i++){
    document.querySelector('.container_cards').innerHTML += `
        <div class="card" onclick="selecionar(this)">
           <div class="back">
              <img src="./img/${Math.random(imgEmabralhada[i])*quantidade}.gif">
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
    elemento.classList.toggle('virada')

}

minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
