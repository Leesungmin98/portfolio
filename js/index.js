document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const modal = this.querySelector('.description-modal');
        if (modal.style.display === 'none' || modal.style.display === '') {
            modal.style.display = 'block'; // 모달을 보이게 합니다
        } else {
            modal.style.display = 'none'; // 모달을 숨깁니다
        }
        event.stopPropagation(); // 이벤트 버블링 방지
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function(event) {
        this.closest('.description-modal').style.display = 'none'; // 모달을 숨깁니다
        event.stopPropagation(); // 닫기 버튼의 이벤트 버블링 방지
    });
});

// 모달 이외의 영역을 클릭할 때 모든 모달을 숨깁니다
document.addEventListener('click', function(event) {
    if (!event.target.closest('.skill-item')) {
        document.querySelectorAll('.description-modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});
