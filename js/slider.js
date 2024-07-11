

////////////////////////////////////////////

let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let pressed = false;
let startX;
let x;

slider.addEventListener('mousedown', handleStart);
slider.addEventListener('touchstart', handleStart, {passive: false});
slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab';
});
slider.addEventListener('mouseup', handleEnd);
slider.addEventListener('mouseleave', handleEnd);
slider.addEventListener('touchend', handleEnd);
slider.addEventListener('mousemove', handleMove);
slider.addEventListener('touchmove', handleMove, {passive: false});

let rafId = null;

function handleStart(e) {
    pressed = true;
    startX = (e.type === 'touchstart') ? e.touches[0].clientX - getTranslateX() : e.clientX - getTranslateX();
    slider.style.cursor = 'grabbing';
}

function handleEnd() {
    pressed = false;
    slider.style.cursor = 'grab';
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
