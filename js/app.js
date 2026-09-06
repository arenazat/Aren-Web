/**
 * AREN AZAT - PERSONAL PORTFOLIO JAVASCRIPT ENGINE
 * Full bilingual support (TR/EN), category filtering, mobile navigation, and interactive handlers.
 */

// ==========================================================================
// 1. TRANSLATION DICTIONARY (TR & EN)
// ==========================================================================
const translations = {
  tr: {
    // Document & Meta
    doc_title: "Aren Azat | Astrofizik, Hesaplamalı Fizik & Yazılım",
    sig_name: "Aren Azat",

    // Navigation
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_academics: "Akademik & Yetkinlikler",
    nav_interests: "İlgi Alanları",
    nav_blog: "Blog",
    nav_contact: "İletişim",

    // Hero Section
    hero_status: "Lise Araştırmacısı & Yazılım Geliştirici",
    hero_title: 'Astrofizik, Hesaplamalı Fizik ve Mühendislik ile <span class="text-gradient">Evreni Keşfetmek.</span>',
    hero_desc: "Merhaba, ben Aren Azat. Antalya'da lise öğrencisiyim. Astrofizik, yerçekimsel kütleçekim simülasyonları, gömülü sistemler ve yazılım mühendisliği üzerine çalışıyorum; bilimsel merakı çalışan kodlara ve somut araştırmalara dönüştürüyorum.",
    tag_astro: "Astrofizik & Astronomi",
    tag_sim: "Hesaplamalı Simülasyon",
    tag_aero: "Havacılık & Uzay",
    tag_code: "Python & Flutter",
    cta_projects: "Projeleri İncele",
    cta_contact: "İletişime Geç",
    stat_sim_label: "Yerçekimi Simülasyonu",
    stat_physics_label: "İleri Fizik & Mekanik",
    stat_loc_label: "Lise 3. Sınıf (11. Sınıf)",
    badge_research: "Araştırma & Gözlem",
    badge_engineering: "Mühendislik Kodlama",

    // About Section
    about_tag: "HAKKIMDA",
    about_title: "Bilimsel Merak ve Uygulamalı Araştırma",
    about_story_title: "Evreni Anlamak, Formülleri Yaşatmak",
    about_p1: "Çocukluğumdan beri astronomi, astrofizik ve mekanik sistemlere büyük bir hayranlık besliyorum. Benim için bilim, yalnızca ders kitaplarındaki formülleri ezberlemek değil; onları bilgisayar algoritmalarıyla hayata geçirmek, simülasyonlarla sınamak ve gerçek dünyadaki sorunlara mühendislik çözümleri üretmektir.",
    about_p2: "Lise eğitimimi sürdürürken bir yandan AP Physics C ve TÜBİTAK Astronomi & Astrofizik olimpiyatları seviyesinde çalışmalar yapıyor, diğer yandan Python ve modern yazılım araçlarıyla sayısal fizik simülasyonları geliştiriyorum. Uzun vadeli hedefim; yurt dışında saygın bir üniversitede astrofizik ve havacılık-uzay mühendisliği eğitimi alarak NASA ve uluslararası araştırma kurumları çatısı altında insanlığın evren anlayışına katkıda bulunmaktır.",
    about_p3: "Yalnızca teoride kalmayı sevmiyorum. İster N-Body yerçekimsel kütleçekim algoritmaları olsun, ister donanım tabanlı erken orman yangını tespit istasyonları; her projemde sistemi bileşenlerine ayırıp en verimli mimariyle inşa etmeye odaklanıyorum.",
    sig_title: "Lise Öğrencisi & Araştırmacı — Antalya, Türkiye",
    pillar_1_title: "Astrofizik & Hesaplamalı Simülasyon",
    pillar_1_desc: "Gök mekaniği, çoklu cisim çekim etkileşimleri (N-Body) ve sayısal adım integratörleriyle evreni modelleme.",
    pillar_2_title: "Havacılık & Uzay Mühendisliği",
    pillar_2_desc: "Fiziksel yasaların hava ve uzay araçlarına uygulanması; orbital mekanik ve aerodinamik prensiplere derin ilgi.",
    pillar_3_title: "Gömülü Sistemler & Sensör Teknolojileri",
    pillar_3_desc: "ESP32, IR ve gaz sensörleri, C# veri akışları ve Flutter mobil arayüzleri ile uçtan uca çalışan IoT prototipleri.",
    pillar_4_title: "İleri Matematik & Fizik Temelleri",
    pillar_4_desc: "AP Physics 1, AP Physics C ve TÜBİTAK astronomi müfredatıyla derinleşen matematiksel modelleme gücü.",

    // Projects Section
    projects_tag: "PORTFOLYO",
    projects_title: "Öne Çıkan Projeler & Araştırmalar",
    projects_desc: "Hesaplamalı fizikten gömülü sistemlere ve afet çözümlerine kadar inşa ettiğim projeler.",
    filter_all: "Tüm Projeler",
    filter_physics: "Fizik & Simülasyon",
    filter_software: "Yazılım & IoT",
    filter_civic: "Sosyal İnovasyon",
    cat_physics: "Hesaplamalı Fizik",
    cat_software: "Yazılım & Donanım",
    cat_iot: "IoT & Erken Uyarı",
    cat_civic: "Sosyal İnovasyon & Mimari",
    arch_title: "Mimari Bileşenler:",
    btn_view_github: "Depoyu Gör",

    // Project 1
    p1_title: "N-Body Gravitational Simulation",
    p1_desc: "Çoklu gök cisminin birbirine uyguladığı Newton kütleçekim kuvvetlerini sayısal integrasyon algoritmalarıyla (Euler / Verlet) adım adım hesaplayan ve Pygame ile görselleştiren modüler fizik simülasyonu.",

    // Project 2
    p2_title: "Toprak Analiz & Akıllı Sensör Uygulaması",
    p2_desc: "Sensörlerden gelen pH, nem ve sıcaklık ölçümlerini C# veri hattı üzerinden alıp Android mobil uygulamada işleyen; geçmiş analiz kartları, istatistikler ve akıllı Türkçe tarım önerileri sunan tam teşekküllü mobil sistem.",

    // Project 3
    p3_title: "Orman Yangını Erken Tespit & Tampon Sulama İstasyonu",
    p3_desc: "Orman yangınlarını duman ve alev büyümeden önce algılayan bağımsız istasyon konsepti. Galvaniz çelik ve fiberglas kule mimarisi üzerine kurulu ESP32, IR alev sensörü, yanıcı gaz sensörü ve nem sensörleriyle otonom tampon sulama savunması.",

    // Project 4
    p4_title: "Modüler Prefabrik Sağlık Birimleri",
    p4_desc: "6 Şubat depremi sonrasında afet bölgelerindeki gençlerin ve halkın sağlık ile psikososyal ihtiyaçlarına hızlı yanıt veren yenilikçi, minimalist ve hızlı konuşlandırılabilir prefabrik sahra hastanesi vizyonu ve tasarımı.",

    // Academics & Skills
    acad_tag: "YOL HARİTASI & YETKİNLİKLER",
    acad_title: "Akademik Temeller ve Teknik Cephanelik",
    acad_desc: "Teorik fizik derinliği ile modern yazılım araçlarının kesişimi.",
    sk_phys_title: "Fizik & Matematik",
    sk_phys_sub: "Analitik ve kuramsal temel",
    sk_ap1: "Newton mekaniği, tork, açısal momentum ve dalga mekaniği temelleri tamamlandı.",
    sk_apc: "Diferansiyel ve integral temelli ileri klasik mekanik hazırlığı.",
    sk_tubitak: "Olimpiyat seviyesinde gök mekaniği, ışınım fiziği ve küresel astronomi çalışmaları.",
    sk_comp_math: "Sayısal integral, diferansiyel denklem çözücüleri ve vektörel dinamik.",
    sk_code_title: "Yazılım & Hesaplama",
    sk_code_sub: "Algoritmalar ve araçlar",
    sk_py: "Bilimsel simülasyonlar, sanal ortamlar (venv), nesne yönelimli modüler mimari.",
    sk_csharp: "Donanım veri akışı, dosya yönetimi ve sistem araçları entegrasyonu.",
    sk_flutter: "Çapraz platform mobil arayüzler, sensör grafikleme, durum yönetimi.",
    sk_git: "Versiyon kontrolü, CI/CD mantığı, VS Code AI ajanları ve komut satırı yetkinliği.",
    sk_hw_title: "Donanım & Vizyon",
    sk_hw_sub: "Prototipler ve araştırma",
    sk_esp: "IR alev sensörü, yanıcı gaz, bağıl nem ve pH probları ile telemetri tasarımı.",
    sk_space: "Uzay verisi odaklı problem çözme, takım çalışmaları ve proje geliştirme ilgisi.",
    sk_photo: "Canon EOS 550D ile optik diyafram, enstantane, odak uzaklığı ve görsel veri işleme.",
    sk_lang: "Türkçe (Ana dil) ve C1 seviyesinde İngilizce ile uluslararası akademik kaynak takibi.",

    // Interests
    int_tag: "LABORATUVARIN ÖTESİNDE",
    int_title: "Kişisel İlgi Alanları & Çok Yönlülük",
    int_guitar_title: "Gitar & Müzik",
    int_guitar_desc: "Müzik, analitik düşünceyi yaratıcı ifadeyle buluşturur. Gitar çalmak, yoğun araştırma ve kodlama seansları arasında zihnimi dinlendiren ve harmoni duygusunu besleyen en büyük tutkularımdan biri.",
    int_tennis_title: "Tenis & Spor",
    int_tennis_desc: "Fiziksel dayanıklılık, anlık açı ve momentum hesapları ve kortta taktiksel strateji. Tenis oynamak disiplin, yüksek odak ve çeviklik yeteneğimi diri tutar.",
    int_photo_title: "Fotoğrafçılık & Optik",
    int_photo_desc: "Canon EOS 550D makinemle ışığın, pozlamanın ve lens optiğinin inceliklerini keşfetmek; anı dondurmanın ötesinde optik fiziğini pratik olarak deneyimlememi sağlıyor.",

    // Blog Preview Section
    blog_tag: "BİLİMSEL BLOG",
    blog_title: "Son Araştırma Notları & Yazılar",
    blog_desc: "Hesaplamalı fizik simülasyonları, gök mekaniği ve yazılım üzerine teknik notlarım.",
    btn_more_blog: "Tüm Yazıları Gör",
    featured_blog_1: "post-1",
    featured_blog_2: "post-2",
    featured_blog_3: "post-3",

    // Contact
    contact_tag: "İLETİŞİM",
    contact_title: "Birlikte Yeni Şeyler Keşfedelim",
    contact_desc: "Astrofizik araştırmaları, simülasyon projeleri, yarışma takımları, akademik mentorluk veya yazılım geliştirme konularında benimle doğrudan iletişime geçebilirsiniz.",
    email_label: "E-Posta",
    loc_label: "Konum",
    form_name: "Adınız Soyadınız",
    form_subject: "Konu",
    form_msg: "Mesajınız",
    form_name_ph: "Adınız",
    form_subj_ph: "Örn: Araştırma veya Proje İş Birliği",
    form_msg_ph: "Mesajınızı buraya yazabilirsiniz...",
    btn_send_email: "E-Posta Gönder",

    // Footer
    quote_text: '"Bir yerlerde inanılmaz bir şey keşfedilmeyi bekliyor."',
    footer_rights: "Tüm hakları saklıdır.",
    back_top: "Başa Dön ↑"
  },

  en: {
    // Document & Meta
    doc_title: "Aren Azat | Astrophysics, Computational Physics & Code",
    sig_name: "Aren Azat",

    // Navigation
    nav_about: "About",
    nav_projects: "Projects",
    nav_academics: "Academics & Skills",
    nav_interests: "Interests",
    nav_blog: "Blog",
    nav_contact: "Contact",

    // Hero Section
    hero_status: "High School Researcher & Developer",
    hero_title: 'Exploring the Universe with <span class="text-gradient">Astrophysics, Simulations & Code.</span>',
    hero_desc: "Hello, I'm Aren Azat. High school student in Antalya, Turkey. I work on astrophysics, gravitational N-body simulations, embedded systems, and software engineering—transforming scientific curiosity into running code and applied research.",
    tag_astro: "Astrophysics & Astronomy",
    tag_sim: "Computational Physics",
    tag_aero: "Aerospace & Space",
    tag_code: "Python & Flutter",
    cta_projects: "Explore Projects",
    cta_contact: "Get in Touch",
    stat_sim_label: "Gravitational Simulation",
    stat_physics_label: "Advanced Physics & Mechanics",
    stat_loc_label: "Junior / 11th Grade",
    badge_research: "Research & Observation",
    badge_engineering: "Engineering Code",

    // About Section
    about_tag: "ABOUT ME",
    about_title: "Scientific Curiosity and Applied Research",
    about_story_title: "Understanding the Universe, Bringing Equations to Life",
    about_p1: "Since childhood, I have held a deep fascination for astronomy, astrophysics, and mechanical systems. To me, science is not merely memorizing formulas from textbooks; it is about bringing them to life through computational algorithms, testing them through simulations, and engineering solutions to real-world challenges.",
    about_p2: "While completing high school, I am actively studying at the level of AP Physics C and TÜBİTAK Astronomy & Astrophysics Olympiads, alongside developing numerical physics simulations in Python and modern software tools. My long-term ambition is to study astrophysics and aerospace engineering at a leading university abroad, ultimately contributing to humanity's exploration of the cosmos through NASA and international research institutions.",
    about_p3: "I thrive on practical implementation. Whether architecting N-Body gravitational algorithms or designing hardware-based early wildfire detection stations, I break systems into core components and construct them with clean, modular architecture.",
    sig_title: "High School Student & Researcher — Antalya, Turkey",
    pillar_1_title: "Astrophysics & Computational Simulation",
    pillar_1_desc: "Orbital mechanics, multi-body gravitational interactions (N-Body), and modeling reality with numerical step integrators.",
    pillar_2_title: "Aerospace Engineering",
    pillar_2_desc: "Applying physical laws to aerospace vehicles; deeply fascinated by orbital dynamics, propulsion, and aerodynamics.",
    pillar_3_title: "Embedded Systems & Sensor Technologies",
    pillar_3_desc: "End-to-end IoT prototypes built with ESP32, IR & gas sensors, C# data pipelines, and Flutter mobile interfaces.",
    pillar_4_title: "Advanced Math & Physics Foundations",
    pillar_4_desc: "Rigorous mathematical modeling powered by AP Physics 1, AP Physics C, and national astronomy olympiad training.",

    // Projects Section
    projects_tag: "PORTFOLIO",
    projects_title: "Featured Projects & Research",
    projects_desc: "From computational physics simulations to IoT environmental nodes and humanitarian solutions.",
    filter_all: "All Projects",
    filter_physics: "Physics & Sim",
    filter_software: "Software & IoT",
    filter_civic: "Social Innovation",
    cat_physics: "Computational Physics",
    cat_software: "Software & Hardware",
    cat_iot: "IoT & Early Warning",
    cat_civic: "Civic Tech & Architecture",
    arch_title: "Architecture Modules:",
    btn_view_github: "View Repo",

    // Project 1
    p1_title: "N-Body Gravitational Simulation",
    p1_desc: "A modular numerical physics simulation built in Python with Pygame, calculating step-by-step Newtonian gravitational forces among celestial bodies using numerical integration (Euler / Verlet).",

    // Project 2
    p2_title: "Soil Analysis & Smart Sensor Platform",
    p2_desc: "An end-to-end mobile system ingesting real-time soil pH, humidity, and temperature data via a C# pipeline into an Android Flutter app, featuring analytics cards, graphs, and localized agricultural recommendations.",

    // Project 3
    p3_title: "Forest Fire Early Detection & Buffer Irrigation Station",
    p3_desc: "Autonomous environmental protection station designed to detect wildfire threats before flame propagation. Houses ESP32, IR flame sensors, gas and humidity sensors within a galvanized steel & fiberglass tower with automated buffer irrigation valves.",

    // Project 4
    p4_title: "Modular Prefabricated Healthcare Clinics",
    p4_desc: "An innovative, minimalist, and rapid-deployment modular field hospital concept conceived following the February 6 earthquakes to serve psychosocial and medical needs of youth and impacted communities.",

    // Academics & Skills
    acad_tag: "ROADMAP & SKILLS",
    acad_title: "Academic Foundations & Technical Arsenal",
    acad_desc: "Where rigorous theoretical physics meets modern software engineering.",
    sk_phys_title: "Physics & Mathematics",
    sk_phys_sub: "Analytical and theoretical core",
    sk_ap1: "Classical mechanics, torque, angular momentum, and wave dynamics foundations completed.",
    sk_apc: "Calculus-based advanced mechanics preparation with differential equations.",
    sk_tubitak: "National Astronomy & Astrophysics Olympiad training: celestial mechanics, radiative transfer & spherical astronomy.",
    sk_comp_math: "Numerical integration schemes, ODE solvers, and vector dynamics.",
    sk_code_title: "Software & Computing",
    sk_code_sub: "Algorithms and development tools",
    sk_py: "Scientific simulations, virtual environments (venv), object-oriented modular design.",
    sk_csharp: "Hardware data ingestion, file management, and system tool integration.",
    sk_flutter: "Cross-platform mobile interfaces, dynamic sensor charting, state management.",
    sk_git: "Version control, CI/CD fundamentals, VS Code AI coding agents, and terminal command line.",
    sk_hw_title: "Hardware & Vision",
    sk_hw_sub: "Prototypes and research goals",
    sk_esp: "ESP32 telemetry with IR flame, combustible gas, relative humidity, and pH probes.",
    sk_space: "Space data problem-solving, collaborative research teams, and NASA Space Apps Challenge interest.",
    sk_photo: "Canon EOS 550D exploration of aperture, exposure, focal length, and optical data capture.",
    sk_lang: "Native Turkish and C1-level English fluency for consuming international academic literature.",

    // Interests
    int_tag: "BEYOND THE LAB",
    int_title: "Personal Interests & Balance",
    int_guitar_title: "Guitar & Music",
    int_guitar_desc: "Music bridges analytical thinking with creative expression. Playing the guitar is one of my greatest passions to refresh my mind and cultivate harmony between intensive research and coding sprints.",
    int_tennis_title: "Tennis & Athletics",
    int_tennis_desc: "Physical endurance, split-second angle and momentum calculations, and tactical agility on court. Tennis keeps my discipline, focus, and reflexes razor sharp.",
    int_photo_title: "Photography & Optics",
    int_photo_desc: "Exploring light, exposure mechanics, and lens optics with my Canon EOS 550D—experiencing the physical principles of optics hands-on beyond capturing moments.",

    // Blog Preview Section
    blog_tag: "RESEARCH BLOG",
    blog_title: "Latest Research Notes & Articles",
    blog_desc: "Technical notes, simulations, and discoveries in astrophysics and computing.",
    btn_more_blog: "View All Articles",
    featured_blog_1: "post-1",
    featured_blog_2: "post-2",
    featured_blog_3: "post-3",

    // Contact
    contact_tag: "CONTACT",
    contact_title: "Let's Discover Something New Together",
    contact_desc: "Feel free to reach out directly regarding astrophysics research, simulation projects, hackathon teams, academic mentorship, or software collaborations.",
    email_label: "Email",
    loc_label: "Location",
    form_name: "Full Name",
    form_subject: "Subject",
    form_msg: "Your Message",
    form_name_ph: "Your Name",
    form_subj_ph: "e.g. Research or Project Collaboration",
    form_msg_ph: "Write your message here...",
    btn_send_email: "Send Email",

    // Footer
    quote_text: '"Somewhere, something incredible is waiting to be known."',
    footer_rights: "All rights reserved.",
    back_top: "Back to Top ↑"
  }
};

