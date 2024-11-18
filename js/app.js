
// import { Wave } from './wave.js';

// class App {
//   constructor() {
    
//     this.canvas = document.createElement('canvas');
//     this.ctx = this.canvas.getContext('2d');

    
//     const waveContainer = document.querySelector('.wave');
//     waveContainer.appendChild(this.canvas);

    
//     this.waves = [
//       new Wave('#1eb6e9 ', -900, 1, 0.5),
//       new Wave('#1eb6e9', -1000, 0.5, 0.3),
//       new Wave('#1eb6e9 ', -1100, 0.2, 0.4),
//     ];

    
//     this.resizeTimeout = null;
//     window.addEventListener('resize', this.debouncedResize.bind(this));

   
//     this.resize();
//     this.lastTime = 0;
//     this.fps = 30;
//     this.interval = 1000 / this.fps;

   
//     requestAnimationFrame(this.animate.bind(this));
//   }

 
//   debouncedResize() {
//     clearTimeout(this.resizeTimeout);
//     this.resizeTimeout = setTimeout(() => {
//       this.resize();
//     }, 200);
//   }


//   resize() {
//     this.stageWidth = document.body.clientWidth;
//     this.stageHeight = document.body.clientHeight;

   
//     const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
//     this.canvas.width = this.stageWidth * pixelRatio;
//     this.canvas.height = this.stageHeight * pixelRatio;
//     this.ctx.scale(pixelRatio, pixelRatio);

    
//     this.waves.forEach(wave => {
//       wave.resize(this.stageWidth, this.stageHeight);
//     });
//   }

  
//   animate(t) {
   
//     if (t - this.lastTime > this.interval) {
//       this.lastTime = t;

    
//       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      
//       this.waves.forEach(wave => {
//         wave.update(t * 0.002);
//         wave.draw(this.ctx);
//       });
//     }

  
//     requestAnimationFrame(this.animate.bind(this));
//   }
// }


// window.onload = () => {
//   new App();
// };

//////////////////

// app.js
import { Wave } from './wave.js';

class App {
  constructor() {
    // 캔버스 생성 및 컨텍스트 설정
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    // 캔버스를 wave 컨테이너에 추가
    const waveContainer = document.querySelector('.wave');
    waveContainer.appendChild(this.canvas);

    // 웨이브 객체 생성
    this.waves = [
      new Wave('#1eb6e9', -900, 1, 0.5),
      new Wave('#1eb6e9', -1000, 0.5, 0.3),
      new Wave('#1eb6e9', -1100, 0.2, 0.4),
    ];

    // 리사이즈 이벤트 설정
    window.addEventListener('resize', this.resize.bind(this));

    // 초기화 및 애니메이션 시작
    this.init();
  }

  init() {
    // 초기화 작업 및 애니메이션 시작
    this.resize();
    this.lastTime = 0;
    this.fps = 30;
    this.interval = 1000 / this.fps;

    // 애니메이션 바로 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    // 스테이지 크기 설정
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 고해상도 디스플레이 처리
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * pixelRatio;
    this.canvas.height = this.stageHeight * pixelRatio;
    this.ctx.scale(pixelRatio, pixelRatio);

    // 웨이브 리사이즈
    this.waves.forEach(wave => wave.resize(this.stageWidth, this.stageHeight));
  }

  animate(t) {
    // 프레임 업데이트
    if (t - this.lastTime > this.interval) {
      this.lastTime = t;

      // 캔버스 클리어 및 웨이브 그리기
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.waves.forEach(wave => {
        wave.update(t * 0.002);
        wave.draw(this.ctx);
      });
    }

    // 다음 프레임 요청
    requestAnimationFrame(this.animate.bind(this));
  }
}

// `DOMContentLoaded` 이벤트로 초기화
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
