var clicks = 0; // Total clicks
var clickcps = 1; // Clicks per click
var up1 = 1;
var up2 = false;
var pertick = 1000;
var clickersb = 0;
document.getElementById("up2").style.visibility = "hidden";
document.getElementById("up2c").style.visibility = "hidden";
document.getElementById("up3").style.visibility = "hidden";
document.getElementById("up3c").style.visibility = "hidden";
function clickevent(number) { // Add function
    clicks = clicks + number;
    document.getElementById("x").innerHTML = "Clicks: " + Math.round(clicks);
}

var clickers = 0; // Total clickers
function buyclickupgrade() {
    var clickupgradecost = Math.floor(40 * Math.pow(1.1,clickcps));
    if (clicks >= clickupgradecost) {
        clickcps = clickcps + 1;
        clicks = clicks - clickupgradecost;
         document.getElementById("cps").innerHTML = "Clickpower: " + clickcps;
        
         document.getElementById("x"). innerHTML = "Clicks: " + clicks;
    }
    var cpsnextcost = Math.floor(40 * Math.pow(1.1,clickcps));
    
    document.getElementById("cpscost").innerHTML = cpsnextcost;
}
function buyclicker() { // Buy Clicker
    var clickercost =  Math.floor(10 * Math.pow(1.125,clickers));
    if (clicks >= clickercost) {
        clickers = clickers + 1;
        clicks = clicks - clickercost;
        document.getElementById("c").innerHTML = "Clickers: " + clickers;
        document.getElementById("x").innerHTML = "Clicks: " + clicks;
        clickersb = clickersb + 1;
    }
    var nextcost = Math.floor(10 * Math.pow(1.125,clickers)); 
    document.getElementById("cost").innerHTML = nextcost;
} // document.getElementById("myP").style.visibility = "hidden";
function buyupgrade1() {
    if (clicks >= 150) {
        up1 = up1 + 1;
        clicks = clicks - 150;
        if (up1 = 2) {
            document.getElementById("up1").style.visibility = "hidden";
            document.getElementById("up1c").style.visibility = "hidden";
            document.getElementById("up2").style.visibility = "visible";
            document.getElementById("up2c").style.visibility = "visible";
        }
    }
}

function buyupgrade2() {
    if (clicks >= 2500) {
        up1 = up1 + 2;
        clicks = clicks - 2500;
        if (up1 = 4) {
            document.getElementById("up2").style.visibility = "hidden";
            document.getElementById("up2c").style.visibility = "hidden";
            document.getElementById("up3").style.visibility = "visible";
            document.getElementById("up3c").style.visibility = "visible";
        }
    }
}

function buyupgrade3() {
    if (clicks >= 45000) {
        up1 = up1 + 6;
        clicks = clicks - 45000;
        if (up1 = 10) {
            document.getElementById("up3").style.visibility = "hidden";
            document.getElementById("up3c").style.visibility = "hidden";
        }
    }
}
function save() {
    // Store
    // localStorage.setItem("clicks", clicks);
    // localStorage.setItem("clickcps", clickcps);
    // localStorage.setItem("up1", up1);
    // localStorage.setItem("clickers", clickers);
}
function load() {
    // Retrieve
    // document.getElementById("x").innerHTML = localStorage.getItem("clicks");
    // document.getElementById("c").innerHTML = localStorage.getItem("clickers");
    // document.getElementById("cps").innerHTML = localStorage.getItem("clickcps");
    // up1 = localStorage.getItem("up1");
    // clicks = localStorage.getItem("clicks");
    // clickers = localStorage.getItem("clickers");
    // clickcps = localStorage.getItem("cps");
    // up1 = localStorage.getItem("up1");
    // up1 = up1 + 1 - 1;
    // clicks = clicks + 1 - 1;
    // clickersers = clickers + 1 - 1;
    // clickcps = clickcps + 1 - 1;
}
window.setInterval(function() { // Loop
    clickevent(clickers * up1);
    console.log(up1);
    console.log(clicks);
    
}, 1000);