// Dark/Light Theme
const btn = document.getElementById("botao");
const css = document.getElementById("appcss");
const theme = window.localStorage.getItem("theme");

if (theme === "Dark"){
    css.href = "../css/app_dark.css";
    btn.innerHTML = "Light"
}else{
    css.href = "../css/app.css";
}

function changeColorTheme(){
    if(btn.innerHTML === "Dark"){
        btn.innerHTML = "Light";
        window.localStorage.setItem("theme", "Dark");
        css.href = "../css/app_dark.css";

    }else{
        btn.innerHTML = "Dark";
        window.localStorage.setItem("theme", "Light");
        css.href = "../css/app.css";
    } 
}


// Quiz
const listaDeResultados = [false, false, false, false, false, false, false, false, false, false];

const pergunta1 = document.getElementsByName('pergunta1')
pergunta1.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(1, 2)
    })
})

const pergunta2 = document.getElementsByName('pergunta2')
pergunta2.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(2, 1)
    })
})

const pergunta3 = document.getElementsByName('pergunta3')
pergunta3.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(3, 0)
    })
})

const pergunta4 = document.getElementsByName('pergunta4')
pergunta4.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(4, 3)
    })
})

const pergunta5 = document.getElementsByName('pergunta5')
pergunta5.forEach((e) => {
    e.addEventListener("click", () => {
        mostrarResposta(5, 0)
    })
})

const mostrarResposta = (index, resposta) => {
    const respostaCorreta = document.getElementById(`resposta-correta${index}`)
    const respostaErrada = document.getElementById(`resposta-errada${index}`)
    const respostas = document.getElementsByName(`pergunta${index}`)
    if (respostas[resposta].checked) {
        respostaCorreta.style.display = 'block'
        respostaErrada.style.display = 'none'
        listaDeResultados[index - 1] = true
    } else {
        respostaCorreta.style.display = 'none'
        respostaErrada.style.display = 'block'
        listaDeResultados[index - 1] = false
    }
}

const enviarRespostas = () => {
    const respostas = document.querySelectorAll('input')
    const error = document.getElementById('error')
    let numeroDeRespostasMarcadas = 0
    respostas.forEach((resposta)=>{
    if(resposta.checked){
        numeroDeRespostasMarcadas += 1
    }
    })
    if(numeroDeRespostasMarcadas == 5) {
        for (let i = 0; i<5;i++) {
            document.getElementsByClassName('resultado')[i].style.opacity = '1'
        }
        error.style.display = "none"
        gerarResultadoFinal()
    } else {
        error.style.display = "flex"
    }
}

const gerarResultadoFinal = () => {
    let numeroDeAcertos = 0
    const resultadoFinal = document.getElementById('resultadoFinal')
    let dadosResultadosFinal = document.getElementById('dadosDoResultadoFinal')
    let textoResultadoFinal = document.getElementById('textoDoResultadoFinal')
    listaDeResultados.forEach(resposta => {
        if (resposta) numeroDeAcertos += 1
    });
    if (numeroDeAcertos > 4) {
        dadosResultadosFinal.innerHTML = `Você acertou <strong> ${numeroDeAcertos} </strong> das 5 perguntas`
        textoResultadoFinal.innerHTML = "Parabéns! acho que posso dizer que você é um verdadeiro Otaku."
        resultadoFinal.style.display = "flex"
        mostrarRespostasCertas()
    } else if (numeroDeAcertos > 2) {
        dadosResultadosFinal.innerHTML = `Você acertou <strong> ${numeroDeAcertos} </strong> das 5 perguntas`
        textoResultadoFinal.innerHTML = "Você foi bem, mas poderia ter ido melhor."
        resultadoFinal.style.display = "flex"
        mostrarRespostasCertas()
    } else {
        dadosResultadosFinal.innerHTML = `Você acertou <strong> ${numeroDeAcertos} </strong> das 5 perguntas`
        textoResultadoFinal.innerHTML = "Acho que tá na hora de assistir alguns animes, não acha?"
        resultadoFinal.style.display = "flex"
        mostrarRespostasCertas()
    }
}

const mostrarRespostasCertas = () => {
    const resposta1 = document.querySelectorAll('input[name="pergunta1"] ~ label')[2].style.color = 'green'
    const resposta2 = document.querySelectorAll('input[name="pergunta2"] ~ label')[1].style.color = 'green'
    const resposta3 = document.querySelectorAll('input[name="pergunta3"] ~ label')[0].style.color = 'green'
    const resposta4 = document.querySelectorAll('input[name="pergunta4"] ~ label')[3].style.color = 'green'
    const resposta5 = document.querySelectorAll('input[name="pergunta5"] ~ label')[0].style.color = 'green'
}
