const form = document.querySelector('#form')

form.addEventListener('submit', event =>{
    event.preventDefault()
    const peso = document.querySelector('#weight').value
    const altura = document.querySelector('#height').value

    const result = peso / (altura * altura).toFixed(2)

    const value = document.querySelector('#value')
    let description = ''
    value.classList.add('attention')

     document.querySelector('#infos').classList.remove('hidden')

    if (result < 18.5) {
        description = 'Cuidado você está abaixo do peso ideal'
    }
    else if (result >= 18.5 && result <= 25){
        description = 'Você está no peso ideal'
        value.classList = 'normal'
    }
    else if (result > 25 && result <= 30){
        description = 'Cuidado! você está com sobrepeso'
    }
    else if (result > 30 && result <= 35){
        description = 'Cuidado! você está com obesidade moderada'
    }
    else if (result > 35 && result <= 40){
        description = 'Cuidado! você está com obesidade severa'
    }
    else {
        description = 'Cuidado! Você está com obesidade mórbida'
    }

   



    value.textContent = result.toFixed(2)
    document.querySelector('#description').textContent = description

})





