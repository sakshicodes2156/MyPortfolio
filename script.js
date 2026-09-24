// =========================
// Smooth Navigation
// =========================

document.querySelectorAll('nav a').forEach(function (link) {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

    });

});


// =========================
// Header Shadow on Scroll
// =========================

window.addEventListener('scroll', function () {

    const header = document.querySelector('.header');

    if (window.scrollY > 30) {
        header.style.boxShadow = '0 5px 25px rgba(40, 30, 80, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }

});


// =========================
// Reveal Sections on Scroll
// =========================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add('show-section');
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});

