

let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let pressed = false;
let startX;
let x;

innerSlider.addEventListener('mousedown', handleStart);
innerSlider.addEventListener('touchstart', handleStart, {passive: false});
innerSlider.addEventListener('mouseenter', () => {
    innerSlider.style.cursor = 'grab';
});
document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove, {passive: false});

let rafId = null;

function handleStart(e) {
    pressed = true;
    startX = (e.type === 'touchstart') ? e.touches[0].clientX - getTranslateX() : e.clientX - getTranslateX();
    innerSlider.style.cursor = 'grabbing';
    e.preventDefault(); 
}

function handleEnd() {
    pressed = false;
    innerSlider.style.cursor = 'grab';
}

function handleMove(e) {
    if (!pressed) return;
    
    if (e.cancelable) {
        e.preventDefault();
    }
    
    x = (e.type === 'touchmove') ? e.touches[0].clientX : e.clientX;
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(() => {
        updatePosition(x - startX);
    });
}

function updatePosition(position) {
    innerSlider.style.transform = `translateX(${position}px)`;
    checkBoundary();
}

function getTranslateX() {
    const style = window.getComputedStyle(innerSlider);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}

function checkBoundary() {
    const outer = slider.getBoundingClientRect();
    const inner = innerSlider.getBoundingClientRect();
    const currentTranslateX = getTranslateX();
    
    if (currentTranslateX > 0) {
        updatePosition(0);
    } else if (inner.right < outer.right) {
        updatePosition(outer.width - inner.width);
    }
}