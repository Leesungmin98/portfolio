$(function() {
/// 스킬 

    
    $(document).ready(function() {
        
        $('.skill-item').click(function() {
            var modalClass = $(this).attr('class').split(' ')[1] + '-modal';
           
            $('.modal').addClass('hidden');
            
            $('.' + modalClass).removeClass('hidden');
        });
    
        
        $('.close').click(function() {
            $(this).closest('.modal').addClass('hidden');
        });
    
    });
});
//////////////////////////////////////////////

// 포트폴리오-디자인

$(document).ready(function() {
     // 포트폴리오-디자인
     $('.info-box').click(function() {
        openModal('.info-modal-box');
    });

    $('.logo-box').click(function() {
        openModal('.logo-modal-box');
    });

    $('.mobile-box').click(function() {
        openModal('.mobile-modal-box');
    });

    $('.package-box').click(function() {
        openModal('.package-modal-box');
    });

    $('.detail-box').click(function() {
        openModal('.detail-modal-box');
    });

    $('.banner-box').click(function() {
        openModal('.banner-modal-box');
    });

    $('.character-box').click(function() {
        openModal('.character-modal-box');
    });

    // 닫기 버튼
    $('.close-modal').click(function() {
        closeModal();
    });
/////////////////////////////////////////////////////////////////

// 특정 모달 열기 함수
function openModal(modalClass) {
    // 모든 모달을 숨김 (하단으로 이동)
    $('.po-modal-box').css('bottom', '-100%');
    
    // 닫기 버튼 보이기
    $('.close-modal').css('display', 'block');
    
    // 선택한 모달 열기 (하단에서 위로 슬라이드)
    $(modalClass).css({
        'bottom': '0'
    });
    
    // 스크롤 방지 및 스크롤바 공간 조정
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    $('html, body').css({
        'overflow': 'hidden',
        'padding-right': `${scrollbarWidth}px`
    });
    
    // 로고 버튼 숨기기
    $('.logo-btn-screen').css('display', 'none');
    $('#top-bt').css('display', 'none');

}

// 모달 닫기 함수
function closeModal() {
    // 모든 모달 하단으로 슬라이드
    $('.po-modal-box').css({
        'bottom': '-100%'
    });
    
    // 닫기 버튼 숨기기 (0.5초 후)
    setTimeout(function () {
        $('.close-modal').css('display', 'none');
    }, 100);
    
    // 스크롤 복구
    $('html, body').css({
        'overflow': 'auto',
        'padding-right': '0'
    });
    
    // 로고 버튼 다시 보이기
    $('.logo-btn-screen').css('display', 'block');
    $('#top-bt').css('display', 'block');
    
}

// 각 박스 클릭 시 해당 모달 열기 이벤트 리스너
$('.box-banner').on('click', function() {
    openModal('.banner-modal-box');
});

$('.box-detail').on('click', function() {
    openModal('.detail-modal-box');
});

$('.box-package').on('click', function() {
    openModal('.package-modal-box');
});

$('.box-logo').on('click', function() {
    openModal('.logo-modal-box');
});

$('.box-mobile').on('click', function() {
    openModal('.mobile-modal-box');
});

$('.box-info').on('click', function() {
    openModal('.info-modal-box');
});

$('.box-character').on('click', function() {
    openModal('.character-modal-box');
});

// 닫기 버튼 클릭 시 모달 닫기
$('.po-modal-box .close-modal').on('click', closeModal);

/////////////////////
    // 햄버거 메뉴
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#fullscreen').toggleClass('open');
        
        if (!isPcVersion()) {
            if (!$('#fullscreen').hasClass('open')) {
                $('body').css('overflow', 'auto');
            } else {
                $('body').css('overflow', 'hidden');
            }
        }
    });

    // PC 버전
    function isPcVersion() {
        return window.innerWidth >= 768;
    }

    $('.mobile-menu a').click(function() {
        $('#toggle').removeClass('active');
        $('#fullscreen').removeClass('open');
        $('body').css('overflow', 'auto');
    });

    // 스크롤 이동
    const gnbA = $('.mobile-menu > li > a');
    gnbA.click(function(e) {
        const target = $(this).attr('href');
        $('html').animate({ scrollTop: $(target).offset().top - 80 }, 1000);
        e.preventDefault();
    });

    const gnbB = $('.pc-menu > li > a');
    gnbB.click(function(e) {
        const target = $(this).attr('href');
        $('html').animate({ scrollTop: $(target).offset().top - 180 }, 1000);
        e.preventDefault();
    });

    // 탑 버튼
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#top-bt').fadeIn();
        } else {
            $('#top-bt').fadeOut();
        }
    });

    $('#top-bt').click(function(e) {
        e.preventDefault(); 
        $('html').animate({ scrollTop:0 }, 300);
    });
});

