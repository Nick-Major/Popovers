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

        console.log(btn.getBoundingClientRect());
        
        const { left, top } = btn.getBoundingClientRect();
        
        if(!popoverEl) {
            popover.showPopover();
            popover.applyStyle(left, top);
        } else {
            popover.removePopover();
        }
        
    })
})