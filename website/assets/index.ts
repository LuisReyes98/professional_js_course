// Module scope
import MediaPlayer from '@luis_reyesh/mediaplayer';
import AutoPlay from '@luis_reyesh/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@luis_reyesh/mediaplayer/lib/plugins/AutoPause';
import Ads from '@luis_reyesh/mediaplayer/lib/plugins/Ads';

const video = document.querySelector("#video");
const playButton: HTMLElement = document.querySelector("#play");
const muteButton: HTMLElement = document.querySelector("#mute");


const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ],
});


playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}