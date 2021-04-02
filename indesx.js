var allimages = ['https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850793%2Fk%242969ae129cbb1cec91a1bd6d48f09b9e%2Fimgonline%2520com%2520ua%2520compresstosize%2520myh2p1s6qblvtr.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75', 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850794%2Fk%24d194a2237d1e38c582cb362fc031cb49%2Fclearance%2520desktop.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75', 'https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs850786%2Fk%2467d676e372b1ae68bdb939b59e71b541%2Fimgonline%2520com%2520ua%2520compresstosize%2520ko7nq6hefmgb0nc.jpg%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75'];


var i = 0;

function slides() {
    var div = document.getElementById('imageslide')
    div.innerHTML = null
    var img = document.createElement('img')
    img.setAttribute('src', allimages[i])
    div.append(img)
    if (i < (allimages.length - 1))
        i++;
    else
        i = 0;
}

function start() {
    stp = setInterval(slides, 2000)

}
start()



function signin() {
    location.assign('registration.html')
}