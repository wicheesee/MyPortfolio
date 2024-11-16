const pictures = [
    'src/file/pp.png',       // Gambar 1
    'src/file/pp2.png',      // Gambar 2
];

let currentIndex = 0;

const profilePicture = document.getElementById('profilePicture');

// Fungsi untuk mengganti gambar
function changePicture() {
    currentIndex = (currentIndex + 1) % pictures.length;
    profilePicture.src = pictures[currentIndex];
}

// Ganti gambar setiap 2 detik
setInterval(changePicture, 2000);
console.log("Script loaded successfully!");