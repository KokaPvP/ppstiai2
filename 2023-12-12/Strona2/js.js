function A(){
    document.getElementById("text").style.fontSize = "1rem";
    document.getElementById("Rezultat").innerHTML += "Zmiana wielkosci czcionki na 1rem <br>";
}
function Ap(){
    document.getElementById("text").style.fontSize = "1.5rem";
    document.getElementById("Rezultat").innerHTML += "Zmiana wielkosci czcionki na 1.5rem <br>";
}
function App(){
    document.getElementById("text").style.fontSize = "3rem";
    document.getElementById("Rezultat").innerHTML += "Zmiana wielkosci czcionki na 3rem <br>";

}

function AW(){
    var wielkosc = document.getElementById("Warotosc").value +"px";

    document.getElementById("text").style.fontSize = wielkosc;
    document.getElementById("Rezultat").innerHTML += "Zmiana wielkosci czcionki na "+ wielkosc+" <br>";

}

function CzornyMotyw(){
    document.getElementById("text").style.color = "yellow";
    document.querySelector("body").style.color = "yellow";
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("Rezultat").innerHTML += "Zmiana motywu na ciemny <br>";
}

function ZotyMotyw(){
    document.getElementById("text").style.color = "black";
    document.querySelector("body").style.backgroundColor = "yellow";
    document.getElementById("Rezultat").innerHTML += "Zmiana motywu na zółty <br>";
}

function Italic()
{
    document.getElementById("text").style.fontStyle = "italic";
    document.getElementById("Rezultat").innerHTML += "Pochylenie czcionki <br>";
}

function Restet()
{
    document.getElementById("text").style = "";
    document.querySelector("body").style = "";
    document.getElementById("Rezultat").innerHTML += "Reset styli <br>";
}

function Ckolor()
{
    var color = document.getElementById("CKolor").value;

    document.getElementById("text").style.color = color;
    document.querySelector("body").style.color = color;
    document.getElementById("Rezultat").innerHTML += "Zmiana koloru na "+color+" <br>";
}

function Tlokolor()
{
    var color = document.getElementById("TloKolor").value;

    document.querySelector("body").style.backgroundColor = color;
    document.getElementById("Rezultat").innerHTML += "Zmiana koloru tła na "+color+" <br>";
}