var h31 = document.getElementsByClassName('numberz')[0];
var h2 = document.getElementsByClassName('busnumber')[0];
var h3 = document.getElementsByClassName('summ')[0];
var h4 = document.getElementsByClassName('count')[0];
var h5 = document.getElementsByClassName('bus')[0];

window.onload = function() {
    var isbus = confirm("transport type");
    var busnumber = prompt("busnumber");
    var number = prompt("number");
    var count = prompt("count");
    console.log(isbus)

    if (isbus == true) {
        document.getElementById('main-pic').src = 'main.png';
        h2.textContent = busnumber.toUpperCase() + "159";
    } else {
        document.getElementById('main-pic').src = 'main-tram.png';
        h2.classList.add("addpadding");
        h2.textContent = busnumber.toUpperCase();
    }

    h31.textContent = number;
    h3.textContent = count * 35;
    h4.textContent = count;
}

