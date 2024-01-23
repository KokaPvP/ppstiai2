function Licz()
{
    let mm = document.getElementById("mm").value;
    let cm = document.getElementById("cm").value;
    let m = document.getElementById("m").value;
    let km = document.getElementById("km").value;

    if(document.getElementById("mm").value== "") mm = 0;
    if(document.getElementById("cm").value == "") cm = 0;
    if(document.getElementById("m").value== "") m = 0;
    if(document.getElementById("km").value == "") km = 0;

    console.log(km);

    mm = parseFloat(mm);
    cm = parseFloat(cm);
    m = parseFloat(m);
    km = parseFloat(km);

    m = m + km * 1000 + mm * 0.001 + cm * 0.01;

    MM(m);
    CM(m);
    M(m);
    KM(m);
}

function M(m)
{
    document.getElementById("mS").innerText = m;
}

function MM(m)
{
    m = parseFloat(m);

    document.getElementById("mmS").innerText = m / 0.001;
}

function CM(m)
{
    m = parseFloat(m);
    document.getElementById("cmS").innerText = m / 0.01;
}

function KM(m)
{
    m = parseFloat(m);
    document.getElementById("kmS").innerText = m / 1000;
}