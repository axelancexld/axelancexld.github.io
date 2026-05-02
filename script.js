// Mod filter
document.querySelectorAll('.mf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.mod-card').forEach(card => {
            if (filter === 'all' || card.dataset.cat === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Copy profile code
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('Xx6vjRrT').then(() => {
            const span = copyBtn.querySelector('span');
            const orig = span.textContent;
            const copied = {
                en: '✓ Copied',
                tr: '✓ Kopyalandı',
                de: '✓ Kopiert',
                es: '✓ Copiado',
                pt: '✓ Copiado',
                nl: '✓ Gekopieerd'
            };
            copyBtn.classList.add('copied');
            span.textContent = copied[lang] || copied.en;
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                span.textContent = orig;
            }, 2000);
        });
    });
}

// Header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.07 });

document.querySelectorAll(
    '.feat-card, .compat-item, .about-text, .about-visual, .dl-left, .dl-right, .hero-left, .hero-right'
).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 50, 300)}ms`;
    io.observe(el);
});
