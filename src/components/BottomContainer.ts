import { PlayPauseButton } from './Controls/PlayPauseButton';
import { ProgressBar } from './Controls/ProgressBar';
import { EventEmitter } from '../core/EventEmitter';

export class BottomContainer {
    private readonly container: HTMLDivElement;
    private readonly controlsPanel: HTMLDivElement;

    constructor(emitter: EventEmitter) {
        this.container = document.createElement('div');
        this.container.className = 'v-player__bottom-container';

        this.controlsPanel = document.createElement('div');
        this.controlsPanel.className = 'v-player__controls-panel';

        const progressBarInstance = new ProgressBar(emitter);
        this.controlsPanel.appendChild(progressBarInstance.getElement());

        const playPauseButton = new PlayPauseButton(emitter);
        this.controlsPanel.appendChild(playPauseButton.getElement());

        this.container.appendChild(this.controlsPanel);
    }

    getElement() {
        return this.container;
    }
}