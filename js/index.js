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

    ///////////////////////////////////////////////////////////

    
    

});
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

    // 모달 열기
    function openModal(modalClass) {
        $('.close-modal').css('display', 'block');
        $(modalClass).css('bottom', '0');
        $('body').css('overflow', 'hidden');
        $('#top-bt').fadeOut(); 
    }

    // 모달 닫기
    function closeModal() {
        $('.close-modal').css('display', 'none');
        $('.info-modal-box, .character-modal-box, .logo-modal-box, .mobile-modal-box, .package-modal-box, .detail-modal-box, .banner-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto');
        
       
        if ($(window).scrollTop() > 200) {
            $('#top-bt').fadeIn();
        }
    }

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
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
        e.preventDefault();
    });

    const gnbB = $('.pc-menu > li > a');
    gnbB.click(function(e) {
        const target = $(this).attr('href');
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
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

///////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const paperShip = document.querySelector(".paper-ship");

   
    let time = 0;
    const floatAmplitude = 10;  
    const rotateAmplitude = 5;  
    const floatSpeed = 0.005;   

 
    function animateShip() {
        
        const floatY =
            Math.sin(time * floatSpeed) * floatAmplitude +
            Math.sin(time * floatSpeed * 1.5) * (floatAmplitude * 0.3);

        const rotation =
            Math.sin(time * floatSpeed) * rotateAmplitude +
            Math.sin(time * floatSpeed * 2) * (rotateAmplitude * 0.2);

     
        paperShip.style.transform = `
            translateY(${floatY}px)
            rotate(${rotation}deg)
        `;

        time += 1;
        requestAnimationFrame(animateShip);
    }

 
    animateShip();
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

