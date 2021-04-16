var prezzoBiglietto;
var prezzoKilometro = 0.21;
var scontoMinori = 0.2;
var sconto;
var scontoAnziani = 0.4;
var nomeCognome;

onWindowLoad();

function onWindowLoad() {
    var myForm = document.getElementById("form-biglietto");


    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        //prende e inietta il nome
        nomeCognome = document.getElementById("name").value;
        console.log(nomeCognome);
        document.getElementById("nome-passeggero").innerHTML = nomeCognome;
        //prende i km da percorrere
        var kilometri = document.getElementById("kilometri").value;
        // prende il dato inserito , calcola che offerta verrà applicata e infine la inietta
        var fasciaEta = document.getElementById("fascia-eta").value;
        console.log(fasciaEta);
        var offerta = calcolaOfferta(fasciaEta);
        console.log(offerta);
        document.getElementById("offerta").innerHTML =  offerta;
    })
}





function calcolaPrezzo(iKilometri, ilPrezzoKilometro) {
    var prezzoBiglietto = iKilometri * ilPrezzoKilometro;
    prezzoBigliettoUmano = prezzoBiglietto.toFixed(2);
    return prezzoBigliettoUmano;
}

function calcolaOfferta(etaPasseggeri){
    var tipoOfferta;
    if (etaPasseggeri == "minorenne") {
       tipoOfferta = "Sconto Minorenne";
    }
    else if (etaPasseggeri == "adulto"){
        tipoOfferta = "Sconto Over 65";
    }
    else if( etaPasseggeri == "over65") {
        tipoOfferta = "Tariffa Adulto";
    }
    return tipoOfferta;
}

function calcolaPrezzoFinale() {
    var prezzoBigliettoUmano;
    var sconto;
    if (etaPasseggeri < 18) {
        sconto = prezzoBiglietto * scontoMinori;
        prezzoBiglietto = prezzoBiglietto - sconto;
        prezzoBigliettoUmano = prezzoBiglietto.toFixed(2)
        console.log(prezzoBigliettoUmano + "€"); 
    }
    else if (etaPasseggeri > 65) {
        sconto = prezzoBiglietto * scontoAnziani;
        prezzoBiglietto = prezzoBiglietto - sconto;
        prezzoBigliettoUmano = prezzoBiglietto.toFixed(2)
        console.log(prezzoBigliettoUmano + "€");
        document.getElementById("ticket-price").innerHTML = prezzoBigliettoUmano + "€";
    }
    else {
        console.log(prezzoBigliettoUmano + "€");
        document.getElementById("ticket-price").innerHTML = prezzoBigliettoUmano + "€";
    }
    return prezzoBigliettoUmano;
}