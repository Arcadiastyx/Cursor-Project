document.addEventListener('DOMContentLoaded', () => {
    // Animation des sections au défilement
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Animation des compétences
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const icon = skill.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        skill.addEventListener('mouseleave', () => {
            const icon = skill.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Animation des centres d'intérêts
    const interests = document.querySelectorAll('.interest-list p');
    interests.forEach(interest => {
        interest.addEventListener('click', () => {
            interest.style.transform = 'scale(1.1)';
            setTimeout(() => {
                interest.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Animation du header au scroll
    const profileHeader = document.querySelector('.profile-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            profileHeader.style.transform = 'translateY(-10px)';
            profileHeader.style.opacity = '0.8';
        } else {
            profileHeader.style.transform = 'translateY(0)';
            profileHeader.style.opacity = '1';
        }
        lastScroll = currentScroll;
    });

    // Gestion du slider des compétences
    function initSkillsSlider() {
        const slider = document.querySelector('.skill-icons');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const skills = document.querySelectorAll('.skill');
        
        let currentPosition = 0;
        const skillWidth = 180; // Largeur d'une carte + gap
        const visibleSkills = Math.floor(slider.offsetWidth / skillWidth);
        const maxPosition = -(skills.length - visibleSkills) * skillWidth;

        function updateSliderPosition() {
            slider.style.transform = `translateX(${currentPosition}px)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentPosition > maxPosition) {
                currentPosition -= skillWidth;
                updateSliderPosition();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPosition < 0) {
                currentPosition += skillWidth;
                updateSliderPosition();
            }
        });

        // Animation au hover des compétences
        skills.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skill.style.transform = 'translateY(-10px)';
                const icon = skill.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                }
            });
            
            skill.addEventListener('mouseleave', () => {
                skill.style.transform = 'translateY(0)';
                const icon = skill.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }

    initSkillsSlider();
});
