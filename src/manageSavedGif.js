// saves the gif link in the localStorage

function saveGif(gif) {
  localStorage.setItem('gif', gif.toString());
}

// checks if the generated gif is equal to the last one generated last time

function checkIfGifChoosedTwice(gif) {
  const lastGif = localStorage.getItem('gif');

  if(lastGif === gif) {
    return true;
  } else {
     return false;
  }

}
export { saveGif, checkIfGifChoosedTwice };
