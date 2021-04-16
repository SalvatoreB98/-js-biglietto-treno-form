

onWindowLoad();

function onWindowLoad() {
    var myForm = document.getElementById("form-biglietto");


    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        //prende e inietta il nome
        var nomeCognome = document.getElementById("name").value;
        console.log(nomeCognome);
        document.getElementById("nome-passeggero").innerHTML = nomeCognome;
        //prende i km da percorrere
        var kilometri = document.getElementById("kilometri").value;
        // prende il dato inserito , calcola che offerta verrà applicata e infine la inietta
        var fasciaEta = document.getElementById("fascia-eta").value;
        var offerta = calcolaOfferta(fasciaEta);
        document.getElementById("offerta").innerHTML = offerta;
        // calcola la carrozza e inietta nel corrispettivo ID
        document.getElementById("carrozza").innerHTML = calcolaCarrozza();
        // calcola il codice treno e inietta nel corrispettivo ID
        document.getElementById("codiceCP").innerHTML = calcolaCodiceCP();
         // prende tutti gli argomenti che servono e li processa nella funzione per il costo total.Infine inietta il risultato nel corrispettivo ID
         var kilometri = document.getElementById("kilometri").value;
         document.getElementById("costo").innerHTML = calcolaPrezzoFinale(fasciaEta,kilometri,prezzoKilometro()) + "€";
    })
    myForm.addEventListener("reset", function() {
        console.log("reset")
    })
}


function prezzoKilometro(){
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

////////////////
function calcolaCarrozza() {
    return Math.floor(Math.random() * 6 + 1);
}
/////////////////
function calcolaCodiceCP() {
    return Math.floor(Math.random() * 10000 + 90000);
}
/////////////////
function calcolaPrezzoFinale(etaPasseggeri,iKilometri, ilPrezzoKilometro) {
    var prezzoBigliettoUmano;
    var sconto;
    var scontoAnziani = 0.4;
    var scontoMinori = 0.2;
    var prezzoBiglietto = iKilometri * ilPrezzoKilometro;
    prezzoBigliettoUmano = prezzoBiglietto.toFixed(2);
    if (etaPasseggeri =="minorenne" ) {
        var sconto = prezzoBiglietto * scontoMinori;
        prezzoBiglietto = prezzoBiglietto - sconto;
        prezzoBigliettoUmano = prezzoBiglietto.toFixed(2)
        console.log(prezzoBigliettoUmano + "€");
    }
    else if (etaPasseggeri == "over65") {
        sconto = prezzoBiglietto * scontoAnziani;
        prezzoBiglietto = prezzoBiglietto - sconto;
        prezzoBigliettoUmano = prezzoBiglietto.toFixed(2)
        console.log(prezzoBigliettoUmano + "€");

    }
    else {
        console.log(prezzoBigliettoUmano + "€");
    }
    return prezzoBigliettoUmano;
}