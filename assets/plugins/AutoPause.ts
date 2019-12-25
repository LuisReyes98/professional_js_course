import MediaPlayer from "../MediaPlayer"

class AutoPause {
    private threshold: number
    player: MediaPlayer

    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player){
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold = 0.25

        })
        observer.observe(player.media)
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    private handleVisibilityChange() {
        console.log(document.visibilityState);
        const isVisible = document.visibilityState === "visible"
        isVisible ? this.player.play() : this.player.pause()
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry =entries[0]
        console.log(entry)
        entry.isIntersecting ? this.player.play() : this.player.pause()
    }
}

export default AutoPause