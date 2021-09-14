const calcular = document.getElementById('calcular')

function imc() {
  var nome = document.getElementsByTagName('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome.value !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(2)

    let classificacao = ''
    if (valorIMC < 18.5) {
      classificacao = 'e você precisa ganhar peso'
    } else if (valorIMC < 25) {
      classificacao = 'e você está dentro do peso adequado!'
    } else if (valorIMC < 30) {
      classificacao = 'por isso você está acima do peso e deveria emagrecer'
    } else if (valorIMC < 35) {
      classificacao = 'você está com obsidade grau I'
    } else if (valorIMC < 40) {
      classificacao = 'com obesidade grau II'
    } else {
      classificacao = 'com obesidade grau III. Cuidado!!'
    }

    resultado.textContent = `${nome} !, seu IMC é de ${valorIMC} ${classificacao}.`
  } else {
    resultado.textContent = 'Preencha todos os campos!!!'
  }
}

calcular.addEventListener('click', imc)
