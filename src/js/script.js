
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

function toggleModal6() {
    const modal = document.getElementById('projectModal6');
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


const modalCheckbox = document.getElementById("my_modal_7");
const navbar = document.getElementById("navbar");

// Fungsi untuk toggle kelas pada navbar
modalCheckbox.addEventListener("change", () => {
    if (modalCheckbox.checked) {
        navbar.classList.add("navbar-disabled");
    } else {
        navbar.classList.remove("navbar-disabled");
    }
});

const modalCheckbox1 = document.getElementById("my_modal_8");
const navbar1 = document.getElementById("navbar");

// Fungsi untuk toggle kelas pada navbar
modalCheckbox.addEventListener("change", () => {
    if (modalCheckbox1.checked) {
        navbar1.classList.add("navbar-disabled");
    } else {
        navbar1.classList.remove("navbar-disabled");
    }
});


const modalCheckbox2 = document.getElementById("my_modal_9");
const navbar2 = document.getElementById("navbar");

// Fungsi untuk toggle kelas pada navbar
modalCheckbox.addEventListener("change", () => {
    if (modalCheckbox2.checked) {
        navbar2.classList.add("navbar-disabled");
    } else {
        navbar2.classList.remove("navbar-disabled");
    }
});

