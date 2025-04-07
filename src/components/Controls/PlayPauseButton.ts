import { EventEmitter } from '../../core/EventEmitter';

export interface IPlayPauseButton {
    getElement(): HTMLButtonElement;
}
export class PlayPauseButton implements IPlayPauseButton {
    private readonly button: HTMLButtonElement;
    private emitter;

    constructor(emitter: EventEmitter) {
        this.button = document.createElement('button');
        this.button.className = 'v-player__play-pause-button';
        this.button.textContent = 'play';
        this.emitter = emitter;

        this.button.addEventListener('click', () => {
            this.emitter.emit('switchPlaying');
        })

        this.emitter.on('switchedPlaying', (value) => {
            if (value) {
                this.button.textContent = 'play';
            } else {
                this.button.textContent = 'pause';
            }
        });
    }

    public getElement() {
        return this.button;
    }
}