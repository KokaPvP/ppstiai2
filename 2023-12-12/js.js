class JemKurczaka
{
    Osoba = "Dorian";
    Ilosc = 10;
    Kolor = "Black";

    Wyswietl = function()
    {
        var Kurczak = " kurczaków";
        if(Math.abs(this.Ilosc) == 1) Kurczak = " kurczak";
        else if(Math.abs(this.Ilosc) % 10 < 5 && Math.abs(this.Ilosc) % 10 > 1) Kurczak = " kurczaki"
        document.getElementById("result").innerText = this.Osoba + " je bardzo dużo, a dokładnie " + this.Ilosc + Kurczak;
        document.getElementById("result").style.color = this.Kolor;
    }
}

function Kurczak()
{
    var Kurczak =  new JemKurczaka();

    Kurczak.Osoba = document.getElementById("text").value;
    Kurczak.Ilosc = document.getElementById("Ilosc").value;
    Kurczak.Kolor = document.getElementById("color").value;
    
    Kurczak.Wyswietl();
}

function ZminTlo()
{
    document.querySelector("body").style.backgroundColor = document.getElementById("colorB").value;
}