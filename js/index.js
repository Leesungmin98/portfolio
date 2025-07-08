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

function openModal(modalClass) {
    
    $('.po-modal-box').css('bottom', '-100%');
    
   
    $('.close-modal').css('display', 'block');
    
    
    $(modalClass).css({
        'bottom': '0'
    });
    
    
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    $('html, body').css({
        'overflow': 'hidden',
        'padding-right': `${scrollbarWidth}px -10px`
    });
    
  
    $('.logo-btn-screen').css('display', 'none');
    $('#top-bt').css('display', 'none');

}

// 모달 닫기 함수
function closeModal() {
    
    $('.po-modal-box').css({
        'bottom': '-100%'
    });
    
    
    setTimeout(function () {
        $('.close-modal').css('display', 'none');
    }, 100);
    
    
    $('html, body').css({
        'overflow': 'auto',
        'padding-right': '0'
    });
    
   
    $('.logo-btn-screen').css('display', 'block');
    $('#top-bt').css('display', 'block');
    
}


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

    
    const gnbA = $('.mobile-menu > li > a');
    gnbA.click(function(e) {
        const target = $(this).attr('href');
    
        if (target === '#aboutMe') { 
            $('html, body').animate({ scrollTop: $(target).offset().top - 450 }, 1000);
        } else {
            $('html, body').animate({ scrollTop: $(target).offset().top - 80 }, 1000);
        }
    
        e.preventDefault();
    });

    const gnbB = $('.pc-menu > li > a');
    gnbB.click(function(e) {
        const target = $(this).attr('href');

        if (target === '#aboutMe') {
            $('html').animate({ scrollTop: $(target).offset().top - 100 }, 1000);
        } else {
            $('html').animate({ scrollTop: $(target).offset().top - 180 }, 1000);
        }
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
  
  
///////////////////////////////////////////////////////////


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
  
////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const randomDelay = Math.random() * 0.5; 
                entry.target.style.transitionDelay = `${randomDelay}s`;

                
                entry.target.classList.add('visible1');
            } else if (entry.boundingClientRect.top > 0) {
                
                entry.target.classList.remove('visible1');

                
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, observerOptions);

   
    const hiddenElements = document.querySelectorAll('.hidden01');
    hiddenElements.forEach(el => observer.observe(el));
});


///////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.4 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                const randomDelay = Math.random() * 0.5; // 0 ~ 1.5초 사이 랜덤
                entry.target.style.transitionDelay = `${randomDelay}s`;

                
                entry.target.classList.add('visible');
            } else if (entry.boundingClientRect.top > 0) {
              
                entry.target.classList.remove('visible');

                
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, observerOptions);

    
    const hiddenElements = document.querySelectorAll('.hidden1');
    hiddenElements.forEach(el => observer.observe(el));
});
///////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.03 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
             
                const randomDelay = Math.random() * 0.5; // 
                entry.target.style.transitionDelay = `${randomDelay}s`;

                
                entry.target.classList.add('visible');
            } else if (entry.boundingClientRect.top > 0) {
                
                entry.target.classList.remove('visible');

                
                entry.target.style.transitionDelay = '0s';
            }
        });
    }, observerOptions);

    
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
            end: '500px',
 
            scrub: 1,
            pin: true,
            markers: true
        }
    })
    .fromTo('.visual .imgBox3 img', 
        { transform: 'rotateY(-40deg) rotateX(50deg)', width: '100%', opacity: 0 },
        { transform: 'rotateY(0deg) rotateX(0deg)', width: '100%', opacity: 1 },
        0
    );
    
    
});

///////////////////////////////////

$(document).mousemove(function (event) {
    $('.eye').each(function () {
        const eye = $(this);
        const inner = eye.find('.inner');

       
        const eyeCenterX = eye.offset().left + eye.width() / 2;
        const eyeCenterY = eye.offset().top + eye.height() / 2;

       
        const dx = event.pageX - eyeCenterX;
        const dy = event.pageY - eyeCenterY;

        
        const angle = Math.atan2(dy, dx);

       
        const radiusX = (eye.width() / 2) - (inner.width() / 1.5);
        const radiusY = (eye.height() / 2) - (inner.height() / 1.5);

        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        
        inner.css({
            left: `${x + eye.width() / 2 - inner.width() / 20}px`,
            top: `${y + eye.height() / 2 - inner.height() / 20}px`,
        });
    });
});


////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const polyline = document.querySelector('.drawing_line_polyline');
    const circle = document.querySelector('.drawing_line_circle');

    let points = [];
    const total = 12;
    const gap = 30;
    let debounceRemoveLine;
    let debounceCounter = 0;

    const pointer = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        tx: 0,
        ty: 0,
        dist: 0,
        scale: 1,
        speed: 2,
        circRadius: 8,
        updateCoords() {
            if (this.x !== 0) {
                this.dist = Math.abs((this.x - this.tx) + (this.y - this.ty));
                this.scale = Math.max(this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1, 0.25);
                this.tx += (this.x - this.tx) / this.speed;
                this.ty += (this.y - this.ty) / this.speed;
            }
        }
    };

    window.addEventListener('mousemove', (e) => {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        debounceCounter = 0;
        drawLine();

        clearTimeout(debounceRemoveLine);
        debounceRemoveLine = setTimeout(() => {
            debounceCounter = 12;
            drawLine();
        }, 80);
    });

    window.addEventListener('mousedown', () => {
        pointer.circRadius = 6;
        drawLine();
    });

    window.addEventListener('mouseup', () => {
        pointer.circRadius = 8;
        drawLine();
    });

    function drawLine() {
        pointer.updateCoords();

        points.push({ x: pointer.tx, y: pointer.ty });
        while (points.length > total) {
            points.shift();
            if (points.length > gap) {
                for (let i = 0; i < 5; i++) {
                    points.shift();
                }
            }
        }

        const pointsArr = points.map(point => `${point.x},${point.y}`);
        polyline.setAttribute('points', pointsArr.join(' '));

        circle.setAttribute('cx', pointer.x);
        circle.setAttribute('cy', pointer.y);
        circle.setAttribute('r', pointer.scale * pointer.circRadius);

        if (debounceCounter > 0) {
            debounceCounter--;
            requestAnimationFrame(drawLine);
        }
    }
});

//////////////////////////////////////

