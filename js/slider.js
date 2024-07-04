let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;

// 모바일과 PC 모두에서 동작할 수 있도록 이벤트 처리
slider.addEventListener('mousedown', handleStart);
slider.addEventListener('touchstart', handleStart);

slider.addEventListener('mouseenter', (e) => {
    slider.style.cursor = 'grab';
});

// 모바일과 PC 모두에서 동작할 수 있도록 이벤트 처리
slider.addEventListener('mouseup', handleEnd);
slider.addEventListener('touchend', handleEnd);

// 모바일과 PC 모두에서 동작할 수 있도록 이벤트 처리
slider.addEventListener('mousemove', handleMove);
slider.addEventListener('touchmove', handleMove);

function handleStart(e) {
    pressed = true;
    if (e.type === 'touchstart') {
        startx = e.touches[0].clientX - innerSlider.offsetLeft;
    } else {
        startx = e.offsetX - innerSlider.offsetLeft;
    }
    slider.style.cursor = 'grabbing';
}

function handleEnd(e) {
    pressed = false;
    slider.style.cursor = 'grab';
}

function handleMove(e) {
    if (!pressed) return;
    e.preventDefault();
    if (e.type === 'touchmove') {
        x = e.touches[0].clientX;
    } else {
        x = e.offsetX;
    }
    innerSlider.style.left = `${x - startx}px`;
    checkBoundary();
}

function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    // Media Query: Adjust behavior based on screen width
    if (window.innerWidth < 768) { // For mobile devices
        if (parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = '0px';
        } else if (inner.right < outer.right) {
            innerSlider.style.left = `-${inner.width - outer.width + 38}px`;
        }
    } else { // For desktop (assuming screen width >= 768px)
        if (parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = '0px';
        } else if (inner.right < outer.right) {
            innerSlider.style.left = `-${inner.width - outer.width}px`;
        }
    }
}
