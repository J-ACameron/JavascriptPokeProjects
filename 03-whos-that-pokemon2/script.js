const pokemonList = [
    {
    name: "Darmanitan",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/555.png"
    },
    {
    name: "Stakataka",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/805.png"
    },
    {
    name: "Regigigas",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/486.png"
    },
    {
    name : "Grimmsnarl",
    img: "https://static.wikia.nocookie.net/pkmncollectors/images/3/31/Grimmsnarl.png/revision/latest?cb=20200623225445"
    },
    {
    name : "Guzzlord",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/799.png"
    },
    {
    name: "Stonjourner",
    img: "https://img.pokemondb.net/artwork/stonjourner.jpg"
    }
]

let randomIndex
let currentAnswer
let guessCount
const image = document.getElementById("pokemon-img")
const startGameBtn = document.getElementById("startGameBtn")
const guessBtn = document.getElementById("guessBtn")
const hintBtn = document.getElementById("hintBtn")
const resultElement = document.getElementById("result")
const scoreElement = document.getElementById("score")
let scoreCount = 0

function startGame(){
    randomIndex = Math.floor(Math.random() * pokemonList.length)
    currentAnswer = pokemonList[randomIndex]
    image.src = currentAnswer.img
    guessCount = 0
    let score = 0

    image.classList.add("silhouette")     // black it out

}

function hintF(){
let hint  = currentAnswer.name[0]
result = `name starts with a ${hint}`
resultElement.textContent = result
}


function guessCheck(){
    let result = ''
    score = `Score = ${scoreCount}`
    resultElement.textContent = result
    scoreElement.textContent = score

    let guess = document.getElementById("guess").value


    if(guess.toUpperCase() === currentAnswer.name.toUpperCase()){
        result = "Correct!"
        
        //change brightness
        image.classList.remove("silhouette")  // reveal
        scoreCount++
        //one second let user see
        setTimeout(startGame, 1000)   // run someFunction after 1000ms

    }else if(guess.length > currentAnswer.name.length){
        result = "Too many letters!"
        guessCount++

    }else if(guess.length < currentAnswer.name.length){
        result = "Not enough letters!"
        guessCount++
    }else{
        result = "Wrong!" 
        guessCount++
    }

    if(guessCount === 5){
        result = "You Lose! Too Many Guesses"
        //change brightness
        image.classList.remove("silhouette")  // reveal

        //one second let user see
        setTimeout(startGame, 1000)   // run someFunction after 1000ms

    }
    score = `Score = ${scoreCount}`
    resultElement.textContent = result
    scoreElement.textContent = score


}

startGameBtn.addEventListener('click', startGame)
guessBtn.addEventListener('click', guessCheck)
hintBtn.addEventListener('click', hintF)
