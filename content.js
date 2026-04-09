const targetSelectors = [
    '.f1makowq'
];

const clearOverlays = () => {
    targetSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        console.log(elements);
        
        elements.forEach(el => {
            if (el.style.display !== 'none') {
                el.style.setProperty('display', 'none', 'important');
            }
        });
    });
};

const observer = new MutationObserver(() => {
    clearOverlays();
});

const playerContainer = document.querySelector('.atvwebplayersdk-player-container') || document.body;
observer.observe(playerContainer, { 
    childList: true, 
    subtree: true 
});

console.log("Prime Video Overlay Remover: Active");