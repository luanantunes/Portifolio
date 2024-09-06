document.getElementById ('contactForm').addEventListener('submit', async function(event) {
event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('document').value;

const responseMessage = document.getElementById('responseMessage');

//Aqui adcionar codigo para enviar o formulario para o servidor.
//simulação de resposta
responseMessage.textContent = 'Obrigado, ${name}! Sua mensagem foi recebida.';

const response = await fetch('https://sua-api.com/analyze',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({ text: message })
});
const result = await response.json();
responseMessage.textContent = 'Análise: ${result.analysis}';

});
