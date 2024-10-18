// List of fonts to load
const fonts = [
  'Roboto', 'Open Sans', 'Lato', 'Raleway', 'Poppins', 'Ubuntu', 'Lobster', 'Pacifico', 
  'Josefin Sans', 'Anton', 'Varela Round', 'Inconsolata', 'Dancing Script', 'Great Vibes', 
  'Courier Prime', 'Nunito', 'Titillium Web', 'Fira Sans', 'Amatic SC', 'Abril Fatface', 
  'Exo', 'Fugaz One', 'Lilita One', 'Zilla Slab', 'Acme', 'Audiowide', 'Montserrat', 
  'Oswald', 'Merriweather', 'Playfair Display', 'Bangers', 'Arvo', 'Cormorant Garamond', 
  'Indie Flower', 'Baloo', 'Caveat', 'Fira Sans', 'Shadows Into Light', 'Press Start 2P', 
  'Cinzel', 'Teko', 'Abril Fatface'
];

// Load Google Fonts
const link = document.createElement('link');
link.href = `https://fonts.googleapis.com/css2?${fonts.map(font => `family=${font.replace(' ', '+')}`).join('&')}&display=swap`;
link.rel = 'stylesheet';
document.head.appendChild(link);

// Target elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('styledText');
const fontButtons = document.getElementById('fontButtons');
const copyButton = document.getElementById('copyButton');

// Display buttons
fonts.forEach(font => {
  const button = document.createElement('button');
  button.textContent = font;
  button.style.fontFamily = font;

  // Change font on button click
  button.addEventListener('click', () => {
    outputText.textContent = inputText.value; // Update the output text with input value
    outputText.style.fontFamily = font; // Change font
  });

  fontButtons.appendChild(button);
});

// Copy functionality
copyButton.addEventListener('click', () => {
  const styledText = `<span style="font-family: ${outputText.style.fontFamily};">${outputText.innerHTML}</span>`;
  const el = document.createElement('textarea'); // Create a temporary textarea
  el.value = styledText; // Set its value to the styled text
  document.body.appendChild(el);
  el.select(); // Select the text
  document.execCommand('copy'); // Copy the text
  document.body.removeChild(el); // Remove the textarea

  alert('Styled text copied to clipboard!'); // Confirmation message
});

// Update output text when input changes
inputText.addEventListener('input', () => {
  outputText.textContent = inputText.value; // Update output text as user types
});
