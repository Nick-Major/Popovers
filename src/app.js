import Popover from "./popover";

document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.querySelector('body');

    const btn = document.createElement('button');
    btn.textContent = 'Click to toggle popover'
    btn.classList.add('btn');

    body.append(btn);

    const popover = new Popover();

    btn.addEventListener('click', ()=> {
        const popoverEl = document.querySelector('.popover');
        if(!popoverEl) {
            popover.showPopover();
        } else {
            popover.removePopover();
        }
        
    })
})