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


//////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// 스크롤 이동

$(function() {
    const gnbA = $('.mobile-menu > li > a');
    gnbA.click(function() {    
        const target = $(this).attr('href');
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
        e.preventDefault();
    });

    const gnbB = $('.pc-menu > li > a');
    gnbB.click(function() {
        
        const target = $(this).attr('href'); 
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
       e.preventDefault();
    });
});

//////////////////////////////////////////////////////////////////////////////////
// 탑 버튼 
$(function(){
   
    $(window).scroll(function() {
         if ($(this).scrollTop() > 200) {
            $('#top-bt').fadeIn();
         } else {
            $('#top-bt').fadeOut();
         }
    })
   
    $('#top-bt').click(function(e) {
        e.preventDefault(); 
        $('html').animate({ scrollTop:0 }, 300);
    })
});

/////////////////////////////////////////////////////////////////////////////////
