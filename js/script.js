const songs = [
    // Agrega más canciones aquí
];

const songList = document.getElementById("song-list");
const audioPlayer = document.getElementById("audio-player");
const nowPlaying = document.getElementById("now-playing");

songs.forEach((song, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${song.title}</td>
        <td>${song.album}</td>
        <td>${song.dateAdded}</td>
        <td>${song.duration}</td>
    `;
    row.addEventListener("click", () => {
        audioPlayer.src = song.filePath;
        audioPlayer.play();
        nowPlaying.textContent = `${song.title} - ${song.album}`;
    });
    songList.appendChild(row);
});
