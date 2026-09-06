/**
 * AREN AZAT — PORTFOLIO ADMIN CONTROLLER
 * Full content management, password authentication, local preview, and GitHub REST API live publishing.
 */

// ==========================================================================
// 1. GLOBAL STATE & CONFIGURATION
// ==========================================================================
let siteData = { en: {}, tr: {} };
let sitePosts = []; // All blog posts
let editLang = 'en'; // Current active editing language tab

// GitHub Repository & Default Configuration
const DEFAULT_REPO_OWNER = 'arenazat';
const DEFAULT_REPO_NAME = 'Aren-Web';
const DEFAULT_PAT_TOKEN = '';
const DEFAULT_PASSCODE = 'aren2026';

// All input fields mapping to content.json keys
const ALL_KEYS = [
  // Document
  'doc_title',

  // Hero
  'hero_status', 'hero_title', 'hero_subtitle',
  'tag_astro', 'tag_sim', 'tag_aero', 'tag_code',
  'cta_work', 'cta_research', 'cta_github',
  'badge_research', 'badge_engineering',

  // Currently Working On
  'working_tag',
  'working_1_title', 'working_1_detail',
  'working_2_title', 'working_2_detail',
  'working_3_title', 'working_3_detail',

  // About
  'about_tag', 'about_title', 'about_story_title',
  'about_p1', 'about_p2', 'about_p3',
  'sig_name', 'sig_title',
  'pillar_1_title', 'pillar_1_desc',
  'pillar_2_title', 'pillar_2_desc',
  'pillar_3_title', 'pillar_3_desc',
  'pillar_4_title', 'pillar_4_desc',

  // Research Domains
  'research_tag', 'research_title',
  'research_area_1_title', 'research_area_1_desc',
  'research_area_2_title', 'research_area_2_desc',
  'research_area_3_title', 'research_area_3_desc',
  'rq_label', 'rq_text',

  // Projects
  'projects_tag', 'projects_title', 'projects_desc',
  'p1_title', 'p1_status', 'p1_date', 'p1_field', 'p1_desc', 'p1_done', 'p1_wip',
  'p2_title', 'p2_status', 'p2_date', 'p2_field', 'p2_desc', 'p2_done', 'p2_wip',
  'p3_title', 'p3_status', 'p3_date', 'p3_field', 'p3_desc', 'p3_done', 'p3_wip',
  'p4_title', 'p4_status', 'p4_date', 'p4_field', 'p4_desc', 'p4_done', 'p4_wip',

  // Research Notes
  'notes_tag', 'notes_title', 'notes_desc',
  'note_1_cat', 'note_1_title', 'note_1_date',
  'note_2_cat', 'note_2_title', 'note_2_date',
  'note_3_cat', 'note_3_title', 'note_3_date',

  // Education
  'edu_tag', 'edu_title',
  'edu_1_period', 'edu_1_title', 'edu_1_sub',
  'edu_2_period', 'edu_2_title', 'edu_2_sub',
  'edu_3_period', 'edu_3_title', 'edu_3_sub',
  'edu_4_period', 'edu_4_title', 'edu_4_sub',

  // Milestones
  'achievements_tag', 'achievements_title',
  'ach_1_title', 'ach_1_desc', 'ach_1_year',
  'ach_2_title', 'ach_2_desc', 'ach_2_year',

  // Interests
  'int_tag', 'int_title',
  'int_guitar_title', 'int_guitar_desc',
  'int_tennis_title', 'int_tennis_desc',
  'int_photo_title', 'int_photo_desc',

  // Contact & Footer
  'contact_tag', 'contact_title', 'contact_desc',
  'email_label', 'loc_label', 'loc_val',
  'form_name', 'form_subject', 'form_msg',
  'btn_send_email', 'quote_text', 'footer_rights'
];

