//recebe e filtra quantidade

let quantidade = prompt('Quantas cartas?')

while(quantidade < 4 || quantidade > 14 || quantidade%2 !== 0){
 quantidade = prompt('Quantas cartas?')
}
darCartas(quantidade)

// usa quantidade recebida pra distribuir cartas
function darCartas(quantidade){
    for(let i=0; i < quantidade; i++){
        let container = document.querySelector('.container_cards').innerHTML += `
             <div class="card" onclick="selecionar(this)">
                <div class="back">
                    <img src="./img/bobrossparrot.gif">
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