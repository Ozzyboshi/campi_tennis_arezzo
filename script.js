let dati = []

fetch("campi_tennis.json")
.then(response => response.json())
.then(json => {

    dati = json
    mostraTabella(dati)

})

function mostraTabella(lista){

    const tbody = document.querySelector("#tabella tbody")
    tbody.innerHTML = ""

    lista.forEach(campo => {

        let coperto = campo.coperto ? "Si" : "No"

        let riga = `
        <tr>
            <td>${campo.nome}</td>
            <td>${campo.zona}</td>
            <td>${coperto}</td>
            <td>${campo.prezzo_giorno} €</td>
            <td>${campo.prezzo_sera} €</td>
            <td>${campo.telefono}</td>
        </tr>
        `

        tbody.innerHTML += riga
    })
}

document.getElementById("search").addEventListener("input", function(){

    let filtro = this.value.toLowerCase()

    let filtrati = dati.filter(campo =>
        campo.nome.toLowerCase().includes(filtro) ||
        campo.zona.toLowerCase().includes(filtro)
    )

    mostraTabella(filtrati)

})