// ==========================================================================
// 2. AUTHENTICATION (PASSWORD PROTECTION)
// ==========================================================================
function checkAuthStatus() {
  const isAuth = sessionStorage.getItem('aren_admin_auth') === 'true';
  const authScreen = document.getElementById('auth-screen');
  const dashboard = document.getElementById('dashboard-screen');

  if (isAuth) {
    if (authScreen) authScreen.style.display = 'none';
    if (dashboard) dashboard.style.display = 'flex';
    initDashboardData();
  } else {
    if (authScreen) authScreen.style.display = 'flex';
    if (dashboard) dashboard.style.display = 'none';
  }
}

function handleLogin(event) {
  event.preventDefault();
  const passInput = document.getElementById('admin-password');
  const errorMsg = document.getElementById('auth-error-msg');
  const enteredPass = passInput ? passInput.value.trim() : '';

  const savedPass = localStorage.getItem('aren_admin_passcode') || DEFAULT_PASSCODE;

  if (enteredPass === savedPass) {
    sessionStorage.setItem('aren_admin_auth', 'true');
    if (errorMsg) errorMsg.textContent = '';
    checkAuthStatus();
    showToast('Giriş başarılı! Hoş geldiniz, Aren.', 'success');
  } else {
    if (errorMsg) errorMsg.textContent = 'Hatalı şifre! Lütfen tekrar deneyin.';
    if (passInput) {
      passInput.value = '';
      passInput.focus();
    }
  }
}

function handleLogout() {
  sessionStorage.removeItem('aren_admin_auth');
  checkAuthStatus();
  showToast('Oturum kapatıldı.', 'info');
}

// ==========================================================================
// 3. DATA INITIALIZATION & FORM BINDING
// ==========================================================================
async function initDashboardData() {
  try {
    // 1. Fetch content.json
    const res = await fetch('./data/content.json?v=' + Date.now());
    if (res.ok) {
      siteData = await res.json();
    }
  } catch (err) {
    console.warn('content.json yüklenemedi, yerel veriye bakılıyor.', err);
  }

  // 2. Merge local storage custom draft
  const localDraft = localStorage.getItem('aren_custom_translations');
  if (localDraft) {
    try {
      const parsed = JSON.parse(localDraft);
      if (parsed.en) Object.assign(siteData.en, parsed.en);
      if (parsed.tr) Object.assign(siteData.tr, parsed.tr);
    } catch (e) {
      console.error(e);
    }
  }

  // 3. Fetch blog posts from posts.json
  try {
    const pRes = await fetch('./data/posts.json?v=' + Date.now());
    if (pRes.ok) {
      sitePosts = await pRes.json();
    }
  } catch (err) {
    console.warn('posts.json yüklenemedi, yerel veriye bakılıyor.', err);
  }

  // 4. Merge local storage custom blog posts
  const localPosts = localStorage.getItem('aren_custom_posts');
  if (localPosts) {
    try {
      const parsedPosts = JSON.parse(localPosts);
      if (Array.isArray(parsedPosts) && parsedPosts.length > 0) {
        sitePosts = parsedPosts;
      }
    } catch (e) {
      console.error(e);
    }
  }

  // 5. Populate fields for current active language
  populateFormFields();

  // 6. Render admin blog list
  renderAdminBlogList();

  // 7. Populate settings values
  const tokenInput = document.getElementById('setting-gh-token');
  if (tokenInput) {
    tokenInput.value = localStorage.getItem('aren_gh_token') || '';
  }
}

function populateFormFields() {
  // Update indicator pill
  const langPill = document.querySelectorAll('.current-lang-name');
  langPill.forEach(el => el.textContent = editLang === 'en' ? 'English (EN)' : 'Türkçe (TR)');

  const langData = siteData[editLang] || {};

  ALL_KEYS.forEach(key => {
    const input = document.getElementById('inp-' + key);
    if (input) {
      input.value = langData[key] !== undefined ? langData[key] : '';
    }
  });
}

function collectFormFields() {
  if (!siteData[editLang]) siteData[editLang] = {};

  ALL_KEYS.forEach(key => {
    const input = document.getElementById('inp-' + key);
    if (input) {
      siteData[editLang][key] = input.value;
    }
  });
}

