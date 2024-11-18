

// app.js
import { Wave } from './wave.js';

class App {
  constructor() {
   
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    
    const waveContainer = document.querySelector('.wave');
    waveContainer.appendChild(this.canvas);

    
    this.waves = [
      new Wave('#1eb6e9', -755, 1, 0.2),
      new Wave('#1eb6e9', -800, 0.7, 0.1),
      new Wave('#1eb6e9', -900, 0.2, 0.1),
    ];

    
    window.addEventListener('resize', this.resize.bind(this));

   
    this.init();
  }

  init() {
    
    this.resize();
    this.lastTime = 0;
    this.fps = 30;
    this.interval = 1000 / this.fps;

  
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
   
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

   
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * pixelRatio;
    this.canvas.height = this.stageHeight * pixelRatio;
    this.ctx.scale(pixelRatio, pixelRatio);

    
    this.waves.forEach(wave => wave.resize(this.stageWidth, this.stageHeight));
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


window.addEventListener('DOMContentLoaded', () => {
  new App();
});
