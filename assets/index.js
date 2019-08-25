// Module scope
import MediaPlayer, { foo } from './MediaPlayer.js';

const video = document.querySelector("video");
const button = document.querySelector("button");


const player = new MediaPlayer({ el: video });


button.onclick = () => player.toggle();

console.log(foo);