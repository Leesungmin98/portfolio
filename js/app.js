
import { Wave } from './wave.js';

class App {
  constructor() {
    
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    
    const waveContainer = document.querySelector('.wave');
    waveContainer.appendChild(this.canvas);

    
    this.waves = [
      new Wave('#93E4FF', -900, 1, 0.5),
      new Wave('#93E4FF', -1000, 0.5, 0.3),
      new Wave('#93E4FF', -1100, 0.2, 0.4),
    ];

    
    this.resizeTimeout = null;
    window.addEventListener('resize', this.debouncedResize.bind(this));

   
    this.resize();
    this.lastTime = 0;
    this.fps = 30;
    this.interval = 1000 / this.fps;

   
    requestAnimationFrame(this.animate.bind(this));
  }

 
  debouncedResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.resize();
    }, 200);
  }


  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

   
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * pixelRatio;
    this.canvas.height = this.stageHeight * pixelRatio;
    this.ctx.scale(pixelRatio, pixelRatio);

    
    this.waves.forEach(wave => {
      wave.resize(this.stageWidth, this.stageHeight);
    });
  }

  
  animate(t) {
   
    if (t - this.lastTime > this.interval) {
      this.lastTime = t;

    
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      
      this.waves.forEach(wave => {
        wave.update(t * 0.002);
        wave.draw(this.ctx);
      });
    }

  
    requestAnimationFrame(this.animate.bind(this));
  }
}


window.onload = () => {
  new App();
};
