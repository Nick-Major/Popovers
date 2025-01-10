class Widget {
    constructor(element) {
        this.element = element;
    }

    static get markup() {
        return `
        <div class="popover">
        <h3 class="popover-title">Popover title</h3>
        <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
    </div>
        `
    }
}
