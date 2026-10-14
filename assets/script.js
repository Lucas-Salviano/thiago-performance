// Main JavaScript File

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        const setMenuOpen = (open) => {
            navMenu.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', open);
            menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        };

        menuToggle.addEventListener('click', () => {
            setMenuOpen(!navMenu.classList.contains('active'));
        });

        // Close menu when clicking links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setMenuOpen(false);
            });
        });
    }

    // Header Shadow on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll Offset for Fixed Header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});