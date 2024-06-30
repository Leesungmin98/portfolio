// point.js
export class Point {

  
  constructor(index, x, y) {
    var mql = window.matchMedia("screen and (max-width: 768px)");
    if (mql.matches) {
    this.index = index;
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.fieldY = y;
    this.speed = 0.04 + Math.random() * 0.01;
    this.cur = Math.random() * Math.PI * 6; // 시작 각도를 랜덤하게 설정
    this.max = Math.random() * 400 + 10; // 최대 높이를 랜덤하게 설정

  } else {
    this.index = index;
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.fieldY = y;
    this.speed = 0.04 + Math.random() * 0.3;
    this.cur = Math.random() * Math.PI * 6; // 시작 각도를 랜덤하게 설정
    this.max = Math.random() * 400 + 200; // 최대 높이를 랜덤하게 설정
  }
  }

  update() {
    this.cur += this.speed;
    this.y = this.fieldY + Math.sin(this.cur) * this.max;
  }
}