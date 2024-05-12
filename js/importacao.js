function lerArquivo() 
{
    const getArquivo = document.getElementById("idfile")
    const file = getArquivo.files[0]
    const read = new FileReader()
    read.onload = function(event)
    {
        const content = event.target.result
        const dataJson = JSON.parse(content)
        enviarDados(dataJson)
    }

    read.readAsText(file)
}

async function enviarDados(data)
{
    try 
    {
        await fetch('http://localhost:8080/doador/importarPessoas',
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }
        )
        alert("Arquivo importado com sucesso")
        
    } 
    catch(error) 
    {
        alert("Erro na importação do arquivo")
    }
}
