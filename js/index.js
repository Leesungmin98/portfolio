// $(function() {
// /// 스킬 

    
//     $(document).ready(function() {
        
//         $('.skill-item').click(function() {
//             var modalClass = $(this).attr('class').split(' ')[1] + '-modal';
           
//             $('.modal').addClass('hidden');
            
//             $('.' + modalClass).removeClass('hidden');
//         });
    
        
//         $('.close').click(function() {
//             $(this).closest('.modal').addClass('hidden');
//         });
    
//     });

// });
// // 포트폴리오-디자인

// $(document).ready(function() {
    
  
//      // 포트폴리오-디자인
//      $('.info-box').click(function() {
//         openModal('.info-modal-box');
//     });

//     $('.logo-box').click(function() {
//         openModal('.logo-modal-box');
//     });

//     $('.mobile-box').click(function() {
//         openModal('.mobile-modal-box');
//     });

//     $('.package-box').click(function() {
//         openModal('.package-modal-box');
//     });

//     $('.detail-box').click(function() {
//         openModal('.detail-modal-box');
//     });

//     $('.banner-box').click(function() {
//         openModal('.banner-modal-box');
//     });

//     $('.character-box').click(function() {
//         openModal('.character-modal-box');
//     });

//     // 닫기 버튼
//     $('.close-modal').click(function() {
//         closeModal();
//     });

//     // 모달 열기
//     function openModal(modalClass) {
//         $('.close-modal').css('display', 'block');
//         $(modalClass).css('bottom', '0');
//         $('body').css('overflow', 'hidden');
//         $('#top-bt').fadeOut(); 
//     }

//     // 모달 닫기
//     function closeModal() {
//         $('.close-modal').css('display', 'none');
//         $('.info-modal-box, .character-modal-box, .logo-modal-box, .mobile-modal-box, .package-modal-box, .detail-modal-box, .banner-modal-box').css('bottom', '-100%');
//         $('body').css('overflow', 'auto');
        
       
//         if ($(window).scrollTop() > 200) {
//             $('#top-bt').fadeIn();
//         }
//     }

//     // 햄버거 메뉴
//     $('#toggle').click(function() {
//         $(this).toggleClass('active');
//         $('#fullscreen').toggleClass('open');
        
//         if (!isPcVersion()) {
//             if (!$('#fullscreen').hasClass('open')) {
//                 $('body').css('overflow', 'auto');
//             } else {
//                 $('body').css('overflow', 'hidden');
//             }
//         }
//     });

//     // PC 버전
//     function isPcVersion() {
//         return window.innerWidth >= 768;
//     }

//     $('.mobile-menu a').click(function() {
//         $('#toggle').removeClass('active');
//         $('#fullscreen').removeClass('open');
//         $('body').css('overflow', 'auto');
//     });

//     // 스크롤 이동
//     const gnbA = $('.mobile-menu > li > a');
//     gnbA.click(function(e) {
//         const target = $(this).attr('href');
//         $('html').animate({ scrollTop: $(target).offset().top }, 1000);
//         e.preventDefault();
//     });

//     const gnbB = $('.pc-menu > li > a');
//     gnbB.click(function(e) {
//         const target = $(this).attr('href');
//         $('html').animate({ scrollTop: $(target).offset().top }, 1000);
//         e.preventDefault();
//     });

//     // 탑 버튼
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 200) {
//             $('#top-bt').fadeIn();
//         } else {
//             $('#top-bt').fadeOut();
//         }
//     });

//     $('#top-bt').click(function(e) {
//         e.preventDefault(); 
//         $('html').animate({ scrollTop:0 }, 300);
//     });
// });

$(function() {
    // 변수 캐싱
    const $modals = $('.modal');
    const $closeModalBtn = $('.close');
    const $topBt = $('#top-bt');
    const $body = $('body');
    const $fullscreen = $('#fullscreen');
    const $toggle = $('#toggle');
    const $gnbA = $('.mobile-menu > li > a');
    const $gnbB = $('.pc-menu > li > a');
    const $closeModal = $('.close-modal');

    // 스킬 모달 열기
    $('.skill-item').click(function() {
        const modalClass = $(this).attr('class').split(' ')[1] + '-modal';
        $modals.addClass('hidden');
        $('.' + modalClass).removeClass('hidden');
    });

    // 모달 닫기
    $closeModalBtn.click(function() {
        $(this).closest('.modal').addClass('hidden');
    });

    // 포트폴리오 모달 열기
    $('.info-box, .logo-box, .mobile-box, .package-box, .detail-box, .banner-box, .character-box').click(function() {
        const modalClass = '.' + $(this).attr('class').split('-')[0] + '-modal-box';
        openModal(modalClass);
    });

    // 모달 열기
    function openModal(modalClass) {
        $closeModal.css('display', 'block');
        $(modalClass).css('bottom', '0');
        $body.css('overflow', 'hidden');
        $topBt.fadeOut();
    }

    // 모달 닫기
    function closeModal() {
        $closeModal.css('display', 'none');
        $('.info-modal-box, .character-modal-box, .logo-modal-box, .mobile-modal-box, .package-modal-box, .detail-modal-box, .banner-modal-box').css('bottom', '-100%');
        $body.css('overflow', 'auto');
        if ($(window).scrollTop() > 200) {
            $topBt.fadeIn();
        }
    }

    // 닫기 버튼 클릭 시
    $closeModal.click(function() {
        closeModal();
    });

    // 햄버거 메뉴
    $toggle.click(function() {
        $(this).toggleClass('active');
        $fullscreen.toggleClass('open');
        if (!isPcVersion()) {
            $body.css('overflow', $fullscreen.hasClass('open') ? 'hidden' : 'auto');
        }
    });

    // PC 버전 체크
    function isPcVersion() {
        return window.innerWidth >= 768;
    }

    // 메뉴 클릭 시 스크롤 이동
    $gnbA.add($gnbB).click(function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
    });

    // 탑 버튼 스크롤 이벤트
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $topBt.fadeIn();
        } else {
            $topBt.fadeOut();
        }
    });

    // 탑 버튼 클릭 시
    $topBt.click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 300);
    });
});
