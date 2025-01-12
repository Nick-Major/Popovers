export default class Popover {
    constructor() {

    }

    showPopover() {
        const popoverElement = document.createElement('div');
        const popoverArrow = document.createElement('div');
        const popoverTitle = document.createElement('h3');
        const popoverBody = document.createElement('div');

        popoverElement.appendChild(popoverArrow);
        popoverElement.appendChild(popoverTitle);
        popoverElement.appendChild(popoverBody);

        popoverElement.classList.add('popover');
        popoverArrow.classList.add('arrow');
        popoverTitle.classList.add('popover-title');
        popoverBody.classList.add('popover-body');

        popoverTitle.textContent = 'Popover title';
        popoverBody.textContent = `And here's some amazing content. It's very engaging. Right?`;

        document.body.appendChild(popoverElement);
    }

    applyStyle(left, top) {
        const popoverEl = document.querySelector('.popover');
        const btn = document.querySelector('.btn');

        popoverEl.style.top = top - popoverEl.offsetHeight - 10 + "px";
        popoverEl.style.left = left + btn.offsetWidth / 2 - popoverEl.offsetWidth / 2 + "px";;
    }

    removePopover() {
        const popover = document.querySelector('.popover');

        popover.remove();
    }
}