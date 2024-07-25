const playlistSongs = document.getElementById('playlist-songs')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')

const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
const shuffleButton = document.getElementById('shuffle')

const allSongs = [
  {
    id: 0,
    title: 'Scratching The Surface',
    artist: 'quincy Larson',
    duration: '4:24',
    src:'https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3'
  }, 
  {
    id: 1,
    title: 'Cant Stay Down',
    artist: 'Quincy Larson',
    duration: '4:15',
    src:"https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
  },
  {
    id: 1,
    title: 'Still Learning',
    artist: 'Quincy Larson',
    duration: '3:51',
    src:"https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3"
  },
];