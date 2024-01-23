
let DzielilPrzez0 = false;

let iloscElementow = 2;

function Licz()
{
    let Liczby = [];

    for(let i = 0;i<2;i++)
    {
        Liczby[i] = document.getElementById(i).value;
    }

    GetWynikInput().innerText = "";

    if(document.getElementById("Dodawanie").checked) Dodawanie(Liczby);
    if(document.getElementById("Odejmowanie").checked) Odejmowanie(Liczby);
    if(document.getElementById("Mnozenie").checked) Mnozenie(Liczby);
    if(document.getElementById("Dzielenie").checked) Dzielenie(Liczby);

    if(A%2==0 && A!=0)
    {
         GetWynikInput().innerHTML+='<p style="color: green"> A jest parzyste </p>';
    }
    else GetWynikInput().innerHTML+='<p style="color: red"> A jest NIE parzyste </p>';

    if(B%2==0&&B!=0)
    {
        GetWynikInput().innerHTML+='<p style="color: green"> B jest parzyste </p>';
    } 
    else GetWynikInput().innerHTML+='<p style="color: red"> B jest NIE parzyste </p>';
}

function GetWynikInput()
{
    return document.getElementById("Wynik");
}

function SprawdzWygrana(wynik)
{
    if(wynik > 100 && wynik < 200 && wynik %2==0&&wynik%3==0&&wynik%5==0)
    {
        GetWynikInput().innerHTML += '<h1 style="font-size:4rem; color:green">Wygrana</h1>';
        alert("Wygrałeś");
        setInterval(ZminBG,100);
    }
}

function Dodawanie(Liczby)
{
    A = parseFloat(A);
    B = parseFloat(B);

    let wynik = 0;

    for (const iterator of Liczby) {
        wynik += iterator;
    }

    GetWynikInput().innerText += wynik;

    SprawdzWygrana(wynik)
}
function Odejmowanie(Liczby)
{
    A = parseFloat(A);
    B = parseFloat(B);
    let wynik = Liczby[0];
    let Pirwszy = true

    for (const iterator of Liczby) {
        if(Pirwszy)
        {
            Pirwszy = false;
            continue;
        }

        wynik -= iterator;
    }

    GetWynikInput().innerText += wynik;

    SprawdzWygrana(wynik)
}
function Mnozenie(Liczby)
{
    A = parseFloat(A);
    B = parseFloat(B);
    let wynik = Liczby[0];
    let Pirwszy = true

    for (const iterator of Liczby) {
        if(Pirwszy)
        {
            Pirwszy = false;
            continue;
        }

        wynik *= iterator;
    }

    GetWynikInput().innerText += wynik;

    SprawdzWygrana(wynik)
}
function Dzielenie(Liczby)
{
    A = parseFloat(A);
    B = parseFloat(B);
    if(B != 0)
    {
        let wynik = Liczby[0];
        let Pirwszy = true

        for (const iterator of Liczby) {
            if(Pirwszy)
            {
                Pirwszy = false;
                continue;
            }

        wynik /= iterator;
        }

        GetWynikInput().innerText += wynik;

        SprawdzWygrana(wynik)
    } 
    else
    {
        TakSieNieBawimyText();
        document.querySelector("body").style.backgroundColor = "black";
        DzielilPrzez0 = true;
    } 
}

let licznik = 0;

function ZminBG()
{
    if(licznik%4==0) document.querySelector("body").style.backgroundColor = "red";
    if(licznik%4==1) document.querySelector("body").style.backgroundColor = "green";
    if(licznik%4==2) document.querySelector("body").style.backgroundColor = "yellow";
    if(licznik%4==3) document.querySelector("body").style.backgroundColor = "blue";
    licznik++;

    if(DzielilPrzez0)
    {
        if(licznik%4==1)
        {
            document.querySelector("body").innerHTML = '<h1 style="color:green; font-size:10rem;">TAK SIE BAWIMY :)</h1>';
        }
        else
        {
            TakSieNieBawimyText();
        }
    }
}

function TakSieNieBawimyText()
{
    document.querySelector("body").innerHTML = '<h1 style="color:red; font-size:10rem;">TAK SIE NIE BAWIMY!!!</h1>';
}