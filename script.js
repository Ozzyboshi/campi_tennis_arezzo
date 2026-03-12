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
            <td>${campo.prezzo_tessera} €</td>
            <td>${coperto}</td>
            <td>${campo.prezzo_giorno_socio} €</td>
            <td>${campo.prezzo_sera_socio} €</td>
            <td>${campo.prezzo_giorno_non_socio} €</td>
            <td>${campo.prezzo_sera_non_socio} €</td>
            <td>${campo.indirizzo}</td>
            <td>${campo.telefono}</td>
            <td>${campo.affiliato_fit}</td>
            <td>${campo.note}</td>
        </tr>
        `

        tbody.innerHTML += riga
    })
}

document.getElementById("search").addEventListener("input", function(){

    let filtro = this.value.toLowerCase()

    let filtrati = dati.filter(campo =>
        campo.nome.toLowerCase().includes(filtro) ||
        campo.prezzo_tessera.toLowerCase().includes(filtro)
    )

    mostraTabella(filtrati)

})