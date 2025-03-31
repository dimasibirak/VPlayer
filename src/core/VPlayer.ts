import { VideoContainer } from '../components/VideoContainer';
import { EventEmitter } from './EventEmitter';
import { BottomContainer } from "../components/BottomContainer";

export class VPlayer {
    private readonly container: HTMLElement | null;
    private readonly videoElement: HTMLVideoElement;
    private readonly bottomPanel: HTMLDivElement;
    private readonly emitter: EventEmitter;

    constructor(containerId: string, src: string) {
        // Находим контейнер, указанный пользователем
        this.emitter = new EventEmitter();
        this.container = document.getElementById(containerId);
        if (!this.container) throw new Error('Контейнер не найден');
        this.container.classList.add('v-player');

        // Создаем видеоэлемент
        const videoContainer = new VideoContainer(this.container, src, this.emitter);
        this.videoElement = videoContainer.getElement();

        // Создаем нижнюю панель
        const bottomContainerInstance = new BottomContainer(this.emitter);
        this.bottomPanel = bottomContainerInstance.getElement();

        // Добавляем видео и панель в контейнер
        this.container.appendChild(this.videoElement);
        this.container.appendChild(this.bottomPanel);
    }

    /*private bindEvents() {
        // Логика кнопки Play/Pause
        this.playPauseButton.addEventListener('click', () => {
            if (this.videoElement.paused) {
                this.videoElement.play();
                this.playPauseButton.textContent = 'Pause';
            } else {
                this.videoElement.pause();
                this.playPauseButton.textContent = 'Play';
            }
        });

        // Перемотка при клике на прогресс-бар
        this.progressBar.addEventListener('click', (e) => {
            const rect = this.progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            this.videoElement.currentTime = pos * this.videoElement.duration;
        });
    }*/

    /*private bindVideoEvents() {
        this.videoElement.addEventListener('timeupdate', () => {
            this.emitter.emit('timeupdate');
        });

        this.progressBar.addEventListener('click', (e) => {
            this.emitter.emit('clickProgressBar', { event: e });
        });
    }*/

    /*private bindUIEvents() {
        this.emitter.on('timeupdate', () => {
            const percentage = (this.videoElement.currentTime / this.videoElement.duration) * 100;
            this.progress.style.width = `${percentage}%`;
        });
    }*/
}