function switchEditLanguage(lang) {
  if (lang === editLang) return;
  // Save current form inputs into state before switching
  collectFormFields();

  editLang = lang;

  // Toggle active button class
  const btnEn = document.getElementById('tab-lang-en');
  const btnTr = document.getElementById('tab-lang-tr');
  if (btnEn && btnTr) {
    if (lang === 'en') {
      btnEn.classList.add('active');
      btnTr.classList.remove('active');
    } else {
      btnTr.classList.add('active');
      btnEn.classList.remove('active');
    }
  }

  // Populate fields for new active language
  populateFormFields();
  showToast(lang === 'en' ? 'Switched to English editing' : 'Türkçe düzenlemeye geçildi', 'info');
}

// ==========================================================================
// 4. SAVE & PUBLISH ENGINES
// ==========================================================================

// Option A: Save Locally (Instant local preview on this browser)
function saveLocally() {
  collectFormFields();
  localStorage.setItem('aren_custom_translations', JSON.stringify(siteData));
  showToast('Değişiklikler yerel olarak kaydedildi! Ana sayfayı açıp hemen görebilirsiniz.', 'success');
}

// Option B: 1-Click Publish to Live GitHub Pages via GitHub REST API
async function publishToGitHub() {
  collectFormFields();
  saveLocally(); // also save locally

  const publishBtn = document.getElementById('btn-publish-live');
  const originalText = publishBtn ? publishBtn.innerHTML : '';
  if (publishBtn) {
    publishBtn.disabled = true;
    publishBtn.innerHTML = '⏳ Yayınlanıyor...';
  }

  const tokenInput = document.getElementById('setting-gh-token');
  let token = (tokenInput && tokenInput.value.trim()) 
    ? tokenInput.value.trim() 
    : (localStorage.getItem('aren_gh_token') || '');

  if (!token) {
    if (publishBtn) {
      publishBtn.disabled = false;
      publishBtn.innerHTML = originalText;
    }
    showToast('Lütfen önce Ayarlar sekmesinden GitHub Personal Access Token (PAT) girin.', 'error');
    // Switch to settings tab automatically
    const settingsTabBtn = document.querySelector('[data-target="sec-settings"]');
    if (settingsTabBtn) settingsTabBtn.click();
    return;
  }

  const owner = DEFAULT_REPO_OWNER;
  const repo = DEFAULT_REPO_NAME;
  const filePath = 'data/content.json';
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  try {
    // Step 1: Get the current file SHA from GitHub
    let currentSha = '';
    const getRes = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (getRes.ok) {
      const fileData = await getRes.json();
      currentSha = fileData.sha;
    }

    // Step 2: Prepare JSON content & base64 encode
    const jsonString = JSON.stringify(siteData, null, 2);
    // Safe utf-8 base64 encoding
    const encodedContent = btoa(unescape(encodeURIComponent(jsonString)));

    // Step 3: PUT request to commit to GitHub main branch
    const putPayload = {
      message: `chore: update content via admin panel [${new Date().toISOString()}]`,
      content: encodedContent,
      branch: 'main'
    };
    if (currentSha) {
      putPayload.sha = currentSha;
    }

    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify(putPayload)
    });

    if (putRes.ok) {
      // Step 4: Also commit data/posts.json to GitHub
      try {
        const postsFilePath = 'data/posts.json';
        const postsApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${postsFilePath}`;
        let postsSha = '';
        const getPostsRes = await fetch(postsApiUrl, {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (getPostsRes.ok) {
          const postsData = await getPostsRes.json();
          postsSha = postsData.sha;
        }

        const postsJsonString = JSON.stringify(sitePosts, null, 2);
        const encodedPosts = btoa(unescape(encodeURIComponent(postsJsonString)));

        const putPostsPayload = {
          message: `chore: update blog posts via admin panel [${new Date().toISOString()}]`,
          content: encodedPosts,
          branch: 'main'
        };
        if (postsSha) putPostsPayload.sha = postsSha;

        await fetch(postsApiUrl, {
          method: 'PUT',
          headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
          },
          body: JSON.stringify(putPostsPayload)
        });
      } catch (postErr) {
        console.warn('Posts publish warning:', postErr);
      }

      showToast('🚀 Canlıya Başarıyla Yayınlandı! Site içeriği ve blog yazıları ~30 saniye içinde güncellenecektir.', 'success');
    } else {
      const err = await putRes.json();
      console.error('GitHub API error:', err);
      showToast('GitHub API Hatası: ' + (err.message || 'Yayınlanamadı'), 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Bağlantı hatası: ' + err.message, 'error');
  } finally {
    if (publishBtn) {
      publishBtn.disabled = false;
      publishBtn.innerHTML = originalText;
    }
  }
}

// ==========================================================================
// 5. BLOG POSTS CRUD CONTROLLER
// ==========================================================================
function renderAdminBlogList() {
  const container = document.getElementById('adm-blog-list-container');
  if (!container) return;

  if (sitePosts.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--adm-text-muted);">
        Henüz blog yazısı bulunmuyor. Yeni bir yazı eklemek için yukarıdaki butona tıklayın.
      </div>
    `;
    return;
  }

  container.innerHTML = sitePosts.map(post => `
    <div class="adm-blog-item" data-id="${post.id}">
      <div class="adm-blog-item-info">
        <div class="adm-blog-item-title">${escapeHtml(post.title)}</div>
        <div class="adm-blog-item-meta">
          <span style="color: #a5b4fc; font-weight: 600;">📁 ${escapeHtml(post.category || 'Genel')}</span>
          <span>📅 ${escapeHtml(post.date || '')}</span>
          <span>⏱️ ${escapeHtml(post.readTime || '')}</span>
        </div>
      </div>
      <div class="adm-blog-item-actions">
        <button type="button" class="btn-adm btn-adm-preview" onclick="openBlogEditor('${post.id}')">
          ✏️ Düzenle
        </button>
        <button type="button" class="btn-adm btn-adm-logout" onclick="deleteBlogPost('${post.id}')">
          🗑️ Sil
        </button>
      </div>
    </div>
  `).join('');
}

