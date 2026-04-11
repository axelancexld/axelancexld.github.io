
document.addEventListener('DOMContentLoaded', function () {
    initShopCategories();
    initAccountModal();
    initOnlineCounter();
    initShopPurchaseWarning();
});


function initShopPurchaseWarning() {
    const buyBtns = document.querySelectorAll('.rank-buy-btn, .crate-buy-btn, .cosmetic-buy-btn, .booster-buy-btn, .shop-buy-btn');
    const modal = document.getElementById('accountModal');
    const modalTitle = modal?.querySelector('h3');
    const modalInfoText = modal?.querySelector('.modal-info');

    if (!modal || !buyBtns.length) return;

    buyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (modalTitle) modalTitle.textContent = 'Store Purchase';
            if (modalInfoText) {
                modalInfoText.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Purchases are <strong>only available via MellyCraft Launcher</strong>.
                `;
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}


function initShopCategories() {
    const categoryBtns = document.querySelectorAll('.shop-cat-btn');
    const ranksGrid = document.getElementById('ranksGrid');
    const cratesGrid = document.getElementById('cratesGrid');
    const cosmeticsGrid = document.getElementById('cosmeticsGrid');
    const boostersGrid = document.getElementById('boostersGrid');

    const grids = {
        ranks: ranksGrid,
        crates: cratesGrid,
        cosmetics: cosmeticsGrid,
        boosters: boostersGrid
    };

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            categoryBtns.forEach(b => b.classList.remove('active'));

            btn.classList.add('active');


            Object.values(grids).forEach(grid => {
                if (grid) {
                    grid.style.opacity = '0';
                    setTimeout(() => {
                        grid.style.display = 'none';
                    }, 150);
                }
            });


            const category = btn.dataset.category;
            setTimeout(() => {
                if (grids[category]) {
                    grids[category].style.display = category === 'boosters' ? 'flex' : 'grid';
                    setTimeout(() => {
                        grids[category].style.opacity = '1';
                    }, 50);
                }
            }, 150);
        });
    });


    Object.values(grids).forEach(grid => {
        if (grid) {
            grid.style.transition = 'opacity 0.3s ease';
        }
    });
}


function initAccountModal() {
    const accountBtn = document.getElementById('accountBtn');
    const modal = document.getElementById('accountModal');
    const modalClose = document.getElementById('modalClose');
    const modalDownloadBtn = document.getElementById('modalDownloadBtn');

    if (!accountBtn || !modal) return;


    accountBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });


    if (modalClose) {
        modalClose.addEventListener('click', () => {




            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }


    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    if (modalDownloadBtn) {
        modalDownloadBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }


    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
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
