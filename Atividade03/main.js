document.getElementById('btnConsulta').addEventListener('click', async () => {
    const cep = document.getElementById('cep').value.trim();
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, digite um CEP válido.');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error('Erro na consulta ao ViaCEP');
        
        const dado = await response.json();
        if (dado.erro) {
            alert('CEP não encontrado.');
            return;
        }
        document.getElementById('cep').value = dado.cep;
        document.getElementById('logradouro').innerHTML = `<strong> Logradouro: </strong> ${dado.logradouro}`;
        document.getElementById('bairro').innerHTML = `<strong> Bairro: </strong> ${dado.bairro}`;
        document.getElementById('cidade').innerHTML = `<strong> Cidade: </strong> ${dado.localidade}`;
        document.getElementById('estado').innerHTML = `<strong> Estado: </strong> ${dado.uf}`;
        document.getElementById('regiao').innerHTML = `<strong> Região: </strong> ${dado.regiao}`;
    } catch (error) {
        alert('Erro ao consultar o CEP. Tente novamente.');
    }
});