// ==========================================================================
// 2. STATE & LANGUAGE TOGGLE CONTROLLER
// ==========================================================================
let currentLang = localStorage.getItem('aren_site_lang') || 'tr';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('aren_site_lang', lang);
  document.documentElement.lang = lang;

  // Update button active classes
  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  if (btnTr && btnEn) {
    if (lang === 'tr') {
      btnTr.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnTr.classList.remove('active');
    }
  }

  // Update text for all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Check if text contains HTML markup (e.g. text-gradient span)
      if (translations[lang][key].includes('<')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update input placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update HTML Document Title
  if (translations[lang] && translations[lang].doc_title) {
    document.title = translations[lang].doc_title;
  } else if (lang === 'tr') {
    document.title = "Aren Azat | Astrofizik, Hesaplamalı Fizik & Yazılım";
  } else {
    document.title = "Aren Azat | Astrophysics, Computational Physics & Code";
  }

  // Re-render homepage blog cards with active language
  renderHomeBlogPosts();
}

// ==========================================================================
// 2.1 HOMEPAGE FEATURED BLOG SHOWCASE ENGINE
// ==========================================================================
let homePosts = [];

function renderHomeBlogPosts() {
  const container = document.getElementById('home-blog-grid');
  if (!container) return;

  const langObj = (translations && translations[currentLang]) ? translations[currentLang] : (translations.tr || {});
  
  // Featured IDs selected via admin panel or defaults
  const featuredIds = [
    langObj.featured_blog_1 || 'post-1',
    langObj.featured_blog_2 || 'post-2',
    langObj.featured_blog_3 || 'post-3'
  ];

  let selectedPosts = [];
  featuredIds.forEach(id => {
    const found = homePosts.find(p => p.id === id);
    if (found && !selectedPosts.some(sp => sp.id === found.id)) {
      selectedPosts.push(found);
    }
  });

  // If fewer than 3 found from selected IDs, supplement with available posts
  if (selectedPosts.length < 3) {
    homePosts.forEach(p => {
      if (selectedPosts.length < 3 && !selectedPosts.some(sp => sp.id === p.id)) {
        selectedPosts.push(p);
      }
    });
  }

  if (selectedPosts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2.5rem;">
        Henüz blog yazısı bulunmuyor.
      </div>
    `;
    return;
  }

  const readBtnText = currentLang === 'tr' ? 'Yazıyı Oku' : 'Read Article';

  container.innerHTML = selectedPosts.map(post => {
    return `
      <article class="blog-card" data-id="${escapeHtml(post.id)}">
        <div class="blog-card-header">
          <span class="blog-pill-category">${escapeHtml(post.category || 'Blog')}</span>
          <span class="blog-meta-time">${escapeHtml(post.readTime || '')}</span>
        </div>
        <h3 class="blog-card-title">${escapeHtml(post.title)}</h3>
        <p class="blog-card-excerpt">${escapeHtml(post.summary || '')}</p>
        <div class="blog-card-footer">
          <span class="blog-meta-date">${escapeHtml(post.date || '')}</span>
          <a href="./blog.html?post=${encodeURIComponent(post.id)}" class="btn-read-post">
            <span>${readBtnText}</span>
            <span class="arrow">→</span>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

async function initHomeBlog() {
  try {
    const res = await fetch('./data/posts.json?v=' + Date.now());
    if (res.ok) {
      homePosts = await res.json();
    }
  } catch (e) {
    console.warn('Could not fetch posts.json for homepage', e);
  }

  // Overlay local draft posts from admin panel
  const localPosts = localStorage.getItem('aren_custom_posts');
  if (localPosts) {
    try {
      const parsed = JSON.parse(localPosts);
      if (Array.isArray(parsed) && parsed.length > 0) {
        homePosts = parsed;
      }
    } catch (e) {}
  }

  renderHomeBlogPosts();
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Dynamically load content from localStorage and content.json
async function loadDynamicContent() {
  // 1. Merge localStorage custom edits (instant preview from admin panel)
  const localDraft = localStorage.getItem('aren_custom_translations');
  if (localDraft) {
    try {
      const parsed = JSON.parse(localDraft);
      if (parsed.tr) Object.assign(translations.tr, parsed.tr);
      if (parsed.en) Object.assign(translations.en, parsed.en);
      setLanguage(currentLang);
    } catch (e) {
      console.warn('Local draft parsing error:', e);
    }
  }

  // 2. Fetch live data/content.json if available
  try {
    const res = await fetch('./data/content.json?v=' + Date.now());
    if (res.ok) {
      const liveData = await res.json();
      if (liveData.tr) Object.assign(translations.tr, liveData.tr);
      if (liveData.en) Object.assign(translations.en, liveData.en);
      // If local draft exists, let local draft take precedence over fetched content
      if (localDraft) {
        try {
          const parsed = JSON.parse(localDraft);
          if (parsed.tr) Object.assign(translations.tr, parsed.tr);
          if (parsed.en) Object.assign(translations.en, parsed.en);
        } catch (e) {}
      }
      setLanguage(currentLang);
    }
  } catch (err) {
    // Graceful offline fallback to bundled translations dictionary
  }
}

// ==========================================================================
// 3. PROJECT FILTERING ENGINE
// ==========================================================================
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Set active button
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter cards
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ==========================================================================
// 4. NAVBAR SCROLL & ACTIVE LINK SPY
// ==========================================================================
function initNavbar() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link highlighting based on scroll position
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// 5. MOBILE DRAWER NAVIGATION
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  toggleBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// 6. CONTACT FORM INTERACTION (Opens native email or mailto)
// ==========================================================================
function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('sender-name');
  const subjectInput = document.getElementById('sender-subject');
  const messageInput = document.getElementById('sender-message');

  const name = nameInput ? nameInput.value.trim() : '';
  const subject = subjectInput ? subjectInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  const mailtoBody = encodeURIComponent(`İsim: ${name}\n\nMesaj:\n${message}`);
  const mailtoSubject = encodeURIComponent(`[İletişim] ${subject} - ${name}`);
  const mailtoUrl = `mailto:arenazat@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Open email client
  window.location.href = mailtoUrl;

  // Friendly alert
  const alertMsg = currentLang === 'tr' 
    ? 'E-posta uygulamanız açılıyor. Aren Azat ile iletişime geçtiğiniz için teşekkürler!' 
    : 'Your email application is opening. Thank you for reaching out to Aren Azat!';
  alert(alertMsg);

  return false;
}

// ==========================================================================
// 7. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Setup Language Switcher Buttons
  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  if (btnTr) btnTr.addEventListener('click', () => setLanguage('tr'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

  // Initialize Language
  setLanguage(currentLang);

  // Load custom edits or live content asynchronously
  loadDynamicContent();

  // Initialize homepage featured blog showcase
  initHomeBlog();

  // Initialize UI features
  initNavbar();
  initProjectFilters();
  initMobileMenu();
});
