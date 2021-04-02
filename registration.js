function signup() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var password = document.getElementById('password').value
        //console.log(name, email, phone, password)




    if (name == '' || email == '' || phone == '' || password == "") {
        alert('Please fill all the necessary detail')
    } else {
        var alluser = JSON.parse(localStorage.getItem('registered-user')) || []
        var userdetail = {
                name: name,
                email: email,
                phone: phone,
                password: password
            }
            //console.log(userdetail)

        alluser.push(userdetail)
        localStorage.setItem('registered-user', JSON.stringify(alluser))


        location.assign('login.html')
    }

}