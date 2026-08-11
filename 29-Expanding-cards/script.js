"use strict";
// 1. Generic syntax for querySelectorAll
const panels = document.querySelectorAll('.panel');
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
// 2. Iterating over typed NodeList
panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
