function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simulação de envio do formulário (você pode adicionar lógica de envio real aqui)
    var result = document.getElementById('result');
    result.innerHTML = `<p>Formulário enviado com sucesso!</p>
                        <p>Nome: ${name}</p>
                        <p>E-mail: ${email}</p>
                        <p>Mensagem: ${message}</p>`;
}
