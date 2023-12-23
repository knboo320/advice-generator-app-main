const resAdvice = document.querySelector('#result');
const resNumber = document.querySelector('#number')
const resBtn = document.querySelector('#getAdvice');

//Quando o botão ser clicado, a função será acionada
resBtn.addEventListener('click', () => {
    getAdvice();
})

//Ele sempre vai carregar uma frase quando a página abrir e recarregar.
window.onload = () => {
    getAdvice();
}

function getAdvice() {
    //Coletando o link da API
    fetch('https://api.adviceslip.com/advice').then(
    //Transformando a informação em JSON
        data => {
            return data.json();
        //Criando a const que irá armazenar a informação recebida
        }).then(adviceData => {
        //Entrando no local que está a informação desejada (varia de API)
            const adviceObj = adviceData.slip;
        //Colocando a informação dentro da sua div no HTML
            resAdvice.innerHTML = `<b>"${adviceObj.advice}"</b>`;
            resNumber.innerHTML = `ADVICE #${adviceObj.id}`;
        }).catch(error => error)
}