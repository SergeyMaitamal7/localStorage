import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(vimeo, 1000));

function vimeo(e) {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  const localStorageTime = localStorage.getItem(LOCALSTORAGE_KEY);
  player.setCurrentTime(localStorageTime);
}
