document.getElementById('username').style.display = 'none'
document.getElementById('beforelogin').style.display = 'grid'
document.getElementById('imageslide').style.display = 'none'
document.getElementById('btns').style.display = 'none'
document.getElementById('sports-category').style.display = 'none'
document.getElementById('discover').style.display = 'none'


var registered_data = JSON.parse(localStorage.getItem('registered-user'))
console.log(registered_data)

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




function login() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
        //console.log(email, password)

    for (var i = 0; i < registered_data.length; i++) {
        // console.log(registered_data[i].name)
        if (email == '' || password == "") {
            alert('enter valide email and password')
            break
        } else if (email == registered_data[i].email && password == registered_data[i].password) {
            alert('logged in')
            document.getElementById('username').style.display = 'grid'
            document.getElementById('beforelogin').style.display = 'grid'
            document.getElementById('xxx').textContent = 'Log out'

            var div = document.getElementById('credential')
            var p = document.createElement('p')
            p.textContent = registered_data[i].name
            div.append(p)

            document.getElementById('loginForm').style.display = 'none'
            document.getElementById('imageslide').style.display = 'block'
            document.getElementById('btns').style.display = 'block'
            document.getElementById('sports-category').style.display = 'grid'
            document.getElementById('discover').style.display = 'grid'
        }
    }
}


function cricket() {
    location.assign('cricket.html')
}