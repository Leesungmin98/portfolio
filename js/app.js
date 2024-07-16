// // app.js
// import { Wave } from './wave.js';

// class App {
//   constructor() {
//     this.canvas = document.createElement('canvas');
//     this.ctx = this.canvas.getContext('2d');

//     const waveContainer = document.querySelector('.wave');
//     waveContainer.appendChild(this.canvas);

//     this.waves = [
//       new Wave('#93E4FF', -900, 1, 0.5),
//       new Wave('#93E4FF', -1000, 0.5, 0.3),
//       new Wave('#93E4FF', -1100, 0.2, 0.4),
//     ];

//     window.addEventListener('resize', this.resize.bind(this));
//     this.resize();
//     requestAnimationFrame(this.animate.bind(this));
//   }

//   resize() {
//     this.stageWidth = document.body.clientWidth;
//     this.stageHeight = document.body.clientHeight;

//     this.canvas.width = this.stageWidth * 2;
//     this.canvas.height = this.stageHeight * 2;
//     this.ctx.scale(2, 2);

//     this.waves.forEach(wave => {
//       wave.resize(this.stageWidth, this.stageHeight);
//     });
//   }

//   animate(t) {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     this.waves.forEach(wave => {
//       wave.update(t * 0.002);
//       wave.draw(this.ctx);
//     });

//     requestAnimationFrame(this.animate.bind(this));
//   }
// }

// window.onload = () => {
//   new App();
// };