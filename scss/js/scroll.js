document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    let list = gsap.utils.toArray('.design .d-box');

    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.design ',
            pin: true,
            scrub: 1,
            start: 'center center',
            end: '200%',
            markers: true
        }
    });
});

//////////////////////////////////////

// 모달 열기
function openModal(modalClass) {
    $('.close-modal').css('display', 'block');
    $(modalClass).css('bottom', '0');
    $('body').css('overflow', 'hidden');
    $('#top-bt').fadeOut();

    // 특정 타겟 요소 숨기기
    $('.logo-btn-screen').css('display', 'none');
}

// 모달 닫기
function closeModal() {
    $('.close-modal').css('display', 'none');
    $('.info-modal-box, .character-modal-box, .logo-modal-box, .mobile-modal-box, .package-modal-box, .detail-modal-box, .banner-modal-box').css('bottom', '-100%');
    $('body').css('overflow', 'auto');

    // 특정 타겟 요소 보이기
    $('.logo-btn-screen').css('display', 'block');

    if ($(window).scrollTop() > 200) {
        $('#top-bt').fadeIn();
    }
}


