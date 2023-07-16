function openmenutrellooptions() {
    document.querySelector('.menuoptionsrightside').style.display = 'block'
}

function closemenuoptions() {
    document.querySelector('.menuoptionsrightside').style.display = 'none'
}

function openplanodefundo() {
    closemenuoptions()
    document.querySelector('.menuteladefundo').style.display = 'block'
}

function closeplanodefundo() {
    closemenuoptions()
    document.querySelector('.menuteladefundo').style.display = 'none'
}

function menuphotosfundo() {
    closemenuoptions()
    closeplanodefundo()
    document.querySelector('.menuteladefundooptions').style.display = 'block'
}

function menuphotosfundocores() {
    closemenuoptions()
    closeplanodefundo()
    closemenuphotosfundo()
    document.querySelector('.menuteladefundooptionscores').style.display = 'block'
}

function closemenuphotosfundo() {
    closemenuoptions()
    closeplanodefundo()
    document.querySelector('.menuteladefundooptions').style.display = 'none'
}

function closemenuphotosfundocor() {
    closemenuoptions()
    closeplanodefundo()
    closemenuphotosfundo()
    document.querySelector('.menuteladefundooptionscores').style.display = 'none'
}

// AUTODETECT PLANO DE FUNDO //

if(localStorage.getItem('planodefundo') == null) {
    localStorage.setItem('planodefundo', 'cor8')
    location.reload()
}

if(localStorage.getItem('planodefundo') == '1') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/trelloback.png')"
}

if(localStorage.getItem('planodefundo') == '2') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}

if(localStorage.getItem('planodefundo') == '3') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}

if(localStorage.getItem('planodefundo') == '4') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1620121684840-edffcfc4b878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')"
}

if(localStorage.getItem('planodefundo') == '5') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')"
}

if(localStorage.getItem('planodefundo') == '6') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}

if(localStorage.getItem('planodefundo') == '7') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80')"
}

if(localStorage.getItem('planodefundo') == '8') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}


if(localStorage.getItem('planodefundo') == '9') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}


if(localStorage.getItem('planodefundo') == '10') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80')"
}

if(localStorage.getItem('planodefundo') == '11') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"
}

if(localStorage.getItem('planodefundo') == '12') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80')"
}

if(localStorage.getItem('planodefundo') == '13') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')"
}

if(localStorage.getItem('planodefundo') == '14') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1569041032620-2d0ee0b7b673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}

if(localStorage.getItem('planodefundo') == '15') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')"
}


if(localStorage.getItem('planodefundo') == '16') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
}









if(localStorage.getItem('planodefundo') == 'cor1') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor1.png')"
}

if(localStorage.getItem('planodefundo') == 'cor2') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor2.png')"
}

if(localStorage.getItem('planodefundo') == 'cor3') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor3.png')"
}

if(localStorage.getItem('planodefundo') == 'cor4') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor4.png')"
}

if(localStorage.getItem('planodefundo') == 'cor5') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor5.png')"
}

if(localStorage.getItem('planodefundo') == 'cor6') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor6.png')"
}

if(localStorage.getItem('planodefundo') == 'cor7') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor7.png')"
}

if(localStorage.getItem('planodefundo') == 'cor8') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor8.png')"
}

if(localStorage.getItem('planodefundo') == 'cor9') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor9.png')"
}

if(localStorage.getItem('planodefundo') == 'cor10') {
    document.querySelector('.sections-semana').style.backgroundImage = "url('img/cor10.png')"
}


// SETAR FOTOS DE FUNDO 

function setphoto1() {
    localStorage.setItem('planodefundo', '1')
    location.reload()
}

function setphoto2() {
    localStorage.setItem('planodefundo', '2')
    location.reload()
}

function setphoto3() {
    localStorage.setItem('planodefundo', '3')
    location.reload()
}

function setphoto4() {
    localStorage.setItem('planodefundo', '4')
    location.reload()
}

function setphoto5() {
    localStorage.setItem('planodefundo', '5')
    location.reload()
}

function setphoto6() {
    localStorage.setItem('planodefundo', '6')
    location.reload()
}

function setphoto7() {
    localStorage.setItem('planodefundo', '7')
    location.reload()
}

function setphoto8() {
    localStorage.setItem('planodefundo', '8')
    location.reload()
}

function setphoto9() {
    localStorage.setItem('planodefundo', '9')
    location.reload()
}

function setphoto10() {
    localStorage.setItem('planodefundo', '10')
    location.reload()
}

function setphoto11() {
    localStorage.setItem('planodefundo', '11')
    location.reload()
}

function setphoto12() {
    localStorage.setItem('planodefundo', '12')
    location.reload()
}

function setphoto13() {
    localStorage.setItem('planodefundo', '13')
    location.reload()
}

function setphoto14() {
    localStorage.setItem('planodefundo', '14')
    location.reload()
}

function setphoto15() {
    localStorage.setItem('planodefundo', '15')
    location.reload()
}

function setphoto16() {
    localStorage.setItem('planodefundo', '16')
    location.reload()
}






function setphotocor1() {
    localStorage.setItem('planodefundo', 'cor1')
    location.reload()
}

function setphotocor2() {
    localStorage.setItem('planodefundo', 'cor2')
    location.reload()
}
function setphotocor3() {
    localStorage.setItem('planodefundo', 'cor3')
    location.reload()
}
function setphotocor4() {
    localStorage.setItem('planodefundo', 'cor4')
    location.reload()
}
function setphotocor5() {
    localStorage.setItem('planodefundo', 'cor5')
    location.reload()
}
function setphotocor6() {
    localStorage.setItem('planodefundo', 'cor6')
    location.reload()
}
function setphotocor7() {
    localStorage.setItem('planodefundo', 'cor7')
    location.reload()
}
function setphotocor8() {
    localStorage.setItem('planodefundo', 'cor8')
    location.reload()
}
function setphotocor9() {
    localStorage.setItem('planodefundo', 'cor9')
    location.reload()
}

function setphotocor10() {
    localStorage.setItem('planodefundo', 'cor10')
    location.reload()
}