async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value;
  const user = document.getElementById('user-select').value;

  if (!message) return;

  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<p class="${user}"><b>${user}:</b> ${message}</p>`;

  try {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, message })
    });

    const data = await response.json();
    chatBox.innerHTML += `<p class="Bot"><b>Bot:</b> ${data.response}</p>`;
    input.value = '';
  } catch (error) {
    console.error('Error:', error);
  }
}
