const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const elements = {
    pokemonId: document.getElementById('pokemonId'),
    fetchBtn: document.getElementById('fetchBtn'),
    loading: document.getElementById('loading'),
    error: document.getElementById('error'),
    pokemonInfo: document.getElementById('pokemonInfo'),
    sprite: document.getElementById('sprite'),
    name: document.getElementById('name'),
    types: document.getElementById('types')
};

// Fetch Pokémon using .then() chains
function fetchPokemon() {
    const id = elements.pokemonId.value.trim();
    
    // Validate input
    if (!id || id < 1 || id > 151) {
        showError('Please enter a valid Pokémon ID (1-151)');
        return;
    }
    
    showLoading();
    hideError();
    
    // This is a Promise chain using .then()
    fetch(`${API_URL}/${id}`)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Pokémon not found (Status: ${response.status})`);
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // We got the data! Now display it
            displayPokemon(data);
            hideLoading();
        })
        .catch(error => {
            // Something went wrong - show the error
            console.error('Error:', error);
            showError('Failed to fetch Pokémon. Please try again.');
            hideLoading();
        });
}

// Display the Pokémon data on the page
function displayPokemon(data) {
    elements.sprite.src = data.sprites.front_default;
    elements.sprite.alt = data.name;
    elements.name.textContent = data.name;
    
    // Map types to type badges
    elements.types.innerHTML = data.types
        .map(typeObj => `<span class="type-badge type-${typeObj.type.name}">${typeObj.type.name}</span>`)
        .join('');
    
    elements.pokemonInfo.classList.remove('hidden');
}

// UI Helper functions
function showLoading() {
    elements.loading.classList.remove('hidden');
    elements.pokemonInfo.classList.add('hidden');
}

function hideLoading() {
    elements.loading.classList.add('hidden');
}

function showError(message) {
    elements.error.textContent = message;
    elements.error.classList.remove('hidden');
    elements.pokemonInfo.classList.add('hidden');
}

function hideError() {
    elements.error.classList.add('hidden');
}

// Event listeners
elements.fetchBtn.addEventListener('click', fetchPokemon);

// Allow Enter key to fetch
elements.pokemonId.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchPokemon();
    }
});

// Fetch Pokémon #1 on page load
window.addEventListener('load', fetchPokemon);
