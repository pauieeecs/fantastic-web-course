console.log('bağlandım');

function animateHeader() {
    let header1 = document.getElementById('primary-header');
    let header2 = document.getElementById('secondary-header');
    let button = document.getElementById('submit-button');
    setTimeout(function () {
        header1.innerHTML="Mutluluk :)";
        header2.innerHTML="";
        button.innerHTML="Teşekkürler.";
        button.classList.remove("btn-animation");
    },4000);
}

