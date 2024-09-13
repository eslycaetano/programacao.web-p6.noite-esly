document.getElementById('btnConsulta').addEventListener('click', async () => {
    const cep = document.getElementById('cep').value.trim();
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, digite um CEP válido.');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error('Erro na consulta ao ViaCEP');
        
        const data = await response.json();
        if (data.erro) {
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('logradouro').textContent = `Logradouro: ${data.logradouro}`;
        document.getElementById('bairro').textContent = `Bairro: ${data.bairro}`;
        document.getElementById('cidade').textContent = `Cidade: ${data.localidade}`;
        document.getElementById('estado').textContent = `Estado: ${data.uf}`;
    } catch (error) {
        alert('Erro ao consultar o CEP. Tente novamente.');
    }
});
