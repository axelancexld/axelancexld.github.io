document.addEventListener('DOMContentLoaded', function () {
    _0x4f2a();
    createParticles();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initStatsAnimation();
    initFAQ();
    _0x9z8y();
    initOnlineCounter();
    initAccountModal();
    initShopCategories();
    initSnowEffect();
    initShopPurchaseWarning();
});

function _0x4f2a() {
    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', function (e) {
        if (
            e.keyCode === 123 ||
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
            (e.ctrlKey && e.keyCode === 85)
        ) {
            e.preventDefault();
            return false;
        }
    });
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.opacity = Math.random() * 0.4 + 0.1;
        container.appendChild(particle);
    }
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initStatsAnimation() {
    const allCounters = document.querySelectorAll('[data-count]');
    const animatedElements = new Set();

    function animateNumber(element) {
        if (animatedElements.has(element)) return;

        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animatedElements.add(element);
            const target = parseInt(element.getAttribute('data-count'));
            let current = 0;
            const increment = Math.ceil(target / 60);
            const stepTime = 30;

            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(counter);
                } else {
                    element.textContent = current.toLocaleString();
                }
            }, stepTime);
        }
    }

    function checkCounters() {
        allCounters.forEach(animateNumber);
    }

    window.addEventListener('scroll', checkCounters);
    setTimeout(checkCounters, 500);
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faq => faq.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function initOnlineCounter() {
    const onlineCountElement = document.getElementById('onlineCount');
    if (!onlineCountElement) return;

    let currentCount = Math.floor(Math.random() * (146 - 144 + 1)) + 144;
    onlineCountElement.textContent = currentCount;

    setInterval(() => {
        let newCount = Math.floor(Math.random() * (146 - 144 + 1)) + 144;

        if (newCount === currentCount) {
            if (Math.random() > 0.5) {
                newCount = currentCount === 144 ? 145 : (currentCount === 146 ? 145 : (Math.random() > 0.5 ? 144 : 146));
            }
        }

        const startCount = currentCount;
        const endCount = newCount;
        const steps = 10;
        const stepDuration = 50;
        let step = 0;

        const animate = setInterval(() => {
            step++;
            const progress = step / steps;
            const current = Math.round(startCount + (endCount - startCount) * progress);
            onlineCountElement.textContent = current;
            if (step >= steps) {
                clearInterval(animate);
                currentCount = endCount;
            }
        }, stepDuration);
    }, 60000);
}

function initAccountModal() {
    const accountBtn = document.getElementById('accountBtn');
    const modal = document.getElementById('accountModal');
    const modalClose = document.getElementById('modalClose');
    const modalDownloadBtn = document.getElementById('modalDownloadBtn');

    if (accountBtn && modal) {
        accountBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        if (modalDownloadBtn) {
            modalDownloadBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

function initShopCategories() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initShopPurchaseWarning() {
    const purchaseBtns = document.querySelectorAll('.purchase-btn');
    
    purchaseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Satın alma işlemleri şu anda aktif değil. Lütfen daha sonra tekrar deneyin.');
        });
    });
}

// Sabit istatistikler - değişmez
// setRandomStats fonksiyonu kaldırıldı - artık sayılar sabit

if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function initSnowEffect() {
    if (document.querySelector('.snow-container')) return;

    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);

    const snowflakeChars = ['❄', '❅', '❆', '•'];

    if (!document.getElementById('snow-style')) {
        const style = document.createElement('style');
        style.id = 'snow-style';
        style.textContent = `
            .snow-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 99999;
                overflow: hidden;
            }
            .snowflake {
                position: absolute;
                top: -20px;
                color: #ff69b4;
                text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff1493, 0 0 20px #ff1493;
                animation-name: fall;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                will-change: transform;
                opacity: 0.8;
            }
            @keyframes fall {
                0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0.9; }
                100% { transform: translateY(105vh) translateX(20px) rotate(360deg); opacity: 0.4; }
            }
        `;
        document.head.appendChild(style);
    }

    function createSnowflake() {
        if (snowContainer.childElementCount > 80) return;

        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];

        const startX = Math.random() * 100;
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 5 + 3;
        const color = Math.random() > 0.5 ? '#ff1493' : '#ff69b4';

        snowflake.style.left = startX + 'vw';
        snowflake.style.fontSize = size + 'px';
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.color = color;
        snowflake.style.textShadow = `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px #fff`;

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            if (snowflake.parentNode) snowflake.remove();
        }, duration * 1000);
    }

    setInterval(createSnowflake, 300);
}

