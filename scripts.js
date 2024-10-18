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
const hiddenTextarea = document.getElementById('hiddenTextarea');

// Display buttons
fonts.forEach(font => {
  const button = document.createElement('button');
  button.textContent = font;
  button.style.fontFamily = font;

  // Change font on button click
  button.addEventListener('click', () => {
    const styledText = `<span style="font-family: '${font}';">${inputText.value}</span>`;
    outputText.innerHTML = styledText; // Update output text with formatted HTML
    outputText.focus(); // Focus on output area for easier copying
  });

  fontButtons.appendChild(button);
});

// Copy functionality
copyButton.addEventListener('click', () => {
  // Set the value of the hidden textarea to the inner HTML of the output
  hiddenTextarea.value = outputText.innerHTML; 

  // Select the hidden textarea content
  hiddenTextarea.select();
  hiddenTextarea.setSelectionRange(0, 99999); // For mobile devices

  // Execute the copy command
  document.execCommand('copy');

  alert('Styled text copied to clipboard!'); // Confirmation message
});

// Update output text when input changes
inputText.addEventListener('input', () => {
  outputText.innerHTML = inputText.value; // Update output text as user types
});
