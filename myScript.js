

onWindowLoad();

function onWindowLoad() {
    var myForm = document.getElementById("form-biglietto");


    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // prende i dati del form
        var nomeCognome = document.getElementById("name").value;
        var kilometri = document.getElementById("kilometri").value;
        var fasciaEta = document.getElementById("fascia-eta").value;
        if (nomeCognome!="" && !isNaN(kilometri)) {
            // Inietta il nome del passeggero
            document.getElementById("nome-passeggero").innerHTML = nomeCognome;

            //Calcola l' offerta che verrà applicata dalla funzione e la inietta
            var offerta = calcolaOfferta(fasciaEta);
            document.getElementById("offerta").innerHTML = offerta;

            // calcola la carrozza e inietta nel corrispettivo ID
            document.getElementById("carrozza").innerHTML = calcolaCarrozza();

            // calcola il codice treno e inietta nel corrispettivo ID
            document.getElementById("codiceCP").innerHTML = calcolaCodiceCP();

            // prende tutti gli argomenti che servono e li processa nella funzione per il costo totale. Infine inietta il risultato nel corrispettivo ID
            document.getElementById("costo").innerHTML = calcolaPrezzoFinale(fasciaEta, kilometri, prezzoKilometro()) + "€";
            // resetta il messaggio di errore
            document.getElementById("errore").innerHTML = "";
            
            var outputBiglietto = document.getElementById("output");
            outputBiglietto.style.display = "block";
            outputBiglietto.classList.add("opacity-animation");
        }
        else{
            console.log("verificare i dati");
            document.getElementById("errore").innerHTML = "ATTENZIONE! Dati non validi.";
        }

    })


    myForm.addEventListener("reset", function () {
        var outputBiglietto = document.getElementById("output");
        outputBiglietto.classList.remove("opacity-animation");
        console.log("reset")
    })
}

function prezzoKilometro() {
    var prezzoKilometro = 0.21;
    return prezzoKilometro;
}

function calcolaOfferta(etaPasseggeri) {
    var tipoOfferta;
    if (etaPasseggeri == "minorenne") {
        tipoOfferta = "Sconto Minorenne";
    }
    else if (etaPasseggeri == "over65") {
        tipoOfferta = "Sconto Over 65";
    }
    else if (etaPasseggeri == "adulto") {
        tipoOfferta = "Tariffa Adulto";
    }
    return tipoOfferta;
}

function calcolaCarrozza() {
    return Math.floor(Math.random() * 6 + 1);
}

function calcolaCodiceCP() {
    return Math.floor(Math.random() * 10000 + 90000);
}

function calcolaPrezzoFinale(etaPasseggeri, iKilometri, ilPrezzoKilometro) {
    var prezzoBigliettoUmano;
    var sconto;
    var scontoAnziani = 0.4;
    var scontoMinori = 0.2;
    var prezzoBiglietto = iKilometri * ilPrezzoKilometro;
    prezzoBigliettoUmano = prezzoBiglietto.toFixed(2);
    if (etaPasseggeri == "minorenne") {
        var sconto = prezzoBiglietto * scontoMinori;
        prezzoBiglietto = prezzoBiglietto - sconto;
        prezzoBigliettoUmano = prezzoBiglietto.toFixed(2)

    }
    else if (etaPasseggeri == "over65") {
        sconto = prezzoBiglietto * scontoAnziani;
        prezzoBiglietto = prezzoBiglietto - sconto;
        prezzoBigliettoUmano = prezzoBiglietto.toFixed(2)


    }
    return prezzoBigliettoUmano;
}

