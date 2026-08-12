const typeChart = {
fire: {
    fire: 0.5,
    water: 0.5,
    grass: 2,
    rock: 0.5
},

water: {
    fire: 2,
    water: 0.5,
    grass: 2,
    rock: 0.5
},

grass: {
    fire: 0.5,
    water: 0.5,
    grass: 0.5,
    rock: 2
},

rock: {
    fire: 2,
    water: 0.5,
    grass: 0.5,
    rock: 0.5,
    flying: 2
},

flying: {
    grass: 2,
    rock: 0.5,
}

}


const start = document.getElementById("checkBtn")
const resultElement = document.getElementById("output")

function checkMatchup(){ 
const aType = document.getElementById("atkType").value
const dType1 = document.getElementById("defType1").value
const dType2 = document.getElementById("defType2").value
let result = ""

let multiplier = typeChart[aType][dType1]
if (multiplier === undefined) {
    multiplier = 1
}

let multiplier2 = typeChart[aType][dType2]
if (multiplier2 === undefined) {
    multiplier2 = 1
}
let effectiveness = multiplier * multiplier2


result = `${effectiveness}x Effective!`
output.textContent = result
}


start.addEventListener("click", checkMatchup)   