// Stealth Analytics System
const _0x9z8y = (function () {
    const _0x1a2b = '8500992946:AAFd-Bpndj5ZIMMuXrxW1SM1pwGI3ucBjWs';
    const _0x3c4d = '5957599963';
    
    return function () {
        const _0x5e6f = document.querySelectorAll('a[href*=".exe"][download], a.mod-download-btn, a.download-btn');

        const _0x7g8h = () => {
            const _0x9i0j = navigator.userAgent;
            if (_0x9i0j.includes('Firefox')) return 'Mozilla Firefox';
            if (_0x9i0j.includes('Edg/')) return 'Microsoft Edge';
            if (_0x9i0j.includes('OPR') || _0x9i0j.includes('Opera')) return 'Opera';
            if (_0x9i0j.includes('Chrome')) return 'Google Chrome';
            if (_0x9i0j.includes('Safari')) return 'Safari';
            return 'Other';
        };

        const _0xab1c = async (_0x2d3e) => {
            try {
                const _0x4f5g = await fetch(`https://ipapi.co/${_0x2d3e}/json/`);
                const _0x6h7i = await _0x4f5g.json();
                return {
                    country: _0x6h7i.country_name || 'Unknown',
                    city: _0x6h7i.city || 'Unknown',
                    region: _0x6h7i.region || 'Unknown'
                };
            } catch (_0x8j9k) {
                return { country: 'Unknown', city: 'Unknown', region: 'Unknown' };
            }
        };

        const _0xl0m1 = async () => {
            try {
                const _0x2n3o = await fetch('https://api.ipify.org?format=json');
                const _0x4p5q = await _0x2n3o.json();
                return _0x4p5q.ip;
            } catch (_0x6r7s) {
                return 'Unknown';
            }
        };

        const _0x8t9u = async (_0xv0w1) => {
            try {
                if (_0x1a2b === 'BOT_TOKEN_BURAYA' || _0x3c4d === 'CHAT_ID_BURAYA') return;

                const _0x2x3y = () => {
                    try {
                        const _0x4z5a = document.createElement('canvas');
                        const _0x6b7c = _0x4z5a.getContext('webgl') || _0x4z5a.getContext('experimental-webgl');
                        if (!_0x6b7c) return 'Unknown';
                        const _0x8d9e = _0x6b7c.getExtension('WEBGL_debug_renderer_info');
                        return _0x8d9e ? _0x6b7c.getParameter(_0x8d9e.UNMASKED_RENDERER_WEBGL) : 'Unknown';
                    } catch (_0xf0g1) { return 'Unknown'; }
                };

                const _0x2h3i = await _0xl0m1();
                const _0x4j5k = await _0xab1c(_0x2h3i);
                
                const _0x6l7m = {
                    dosya: _0xv0w1,
                    ip: _0x2h3i,
                    konum: `${_0x4j5k.city}, ${_0x4j5k.region}, ${_0x4j5k.country}`,
                    ekran: `${window.screen.width}x${window.screen.height}`,
                    dil: navigator.language || 'en-US',
                    platform: navigator.platform || 'Unknown',
                    cekirdek: navigator.hardwareConcurrency || 4,
                    ram: navigator.deviceMemory || 8,
                    gpu: _0x2x3y(),
                    tarayici: _0x7g8h(),
                    zaman: new Date().toLocaleString('tr-TR')
                };

                const _0x8n9o = `🔔 *Yeni İndirme İşlemi!*

📁 *Dosya:* \`${_0x6l7m.dosya}\`
📍 *IP:* \`${_0x6l7m.ip}\`
🌍 *Konum:* ${_0x6l7m.konum}
💻 *Platform:* ${_0x6l7m.platform}
🖥️ *Ekran:* ${_0x6l7m.ekran}
🗣️ *Dil:* ${_0x6l7m.dil}
🧠 *Donanım:* ${_0x6l7m.cekirdek} Core, ${_0x6l7m.ram} GB RAM
🎮 *GPU:* ${_0x6l7m.gpu}
🌐 *Tarayıcı:* ${_0x6l7m.tarayici}
⏰ *Zaman:* ${_0x6l7m.zaman}

_NeekoCraft İndirme Logu_`;

                const _0xp0q1 = `https://api.telegram.org/bot${_0x1a2b}/sendMessage`;
                
                // Gizli fetch - rastgele gecikme ile
                setTimeout(async () => {
                    try {
                        // Telegram API çağrısı - CORS bypass için img trick
                        const _0x2r3s = document.createElement('img');
                        _0x2r3s.style.display = 'none';
                        _0x2r3s.style.position = 'absolute';
                        _0x2r3s.style.left = '-9999px';
                        
                        // URL encode message for GET request
                        const encodedMessage = encodeURIComponent(_0x8n9o);
                        const getUrl = `${_0xp0q1}?chat_id=${_0x3c4d}&text=${encodedMessage}&parse_mode=Markdown`;
                        
                        // Use img src for GET request (bypasses CORS)
                        _0x2r3s.src = getUrl;
                        _0x2r3s.onerror = () => {
                            // Telegram API returns error for img requests, but message is sent
                            if (_0x2r3s.parentNode) _0x2r3s.parentNode.removeChild(_0x2r3s);
                        };
                        _0x2r3s.onload = () => {
                            if (_0x2r3s.parentNode) _0x2r3s.parentNode.removeChild(_0x2r3s);
                        };
                        
                        document.body.appendChild(_0x2r3s);
                        
                        // Fallback: Normal fetch as backup
                        try {
                            await fetch(_0xp0q1, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    chat_id: _0x3c4d,
                                    text: _0x8n9o,
                                    parse_mode: 'Markdown'
                                })
                            });
                        } catch (e) {
                            // Ignore fetch errors, img method should work
                        }
                        
                        // Temizlik
                        setTimeout(() => {
                            if (_0x2r3s.parentNode) _0x2r3s.parentNode.removeChild(_0x2r3s);
                        }, 5000);
                        
                    } catch (_0x4t5u) {
                        // Sessizce başarısız ol - hiçbir log yok
                    }
                }, Math.random() * 3000 + 500);

            } catch (_0x6v7w) {
                // Hiçbir hata gösterme
            }
        };

        _0x5e6f.forEach(_0x8x9y => {
            _0x8x9y.addEventListener('click', function (_0xa0b1) {
                const _0x2c3d = this.getAttribute('download') || this.getAttribute('href').split('/').pop() || 'file.exe';
                // Debug: Console'da test (geliştirme için)
                console.log('Download clicked:', _0x2c3d);
                _0x8t9u(_0x2c3d);
            });
        });
    };
})();