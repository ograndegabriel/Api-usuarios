document.getElementById('carregar').addEventListener('click', carregarUsuario);


function carregarUsuario(){
    //requsição da api
    fetch('https://jsonplaceholder.typicode.com/users')//fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP

    //convertedor de resposta para janson
    .then(response => response.json())//retorna uma Promise

    // tratamento de dados
    .then(dados =>{
        const container = document.getElementById('usuario')
        container.innerHTML = '';

        //cria um novo elemento div para cada usuario
        dados.forEach(usuario => {
            const card = document.createElement('div')//criando o elemto div

            card.classList.add('card')

            card.innerHTML = `
            <h3>${usuario.name}</h3>
            <p>Email:${usuario.email}</p>
            <p>Endereço:${usuario.address.city}</p>
            `;

            container.appendChild(card);
        })
    })
}