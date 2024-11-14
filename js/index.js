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
            cloud.style.left = `-${cloud.offsetWidth + 50}px`; // 여유 공간 추가
        } else {
            cloud.style.left = `${screenWidth + 50}px`; // 여유 공간 추가
        }

        if (!withAnimation) {
            
            cloud.offsetHeight;
            cloud.style.transition = '';
        }
    }

    function animateCloud(cloud) {
        const speed = Math.random() * (20 - 10) + 50; // 속도 범위 조정
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
                const maxDelay = isMobile ? 300 : 600; // 딜레이 시간 줄임
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
    const skillItems = document.querySelectorAll(".skill-item");  // .skill-item 클래스를 가진 모든 요소를 선택

    skillItems.forEach(skillItem => {
        const icon = skillItem.querySelector(".icon");  // .icon 클래스를 가진 요소를 선택
        const overlay = skillItem.querySelector(".overlay");

        skillItem.addEventListener("click", () => {
            // '펑!' 효과를 위해 .explode 추가
            icon.classList.add("explode");
            overlay.classList.add("explode");

            // 0.3초 후에 이미지와 오버레이를 다시 보이게 설정
            setTimeout(() => {
                icon.classList.remove("explode");
                overlay.classList.remove("explode");

                // 부드럽게 나타나게 하기 위해 클릭 상태를 활성화
                skillItem.classList.add("clicked");

                // 다시 보이게 하기 위한 타이밍 설정
                setTimeout(() => {
                    // 부드럽게 나타나는 효과
                    skillItem.classList.remove("clicked");
                }, 1000); // 부드럽게 나타나기 위한 0.5초 지연
            }, 1500); // 0.3초 후에 '펑!' 효과 종료 후 나타나기 시작
        });
    });
});

/////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".skill-item");

    // 아이콘이 상하좌우로 흔들리는 애니메이션 함수
    function animateIcon(icon) {
        // 무작위로 이동할 x, y 좌표 (-10px에서 10px 사이)
        const randomX = Math.random() * 11 - 10;
        const randomY = Math.random() * 11 - 10;

        // 아이콘에 적용할 transform 스타일
        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        icon.style.transition = `transform 0.5s ease-in-out`;

        // 0.5초 후에 다시 애니메이션 반복
        setTimeout(() => animateIcon(icon), 500);
    }

    // 모든 아이콘에 애니메이션 적용
    icons.forEach(icon => animateIcon(icon));
});