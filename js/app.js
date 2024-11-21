
// app.js
import { Wave } from './wave.js';

class App {
  constructor() {
    // 캔버스 생성 및 설정
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    // 웨이브 컨테이너에 캔버스 추가
    const waveContainer = document.querySelector('.wave');
    waveContainer.appendChild(this.canvas);

    // 다양한 색상과 특성의 웨이브 생성
    this.waves = [
      new Wave('#1eb6e9', -100, 0.8, 0.2),
      new Wave('#e64aa2', -100, 0.8, 0.1),
      new Wave('#F3FE56', -100, 0.8, 0.1),
    ];

    // 반응형 대응을 위한 리사이즈 이벤트 리스너
    this.resizeHandler = this.resize.bind(this);
    window.addEventListener('resize', this.resizeHandler);

    // 초기화
    this.init();
  }

  init() {
    // 초기 크기 설정
    this.resize();

    // 애니메이션 성능 최적화
    this.lastTime = 0;
    this.fps = 30;
    this.interval = 1000 / this.fps;

    // 애니메이션 루프 시작
    this.animateHandler = this.animate.bind(this);
    requestAnimationFrame(this.animateHandler);
  }

  resize() {
    // 스테이지 크기 계산
    this.stageWidth = document.documentElement.clientWidth;
    this.stageHeight = document.documentElement.clientHeight;

    // 고해상도 디스플레이 대응
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * pixelRatio;
    this.canvas.height = this.stageHeight * pixelRatio;
    this.ctx.scale(pixelRatio, pixelRatio);

    // 각 웨이브 크기 조정
    this.waves.forEach(wave => wave.resize(this.stageWidth, this.stageHeight));
  }

  animate(t) {
    // 프레임 제한 로직
    const currentTime = performance.now();
    const elapsed = currentTime - this.lastTime;

    if (elapsed > this.interval) {
      // 캔버스 초기화
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 웨이브 업데이트 및 그리기
      this.waves.forEach(wave => {
        wave.update(t * 0.002);
        wave.draw(this.ctx);
      });

      // 마지막 프레임 시간 업데이트
      this.lastTime = currentTime;
    }

    // 다음 프레임 요청
    this.animationFrame = requestAnimationFrame(this.animateHandler);
  }

  // 리소스 정리 메서드 추가
  destroy() {
    // 이벤트 리스너 제거
    window.removeEventListener('resize', this.resizeHandler);
    
    // 애니메이션 프레임 취소
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    // 캔버스 제거
    const waveContainer = document.querySelector('.wave');
    if (waveContainer && this.canvas) {
      waveContainer.removeChild(this.canvas);
    }
  }
}

// 앱 초기화
class AppManager {
  static init() {
    let appInstance = null;

    // DOMContentLoaded 이벤트 리스너
    const initApp = () => {
      // 기존 인스턴스 정리
      if (appInstance) {
        appInstance.destroy();
      }

      // 새 인스턴스 생성
      appInstance = new App();
    };

    // 이벤트 리스너 추가
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }

    // 페이지 전환 시 리소스 정리를 위한 이벤트
    window.addEventListener('beforeunload', () => {
      if (appInstance) {
        appInstance.destroy();
      }
    });
  }
}

// 앱 초기화 실행
AppManager.init();