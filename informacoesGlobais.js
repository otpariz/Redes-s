const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = ´Vocẽ sabia que o mundo ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectadas}
    estão conectadas em alguma rede social e passam em média ${dados.tempo_médio} horas conectadas. ´
    console.log(paragrafo)

    const container = document.getElementByid(´graficos-container´)
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()

