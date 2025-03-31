export class Container {
    constructor(targetElementId: string) {
        const targetElement = document.getElementById(targetElementId);
        if (!targetElement) throw new Error('Target Element not found');


    }
}