import { Wave } from '../wave.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    // .wave 클래스를 가진 요소를 찾아서 그 안에 canvas 추가
    const waveContainer = document.querySelector('.wave');
    waveContainer.appendChild(this.canvas);

    this.waves = [
   
      new Wave('#93E4FF', -600, 1, 0.9),   // 첫 번째 Wave 객체
      new Wave('#93E4FF', -1000, 0.5, 0.9),   // 첫 번째 Wave 객체
      new Wave('#93E4FF', -1600, 0.2, 0.1),   // 첫 번째 Wave 객체




      
       // 1번 파도
    ];

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 캔버스의 크기를 반응형으로 조정
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    // 각 웨이브 객체의 resize 메서드 호출
    this.waves.forEach(wave => {
      wave.resize(this.stageWidth, this.stageHeight);
    });
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 각 웨이브 객체의 update 및 draw 메서드 호출
    this.waves.forEach((wave, index) => {
      wave.update(t / (index + 1));
      wave.draw(this.ctx);
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
