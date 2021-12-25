// This javascript code for Snow Rain
window.onload = function () { function a() { t.clearRect(0, 0, d, o), t.fillStyle = "rgba(230, 230, 230, 0.9)", t.beginPath(); for (var a = 0; h > a; a++) { var n = e[a]; t.moveTo(n.x, n.y), t.arc(n.x, n.y, n.r, 0, 2 * Math.PI, !0) } t.fill(), r() } function r() { M += .01; for (var a = 0; h > a; a++) { var r = e[a]; r.y += Math.cos(M + r.d) + 1 + r.r / 2, r.x += 2 * Math.sin(M), (r.x > d + 5 || r.x < -5 || r.y > o) && (a % 3 > 0 ? e[a] = { x: Math.random() * d, y: -10, r: r.r, d: r.d } : Math.sin(M) > 0 ? e[a] = { x: -5, y: Math.random() * o, r: r.r, d: r.d } : e[a] = { x: d + 5, y: Math.random() * o, r: r.r, d: r.d }) } } var n = document.getElementById("canvas"), t = n.getContext("2d"), d = window.innerWidth, o = window.innerHeight; n.width = d, n.height = o; for (var h = 25, e = [], i = 0; h > i; i++)e.push({ x: Math.random() * d, y: Math.random() * o, r: 4 * Math.random() + 1, d: Math.random() * h }); var M = 0; setInterval(a, 33) };

var tune = document.getElementById('tune');
var icon = document.getElementById('icon');
var btn = document.getElementsByClassName('btn');

play = function () {
    if (tune.paused) {
        tune.play();
        document.getElementById('label').innerText = "Tune OFF"
    }
    else {
        tune.pause();
        document.getElementById('label').innerText = "Tune ON"
    }
}

// // For music in page
// var audio = document.createElement('audio');
// audio.setAttribute('src', 'tune.mp3');
// audio.loop = true;
// // audio.play();