# Pokémon Search

## Description

This is a simple web application that allows users to search for Pokémon by name or ID. 
The app fetches data from the [PokeAPI](https://pokeapi.co/) and displays the Pokémon's name, image, and type.
If the Pokémon is not found, an error message is shown.

## Features

- Search for a Pokémon by name or ID.
- Fetch Pokémon data asynchronously using the Fetch API.
- Display Pokémon name, image, and type dynamically.
- Handle errors gracefully when the Pokémon is not found.
- Uses vanilla JavaScript, HTML, and CSS (no frameworks).

## Technologies Used

- HTML
- CSS
- JavaScript (Fetch API, async/await)

## Installation & Usage

### Prerequisites

No special setup is required. A modern web browser is enough to run this project.

### Steps to Run

1. Clone this repository or download the files.
   ```bash
   git clone https://github.com/yourusername/pokemon-search.git
   ```
2. Navigate to the project folder.
   ```bash
   cd pokemon-search
   ```
3. Open the `index.html` file in a web browser.

## File Structure

```
📂 pokemon-search/
├── 📄 index.html  (Main structure of the web page)
├── 📄 styles.css  (Styling for the page)
├── 📄 script.js   (JavaScript logic for fetching and displaying Pokémon data)
└── 📄 README.md   (Project documentation)
```

## How It Works

1. The user enters a Pokémon name or ID in the input box.
2. Clicking the "Search" button triggers an API request to [PokeAPI](https://pokeapi.co/api/v2/pokemon/{id_or_name}).
3. The app fetches and displays the Pokémon's name, image, and type dynamically.
4. If the Pokémon is not found, an error message is displayed.


## License

This project is open-source and available under the MIT License.

## Resources

- [PokeAPI](https://pokeapi.co/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

