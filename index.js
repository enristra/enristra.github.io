const NAV_HTML = `
<header>
    <a href="/index.html">
        <h1 class="logo">ENRICO STRANGIO</h1>
    </a>
    <nav>
        <ul class="nav-menu">
            <li class="nav-item"><a href="/info.html">About Me</a></li>
            <li class="nav-item"><a href="/posts.html">Thoughts</a></li>
            <li class="nav-item"><a href="/contact.html">Contact</a></li>
            <li class="nav-item"><a href="/learning.html">Learning</a></li>
            <li class="nav-item"><a href="/cv.html">CV</a></li>
        </ul>
        <div class="menu-icon" id="menu-icon" aria-label="Toggle menu" role="button" tabindex="0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </div>
    </nav>
</header>
`;

// Inject nav
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('afterbegin', NAV_HTML);
    }

    // Highlight active nav link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item a').forEach(link => {
        const linkFile = link.getAttribute('href').split('/').pop();
        if (linkFile === currentPath) {
            link.style.borderBottom = '1px solid currentColor';
            link.style.paddingBottom = '2px';
        }
    });

    // Mobile menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuIcon || !navMenu) return;


    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    menuIcon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navMenu.classList.toggle('active');
        }
    });
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            navMenu.classList.remove('active');

        }
    });
});