document.querySelectorAll('.inner-box1 img, .inner-box2 img, .inner-box3 img, .inner-box4 img').forEach((img) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';  
        } else {
          entry.target.style.animationPlayState = 'paused';  
        }
      });
    });

    observer.observe(img); 
  });
  
  
  ////////

  document.addEventListener("DOMContentLoaded", () => {
    const clouds = document.querySelectorAll(".cloud");
    
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    
    window.addEventListener("resize", () => {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        clouds.forEach(cloud => resetCloud(cloud, false));
    });

    clouds.forEach(cloud => {
        cloud.style.position = 'absolute';
        resetCloud(cloud, true);
        animateCloud(cloud);
    });

    function resetCloud(cloud, withAnimation) {
        const minTop = screenHeight * 0.2;
        const maxTop = screenHeight * 0.4;
        const newTop = Math.random() * (maxTop - minTop) + minTop;
        const isLeftStart = Math.random() < 0.5;
        
       
        if (!withAnimation) {
            cloud.style.transition = 'none';
        }
        
        cloud.dataset.direction = isLeftStart ? "left" : "right";
        cloud.style.top = `${newTop}px`;
        
        
        if (isLeftStart) {
            cloud.style.left = `-${cloud.offsetWidth + 50}px`; 
        } else {
            cloud.style.left = `${screenWidth + 50}px`; 
        }

        if (!withAnimation) {
            
            cloud.offsetHeight;
            cloud.style.transition = '';
        }
    }

    function animateCloud(cloud) {
        const speed = Math.random() * (20 - 10) + 50; 
        let start = null;
        let initialPosition = parseInt(cloud.style.left);

        function move(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const direction = cloud.dataset.direction === "left" ? 1 : -1;
            
           
            const distance = (speed * progress) / 1000;
            const currentPosition = initialPosition + (direction * distance);
            
            cloud.style.left = `${currentPosition}px`;

            
            if ((direction === 1 && currentPosition > screenWidth + 100) || 
                (direction === -1 && currentPosition < -cloud.offsetWidth - 100)) {
                
                const isMobile = screenWidth <= 768;
                const maxDelay = isMobile ? 300 : 600; 
                const randomDelay = Math.random() * maxDelay;

                
                setTimeout(() => {
                    resetCloud(cloud, true);
                    initialPosition = parseInt(cloud.style.left);
                    start = null;
                    requestAnimationFrame(move);
                }, randomDelay);
                return;
            }

            requestAnimationFrame(move);
        }

        requestAnimationFrame(move);
    }
});

///////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const paperShip = document.querySelector(".paper-ship");
    
   
    class PaperShipAnimation {
        constructor(element) {
            this.element = element;
            this.time = 0;
            this.params = this.getAnimationParams();
            
            
            this.animate = this.animate.bind(this);
            
            this.resizeHandler = this.handleResize.bind(this);
            window.addEventListener('resize', this.resizeHandler);
            
          
            this.start();
        }
        
       
        getAnimationParams() {
            const isMobile = window.innerWidth <= 768;
            return {
                floatAmplitude: isMobile ? 0.1 : 1,
                floatSpeed: isMobile ? 0.005 : 0.004,
                diveDepth: 5,
                riseSpeed: isMobile ? 0.019 : 0.029
            };
        }
        
       
        handleResize() {
            this.params = this.getAnimationParams();
        }
        
        
        animate() {
            const { 
                floatAmplitude, 
                floatSpeed, 
                diveDepth, 
                riseSpeed 
            } = this.params;

          
            const floatY = Math.sin(this.time * floatSpeed) * floatAmplitude;
            const diveY = Math.sin(this.time * riseSpeed) * diveDepth;
            const finalY = floatY + diveY;
            
          
            const rotation = Math.sin(this.time * floatSpeed) * 5;
            
          
            this.element.style.transform = `
                translateY(${finalY}px)
                rotate(${rotation}deg)
            `;
            
           
            this.time += 1;
            
            
            this.animationFrame = requestAnimationFrame(this.animate);
        }
        
      
        start() {
            this.animate();
        }
        
       
        destroy() {
            cancelAnimationFrame(this.animationFrame);
            window.removeEventListener('resize', this.resizeHandler);
        }
    }

  
    const shipAnimation = new PaperShipAnimation(paperShip);


    window.addEventListener('beforeunload', () => {
        shipAnimation.destroy();
    });
});
/////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item"); 

    skillItems.forEach(skillItem => {
        const icon = skillItem.querySelector(".icon");  
        const overlay = skillItem.querySelector(".overlay");

        skillItem.addEventListener("click", () => {
           
            icon.classList.add("explode");
            overlay.classList.add("explode");

           
            setTimeout(() => {
                icon.classList.remove("explode");
                overlay.classList.remove("explode");

              
                skillItem.classList.add("clicked");

               
                setTimeout(() => {
                    
                    skillItem.classList.remove("clicked");
                }, 1000); 
            }, 1500); 
        });
    });
});

