function Pressed(id) {
    const div = document.getElementById('1');
    div.parentNode.removeChild(div);

    switch (id) {
        case 1: {
            document.getElementById('main').innerHTML += "<div id='1' class='main-container'><img src='./assets/1.png' class='img'></div>"
            document.getElementById('1').style.backgroundColor = 'blue';
            break;
        }
        case 2: {
            document.getElementById('main').innerHTML += "<div id='1' class='main-container'><img src='./assets/2.png' class='img'></div>"
            document.getElementById('1').style.backgroundColor = 'green';
            break;
        }
        case 3: {
            document.getElementById('main').innerHTML += "<div id='1' class='main-container'><img src='./assets/3.png' class='img'></div>"
            document.getElementById('1').style.backgroundColor = 'orange';
            break;
        }
    }
}
