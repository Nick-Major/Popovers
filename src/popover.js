export default class Popover {
    constructor() {

    }

    showPopover() {
        const popoverElement = document.createElement('div');
        const popoverTitle = document.createElement('h3');
        const popoverBody = document.createElement('div');

        popoverElement.appendChild(popoverTitle);
        popoverElement.appendChild(popoverBody);

        popoverElement.classList.add('popover');
        popoverTitle.classList.add('popover-title');
        popoverBody.classList.add('popover-body');

        popoverTitle.textContent = 'Popover title';
        popoverBody.textContent = `And here's some amazing content. It's very engaging. Right?`;

        document.body.appendChild(popoverElement);
    }

    removePopover() {
        const popover = document.querySelector('.popover');

        popover.remove();
    }
}