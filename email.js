document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato-js');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            const emailDoDestinatario = 'nome@exemplo.com';
            const assunto = `Contato de Cliente: ${nome}`;
            const corpoDoEmail = `Olá, meu nome é ${nome} e meu e-mail é ${email}.\n\n${mensagem}`;

            const mailtoLink = `mailto:${emailDoDestinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoDoEmail)}`;

            window.location.href = mailtoLink;
        });
    }
});