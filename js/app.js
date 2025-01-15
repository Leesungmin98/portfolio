
// app.js
import { Wave } from './wave.js';

class App {
  constructor() {
   
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    
    const waveContainer = document.querySelector('.wave');
    waveContainer.appendChild(this.canvas);

  
    this.waves = [
      new Wave('#009eaf', -80, 0.8, 0.2),
      new Wave('#205cdd', -80, 0.8, 0.1),
      new Wave('#002c8a', -80, 1, 0.1),
      
    ];

   
    this.init();
  }

  init() {
   
    this.resize();

    
    this.lastTime = 0;
    this.fps = 30;
    this.interval = 1000 / this.fps;

  
    this.animateHandler = this.animate.bind(this);
    requestAnimationFrame(this.animateHandler);
  }

  resize() {
    
    this.stageWidth = document.documentElement.clientWidth;
    this.stageHeight = document.documentElement.clientHeight;

    
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * pixelRatio;
    this.canvas.height = this.stageHeight * pixelRatio;
    this.ctx.scale(pixelRatio, pixelRatio);

    
    this.waves.forEach(wave => wave.resize(this.stageWidth, this.stageHeight));
  }

  animate(t) {
    
    const currentTime = performance.now();
    const elapsed = currentTime - this.lastTime;

    if (elapsed > this.interval) {
     
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

     
      this.waves.forEach(wave => {
        wave.update(t * 0.002);
        wave.draw(this.ctx);
      });

      
      this.lastTime = currentTime;
    }

    
    this.animationFrame = requestAnimationFrame(this.animateHandler);
  }

 
  destroy() {
    
    window.removeEventListener('resize', this.resizeHandler);
    
   
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    
    const waveContainer = document.querySelector('.wave');
    if (waveContainer && this.canvas) {
      waveContainer.removeChild(this.canvas);
    }
  }
}


class AppManager {
  static init() {
    let appInstance = null;

   
    const initApp = () => {
      
      if (appInstance) {
        appInstance.destroy();
      }

     
      appInstance = new App();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }

   
    window.addEventListener('beforeunload', () => {
      if (appInstance) {
        appInstance.destroy();
      }
    });
  }
}

AppManager.init();