function openBlogEditor(postId = null) {
  const card = document.getElementById('blog-editor-card');
  const heading = document.getElementById('blog-editor-heading');
  const idInput = document.getElementById('blog-edit-id');
  const titleInput = document.getElementById('blog-edit-title');
  const catInput = document.getElementById('blog-edit-category');
  const dateInput = document.getElementById('blog-edit-date');
  const timeInput = document.getElementById('blog-edit-readtime');
  const sumInput = document.getElementById('blog-edit-summary');
  const contentInput = document.getElementById('blog-edit-content');

  if (!card) return;

  if (postId) {
    const post = sitePosts.find(p => p.id === postId);
    if (!post) return;
    if (heading) heading.textContent = 'Blog Yazısını Düzenle';
    if (idInput) idInput.value = post.id;
    if (titleInput) titleInput.value = post.title || '';
    if (catInput) catInput.value = post.category || '';
    if (dateInput) dateInput.value = post.date || '';
    if (timeInput) timeInput.value = post.readTime || '';
    if (sumInput) sumInput.value = post.summary || '';
    if (contentInput) contentInput.value = post.content || '';
  } else {
    if (heading) heading.textContent = 'Yeni Blog Yazısı Ekle';
    if (idInput) idInput.value = '';
    if (titleInput) titleInput.value = '';
    if (catInput) catInput.value = 'Astrofizik';
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    if (timeInput) timeInput.value = '4 dk okuma';
    if (sumInput) sumInput.value = '';
    if (contentInput) contentInput.value = '';
  }

  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeBlogEditor() {
  const card = document.getElementById('blog-editor-card');
  if (card) card.style.display = 'none';
}

function saveBlogPostForm() {
  const idInput = document.getElementById('blog-edit-id');
  const titleInput = document.getElementById('blog-edit-title');
  const catInput = document.getElementById('blog-edit-category');
  const dateInput = document.getElementById('blog-edit-date');
  const timeInput = document.getElementById('blog-edit-readtime');
  const sumInput = document.getElementById('blog-edit-summary');
  const contentInput = document.getElementById('blog-edit-content');

  const title = titleInput ? titleInput.value.trim() : '';
  if (!title) {
    showToast('Lütfen bir yazı başlığı girin.', 'error');
    return;
  }

  const postId = idInput && idInput.value ? idInput.value : ('post-' + Date.now());
  const category = catInput ? catInput.value.trim() : 'Genel';
  const date = dateInput && dateInput.value ? dateInput.value : new Date().toISOString().split('T')[0];
  const readTime = timeInput ? timeInput.value.trim() : '3 dk okuma';
  const summary = sumInput ? sumInput.value.trim() : '';
  const content = contentInput ? contentInput.value.trim() : '';

  const postObj = {
    id: postId,
    title,
    category,
    date,
    readTime,
    summary,
    content,
    author: 'Aren Azat',
    lang: 'tr'
  };

  const existingIdx = sitePosts.findIndex(p => p.id === postId);
  if (existingIdx >= 0) {
    sitePosts[existingIdx] = postObj;
    showToast('Blog yazısı güncellendi!', 'success');
  } else {
    sitePosts.unshift(postObj);
    showToast('Yeni blog yazısı başarıyla eklendi!', 'success');
  }

  localStorage.setItem('aren_custom_posts', JSON.stringify(sitePosts));
  renderAdminBlogList();
  closeBlogEditor();
}

function deleteBlogPost(postId) {
  const post = sitePosts.find(p => p.id === postId);
  const title = post ? post.title : 'Bu yazıyı';

  if (confirm(`"${title}" başlıklı yazıyı silmek istediğinizden emin misiniz?`)) {
    sitePosts = sitePosts.filter(p => p.id !== postId);
    localStorage.setItem('aren_custom_posts', JSON.stringify(sitePosts));
    renderAdminBlogList();
    showToast('Yazı silindi.', 'info');
  }
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Option C: Export JSON
function exportContentJson() {
  collectFormFields();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "content.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('content.json dosyası indirildi.', 'info');
}

// Option D: Reset to Defaults
function resetToDefaults() {
  if (confirm('Tüm özel değişiklikler silinip orijinal ayarlara dönülecek. Emin misiniz?')) {
    localStorage.removeItem('aren_custom_translations');
    location.reload();
  }
}

// Option E: Change Admin Password
function changeAdminPasscode() {
  const newPass = prompt('Yeni admin şifrenizi girin:');
  if (newPass && newPass.trim().length >= 4) {
    localStorage.setItem('aren_admin_passcode', newPass.trim());
    showToast('Admin şifreniz başarıyla değiştirildi!', 'success');
  } else if (newPass !== null) {
    alert('Şifre en az 4 karakter olmalıdır.');
  }
}

// ==========================================================================
// 5. SIDEBAR SECTION NAVIGATION
// ==========================================================================
function initSidebarNav() {
  const navItems = document.querySelectorAll('.adm-nav-item');
  const sections = document.querySelectorAll('.adm-section-box');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');

      navItems.forEach(n => n.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      item.classList.add('active');
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add('active');
    });
  });
}

// ==========================================================================
// 6. TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `adm-toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// 7. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  checkAuthStatus();
  initSidebarNav();

  // Language switch listeners
  const btnEn = document.getElementById('tab-lang-en');
  const btnTr = document.getElementById('tab-lang-tr');
  if (btnEn) btnEn.addEventListener('click', () => switchEditLanguage('en'));
  if (btnTr) btnTr.addEventListener('click', () => switchEditLanguage('tr'));

  // Save PAT token changes
  const tokenInput = document.getElementById('setting-gh-token');
  if (tokenInput) {
    tokenInput.addEventListener('change', () => {
      localStorage.setItem('aren_gh_token', tokenInput.value.trim());
      showToast('GitHub Token yerel olarak güncellendi.', 'info');
    });
  }
});
