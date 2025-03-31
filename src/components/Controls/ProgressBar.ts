export class ProgressBar {
    private progressBar;
    private progress;

    constructor() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'v-player__progress-bar';
        this.progress = document.createElement('div');
        this.progress.className = 'v-player__progress-bar-processing';
        this.progressBar.appendChild(this.progress);
    }

    getElement() {
        return this.progressBar;
    }
}