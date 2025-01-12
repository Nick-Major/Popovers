import Popover from "./popover";

document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('.form');

    const btn = document.createElement('button');
    btn.textContent = 'Click to toggle popover'
    btn.classList.add('btn');

    form.append(btn);

    const popover = new Popover();

    form.addEventListener('click', (event)=> {
        event.preventDefault();

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