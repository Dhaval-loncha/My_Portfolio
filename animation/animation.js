// for heading text

// Detect scroll direction
let lastScrollTop = 0;
let scrollingDown = true;

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    scrollingDown = st > lastScrollTop;
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

// Intersection Observer for roleUp and roleDown animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.roleup, .roledown');

    const observerOptions = {
        threshold: 0.9
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Toggle class based on scroll direction
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.roleup, .roledown');

    sections.forEach(section => {
        if (scrollingDown) {
            section.classList.add('roleup');
            section.classList.remove('roledown');
        } else {
            section.classList.remove('roleup');
            section.classList.add('roledown');
        }
    });
});

  

// for about-me h2

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.role-left');
  
    const observerOptions = {
        threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
  
    sections.forEach(section => {
        observer.observe(section);
    });
  });


// for about-me section

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-me p');
  
    const observerOptions = {
        threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
  
    sections.forEach(section => {
        observer.observe(section);
    });
  });


// for skill to display one after another

document.addEventListener('skillsLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    let lastScrollTop = 0;

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = currentScrollTop > lastScrollTop;
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = isScrollingDown ? index * 500 : (skillItems.length - index - 1) * 500;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay); // Delay for each subsequent item
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    skillItems.forEach(skill => {
        observer.observe(skill);
    });
});

// for projects

document.addEventListener('projectsLoaded', function() {
    const sectionsDown = document.querySelectorAll('.pi-down');
    const sectionsUp = document.querySelectorAll('.pd-up');

    const observerOptions = {
        threshold: 0.5
    };

    const observerDown = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const observerUp = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sectionsDown.forEach(section => {
        observerDown.observe(section);
    });

    sectionsUp.forEach(section => {
        observerUp.observe(section);
    });
});



