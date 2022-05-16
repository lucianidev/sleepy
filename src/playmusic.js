const songs = ['music/song-1.mp3', 'music/song-2.mp3', 'music/song-3.mp3', 'music/song-4.mp3', 'music/song-5.mp3'];
const play = document.getElementById('music');
const audioController = document.getElementById('song');
let stop = 0;

class Song{
    constructor(title,controller){
        this.title = title;
        this.controller = controller;
    }


    //playing the song
    play(){
        console.log(this.controller.src)
        this.controller.src = this.title;
        return this.controller.play();
    }
    // pause the song
    stop(){
        this.controller.pause();
    }
}


play.addEventListener('click', () => {
    stop++;
    //take a random song  from the list
    let audio = new Song(songs[Math.floor(Math.random() * songs.length)], audioController);
    let playMusic = audio.play();
    console.log('started');


    // if the button is clicked 2 times the audio is stopped
    if(playMusic !== undefined){
        playMusic.then(() => {
            if(stop % 2 == 0){
                audio.stop();
            }
        })
    }

});


audioController.onended = () => {
  audio = new Song(songs[Math.floor(Math.random() * songs.length)], audioController);
  let playMusic = audio.play();
}
