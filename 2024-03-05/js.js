let tablica = [];

function Dodaj()
{
    var num = document.getElementById('num').value;
    tablica.push(parseFloat(num));
    document.getElementById('tab').innerText = tablica;
}

function Licz()
{
    var wiersz1 = "";
    let parzyste = [];
    let nieparzyste = [];
    let pot3 = [];
    let trojkat = [];
    let trojkatI = 0;
    let trojkaty = "";
    let suma = 0;
    for (const iterator of tablica) {
        suma+=iterator;

        if(iterator%2==0)
        {
            wiersz1 += '<span style="color:green;">'+iterator+'</span>,';
            parzyste.push(iterator);
        }
        else
        {
            wiersz1 += '<span style="color:red;">'+iterator+'</span>,';
            nieparzyste.push(iterator);
        }
        pot3.push(Math.pow(iterator,3));

        trojkat.push(iterator);
        trojkatI++;
        if(trojkatI >=3)
        {
            var a = trojkat[0];
            var b = trojkat[1];
            var c = trojkat[2];

            if(a+b>c&&a+c>b&&b+c>a)
            {
                trojkaty+="<li>może być</li>";
            }
            else
            {
                trojkaty+="<li>nie może być</li>";
            }

            trojkatI = 0;
            trojkat = [];
        }
    }
    document.getElementById('1').innerHTML = wiersz1;
    document.getElementById('sum').innerText = suma;
    document.getElementById('parz').innerText = parzyste;
    document.getElementById('nparz').innerText = nieparzyste;
    document.getElementById('pot3').innerText = pot3;
    document.getElementById('troM').innerText = Math.floor(tablica.length/3);
    document.getElementById('tro').innerHTML = trojkaty;


}