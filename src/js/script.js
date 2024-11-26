
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
    const navbar = document.getElementById('navbar');

    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');

      // Menambahkan atau menghapus kelas pointer-events-none pada navbar
    if (!modal.classList.contains('hidden')) {
        navbar.classList.add('pointer-events-none'); // Menonaktifkan navbar saat modal terbuka
    } else {
        navbar.classList.remove('pointer-events-none'); // Mengaktifkan kembali navbar saat modal ditutup
    }
}

function toggleModal2() {
    const modal = document.getElementById('projectModal2');
    const navbar = document.getElementById('navbar');

    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');

     // Menambahkan atau menghapus kelas pointer-events-none pada navbar
    if (!modal.classList.contains('hidden')) {
        navbar.classList.add('pointer-events-none'); // Menonaktifkan navbar saat modal terbuka
    } else {
        navbar.classList.remove('pointer-events-none'); // Mengaktifkan kembali navbar saat modal ditutup
    }
}

function toggleModal3() {
    const modal = document.getElementById('projectModal3');
    const navbar = document.getElementById('navbar');

    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');

     // Menambahkan atau menghapus kelas pointer-events-none pada navbar
    if (!modal.classList.contains('hidden')) {
        navbar.classList.add('pointer-events-none'); // Menonaktifkan navbar saat modal terbuka
    } else {
        navbar.classList.remove('pointer-events-none'); // Mengaktifkan kembali navbar saat modal ditutup
    }
}

function toggleModal4() {
    const modal = document.getElementById('projectModal4');
    const navbar = document.getElementById('navbar');

    modal.classList.toggle('hidden');

     // Toggle overflow-hidden pada body saat modal muncul atau ditutup
     document.body.classList.toggle('overflow-hidden');

      // Menambahkan atau menghapus kelas pointer-events-none pada navbar
    if (!modal.classList.contains('hidden')) {
        navbar.classList.add('pointer-events-none'); // Menonaktifkan navbar saat modal terbuka
    } else {
        navbar.classList.remove('pointer-events-none'); // Mengaktifkan kembali navbar saat modal ditutup
    }
}

function toggleModal5() {
    const modal = document.getElementById('projectModal5');
    const navbar = document.getElementById('navbar');
    
    // Toggle modal visibility
    modal.classList.toggle('hidden');
    
    // Toggle overflow-hidden pada body untuk mencegah scroll saat modal terbuka
    document.body.classList.toggle('overflow-hidden');
    
    // Menambahkan atau menghapus kelas pointer-events-none pada navbar
    if (!modal.classList.contains('hidden')) {
        navbar.classList.add('pointer-events-none'); // Menonaktifkan navbar saat modal terbuka
    } else {
        navbar.classList.remove('pointer-events-none'); // Mengaktifkan kembali navbar saat modal ditutup
    }
}
