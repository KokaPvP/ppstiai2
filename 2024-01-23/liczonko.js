function OnLoad()
{
    if(document.getElementById("Kwadrat").checked) OnKwadrat();
    if(document.getElementById("Prostokąt").checked) OnProstokąt();
    if(document.getElementById("Trójkąt").checked) OnTrójkąt();
    if(document.getElementById("Trapez").checked) OnTrapez();
    if(document.getElementById("Koło").checked) OnKoło();
    if(document.getElementById("TrójkątCheck").checked) OnTrójkątCheck();
}

function Licz()
{
    let A = document.getElementById("0").value;
    let B = document.getElementById("1").value;
    let C = document.getElementById("2").value;

    if(A == "" || parseFloat(A) <= 0) { A = 0.001;  document.getElementById("0").value = 0.001;}
    if(B == "" || parseFloat(B) <= 0) { B = 0.001;  document.getElementById("1").value = 0.001;}
    if(C == "" || parseFloat(C) <= 0) { C = 0.001;  document.getElementById("2").value = 0.001;}

    if(document.getElementById("Kwadrat").checked) Kwadrat(A);
    else if(document.getElementById("Prostokąt").checked) Prostokąt(A,B);
    else if(document.getElementById("Trójkąt").checked) Trójkąt(A,B);
    else if(document.getElementById("Trapez").checked) Trapez(A,B,C);
    else if(document.getElementById("Koło").checked) Koło(A);
    else if(document.getElementById("TrójkątCheck").checked) TrójkątCheck(A,B,C);
    GetWynikInput().innerText = "";
}

function GetWynikInput()
{
    return document.getElementById("Wynik");
}

function OnKwadrat()
{
    document.getElementById("A0").innerText = "A";
    document.getElementById("A1").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("A2").style.display = "none";
    document.getElementById("2").style.display = "none";
}

function OnProstokąt()
{
    document.getElementById("A0").innerText = "A";
    document.getElementById("A1").style = "";
    document.getElementById("A1").innerText = "B";
    document.getElementById("1").style = "";
    document.getElementById("A2").style.display = "none";
    document.getElementById("2").style.display = "none";
}

function OnTrójkąt()
{
    document.getElementById("A0").innerText = "A";
    document.getElementById("A1").style = "";
    document.getElementById("A1").innerText = "H";
    document.getElementById("1").style = "";
    document.getElementById("A2").style.display = "none";
    document.getElementById("2").style.display = "none";
}

function OnTrapez()
{
    document.getElementById("A0").innerText = "A";
    document.getElementById("A1").style = "";
    document.getElementById("A1").innerText = "B";
    document.getElementById("1").style = "";
    document.getElementById("A2").style = "";
    document.getElementById("A2").innerText = "H";
    document.getElementById("2").style = "";
}

function OnKoło()
{
    document.getElementById("A0").innerText = "R";
    document.getElementById("A1").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("A2").style.display = "none";
    document.getElementById("2").style.display = "none";
}

function OnTrójkątCheck()
{
    document.getElementById("A0").innerText = "A";
    document.getElementById("A1").style = "";
    document.getElementById("A1").innerText = "B";
    document.getElementById("1").style = "";
    document.getElementById("A2").style = "";
    document.getElementById("A2").innerText = "C";
    document.getElementById("2").style = "";
}

function Kwadrat(A)
{
    A = parseFloat(A);
    GetWynikInput().innerText = A*A;
}
function Prostokąt(A,B)
{
    A = parseFloat(A);
    B = parseFloat(B);

    GetWynikInput().innerText = A*B;
}

function Trójkąt(A,B)
{
    A = parseFloat(A);
    B = parseFloat(B);

    GetWynikInput().innerText = A*B/2;
}

function Trapez(A,B,C)
{
    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    GetWynikInput().innerText = (A+B)*C/2;
}
function Koło(A)
{
    A = parseFloat(A);

    GetWynikInput().innerText = A*A*Math.PI;
}
function TrójkątCheck(A,B,C)
{
    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);

    GetWynikInput().innerText = "";

    if(A + B <= C || A+C <= B|| B+C <= A) GetWynikInput().innerText = "To nie jest trójkąt";
    else
    {
        if(A == B && B == C) GetWynikInput().innerText = "To jest trójkąt równoboczny";
        else
        {
            if(A == B ||A == C || B == C) GetWynikInput().innerText = "To jest trójkąt równoramienny";
            if(A*A + B*B == C*C || A*A + C*C == B*B || B*B + C*C == A*A) GetWynikInput().innerHTML += "<br> To jest trójkąt prostokątyny"
            else if(A != B &&A != C && B != C) GetWynikInput().innerText = "Jakiś tam trójkąt zwykły";
        }
    }
}