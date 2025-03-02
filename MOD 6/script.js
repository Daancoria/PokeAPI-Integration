async function fetchPokemon() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const display = document.getElementById('pokemonDisplay');
    display.innerHTML = ''; // Clear previous result

    if (!input) {
        display.innerHTML = '<p class="error">Please enter a Pokémon name or ID.</p>';
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();
        
        const pokemonName = data.name.toUpperCase();
        const imageUrl = data.sprites.front_default;
        const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');

        display.innerHTML = `
            <div class="pokemon-card">
                <h2>${pokemonName}</h2>
                <img src="${imageUrl}" alt="${pokemonName}" class="pokemon-img">
                <p><strong>Type:</strong> ${types}</p>
            </div>
        `;
    } catch (error) {
        display.innerHTML = `<p class="error">${error.message}</p>`;
    }
}
