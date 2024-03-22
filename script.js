function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Esse código é equivalente ao toggle
    /*if(html.classList.contains('light')) {
       html.classList.remove('light')

    }else{
        html.classList.add('light')
    }*/

    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adiciona a imagem light
       img.setAttribute('src', './assets/avatar-light.png')

    }else{
        // se estiver sem light mode, mantem a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }

    


}