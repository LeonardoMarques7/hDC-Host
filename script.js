const users = [
    { nome: 'leléo', email: 'leleo@gmail.com', senha: 752895},
    { nome: 'dandan', email: 'dandan@gmail.com', senha: 752895}
];

function AbrirSite () {
    window.location.href = 'index.html';
}

function validarUser() { 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const senhaNum = parseInt(senha);

    const user = users.find(user => user.email === email && user.senha === senhaNum); 

    if (user) { 
        alert(`Bem-vindo ${user.nome}!`);
        AbrirSite();
    } 
    else 
    alert('Usuário não encontrado!!');
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
        validarUser();
});