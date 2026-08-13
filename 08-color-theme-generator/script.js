const pokemon = [
    { name: "Charizard",   types: ["fire", "flying"] },
    { name: "Greninja",    types: ["water", "dark"] },
    { name: "Venusaur",    types: ["grass", "poison"] },
    { name: "Gengar",      types: ["ghost", "poison"] },
    { name: "Gyarados",    types: ["water", "flying"] },
    { name: "Dragonite",   types: ["dragon", "flying"] },
    { name: "Tyranitar",   types: ["rock", "dark"] },
    { name: "Metagross",   types: ["steel", "psychic"] },
    { name: "Lucario",     types: ["fighting", "steel"] },
    { name: "Garchomp",    types: ["dragon", "ground"] },
    { name: "Scizor",      types: ["bug", "steel"] },
    { name: "Gardevoir",   types: ["psychic", "fairy"] },
    { name: "Mimikyu",     types: ["ghost", "fairy"] },
    { name: "Ferrothorn",  types: ["grass", "steel"] },
    { name: "Excadrill",   types: ["ground", "steel"] },
    { name: "Rotom",       types: ["electric", "ghost"] },
    { name: "Magnezone",   types: ["electric", "steel"] },
    { name: "Swampert",    types: ["water", "ground"] },
    { name: "Blaziken",    types: ["fire", "fighting"] },
    { name: "Weavile",     types: ["dark", "ice"] },
    { name: "Mamoswine",   types: ["ice", "ground"] },
    { name: "Aggron",      types: ["steel", "rock"] },
    { name: "Crobat",      types: ["poison", "flying"] },
    { name: "Skarmory",    types: ["steel", "flying"] },
    { name: "Togekiss",    types: ["fairy", "flying"] },
    { name: "Galvantula",  types: ["bug", "electric"] },
    { name: "Volcarona",   types: ["bug", "fire"] },
    { name: "Heracross",   types: ["bug", "fighting"] },
    { name: "Whimsicott",  types: ["grass", "fairy"] },
    { name: "Toxapex",     types: ["poison", "water"] },
    { name: "Hydreigon",   types: ["dark", "dragon"] },
    { name: "Aegislash",   types: ["steel", "ghost"] },
    { name: "Dragapult",   types: ["dragon", "ghost"] },
    { name: "Kommo-o",     types: ["dragon", "fighting"] },
    { name: "Sableye",     types: ["dark", "ghost"] },
    { name: "Bisharp",     types: ["dark", "steel"] },
    { name: "Mandibuzz",   types: ["dark", "flying"] },
    { name: "Krookodile",  types: ["ground", "dark"] },
    { name: "Nidoking",    types: ["poison", "ground"] },
    { name: "Cloyster",    types: ["water", "ice"] },
    { name: "Lanturn",     types: ["water", "electric"] },
    { name: "Ludicolo",    types: ["water", "grass"] },
    { name: "Gallade",     types: ["psychic", "fighting"] },
    { name: "Jynx",        types: ["ice", "psychic"] },
    { name: "Gliscor",     types: ["ground", "flying"] },
    { name: "Staraptor",   types: ["normal", "flying"] },
    { name: "Diggersby",   types: ["normal", "ground"] },
    { name: "Drampa",      types: ["normal", "dragon"] },
    { name: "Girafarig",   types: ["normal", "psychic"] },
    { name: "Klefki",      types: ["steel", "fairy"] },
    { name: "Azumarill",   types: ["water", "fairy"] },
    { name: "Nihilego",    types: ["rock", "poison"] },
    { name: "Golurk",      types: ["ground", "ghost"] },
    { name: "Trevenant",   types: ["ghost", "grass"] },
    { name: "Drifblim",    types: ["ghost", "flying"] },
    { name: "Chandelure",  types: ["ghost", "fire"] },
    { name: "Slowbro",     types: ["water", "psychic"] },
    { name: "Exeggutor",   types: ["grass", "psychic"] },
    { name: "Beedrill",    types: ["bug", "poison"] },
    { name: "Yanmega",     types: ["bug", "flying"] },
    { name: "Shuckle",     types: ["bug", "rock"] },
    { name: "Leavanny",    types: ["bug", "grass"] },
    { name: "Torterra",    types: ["grass", "ground"] },
    { name: "Rhyperior",   types: ["ground", "rock"] },
    { name: "Camerupt",    types: ["fire", "ground"] },
    { name: "Houndoom",    types: ["fire", "dark"] },
    { name: "Turtonator",  types: ["fire", "dragon"] },
    { name: "Delphox",     types: ["fire", "psychic"] },
    { name: "Heatran",     types: ["fire", "steel"] },
    { name: "Volcanion",   types: ["fire", "water"] },
    { name: "Abomasnow",   types: ["grass", "ice"] },
    { name: "Breloom",     types: ["grass", "fighting"] },
    { name: "Meowscarada", types: ["grass", "dark"] },
    { name: "Empoleon",    types: ["water", "steel"] },
    { name: "Poliwrath",   types: ["water", "fighting"] },
    { name: "Jellicent",   types: ["water", "ghost"] },
    { name: "Barbaracle",  types: ["rock", "water"] },
    { name: "Tyrantrum",   types: ["rock", "dragon"] },
    { name: "Archeops",    types: ["rock", "flying"] },
    { name: "Carbink",     types: ["rock", "fairy"] },
    { name: "Terrakion",   types: ["rock", "fighting"] },
    { name: "Cradily",     types: ["rock", "grass"] },
    { name: "Salazzle",    types: ["poison", "fire"] },
    { name: "Dragalge",    types: ["poison", "dragon"] },
    { name: "Skuntank",    types: ["poison", "dark"] },
    { name: "Toxicroak",   types: ["poison", "fighting"] },
    { name: "Toxtricity",  types: ["electric", "poison"] },
    { name: "Zapdos",      types: ["electric", "flying"] },
    { name: "Stunfisk",    types: ["ground", "electric"] },
    { name: "Tapu Koko",   types: ["electric", "fairy"] },
    { name: "Sigilyph",    types: ["psychic", "flying"] },
    { name: "Latios",      types: ["dragon", "psychic"] },
    { name: "Malamar",     types: ["dark", "psychic"] },
    { name: "Pangoro",     types: ["fighting", "dark"] },
];

