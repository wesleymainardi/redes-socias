async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    cosole.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.total_pessoas_mundo} de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)
    const container = document.getElementById(‘graficos-container’)
    container.appendChild(paragrafo)
  }
  
  vizualizarInformacoesGlobais()
  