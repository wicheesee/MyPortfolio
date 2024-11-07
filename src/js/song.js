// Music Controls
var playlist = [
    '../file/song/lofielegance.mp3',
    '../file/song/Usagi Flap.mp3' // Perbaiki nama file
];

var currentSong = 0;
var audio = new Audio(playlist[currentSong]);
audio.loop = false; // Set loop to false so the audio doesn't loop on itself over and over again
audio.autoplay = true; // Set autoplay to true so the audio starts playing automatically

window.onload = function () {
    document.getElementById('vinyl').style.animation = 'spin 2s linear infinite';
    fadeInOut('tooltip', 1000, 2000); // fade in and out
    updateTooltip(); // Update tooltip when the page loads
};

// Play/Pause functionality when the vinyl is clicked
document.getElementById('vinyl').onclick = function () {
    if (audio.paused) {
        audio.play();
        document.getElementById('vinyl').style.animation = 'spin 2s linear infinite';
        fadeInOut('tooltip', 1000, 2000); // fade in and out
    } else {
        audio.pause();
        document.getElementById('vinyl').style.animation = 'none';
    }
};

// Tooltip functions
document.getElementById('vinyl').onmouseover = function () {
    fadeIn('tooltip', 500); // Show tooltip on hover
};

document.getElementById('vinyl').onmouseout = function () {
    fadeOut('tooltip', 500); // Hide tooltip when not hovering
};

// Update tooltip with song name
function updateTooltip() {
    var audioSrc = audio.src;
    var filename = audioSrc.substring(audioSrc.lastIndexOf('/') + 1); // Get file name from path
    filename = decodeURIComponent(filename); // Decode file name
    filename = filename.substring(0, filename.lastIndexOf('.')); // Remove file extension
    document.getElementById('tooltip').innerText = 'Now Playing: ' + filename;
}

// Event listener for when a song ends and the next one plays
audio.addEventListener('ended', function () {
    currentSong++;
    if (currentSong == playlist.length) currentSong = 0; // Loop back to the first song
    audio.src = playlist[currentSong];
    audio.play();
    fadeInOut('tooltip', 1000, 2000); // Slide in and out when song changes
    updateTooltip(); // Update tooltip when song changes
});

// Event listener for when a song starts playing
audio.addEventListener('play', updateTooltip);

// Fade in and out functions
function fadeInOut(id, timeIn, delay) {
    var element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.display = "block";
    
    setTimeout(function () {
        element.style.transition = `opacity ${timeIn}ms`;
        element.style.opacity = 1;
        
        setTimeout(function () {
            element.style.transition = `opacity ${timeIn}ms`;
            element.style.opacity = 0;
        }, delay);
        
    }, timeIn);
}

function fadeIn(id, time) {
    var element = document.getElementById(id);
    clearTimeout(element.fadeTimeout);
    element.style.transition = `opacity ${time}ms`;
    element.style.opacity = 1;
    element.style.display = "block";
}

function fadeOut(id, time) {
    var element = document.getElementById(id);
    clearTimeout(element.fadeTimeout);
    element.fadeTimeout = setTimeout(function () {
        element.style.transition = `opacity ${time}ms`;
        element.style.opacity = 0;
        setTimeout(function () {
            element.style.display = "none";
        }, time);
    }, time);
}
