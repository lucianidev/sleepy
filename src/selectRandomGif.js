const gifsImages = document.getElementsByClassName('card-image');
let videoSrc = document.getElementById('video');
import { saveGif, checkIfGifChoosedTwice } from './manageSavedGif.js'

window.addEventListener('load', () => {
  let gifSrc = gifsImages[Math.floor(Math.random() * gifsImages.length)].src;
  const check = checkIfGifChoosedTwice(gifSrc)

// generates a new gif ,saves it's link to the localStorage and sets the video source
  if(check) {
    gifSrc = gifsImages[Math.floor(Math.random() * gifsImages.length)].src;
    saveGif(gifSrc)
    videoSrc.src = gifSrc;
  } else {
// saves the current to the localStorage link and  sets the video source
    saveGif(gifSrc)
    videoSrc.src = gifSrc;
  }
});
