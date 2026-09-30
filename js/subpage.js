// DEL COMPANY — subpage.js (compartilhado em todas as subpáginas)
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 20);
        }, { passive: true });
    }
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
    const revealObserver = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); revealObserver.unobserve(e.target); } }),
        { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // Highlight active sidenav link on scroll
    const sections = document.querySelectorAll("section[id], div[id]");
    const navLinks = document.querySelectorAll(".sidenav-list a");
    if (sections.length && navLinks.length) {
        const scrollObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    const active = document.querySelector(`.sidenav-list a[href="#${entry.target.id}"]`);
                    if (active) active.classList.add("active");
                }
            });
        }, { threshold: 0.4 });
        sections.forEach(s => scrollObs.observe(s));
    }
});
