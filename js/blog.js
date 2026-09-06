/**
 * AREN AZAT — BLOG ENGINE
 * Dynamic post loading, category filtering, search, and reading modal.
 */

let allPosts = [];
let currentCategory = 'all';

// Load posts from JSON and localStorage overlay
async function initBlog() {
  try {
    const res = await fetch('./data/posts.json?v=' + Date.now());
    if (res.ok) {
      allPosts = await res.json();
    }
  } catch (e) {
    console.warn('posts.json fetch failed, using local storage or fallback', e);
  }

  // Overlay local edits or additions from Admin Panel
  try {
    const localPosts = localStorage.getItem('aren_custom_posts');
    if (localPosts) {
      const parsed = JSON.parse(localPosts);
      if (Array.isArray(parsed) && parsed.length > 0) {
        allPosts = parsed;
      }
    }
  } catch (e) {
    console.error('Error loading custom posts:', e);
  }

  renderCategoryButtons();
  renderBlogPosts();
  initCategoryFilters();
  initSearch();
  initReaderModal();
  initMobileNav();
}

// Render dynamic category pills if needed
function renderCategoryButtons() {
  const container = document.getElementById('category-filter-bar');
  if (!container) return;

  // Extract unique categories
  const categories = ['all'];
  allPosts.forEach(post => {
    if (post.category && !categories.includes(post.category)) {
      categories.push(post.category);
    }
  });

  container.innerHTML = categories.map(cat => {
    const label = cat === 'all' ? 'Tüm Yazılar' : cat;
    const activeClass = cat === currentCategory ? 'active' : '';
    return `<button type="button" class="blog-cat-pill ${activeClass}" data-category="${cat}">${label}</button>`;
  }).join('');
}

// Render posts grid
function renderBlogPosts(filtered = null) {
  const grid = document.getElementById('blog-grid');
  const emptyState = document.getElementById('blog-empty-state');
  if (!grid) return;

  const postsToRender = filtered || (currentCategory === 'all' 
    ? allPosts 
    : allPosts.filter(p => p.category === currentCategory));

  if (postsToRender.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = postsToRender.map(post => {
    return `
      <article class="blog-card" data-id="${post.id}">
        <div class="blog-card-header">
          <span class="blog-pill-category">${escapeHtml(post.category || 'Genel')}</span>
          <span class="blog-meta-time">${escapeHtml(post.readTime || '')}</span>
        </div>
        <h3 class="blog-card-title">${escapeHtml(post.title)}</h3>
        <p class="blog-card-excerpt">${escapeHtml(post.summary || '')}</p>
        <div class="blog-card-footer">
          <span class="blog-meta-date">${escapeHtml(post.date || '')}</span>
          <button type="button" class="btn-read-post" onclick="openReaderModal('${post.id}')">
            <span>Yazıyı Oku</span>
            <span class="arrow">→</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Category filter interaction
function initCategoryFilters() {
  const container = document.getElementById('category-filter-bar');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.blog-cat-pill');
    if (!btn) return;

    container.querySelectorAll('.blog-cat-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategory = btn.getAttribute('data-category');
    renderBlogPosts();
  });
}

// Search bar filter
function initSearch() {
  const searchInput = document.getElementById('blog-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    if (!term) {
      renderBlogPosts();
      return;
    }

    const filtered = allPosts.filter(p => {
      const matchTitle = (p.title || '').toLowerCase().includes(term);
      const matchSummary = (p.summary || '').toLowerCase().includes(term);
      const matchCat = (p.category || '').toLowerCase().includes(term);
      return matchTitle || matchSummary || matchCat;
    });

    renderBlogPosts(filtered);
  });
}

// Reader Modal
function initReaderModal() {
  const modal = document.getElementById('reader-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeReaderModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeReaderModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeReaderModal();
  });
}

function openReaderModal(postId) {
  const post = allPosts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('reader-modal');
  const titleEl = document.getElementById('modal-title');
  const catEl = document.getElementById('modal-category');
  const dateEl = document.getElementById('modal-date');
  const timeEl = document.getElementById('modal-read-time');
  const authorEl = document.getElementById('modal-author');
  const bodyEl = document.getElementById('modal-body');

  if (titleEl) titleEl.textContent = post.title;
  if (catEl) catEl.textContent = post.category;
  if (dateEl) dateEl.textContent = post.date;
  if (timeEl) timeEl.textContent = post.readTime;
  if (authorEl) authorEl.textContent = post.author || 'Aren Azat';

  // Format content paragraphs
  if (bodyEl) {
    const content = post.content || post.summary || '';
    const formattedHtml = content.split('\n\n').map(paragraph => {
      if (paragraph.startsWith('### ')) {
        return `<h4>${escapeHtml(paragraph.replace('### ', ''))}</h4>`;
      }
      if (paragraph.startsWith('## ')) {
        return `<h3>${escapeHtml(paragraph.replace('## ', ''))}</h3>`;
      }
      return `<p>${escapeHtml(paragraph).replace(/\n/g, '<br>')}</p>`;
    }).join('');
    bodyEl.innerHTML = formattedHtml;
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeReaderModal() {
  const modal = document.getElementById('reader-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Mobile Nav Menu
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    toggleBtn.classList.toggle('open', !isOpen);
  });
}

// Helper utility
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', initBlog);
