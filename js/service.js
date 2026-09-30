// =============================================
// DEL COMPANY — service.js
// =============================================
document.addEventListener("DOMContentLoaded", () => {
    // Header scroll
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 20);
        }, { passive: true });
    }

    // Mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("open");
            mobileMenu.classList.toggle("open");
        });
        mobileMenu.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                menuToggle.classList.remove("open");
                mobileMenu.classList.remove("open");
            });
        });
    }

    // Reveal
    const revealObserver = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); revealObserver.unobserve(e.target); } }),
        { threshold: 0.10 }
    );
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // Carrossel
    const track = document.getElementById("carrosselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    if (track && prevBtn && nextBtn) {
        let idx = 0;
        const getVisible = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        const update = () => {
            const items = track.querySelectorAll(".carrossel-item");
            const v = getVisible();
            idx = Math.min(idx, Math.max(0, items.length - v));
            const w = track.parentElement.offsetWidth / v;
            track.style.transform = "translateX(-" + (idx * w) + "px)";
        };
        prevBtn.addEventListener("click", () => { idx = Math.max(0, idx - 1); update(); });
        nextBtn.addEventListener("click", () => {
            const items = track.querySelectorAll(".carrossel-item");
            idx = Math.min(Math.max(0, items.length - getVisible()), idx + 1);
            update();
        });
        window.addEventListener("resize", update, { passive: true });
    }
});
