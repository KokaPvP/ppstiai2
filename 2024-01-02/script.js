let BSize;
let BColor;
let BStyle;

let SFontSize;
let SBGColor;
let SColor;
let SBSize;
let SBColor;
let SBStyle;

function FontWyślij()
{
    let FontSize = document.getElementById("FontSize").value;
    let Color = document.getElementById("Color").value;
    let LetterSpawn = document.getElementById("LetterSpawn").value;
    let Style = document.getElementById("Style").value;

    let box = document.getElementById("text");

    box.style += "font-size: " + FontSize + "rem; " +  "color: " + Color +"; " + Style;

    box.innerText += LetterSpawn;

    if(BSize != 0) box.style.border = BStyle+" "+BSize+"px "+BColor;

    SpanWyślij(false);
}

function BorderWyślij()
{
    BSize = document.getElementById("BSize").value;
    BColor = document.getElementById("BColor").value;
    BStyle = document.getElementById("BStyle").value;

    let box = document.getElementById("text");

    if(BStyle == "") BStyle = "solid";

    box.style.border = BStyle+" "+BSize+"px "+BColor;
    //box.style += "border: " + BStyle+" "+BSize+"px "+BColor+"; ";
}

function Reset()
{
    BSize = 0;
    BColor = "";
    BStyle = "";
    SFontSize = "";
    SBGColor = "";
    SColor = "";
    SBSize = "";
    SBColor = "";
    SBStyle = "";

    document.getElementById("text").style = "";

    let span = document.getElementsByTagName("span");

    for (const iterator of span) {
        iterator.style = "";
    }
}

function SpanWyślij(wczytaj)
{
    if(wczytaj)
    {
        SFontSize = document.getElementById("SFontSize").value;
        SBGColor = document.getElementById("SBGColor").value;
        SColor = document.getElementById("SColor").value;
        SBSize = document.getElementById("SBSize").value;
        SBColor = document.getElementById("SBColor").value;
        SBStyle = document.getElementById("SBStyle").value;
    }

    let span = document.getElementsByTagName("span");

    if(SBStyle == "") SBStyle = "solid";

    for (const iterator of span) {
        iterator.style.fontSize = SFontSize + "rem";
        iterator.style.backgroundColor = SBGColor;
        iterator.style.color = SColor;
        iterator.style.border = SBStyle+" "+SBSize+"px "+SBColor;
    }
}

function Slider()
{
    let Sleft = document.getElementById("Sleft").value;
    let Sup = document.getElementById("Sup").value;

    let box = document.getElementById("text");

    box.style.left = Sleft + "px";
    box.style.top = Sup + "px";
}