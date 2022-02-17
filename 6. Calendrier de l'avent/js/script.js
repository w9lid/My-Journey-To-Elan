window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector ("section")
    const nbBox = 24

    let colors = [  "#165b33ce",
                    "#146b3ace",
                    "#fbb229ce",
                    "#ea4630ce",
                    "#bb2528ce",
                    "#2997bbce",
                    "#196882ce"
    ]


    // Créer un tableau de 1 à 24  (k = key / v = value)
    let numeros = Array.from({length:24}, (k, v) => v + 1)
    // Mélanger le tableau "numeros" sans doublons
    let shuffle = numeros.sort(() => Math.random() - 0.5 )


    for (let i = 1; i <= nbBox; i++) {
        // créer un élément de type <div>
        let box = document.createElement("div")

        let image = document.createElement("img")

        // on attribue la classe "box" à cet élément
        box.classList.add("box")

        image.classList.add("image")

        // on ajoute du contenu dans l'élément "box"
        box.innerHTML = shuffle[i - 1]

        image.src = "./images/image"+i+".jpg"

        console.log(image.src)

        // récupère un index aléatoire dans le tableau de couleurs "colors"
        let randomIndex = (Math.floor(Math.random()* colors.length))
        
        // attribue une couleur de fond à l'indice aléatoire à la div "box"
        box.style.backgroundColor = colors[randomIndex]

        // on ajoute l'élément box dans la section
        box.appendChild(image)

        section.appendChild(box)
        
        box.addEventListener("click", () => {
            box.classList.toggle("active")
        })
    }
})
