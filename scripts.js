function start() {
    var x = document.getElementById("AboutText");
    var y = document.getElementById("Welcome")
    var z = document.getElementById("StatisticsText")
    var w = document.getElementById("ContactText")
    var v = document.getElementById("Mission")
    x.style.display = "none"
    y.style.display = "flex"
    z.style.display = "none"
    w.style.display = "none"
    v.style.display = "none"
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
    if (z.style.display === "none") {
        z.style.display = "flex";
        z.scrollIntoView();
    } else {
        z.scrollIntoView();
        z.style.display = "none";
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
