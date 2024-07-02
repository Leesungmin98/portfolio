$(function() {
    // 각 스킬 항목을 클릭하면 해당 모달을 엽니다.
    $('.skill-item').click(function() {
        var modalClass = $(this).attr('class').split(' ')[1] + '-modal';
        $('.' + modalClass).removeClass('hidden');
    });

    // 닫기 버튼을 클릭하면 모든 모달을 닫습니다.
    $('.close').click(function() {
        $(this).closest('.modal').addClass('hidden');
    });
});


//////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    
    $('.info-box').click(function() {
        $('.close-modal').css('display', 'block');
        // po-modal-box를 화면에 보이도록 함
        $('.info-modal-box').css('bottom', '0');
        $('body').css('overflow', 'hidden'); // 스크롤 금지
    });
    $('.close-modal').click(function() {
        $('.close-modal').css('display', 'none');
        // po-modal-box를 화면 아래로 내리는 애니메이션
        $('.info-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto'); // 스크롤 허용
    });


    $('.logo-box').click(function() {
        // po-modal-box를 화면에 보이도록 함
        $('.logo-modal-box').css('bottom', '0');
        $('body').css('overflow', 'hidden'); // 스크롤 금지
    });
    $('.close-modal').click(function() {
        // po-modal-box를 화면 아래로 내리는 애니메이션
        $('.logo-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto'); // 스크롤 허용
    });

    $('.mobile-box').click(function() {
        // po-modal-box를 화면에 보이도록 함
        $('.mobile-modal-box').css('bottom', '0');
        $('body').css('overflow', 'hidden'); // 스크롤 금지
    });
    $('.close-modal').click(function() {
        // po-modal-box를 화면 아래로 내리는 애니메이션
        $('.mobile-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto'); // 스크롤 허용
    });

    $('.package-box').click(function() {
        // po-modal-box를 화면에 보이도록 함
        $('.mobile-modal-box').css('bottom', '0');
        $('body').css('overflow', 'hidden'); // 스크롤 금지
    });
    $('.close-modal').click(function() {
        // po-modal-box를 화면 아래로 내리는 애니메이션
        $('.package-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto'); // 스크롤 허용
    });

    $('.detail-box').click(function() {
        $('.close-modal').css('display', 'block');
        // po-modal-box를 화면에 보이도록 함
        $('.mobile-modal-box').css('bottom', '0');
        $('body').css('overflow', 'hidden'); // 스크롤 금지
    });
    $('.close-modal').click(function() {
        $('.close-modal').css('display', 'none');
        // po-modal-box를 화면 아래로 내리는 애니메이션
        $('.detail-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto'); // 스크롤 허용
    });

    $('.banner-box').click(function() {
        // po-modal-box를 화면에 보이도록 함
        $('.banner-modal-box').css('bottom', '0');
        $('body').css('overflow', 'hidden'); // 스크롤 금지
    });
    $('.close-modal').click(function() {
        // po-modal-box를 화면 아래로 내리는 애니메이션
        $('.banner-modal-box').css('bottom', '-100%');
        $('body').css('overflow', 'auto'); // 스크롤 허용
    });
});


////////////////////////////////////////////////////////////////////

