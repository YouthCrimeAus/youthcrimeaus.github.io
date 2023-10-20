function start() {
    var x = document.getElementById("AboutText");
    var y = document.getElementById("Welcome")
    var z = document.getElementById("StatisticsText")
    var w = document.getElementById("ContactText")
    x.style.display = "none"
    y.style.display = "flex"
    z.style.display = "none"
    w.style.display = "none"


}

function hideA() {
    var x = document.getElementById("AboutText");
    var y = document.getElementById("Welcome");
    var z = document.getElementById("StatisticsText");
    var w = document.getElementById("ContactText");
    if (x.style.display === "none") {
        x.style.display = "flex";
        z.style.display = "none";
        w.style.display = "none";
        fade();
    } else {
        x.style.display = "none";
    }
}

function hideB() {
    var x = document.getElementById("AboutText");
    var y = document.getElementById("Welcome");
    var z = document.getElementById("StatisticsText");
    var w = document.getElementById("ContactText");
    if (z.style.display === "none") {
        z.style.display = "flex";
        x.style.display = "none";

        fade();
    } else {
        z.style.display = "none";
    }
}

function hideC() {
    var x = document.getElementById("AboutText");
    var y = document.getElementById("Welcome");
    var z = document.getElementById("StatisticsText");
    var w = document.getElementById("ContactText");
    if (w.style.display === "none") {
        w.style.display = "flex";
        z.style.display = "none";
        x.style.display = "none";
        fade();
    } else {
        w.style.display = "none";
    }
}
