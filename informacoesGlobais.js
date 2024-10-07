const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)

    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = ´Vocẽ sabia que o mundo <span>${dados.total_pessoas_mundo}<\span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões<\span>
    estão conectadas em alguma rede social e passam em média <span>${dados.tempo_médio}<\span> horas conectadas. ´
    

    const container = document.getElementByid(´graficos-container´)
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()

