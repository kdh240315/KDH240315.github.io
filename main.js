// 个人画作展示网站 - 主脚本

function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function renderArtCard(artwork) {
    return `
        <div class="art-card" onclick="goToDetail(${artwork.id})">
            <div class="art-cover">
                <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
            </div>
            <div class="art-info">
                <h3 class="art-title">${artwork.title}</h3>
                <div class="art-meta">
                    <span class="art-category">${artwork.category}</span>
                    <span>${artwork.year}</span>
                </div>
            </div>
        </div>
    `;
}

function goToDetail(artId) {
    window.location.href = `detail.html?id=${artId}`;
}

function renderCategoryNav(activeCategory = '全部') {
    const container = document.querySelector('.category-nav');
    if (!container) return;

    container.innerHTML = window.artData.categories.map(cat => `
        <button class="category-btn ${cat === activeCategory ? 'active' : ''}"
                onclick="filterByCategory('${cat}')">
            ${cat}
        </button>
    `).join('');
}

function filterByCategory(category) {
    const container = document.querySelector('.category-nav');
    container.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === category);
    });

    const grid = document.querySelector('.art-grid');
    const artworks = category === '全部'
        ? window.artData.artworks
        : window.artData.artworks.filter(a => a.category === category);

    grid.innerHTML = artworks.map(renderArtCard).join('');
}

function initHomePage() {
    const grid = document.querySelector('.art-grid');
    if (!grid) return;
    grid.innerHTML = window.artData.artworks.map(renderArtCard).join('');
    renderCategoryNav();
}

function initListPage() {
    const grid = document.querySelector('.art-grid');
    if (!grid) return;

    const currentCategory = getUrlParam('category') || '全部';

    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.toggle('active', link.dataset.category === currentCategory);
    });

    const artworks = currentCategory === '全部'
        ? window.artData.artworks
        : window.artData.artworks.filter(a => a.category === currentCategory);

    grid.innerHTML = artworks.map(renderArtCard).join('');

    document.getElementById('page-title').textContent =
        currentCategory === '全部' ? '全部作品' : currentCategory;
}

function initDetailPage() {
    const artId = parseInt(getUrlParam('id')) || 1;
    const artwork = window.artData.artworks.find(a => a.id === artId);

    if (!artwork) {
        document.querySelector('.detail-container').innerHTML = '<h2>作品不存在</h2>';
        return;
    }

    document.getElementById('art-image').src = artwork.image;
    document.getElementById('art-title').textContent = artwork.title;
    document.getElementById('art-category').textContent = artwork.category;
    document.getElementById('art-desc').textContent = artwork.description;
    document.getElementById('art-year').textContent = artwork.year;
    document.getElementById('art-medium').textContent = artwork.medium;
    document.getElementById('art-size').textContent = artwork.size;

    const related = window.artData.artworks
        .filter(a => a.category === artwork.category && a.id !== artId)
        .slice(0, 4);

    document.getElementById('related-grid').innerHTML = related.map(renderArtCard).join('');
}

function initWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    setTimeout(() => {
        modal.classList.add('hide');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    initWelcomeModal();
    
    if (document.querySelector('.hero-section')) {
        initHomePage();
    }
    if (document.querySelector('.art-grid') && document.getElementById('page-title')) {
        initListPage();
    }
    if (document.querySelector('.detail-container')) {
        initDetailPage();
    }
});
