function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.lenght == 0 || fano.value > ano){
        window.alert('[Erro] tente novamante por os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' ,'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jobenm.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }

        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
        res.appendChild(img)
    }
    




}
