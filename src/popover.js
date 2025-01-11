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

    applyStyle(left, top) {
        const popoverEl = document.querySelector('.popover');
        const btn = document.querySelector('.btn');

        popoverEl.style.top = top - popoverEl.offsetHeight + "px";
        popoverEl.style.left = left + btn.offsetWidth / 2 - popoverEl.offsetWidth / 2 + "px";;
    }

    removePopover() {
        const popover = document.querySelector('.popover');

        popover.remove();
    }
}