function AuthFunc() {
    const isLoggedIn = localStorage.getItem("user_data");

    if(isLoggedIn){
        localStorage.removeItem("user_data")
        window.location.reload(false);
    }else {
        window.location.href = "../auth/auth.html"
    }
}

function SignIn() {
    const users = [{login: 'user1@gmail.com', password: '123'}, {login: 'user2@gmail.com', password: '456'}];

    const login = document.getElementById("login").value;
    const password = document.getElementById('password').value;

    const result = users.map(value => {
        if(value.login === login && value.password===password){
            return value.login
        }
    })

    if(result[0]!==undefined){
        localStorage.setItem('user_data', 'true')
        window.location.href = "../homepage/homepage.html"
    }else {
        alert('Incorrect data')
    }
}

function ButtonText() {
    const button = document.getElementById('login-button');

    const isLogined = localStorage.getItem('user_data');

    if(isLogined){
        button.innerHTML = "Выйти"
    } else {
        button.innerHTML = "Войти"
    }
}
