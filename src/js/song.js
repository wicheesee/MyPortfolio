// Music Controls
var playlist = [
    'src/file/song/lofielegance.mp3',
    'src/file/song/Usagi Flap.mp3' // Fixed filename issue: removed backslash
];

var currentSong = 0;
var audio = new Audio(playlist[currentSong]);
audio.loop = false;
audio.autoplay = true;
audio.muted = false;

window.onload = function() {
    document.getElementById('vinyl').style.animation = 'none'; // No spinning animation on load
    document.getElementById('tooltip').innerText = 'Click vinyl to play the songs.'; // Initial tooltip message

    fadeIn('tooltip', 500); // Fade in the tooltip on page load
    setTimeout(function() {
        fadeOut('tooltip', 500); // Fade out after 2 seconds
    }, 2000); // Wait 2 seconds before fading out

    // Automatically play the audio when the page loads (autoplay should be working)
    audio.play().catch(function(error) {
        console.log('Autoplay was blocked: ' + error); // In case autoplay is blocked, log the error
    });
};

// Play/Pause functionality when the vinyl is clicked
document.getElementById('vinyl').onclick = function () {
    if (audio.paused) {
        audio.play();
        document.getElementById('vinyl').style.animation = 'spin 2s linear infinite'; // Start spinning animation when playing
        document.getElementById('tooltip').innerText = 'Now Playing'; // Update tooltip to show "Now Playing"
    } else {
        audio.pause();
        document.getElementById('vinyl').style.animation = 'none'; // Stop spinning animation when paused
        document.getElementById('tooltip').innerText = 'Paused'; // Update tooltip to show "Pause"
    }
};

// Tooltip behavior
document.getElementById('vinyl').onmouseover = function () {
    fadeIn('tooltip', 500); // Show tooltip on hover
};

document.getElementById('vinyl').onmouseout = function () {
    fadeOut('tooltip', 500); // Hide tooltip when not hovering
};

// Update tooltip with current song name
function updateTooltip() {
    var audioSrc = audio.src;
    var filename = audioSrc.substring(audioSrc.lastIndexOf('/') + 1); // Get filename from path
    filename = decodeURIComponent(filename); // Decode URL-encoded filename (e.g., spaces become '%20')
    filename = filename.substring(0, filename.lastIndexOf('.')); // Remove file extension
    document.getElementById('tooltip').innerText = 'Now Playing: ' + filename; // Update tooltip text
}

// Event listener for when the current song ends
audio.addEventListener('ended', function () {
    currentSong++;
    if (currentSong == playlist.length) currentSong = 0; // Loop back to the first song
    audio.src = playlist[currentSong];
    audio.play();
    fadeInOut('tooltip', 1000, 2000); // Slide in and out when song changes
    updateTooltip(); // Update tooltip with the new song name
});

// Event listener for when a song starts playing
audio.addEventListener('play', updateTooltip);

// Fade in/out functions for smooth visibility transitions
function fadeInOut(id, timeIn, delay) {
    var element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.display = "block";
    
    setTimeout(function() {
        element.style.transition = `opacity ${timeIn}ms`;
        element.style.opacity = 1;
        
        setTimeout(function() {
            element.style.transition = `opacity ${timeIn}ms`;
            element.style.opacity = 0;
        }, delay);
        
    }, timeIn);
}

// Fade-in function for showing element
function fadeIn(id, time) {
    var element = document.getElementById(id);
    clearTimeout(element.fadeTimeout);
    element.style.transition = `opacity ${time}ms`;
    element.style.opacity = 1;
    element.style.display = "block";
}

// Fade-out function for hiding element
function fadeOut(id, time) {
    var element = document.getElementById(id);
    clearTimeout(element.fadeTimeout);
    element.fadeTimeout = setTimeout(function() {
        element.style.transition = `opacity ${time}ms`;
        element.style.opacity = 0;
        setTimeout(function() {
            element.style.display = "none";
        }, time);
    }, time);
}
