import { EventEmitter } from '../../core/EventEmitter';

export class ProgressBar {
    private readonly progressBar;
    private readonly progress;
    private readonly emitter: EventEmitter;

    constructor(emitter: EventEmitter) {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'v-player__progress-bar';
        this.progress = document.createElement('div');
        this.progress.className = 'v-player__progress-bar-processing';
        this.progressBar.appendChild(this.progress);
        this.emitter = emitter;

        this.initEmitters();
        this.initEvents();
    }

    initEmitters() {
        this.emitter.on('updateProgress', (currentTime, duration) => {
            const percentage = (currentTime / duration) * 100;
            //this.progress.style.width = `${percentage}%`;
            const progress = currentTime / duration;
            this.progress.style.transform = `scaleX(${progress})`;
        })
    }

    initEvents() {
        this.progressBar.addEventListener('click', (e) => {
            const rect = this.progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            this.emitter.emit('clickProgressBar', pos);
        });
    }

    getElement() {
        return this.progressBar;
    }
}