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
    this.speed = 0.04 + Math.random() * 0.0005;
    this.cur = Math.random() * Math.PI * 6; 
    this.max = Math.random() * 200 + 300; 

  } else {
    this.index = index;
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.fieldY = y;
    this.speed = 0.04 + Math.random() * 0.001;
    this.cur = Math.random() * Math.PI * 6; 
    this.max = Math.random() * 100 + 100; 
  }
  }

  update() {
    this.cur += this.speed;
    this.y = this.fieldY + Math.sin(this.cur) * this.max;
  }
}