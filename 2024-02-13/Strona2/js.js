function generujTablice()
{
    let base = document.getElementById("base").value;
    let n = document.getElementById("n").value;

    let tablica = [];

    for(let i = 0;i<n;i++)
    {
        tablica[i] = Math.pow(base,i);
    }
    
    document.getElementById("Wynik").innerText = tablica;
}