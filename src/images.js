const gifs = document.getElementsByClassName('card-image');
const video = document.getElementById('video')


for(let i=0;i<gifs.length;i++) {
    const gif = gifs[i];
    gif.addEventListener('click', () => {
        video.src = gif.src;
    })
};
// the number of gifs is equal to the number of cells