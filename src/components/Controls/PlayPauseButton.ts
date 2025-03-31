import { EventEmitter } from '../../core/EventEmitter';

export interface IPlayPauseButton {
    getElement(): HTMLButtonElement;
}
export class PlayPauseButton implements IPlayPauseButton {
    private button: HTMLButtonElement;
    private isPlaying: boolean;
    private emitter;

    constructor(emitter: EventEmitter) {
        this.button = document.createElement('button');
        this.button.className = 'v-player__play-pause-button';
        this.button.textContent = 'Play';
        this.isPlaying = false
        this.emitter = emitter;

        this.button.addEventListener('click', () => {
            this.handler();
        })
    }

    public handler() {
        this.isPlaying = !this.isPlaying;
        if (!this.isPlaying) {
            this.emitter.emit('play');
            this.button.textContent = 'play';
        } else {
            this.emitter.emit('pause');
            this.button.textContent = 'pause';
        }
    }

    public getElement() {
        return this.button;
    }
}