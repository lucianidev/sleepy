const gifsImages = document.getElementsByClassName('card-image');
let videoSrc = document.getElementById('video');

window.addEventListener('load', () => {
  const src = gifsImages[Math.floor(Math.random() * gifsImages.length)].src;
  videoSrc.src = src;
  console.log(videoSrc);
});
