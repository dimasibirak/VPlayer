import { VideoContainer } from '../components/VideoContainer';
import { EventEmitter } from './EventEmitter';
import { BottomContainer } from "../components/BottomContainer";
import { TOptions } from './types';


export class VPlayer {
    private readonly container: HTMLElement | null;
    private readonly videoElement: HTMLVideoElement;
    private readonly bottomPanel: HTMLDivElement;
    private readonly emitter: EventEmitter;

    constructor({ containerId, src }: TOptions) {
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
}