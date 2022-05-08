const gifsImages = document.getElementsByClassName('card-image');
let videoSrc = document.getElementById('video').src;

window.addEventListener('load', () => {
  const src = gifsImages[Math.floor(Math.random() * gifsImages.length)].src.toString();
  videoSrc = src;
  console.log(src);
});
