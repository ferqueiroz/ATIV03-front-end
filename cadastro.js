let usuario = [];

function adicionar(){
    let lNome = document.getElementById('edNome');
    let lIdade = document.getElementById('edIdade');

    usuario.push({'nome': lNome.value, 'idade': lIdade.value});
    console.log(usuario);

    lNome.value = "";
    lIdade.value = "";
}

function verificar(){
    let lPesquisa = document.getElementById('edVerificar');
    let lIndex = usuario.findIndex(function(item){
        return item.nome == lPesquisa.value;
    });

    alert(lIndex >= 0 ? 'Index:  '+ lIndex : 'Esse Usuário não existe.');

    lPesquisa.value = '';
}

function remover(){
    let lValor = document.getElementById('edVerificar').value == '' ? +document.getElementById('edVerificar').value : document.getElementById('edVerificar').value;

    if (isNaN(lValor) || lValor == '')
        return;

    usuario.splice(lValor, 1);
    console.log(usuario);

    alert('Removido o Usuario do index:  ' + lValor);

    document.getElementById('edVerificar').value = '';
}