let tablica = [];
let index = 0;



function Licz()
{
    

    let parzyste = [];
    let PrzysteI = 0;

    for(let i=0;i<tablica.length;i++)
    {
        if(tablica[i]%2 == 0)
        {
            parzyste[PrzysteI] = tablica[i];
            PrzysteI++;
        }
    }

    document.getElementById('parzyste').innerText = parzyste;

    let suma = 0;

    for(let i=0;i<tablica.length;i++)
    {
        suma+=tablica[i];
    }

    document.getElementById('suma').innerText = suma;

    let max = tablica[0];
    let min = tablica[0];

    for(let i=1;i<tablica.length;i++)
    {
        if(max < tablica[i])
        {
            max = tablica[i];
        }
        if(min > tablica[i])
        {
            min = tablica[i];
        }
    }

    document.getElementById('max').innerText = max;
    document.getElementById('min').innerText = min;

    let odwrot = [];

    for(let i=0;i<tablica.length;i++)
    {
        odwrot[i] = tablica[tablica.length-(i+1)];
    }

    document.getElementById('odwr').innerText = odwrot;

    let posor = [];

    for(let i=0;i<tablica.length;i++)
    {
        posor[i] = tablica[i];
    }

    for(let k=0;k<posor.length;k++)
    {
        for(let i=1;i<posor.length;i++)
        {
            if(posor[i] < posor[i-1])
            {
                let bufer = posor[i];
                posor[i] = posor[i-1];
                posor[i-1] = bufer;
            }
        } 
    }

    document.getElementById('sort').innerText = posor;
}
function Dodej()
{
    let napis = document.getElementById('napis').value;
    tablica[index] = parseFloat(napis);
    index++;
    document.getElementById('Tab').innerText = tablica;
}