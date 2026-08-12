
const venipede = [
    {
    name: "Venipede",
    image: "https://img.pokemondb.net/artwork/venipede.jpg"
    },
    {
    name: "Whirlipede",
    image: "https://img.pokemondb.net/artwork/whirlipede.jpg"
    },
    {
    name: "Scolipede",
    image: "https://img.pokemondb.net/artwork/scolipede.jpg"
    },
]

let stage = 0;

function render(){

const stage1 = venipede[stage];
const stage2 = venipede[stage + 1];
const stage3 = venipede[stage + 2];

document.getElementById('pokemonName').textContent = stage1.name;
document.getElementById('pokemonImg').src = stage1.image;

}