function UpdateClock()
{
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(h < 10) h = "0"+h;
    if(m < 10) m = "0"+m;
    if(s < 10) s = "0"+s;

    document.getElementById("h").innerText = h+":";
    document.getElementById("m").innerText = m+":";
    document.getElementById("s").innerText = s;
}

UpdateClock();
setInterval(UpdateClock,1000);