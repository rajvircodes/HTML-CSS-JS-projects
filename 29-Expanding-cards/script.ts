// 1. Generic syntax for querySelectorAll
const panels = document.querySelectorAll<HTMLDivElement>('.panel');

function removeActiveClasses(): void {
  panels.forEach((panel: HTMLDivElement): void => {
    panel.classList.remove('active');
  });
}

// 2. Iterating over typed NodeList
panels.forEach((panel: HTMLDivElement): void => {
  panel.addEventListener('mouseover', (): void => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});