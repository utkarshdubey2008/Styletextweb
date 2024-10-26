// Replace 'YOUR_API_TOKEN' with your Hugging Face token
const apiToken = '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';
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user's message
    displayMessage(userMessage, 'user');
    userInput.value = '';

    // Send message to Hugging Face API
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: userMessage })
    });

    if (response.ok) {
        const data = await response.json();
        const botMessage = data.generated_text || "I'm sorry, I didn't understand that.";
        displayMessage(botMessage, 'bot');
    } else {
        displayMessage("Error: Unable to reach chatbot API.", 'bot');
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
