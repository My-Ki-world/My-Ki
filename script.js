document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('input-field').value;
    if (userInput.trim() !== '') {
        appendMessage('user', userInput);
        document.getElementById('input-field').value = '';

        // Simulate AI response
        setTimeout(() => {
            appendMessage('ai', 'Dies ist eine simulierte Antwort von My-KI.');
        }, 1000);
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
