document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        const subtitle = document.querySelector('.header-subtitle');
        if (subtitle) {
            subtitle.style.letterSpacing = "3px";
            subtitle.style.wordSpacing = "5px";
        }
        
        setTimeout(createTypingEffect, 500);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.main-container, .social-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            animation: fadeIn 0.8s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .main-container, .social-card {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', animateOnScroll);
    
    window.addEventListener('load', () => {
        animateOnScroll();
    });
    
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    const createTypingEffect = () => {
        const heading = document.querySelector('.header-text h1');
        const subtitle = document.querySelector('.header-subtitle');
        
        subtitle.style.letterSpacing = "3px";
        subtitle.style.wordSpacing = "5px";
        
        subtitle.innerText = subtitle.innerText || 'бесплатные софты и многое другое';
        
        heading.innerHTML = '0DAY';
    };
    
    const addThemeToggle = () => {
        const toggle = document.createElement('div');
        toggle.className = 'theme-toggle';
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
        toggle.style.position = 'fixed';
        toggle.style.top = '20px';
        toggle.style.right = '20px';
        toggle.style.background = 'rgba(0, 0, 0, 0.5)';
        toggle.style.borderRadius = '50%';
        toggle.style.width = '40px';
        toggle.style.height = '40px';
        toggle.style.display = 'flex';
        toggle.style.alignItems = 'center';
        toggle.style.justifyContent = 'center';
        toggle.style.cursor = 'pointer';
        toggle.style.color = '#fff';
        toggle.style.zIndex = '1000';
        toggle.style.transition = 'all 0.3s ease';
        
        let darkMode = true;
        
        toggle.addEventListener('click', () => {
            darkMode = !darkMode;
            if (darkMode) {
                document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #000000)';
                toggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.body.style.background = 'linear-gradient(135deg, #2c3e50, #4b6584)';
                toggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
        
        document.body.appendChild(toggle);
    };
    
    window.addEventListener('load', () => {
        addThemeToggle();
    });
});
