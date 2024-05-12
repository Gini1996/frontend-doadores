function gerarRelatorio(Url) 
{
    fetch(Url, 
    {
        method: 'GET',
        headers: 
        {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        exibirRelatorio(data);
    })
    .catch(error => 
    {
        console.error('Erro ao gerar relatório:', error);
    });
}

function exibirRelatorio(data) 
{
    const relatorioDiv = document.getElementById("relatorio");
    relatorioDiv.innerHTML = '';

    if (data.length === 0) 
    {
        relatorioDiv.innerHTML = 'Nenhum pedido encontrado.';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('tabela'); 
    const headerRow = table.insertRow(0);

    Object.keys(data[0]).forEach(function(key) 
    {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    data.forEach(function(rowData) 
    {
        const row = table.insertRow(-1);
        Object.values(rowData).forEach(function(value) 
        {
            const cell = row.insertCell(-1);
            cell.textContent = value;
        });
    });

    relatorioDiv.appendChild(table);
}