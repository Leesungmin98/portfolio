$(function() {
/// 스킬 

    // 모달 열기
    $('.skill-item').click(function() {
        var modalClass = $(this).attr('class').split(' ')[1] + '-modal';
        $('.' + modalClass).removeClass('hidden');
    });

    // 닫기 버튼
    $('.close').click(function() {
        $(this).closest('.modal').addClass('hidden');
    });
});


//////////////////////////////////////////////////////////////////////////////
// 포트폴리오-디자인

$(document).ready(function() {
    
    // 클릭 이벤트
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

    // 닫기 버튼
    $('.close-modal').click(function() {
        closeModal();
    });

    // 모달 열기
    function openModal(modalClass) {
        $('.close-modal').css('display', 'block');
        $(modalClass).css('bottom', '0');
        $('body').css('overflow', 'hidden');
    }

    // 모달 닫기
    function closeModal() {
        $('.close-modal').css('display', 'none');
        $('.info-modal-box, .logo-modal-box, .mobile-modal-box, .package-modal-box, .detail-modal-box, .banner-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto');
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// 햄버거 메뉴
$(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#fullscreen').toggleClass('open');

        // PC 버전이 아닌 경우에만 body의 오버플로우 스타일을 변경
        if (!isPcVersion()) {
            if (!$('#fullscreen').hasClass('open')) {
                $('body').css('overflow', 'auto');
            } else {
                $('body').css('overflow', 'hidden');
            }
        }
    });

    // PC 버전인지 확인하는 함수
    function isPcVersion() {
        return window.innerWidth >= 768;
    }

    // mobile-menu의 링크를 클릭했을 때 fullscreen을 닫음
    $('.mobile-menu a').click(function() {
        $('#toggle').removeClass('active');
        $('#fullscreen').removeClass('open');
        $('body').css('overflow', 'auto'); // body의 overflow를 다시 auto로 설정
    });
});

///////////////////////////////////////////////////////////////////////
// 스크롤 이동

$(function() {
    const gnbA = $('.mobile-menu > li > a');
    gnbA.click(function() {
        
        const target = $(this).attr('href'); // 메뉴를 클릭했을 때 해당 섹션의 ID (예: #m2)
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
        e.preventDefault();
    });

    const gnbB = $('.pc-menu > li > a');
    gnbB.click(function() {
        
        const target = $(this).attr('href'); // 메뉴를 클릭했을 때 해당 섹션의 ID (예: #m2)
        $('html').animate({ scrollTop: $(target).offset().top }, 1000);
        e.preventDefault();
    });
});

//////////////////////////////////////////////////////////////////////////////////
// 탑 버튼 
$(function(){
    // scrollTop() 의 위치가 200을 초과하면, top-bt가 서서히 드러남
    // 200을 초과하지 않으면 서서히 사라짐.
    $(window).scroll(function() { // 스크롤이 되면,
         if ($(this).scrollTop() > 200) {
            $('#top-bt').fadeIn();
         } else {
            $('#top-bt').fadeOut();
         }
    })
    // top-bt를 클릭하면 scollTop의 위치가 0으로 부드럽게 문서가 이동
    $('#top-bt').click(function(e) {
        e.preventDefault(); // 버블링 금지
        $('html').animate({ scrollTop:0 }, 300);
    })
});