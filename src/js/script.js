
//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }
    else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//toogle modal
function toggleModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');
}

function toggleModal2() {
    const modal = document.getElementById('projectModal2');
    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');
}

function toggleModal3() {
    const modal = document.getElementById('projectModal3');
    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');
}

function toggleModal4() {
    const modal = document.getElementById('projectModal4');
    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');
}

function toggleModal5() {
    const modal = document.getElementById('projectModal5');
    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');
}