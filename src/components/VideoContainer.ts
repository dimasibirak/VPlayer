import { EventEmitter } from '../core/EventEmitter';

export class VideoContainer {
    private readonly video: HTMLVideoElement;
    private emitter: EventEmitter;

    constructor(container: HTMLElement, src: string, emitter: EventEmitter) {
        this.emitter = emitter;
        this.video = document.createElement('video');
        this.video.className = 'v-player__video-element';
        this.video.src = src;
        container.appendChild(this.video);

        this.emitter.on('switchPlaying', () => {
            if (!this.video.paused) {
                this.emitter.emit('switchedPlaying', true);
                this.video.pause();
            } else {
                this.emitter.emit('switchedPlaying', false);
                this.video.play();
            }
        })

        this.emitter.on('clickProgressBar', (pos) => {
            this.video.currentTime = pos * this.video.duration;
        })

        this.video.addEventListener('timeupdate', () => {
            console.log('test')
            this.emitter.emit('updateProgress', this.video.currentTime, this.video.duration);
        });
    }

    getElement() {
        return this.video;
    }
}