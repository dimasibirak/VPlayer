import { EventEmitter } from '../core/EventEmitter';

export class VideoContainer {
    private video: HTMLVideoElement;
    private emitter: EventEmitter;

    constructor(container: HTMLElement, src: string, emitter: EventEmitter) {
        this.emitter = emitter;
        this.video = document.createElement('video');
        this.video.className = 'v-player__video-element';
        this.video.src = src;
        container.appendChild(this.video);

        this.emitter.on('play', () => {
            this.video.play();
        })

        this.emitter.on('pause', () => {
            this.video.pause();
        })
    }

    getElement() {
        return this.video;
    }
}