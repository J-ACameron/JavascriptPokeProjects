const starterCounters = {
    'Bulbasaur': 'Charmander',
    'Charmander': 'Squirtle',
    'Squirtle': 'Bulbasaur'
};

const elements = {
    trainerName: document.getElementById('trainerName'),
    starter: document.getElementById('starter'),
    rivalName: document.getElementById('rivalName'),
    generateBtn: document.getElementById('generateBtn'),
    card: document.getElementById('card'),
    cardText: document.getElementById('cardText')
};

function generateCard() {
    const trainer = elements.trainerName.value.trim();
    const starterPokemon = elements.starter.value;
    const rival = elements.rivalName.value.trim();
    
    // Validate inputs
    if (!trainer || !starterPokemon || !rival) {
        alert('Please fill in all fields');
        return;
    }
    
    // Get the counter starter
    const counterStarter = starterCounters[starterPokemon];
    
    // Generate the story using template literal
    const story = `Welcome, ${trainer}! Professor Oak has given you ${starterPokemon}. Your rival ${rival} chose ${counterStarter}. Your adventure begins!`;
    
    // Display the card
    elements.cardText.textContent = story;
    elements.card.classList.remove('hidden');
}

// Event listener
elements.generateBtn.addEventListener('click', generateCard);

// Allow Enter key to generate
elements.rivalName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateCard();
    }
});
