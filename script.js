

const key = "f4272fb653bf629158767634fb8d940e"

function ColocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor (dados.main.temp) + "ºC"
    document.querySelector("testo-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector("img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function BuscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric` ).then( resposta => resposta.json())
    ColocarDadosNaTela(dados)

}

function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    BuscarCidade(cidade)
}