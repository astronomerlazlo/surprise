var text = document.getElementById('YES');
var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
var currentSize = parseFloat(style);



function fadeout() {
    document.getElementById('maybemouseover').style.display = 'none';
}

function noFadeOut() {
    document.getElementById('noClick').style.display = 'none';
}

function blurry() {
    document.getElementById('maybemouseover').style.opacity = 0.2;
}

function unBlur(){
    document.getElementById('maybemouseover').style.opacity = 1;
}

function noBlurry() {
    document.getElementById('noClick').style.opacity = 0.2;
}

function noUnBlur() {
    document.getElementById('noClick').style.opacity = 1;
}

function bigYES() {
    document.getElementById('YES').style.fontSize = '150px';
}

function normalYes() {
    document.getElementById('YES').style.fontSize= '85px';
}