const colors = {
    normal:   { main: "#A8A77A", dark: "#797858" },
    fire:     { main: "#EE8130", dark: "#AB5D23" },
    water:    { main: "#6390F0", dark: "#4768AD" },
    electric: { main: "#F7D02C", dark: "#B29620" },
    grass:    { main: "#7AC74C", dark: "#588F37" },
    ice:      { main: "#96D9D6", dark: "#6C9C9A" },
    fighting: { main: "#C22E28", dark: "#8C211D" },
    poison:   { main: "#A33EA1", dark: "#752D74" },
    ground:   { main: "#E2BF65", dark: "#A38A49" },
    flying:   { main: "#A98FF3", dark: "#7A67AF" },
    psychic:  { main: "#F95587", dark: "#B33D61" },
    bug:      { main: "#A6B91A", dark: "#788513" },
    rock:     { main: "#B6A136", dark: "#837427" },
    ghost:    { main: "#735797", dark: "#533F6D" },
    dragon:   { main: "#6F35FC", dark: "#5026B5" },
    dark:     { main: "#705746", dark: "#513F32" },
    steel:    { main: "#B7B7CE", dark: "#848494" },
    fairy:    { main: "#D685AD", dark: "#9A607D" },
}

const names = pokemon.map((p) => p.name)
const select = document.getElementById("pokemon")
const generateBtn = document.getElementById("generate")
const card = document.getElementById("card")


function optionNames(){
    names.forEach((n, i) => {
        const options = document.createElement("option")
        options.textContent = n
        options.value = i
        select.appendChild(options)
})
}

function types(){
    const chosen = pokemon[Number(select.value)]
    const themes = chosen.types.map((t) => colors[t])

    const stops = []
    themes.forEach((theme) => {
        stops.push(theme.main)
        stops.push(theme.dark)
    })

    document.body.style.background = `linear-gradient(135deg, ${stops.join(", ")})`
}



optionNames()
generateBtn.addEventListener('click', types)
