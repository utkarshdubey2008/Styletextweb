// Unicode styles for demonstration purposes
const styles = {
  'Bangers': '𝓑𝓪𝓷𝓰𝓮𝓻𝓼',
  'Lobster': '𝐋𝐨𝐛𝐬𝐭𝐞𝐫',
  'Pacifico': '𝑃𝑎𝑐𝑖𝑓𝑖𝑐𝑜',
  'Dancing Script': '𝒟𝒶𝓃𝒸𝒾𝓃𝑔 𝒮𝒸𝓇𝒾𝓅𝓉',
  'Great Vibes': '𝒢𝓇𝑒𝒶𝓉 𝒱𝒾𝒷𝑒𝓈',
  'Open Sans': '𝗢𝗽𝗲𝗻 𝗦𝗮𝗻𝘀',
  'Roboto': '𝕽𝖔𝖇𝖔𝖙',
  'Poppins': '𝖯𝗈𝗉𝗉𝗂𝗇𝗌',
  'Raleway': '𝖱𝖺𝖫𝖤𝖶𝖺𝖞',
  // Add more styles as needed
};

// Target elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('styledText');
const fontButtons = document.getElementById('fontButtons');
const copyButton = document.getElementById('copyButton');

// Create font buttons
for (const font in styles) {
  const button = document.createElement('button');
  button.textContent = font;

  button.addEventListener('click', () => {
    outputText.textContent = styles[font] + inputText.value; // Update with styled text
    outputText.focus(); // Focus on output area for easier copying
  });

  fontButtons.appendChild(button);
}

// Copy functionality
copyButton.addEventListener('click', () => {
  // Create a range and selection for copying the formatted text
  const range = document.createRange();
  range.selectNodeContents(outputText);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    // Copy the selected content
    document.execCommand('copy');
    alert('Styled text copied to clipboard!'); // Confirmation message
  } catch (err) {
    alert('Failed to copy text!'); // Error message
  }
});

// Update output text when input changes
inputText.addEventListener('input', () => {
  const currentText = outputText.textContent.replace(/[\s\S]+/g, '').trim();
  const selectedFont = Object.keys(styles)[0]; // Default font
  outputText.textContent = styles[selectedFont] + currentText; // Update output text
});
