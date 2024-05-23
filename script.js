document.getElementById('send-button').addEventListener('click', async function() {
    const userInput = document.getElementById('input-field').value;
    if (userInput.trim() !== '') {
        appendMessage('user', userInput);
        document.getElementById('input-field').value = '';

        try {
            const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer sk-proj-62IijJHzhtFo9v4lMMXYT3BlbkFJBhgkNBqyWS1u1EsrSQE7'
                },
                body: JSON.stringify({
                    prompt: userInput,
                    max_tokens: 150
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            const aiMessage = data.choices[0].text.trim();
            appendMessage('ai', aiMessage);
        } catch (error) {
            console.error('Error:', error);
            appendMessage('ai', 'Fehler bei der Kommunikation mit der API.');
        }
    }
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
