document.getElementById('menuIcon').addEventListener('click', function () {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audioElement');
    const playButton = document.getElementById('play');
    const stopButton = document.getElementById('stop');
    const speakerIcon = document.getElementById('SpeakerIcon');
    const para = document.querySelector('.para');

    playButton.addEventListener('click', function () {
        audio.loop = true;
        audio.play();
        speakerIcon.classList.add('shake');
        para.classList.add('red-text');

    });

    stopButton.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        speakerIcon.classList.remove('shake');
        para.classList.remove('red-text');

    });
});
