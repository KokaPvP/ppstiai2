var won = false;
function Create()
{
    document.getElementById('content').innerHTML ="";

    var GoLighter = true;
    var IloscKolek = 0;

    var ile = document.getElementById('ile').value;
    if(ile == "") ile =0;
    var a = document.getElementById('a').value;
    if(a == "") a =0;
    var b = document.getElementById('b').value;
    if(b == "") b =0;
    var R = document.getElementById('R').value;
    if(R == "") R =0;
    var G = document.getElementById('G').value;
    if(G == "") G =0;
    var B = document.getElementById('B').value;
    if(B == "") B =0;

    var ch = document.getElementById('ch').checked;

    var l = document.getElementById('l').value;

    if(l == parseInt(Math.random()*ile)+1 && !won)
    {
        alert("Wygrałeś!");
        won = true;
        setInterval(Create,10);
    } 

    for(let i = 0;i<ile;i++)
    {
        R = parseInt(R);
        G = parseInt(G);
        B = parseInt(B);

        if(GoLighter)
        {
            if(won)
            {
                R+= Math.random()*2;
                G+= Math.random()*2;
                B+= Math.random()*2;
            }
            else{
                R++;
                G++;
                B++;
            }
            if(R >= 255 && G >= 255 && B>= 255) GoLighter = false;
        }
        else{
            if(won)
            {
                R-= Math.random()*2;
                G-= Math.random()*2;
                B-= Math.random()*2;
            }
            else
            {
                R--;
                G--;
                B--;
            }

            if(R <= 0 && G <= 0 && B<= 0) GoLighter = true;
        }

        var red = R;
        if(red <0) red = 0
        if(red >255) red = 255;
        var green = G;
        if(green <0) green =0;
        if(green>255) green=255;
        var blue = B;
        if(blue<0) blue = 0;
        if(blue>255)blue =255;

        var element = document.createElement('div');
        element.style.width = a+"px";
        element.style.height = b+"px";
        element.style.margin = "1px";
        element.style.backgroundColor = `rgb(${red},${green},${blue})`;
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.textAlign = "center";
        element.textContent = i;
        if(i%7==0 && i != 0)
        {
            element.style.border = "solid 5px black";
            element.style.borderRadius = "100%";

            IloscKolek++;
        }
        if(R+G+B < (382.5)) element.style.color = "white";
        document.getElementById('content').appendChild(element);
        document.getElementById('side').innerText = IloscKolek+" Kółek";
        if(ch && i%2==1 && i%7!=0)
        {
            var t = document.createElement('div');
            element.appendChild(t);
            t.style.border = "solid 3px black";
            t.style.borderWidth = `0 ${b/2}px ${a}px ${b/2}px`;
            t.style.borderColor = "transparent transparent black transparent";
            t.style.position = "absolute";
        }
    }
}