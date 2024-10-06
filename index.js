let black = document.getElementById('black')
let rgb = document.getElementById('rgb')
let big = document.getElementById('big')
let clr = document.getElementById('clr')


red = Math.round(Math.random() * 255)
green = Math.round(Math.random() * 255)
blue = Math.round(Math.random() * 255)


black.onclick = function () {
    big.style.backgroundColor = 'black'
}

rgb.onclick = function () {
    red = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    big.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"

}


clr.oninput = function () {
    big.style.opacity = clr.value
}