/////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".inner-box1 img, .inner-box2 img, .inner-box3 img, .inner-box4 img");
  
    const observerOptions = {
      root: null, 
      threshold: 0.01, 
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "po-move-js 70s ease-in-out infinite";
        } else {
          entry.target.style.animation = "none";
        }
      });
    }, observerOptions);
  
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  });
  
  //////////////////////////////////




document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // 뷰포트를 기준으로
        rootMargin: '0px',
        threshold: 0.4 // 요소가 10% 이상 보이면 감지
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 랜덤 딜레이 설정
                const randomDelay = Math.random() * 0.5; // 0 ~ 1.5초 사이 랜덤
                entry.target.style.transitionDelay = `${randomDelay}s`;

                // 화면에 보일 때 애니메이션 실행
                entry.target.classList.add('visible');
            } else if (entry.boundingClientRect.top > 0) {
                // 화면에서 사라지면 애니메이션 리셋
                entry.target.classList.remove('visible');

                // 딜레이 초기화 (옵션)
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, observerOptions);

    // 감지 대상 추가
    const hiddenElements = document.querySelectorAll('.hidden1');
    hiddenElements.forEach(el => observer.observe(el));
});
///////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // 뷰포트를 기준으로
        rootMargin: '0px',
        threshold: 0.03 // 요소가 10% 이상 보이면 감지
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 랜덤 딜레이 설정
                const randomDelay = Math.random() * 0.5; // 0 ~ 1.5초 사이 랜덤
                entry.target.style.transitionDelay = `${randomDelay}s`;

                // 화면에 보일 때 애니메이션 실행
                entry.target.classList.add('visible');
            } else if (entry.boundingClientRect.top > 0) {
                // 화면에서 사라지면 애니메이션 리셋
                entry.target.classList.remove('visible');

                // 딜레이 초기화 (옵션)
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 대상 선택
    const boxes = document.querySelectorAll('.box-ani');
    boxes.forEach(box => observer.observe(box));
});


/////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Portfolio 애니메이션
    const list = gsap.utils.toArray('.portfolio2 li');
    const listA = gsap.utils.toArray('.portfolio2 .a');
    const listB = gsap.utils.toArray('.portfolio2 .b');
    const listC = gsap.utils.toArray('.portfolio2 .c');

    gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.portfolio2',
            pin: true,
            scrub: 1,
            start: 'center center',
            end: '200%',
            
        }
    });

    gsap.to(listA, {
        y: 50,
        rotation: 10,
        scrollTrigger: {
            trigger: '.portfolio2',
            scrub: 2,
            end: '200%'
        }
    });

    gsap.to(listB, {
        y: -50,
        rotation: 20,
        scrollTrigger: {
            trigger: '.portfolio2',
            scrub: 2,
            end: '200%'
        }
    });

    gsap.to(listC, {
        y: -50,
        x: 20,
        rotation: -10,
        scrollTrigger: {
            trigger: '.portfolio2',
            scrub: 2,
            end: '200%'
        }
    });

    // Visual 애니메이션
    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual .imgBox3',
            start: '50% 50%',
            end: '280%',
            scrub: 1,
            pin: true,
            markers: false
        }
    })
    .fromTo('.visual .imgBox3 img', 
        { transform: 'rotateY(-40deg) rotateX(50deg)', width: '100%', opacity: 0 },
        { transform: 'rotateY(0deg) rotateX(0deg)', width: '100%', opacity: 1 },
        0
    );

});

