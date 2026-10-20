document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('.custom-video');

        if (video) {
            card.addEventListener('click', () => {
                if (!video.paused) {
                    video.pause();
                } else {
                    document.querySelectorAll('.custom-video').forEach(v => {
                        v.pause();
                    });
                    video.muted = false;
                    video.play().catch(error => {
                        console.log("Autoplay / Play prevented:", error);
                    });
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ดึงรายการเมนูทั้งหมดที่มีคลาส .nav-link-item
    const navItems = document.querySelectorAll('.nav-link-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // ดึง ID ของ Section จาก data-target
            const targetId = item.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // คำนวณตำแหน่งและเลื่อนอย่างนุ่มนวล (Smooth Scroll)
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navigation = document.getElementById('mainNavigation');
    if (!navigation || !window.bootstrap) return;

    navigation.querySelectorAll('a.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            const collapse = window.bootstrap.Collapse.getInstance(navigation);
            if (collapse) collapse.hide();
        });
    });
});