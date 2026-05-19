/**
 * Web Resume - Main JavaScript
 * Handles interactive features: navigation, smooth scrolling, animations
 */

// ============================================
// 1. MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');

        // Animate hamburger icon
        const svg = menuToggle.querySelector('svg');
        svg.style.transform = mobileMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(90deg)';
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuToggle.querySelector('svg').style.transform = 'rotate(0deg)';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuToggle.querySelector('svg').style.transform = 'rotate(0deg)';
        }
    });
}

// ============================================
// 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// 3. ACTIVE NAVIGATION LINK HIGHLIGHT
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    let closestDistance = Infinity;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 100);

        if (rect.top <= 150 && rect.bottom > 0 && distance < closestDistance) {
            currentSection = section.getAttribute('id');
            closestDistance = distance;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'dark:text-blue-400', 'active');
        const href = link.getAttribute('href').slice(1);
        if (href === currentSection) {
            link.classList.add('text-blue-600', 'dark:text-blue-400', 'active');
        }
    });
}

// ============================================
// 4. SCROLL TO TOP BUTTON
// ============================================
const scrollTopButton = document.getElementById('scroll-top');

if (scrollTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.classList.remove('hidden');
            scrollTopButton.classList.add('fade-in');
        } else {
            scrollTopButton.classList.add('hidden');
        }

        updateActiveNavLink();
    });

    // Scroll to top on button click
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 5. INTERSECTION OBSERVER FOR FADE-IN ANIMATION
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============================================
// 6. NAVBAR BACKGROUND ON SCROLL
// ============================================
const navbar = document.querySelector('nav');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });
}

// ============================================
// 7. DARK MODE TOGGLE (Optional)
// ============================================
function initDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkMode || (prefersDark && !localStorage.getItem('darkMode'))) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    }
}

// ============================================
// 8. KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }

    // Skip to main content (accessibility)
    if (e.key === '/' && e.ctrlKey) {
        document.getElementById('about')?.focus();
    }
});

// ============================================
// 9. FORM HANDLING (Optional Contact Form)
// ============================================
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');

        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = '✓ Message sent!';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            contactForm.reset();
        }, 3000);
    });
}

// ============================================
// 10. PAGE LOAD INITIALIZATION
// ============================================
window.addEventListener('load', () => {
    // Initialize dark mode
    initDarkMode();

    // Update active nav link
    updateActiveNavLink();

    // Log success
    console.log('%c✨ Web Resume loaded successfully!', 'color: #ef4444; font-size: 14px; font-weight: bold;');
    console.log('%c📧 Contact: your.email@example.com', 'color: #f87171; font-size: 12px;');
});

// ============================================
// 11. PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 100));

// ============================================
// 12. UTILITY FUNCTIONS
// ============================================

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Add scroll animation class
function addScrollAnimation() {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
        el.classList.add('animate-fadeInUp');
    });
}

// Track page view (for analytics)
function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_path': pageName,
            'page_title': document.title
        });
    }
}
