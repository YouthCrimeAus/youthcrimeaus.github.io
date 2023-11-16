function start() {
    var x = document.getElementById("AboutText");
    var y = document.getElementById("Welcome")
    var z = document.getElementById("StatisticsText")
    var w = document.getElementById("ContactText")
    var v = document.getElementById("Mission")
    var l = document.getElementById("Rehab")
    var d = document.getElementById("Tyrique")
    var f = document.getElementById("Tyrique2")
    x.style.display = "none"
    y.style.display = "flex"
    z.style.display = "none"
    w.style.display = "none"
    v.style.display = "none"
    l.style.display = "none"
    d.style.display = "none"
    f.style.display = "none"
}

function hideA() {
    var z = document.getElementById("Welcome");
    var x = document.getElementById("AboutText");
    var v = document.getElementById("Mission");
    if (x.style.display === "none" && v.style.display === "none") {
        x.style.display = "flex";
        x.scrollIntoView();
    } else if (x.style.display === "flex" && v.style.display === "none") {
        z.scrollIntoView();
        x.style.display = "none";
    } else if (x.style.display === "flex" && v.style.display === "flex") {
        z.scrollIntoView();
        x.style.display = "none";
        v.style.display = "none";
    }
}

function hideB() {
    var x = document.getElementById("Welcome")
    var z = document.getElementById("StatisticsText");
    var y = document.getElementById("Rehab")
    var v = document.getElementById("Tyrique")
    var w = document.getElementById("Tyrique2")
    if (z.style.display === "none") {
        z.style.display = "block";
        z.scrollIntoView();
    } else {
        z.scrollIntoView();
        z.style.display = "none";
        y.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
    }
}

function hideC() {
    var z = document.getElementById("Welcome")
    var w = document.getElementById("ContactText");
    if (w.style.display === "none") {
        w.style.display = "flex";
        w.scrollIntoView();
    } else {
        z.scrollIntoView();
        w.style.display = "none";
    }
}

function hideD() {
    var z = document.getElementById("Welcome")
    var v = document.getElementById("Mission")
    if (v.style.display === "none") {
        v.style.display = "flex";
        v.scrollIntoView();
    } else {
        z.scrollIntoView();
        v.style.display = "none";
    }
}

function hideF() {
    var z = document.getElementById("Welcome")
    var v = document.getElementById("Rehab")
    var w = document.getElementById("StatisticsText")
    var l = document.getElementById("Tyrique")
    var 2 = document.getElementById("Tyrique2")
    if (v.style.display === "none") {
        v.style.display = "flex";
        l.style.display = "none";   
        v.scrollIntoView();
    } else {
        w.scrollIntoView();
        v.style.display = "none";
    }
}

function hideE() {
    var z = document.getElementById("Welcome")
    var v = document.getElementById("Tyrique")
    var w = document.getElementById("StatisticsText")
    var l = document.getElementById("Rehab")
    if (v.style.display === "none") {
        v.style.display = "flex";
        l.style.display = "none";   
        v.scrollIntoView();
    } else {
        w.scrollIntoView();
        v.style.display = "none";
    }
}

function hideG() {
    var z = document.getElementById("Welcome")
    var v = document.getElementById("Tyrique2")
    var w = document.getelementById("StatisticsText")
    var l = document.getelementById("Rehab")
    if (v.style.display === "none") {
        v.style.display = "flex";
        1.style.display = "none";
        v.scrollIntoView();
    } else {
        w.scrollIntoView();
        v.style.display = "none";
    }
}
