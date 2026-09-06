/**
 * AREN AZAT — ACADEMIC PORTFOLIO ENGINE (v2)
 * English-first young researcher website with complete bilingual dictionary (EN/TR),
 * expandable research project cards, scroll animations, dynamic filters, and contact handling.
 */

// ==========================================================================
// 1. COMPREHENSIVE TRANSLATION DICTIONARY (EN & TR)
// ==========================================================================
const translations = {
  en: {
    // Document Title
    doc_title: "Aren Azat | Computational Physics, Astrophysics & Aerospace",

    // Navigation
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "Projects",
    nav_notes: "Research Notes",
    nav_education: "Education",
    nav_achievements: "Milestones",
    nav_contact: "Contact",

    // Hero Section (Repositioned Young Researcher)
    hero_status: "Young Researcher & Computational Developer",
    hero_title: 'I build simulations, software, and experiments to <span class="text-gradient">understand physical systems.</span>',
    hero_subtitle: "High school student exploring astrophysics, computational physics, and aerospace engineering.",
    tag_astro: "Computational Astrophysics",
    tag_sim: "N-Body Dynamics",
    tag_aero: "Orbital Mechanics",
    tag_code: "Scientific Computing",
    cta_work: "Explore My Work",
    cta_research: "Research Interests",
    cta_github: "GitHub",
    badge_research: "Scientific Inquiry",
    badge_engineering: "Applied Simulation",

    // Currently Working On Strip
    working_tag: "CURRENTLY WORKING ON",
    working_1_title: "N-Body Simulation",
    working_1_detail: "Improving numerical stability and analyzing energy conservation under leapfrog integration.",
    working_2_title: "Astronomical Data Analysis",
    working_2_detail: "Exploring computational methods for observational and planetary datasets.",
    working_3_title: "Physics & Mathematics",
    working_3_detail: "Deepening calculus-based mechanics and ordinary differential equation (ODE) modeling.",

    // About Section
    about_tag: "ACADEMIC VISION",
    about_title: "Curiosity, Modeling & Physical Intuition",
    about_story_title: "From Equations on Paper to Interactive Systems",
    about_p1: "Science to me is not about memorizing static equations from textbooks; it is about bringing them to life through numerical algorithms, stress-testing hypotheses in simulations, and engineering tools that expose how the physical universe actually behaves.",
    about_p2: "While in high school, I dedicate my self-guided study to AP Physics C and national Astronomy & Astrophysics Olympiad topics, alongside developing numerical physics programs in Python. My goal is to study astrophysics and aerospace engineering at a top-tier international university, working toward contributing to planetary science and space mission research.",
    about_p3: "I value rigor, transparent methodology, and hands-on implementation. Whether calculating celestial gravitational dynamics or designing sensor telemetry, I break problems down to first principles.",
    sig_name: "Aren Azat",
    sig_title: "High School Researcher — Antalya, Turkey",
    pillar_1_title: "Computational Astrophysics",
    pillar_1_desc: "Simulating gravitational N-body systems, orbital dynamics, and numerical integrator fidelity.",
    pillar_2_title: "Aerospace Engineering",
    pillar_2_desc: "Applying kinematics, trajectory calculation, and mechanical principles to flight systems.",
    pillar_3_title: "Embedded Systems & Telemetry",
    pillar_3_desc: "ESP32 sensor platforms, hardware pipelines, and real-time environmental data acquisition.",
    pillar_4_title: "Rigorous Mathematics",
    pillar_4_desc: "Calculus-based classical mechanics, differential equations, and computational linear algebra.",

    // Research Section
    research_tag: "RESEARCH DOMAINS",
    research_title: "Scientific Questions & Investigation Areas",
    research_area_1_title: "Computational Astrophysics",
    research_area_1_desc: "Multi-body gravitational interactions, numerical integration schemes, stability of planetary architectures.",
    research_area_2_title: "Astrophysics & Exoplanets",
    research_area_2_desc: "Stellar mechanics, planetary transit dynamics, and astrophysical radiation principles.",
    research_area_3_title: "Aerospace & Trajectory Dynamics",
    research_area_3_desc: "Orbital mechanics, delta-v approximations, transfer orbits, and physical modeling.",
    rq_label: "Current Research Question",
    rq_text: "“How does numerical integration accuracy affect the long-term stability and energy conservation of simulated gravitational systems?”",

    // Projects Section
    projects_tag: "RESEARCH PROJECTS",
    projects_title: "Simulations, Hardware & Explorations",
    projects_desc: "Projects presented as active scientific investigations with documented methodologies and ongoing inquiries.",
    filter_all: "All Projects",
    filter_physics: "Astrophysics & Sim",
    filter_software: "Software & IoT",
    filter_civic: "Civic & Architecture",
    btn_toggle_open: "Research Details",
    btn_toggle_close: "Hide Details",
    btn_view_github: "Repository",
    label_status: "Status:",
    label_field: "Field:",
    label_done: "What I've Done:",
    label_wip: "What I'm Working On:",

    // Project 1
    p1_status: "Active Research Project",
    p1_date: "Started 2026",
    p1_field: "Computational Astrophysics",
    p1_title: "N-Body Gravitational Simulation",
    p1_desc: "A modular celestial mechanics engine modeling Newtonian gravitational interactions among multiple bodies through discrete numerical integration with interactive 2D visualization.",
    p1_done: "Implemented Euler and Verlet integrators, collision handling logic, and real-time Pygame rendering pipeline.",
    p1_wip: "Benchmarking symplectic Leapfrog integrators, measuring cumulative energy drift over 10^5 steps, and optimizing step size.",

    // Project 2
    p2_status: "Completed Prototype",
    p2_date: "2025",
    p2_field: "Software & Sensor Telemetry",
    p2_title: "Soil Analysis & Smart Agronomy Platform",
    p2_desc: "An end-to-end telemetry system capturing real-time pH, moisture, and temperature data via a C# pipeline into a cross-platform Flutter application with automated analytical charts.",
    p2_done: "Constructed sensor acquisition protocol, C# processing backend, Flutter user interface, and historical query cache.",
    p2_wip: "Calibrating multi-probe analog sensor drift over continuous multi-day data runs.",

    // Project 3
    p3_status: "In Progress / Concept",
    p3_date: "2025",
    p3_field: "IoT & Early Warning Systems",
    p3_title: "Wildfire Early Warning & Buffer Irrigation Station",
    p3_desc: "Autonomous environmental protection tower concept designed to detect flame and combustible gas signatures prior to forest fire escalation, triggering perimeter dampening buffers.",
    p3_done: "Tower structural blueprints, ESP32 telemetry testbed, IR flame detector and gas sensor integration.",
    p3_wip: "Solenoid valve triggering automation and low-power telemetry protocol testing.",

    // Project 4
    p4_status: "Design Specification",
    p4_date: "2024",
    p4_field: "Civic Tech & Rapid Architecture",
    p4_title: "Modular Prefabricated Healthcare Clinics",
    p4_desc: "A rapid-deployment humanitarian clinic blueprint designed following the February 6 earthquakes, optimizing spatial layouts for triage, youth psychosocial support, and medical response.",
    p4_done: "Drafted modular spatial specs, container footprint layouts, and emergency triage operational flow.",
    p4_wip: "Reviewing lightweight structural composites and off-grid solar-thermal integration plans.",

    // Research Notes
    notes_tag: "RESEARCH NOTES",
    notes_title: "Scientific Notes, Failures & Open Inquiries",
    notes_desc: "Documenting transparent thinking, numerical experiments, and what I don't fully understand yet.",
    note_1_cat: "Numerical Methods",
    note_1_title: "Why Euler Integration Fails for Long-Term Orbital Simulations",
    note_1_date: "Feb 2026",
    note_2_cat: "Astrophysics",
    note_2_title: "What I Learned Building My First Gravitational N-Body Engine",
    note_2_date: "Jan 2026",
    note_3_cat: "Open Reflection",
    note_3_title: "What I Don't Understand About Astrophysics Yet",
    note_3_date: "Ongoing",
    note_read_more: "Read Note →",

    // Education
    edu_tag: "ACADEMIC PATHWAY",
    edu_title: "Curriculum & Self-Directed Rigor",
    edu_1_period: "2023 — Present",
    edu_1_title: "High School Education (Grade 11)",
    edu_1_sub: "Antalya, Turkey — Advanced STEM concentration with a focus on physics, mathematics, and computing.",
    edu_2_period: "2025 — 2026",
    edu_2_title: "AP Physics C: Mechanics Preparation",
    edu_2_sub: "Calculus-based classical mechanics, rotational dynamics, work-energy theorems, and oscillatory systems.",
    edu_3_period: "2024 — 2025",
    edu_3_title: "AP Physics 1: Algebra-Based Foundation",
    edu_3_sub: "Rigorous analytical problem-solving, kinematics, Newtonian dynamics, and simple harmonic motion.",
    edu_4_period: "2025 — Present",
    edu_4_title: "TÜBİTAK Astronomy & Astrophysics Olympiad Studies",
    edu_4_sub: "Independent preparation covering spherical astronomy, celestial mechanics, Keplerian orbits, and stellar radiation.",

    // Achievements
    achievements_tag: "MILESTONES",
    achievements_title: "Competitions & Verified Milestones",
    ach_1_title: "NASA Space Apps Challenge",
    ach_1_desc: "Registered participant preparing for the upcoming global hackathon in space exploration and earth observation.",
    ach_1_year: "Upcoming Participant — 2026",
    ach_2_title: "TÜBİTAK National Astronomy Studies",
    ach_2_desc: "Dedicated self-guided preparation and competitive problem solving in astronomical calculations and orbital systems.",
    ach_2_year: "2025 — 2026 Active",

    // Contact
    contact_tag: "CONTACT",
    contact_title: "Let's Connect & Collaborate",
    contact_desc: "I welcome discussions on astrophysics simulations, computational physics, research mentorship, or collaborative projects.",
    email_label: "Email",
    loc_label: "Location",
    loc_val: "Antalya, Turkey",
    form_name: "Full Name",
    form_subject: "Subject",
    form_msg: "Message",
    form_name_ph: "Your Name",
    form_subj_ph: "e.g. Research inquiry or collaboration",
    form_msg_ph: "Write your message or inquiry here...",
    btn_send_email: "Send Email",

    // Footer
    quote_text: '"Somewhere, something incredible is waiting to be known."',
    footer_rights: "All rights reserved.",
    back_top: "Back to Top ↑"
  },

  tr: {
    // Document Title
    doc_title: "Aren Azat | Hesaplamalı Fizik, Astrofizik & Yazılım",

    // Navigation
    nav_about: "Hakkımda",
    nav_research: "Araştırma",
    nav_projects: "Projeler",
    nav_notes: "Araştırma Notları",
    nav_education: "Eğitim",
    nav_achievements: "Kilometre Taşları",
    nav_contact: "İletişim",

    // Hero Section
    hero_status: "Genç Araştırmacı & Hesaplamalı Geliştirici",
    hero_title: 'Fiziksel sistemleri anlamak için <span class="text-gradient">simülasyonlar, yazılımlar ve deneyler inşa ediyorum.</span>',
    hero_subtitle: "Astrofizik, hesaplamalı fizik ve havacılık-uzay alanlarını keşfeden lise öğrencisi.",
    tag_astro: "Hesaplamalı Astrofizik",
    tag_sim: "N-Body Dinamiği",
    tag_aero: "Yörünge Mekaniği",
    tag_code: "Bilimsel Hesaplama",
    cta_work: "Çalışmalarımı İncele",
    cta_research: "Araştırma Alanları",
    cta_github: "GitHub",
    badge_research: "Bilimsel Araştırma",
    badge_engineering: "Uygulamalı Simülasyon",

    // Currently Working On Strip
    working_tag: "GÜNCEL ÇALIŞMALAR",
    working_1_title: "N-Body Simülasyonu",
    working_1_detail: "Leapfrog integrasyonunda sayısal kararlılığı artırma ve enerji korunum analizleri.",
    working_2_title: "Astronomik Veri Analizi",
    working_2_detail: "Gözlemsel ve gezegensel veri kümeleri için hesaplamalı yaklaşımlar araştırma.",
    working_3_title: "Fizik & Matematik",
    working_3_detail: "Kalkülüs temelli mekanik ve diferansiyel denklem modellemelerini derinleştirme.",

    // About Section
    about_tag: "AKADEMİK VİZYON",
    about_title: "Merak, Modelleme ve Fiziksel Sezgi",
    about_story_title: "Kağıttaki Denklemlerden Yaşayan Sistemlere",
    about_p1: "Benim için bilim, ders kitaplarındaki formülleri ezberlemek değil; onları sayısal algoritmalarla hayata geçirmek, simülasyonlarda sınamak ve fiziksel evrenin gerçekte nasıl çalıştığını ortaya çıkaran araçlar inşa etmektir.",
    about_p2: "Lise eğitimime devam ederken AP Physics C ve ulusal Astronomi & Astrofizik Olimpiyatı konularına çalışıyor, Python ile sayısal fizik yazılımları geliştiriyorum. Uzun vadeli hedefim; dünyanın önde gelen üniversitelerinden birinde astrofizik ve havacılık-uzay eğitimi alarak uzay araştırmalarına katkıda bulunmaktır.",
    about_p3: "Titizliğe, açık metodolojiye ve bizzat kodlamaya değer veriyorum. Kütleçekim simülasyonlarından sensör telemetrilerine kadar her problemi temel fizik ilkelerine indirgeyerek çözüyorum.",
    sig_name: "Aren Azat",
    sig_title: "Lise Öğrencisi & Araştırmacı — Antalya, Türkiye",
    pillar_1_title: "Hesaplamalı Astrofizik",
    pillar_1_desc: "N-body çekim etkileşimleri, yörünge mekaniği ve sayısal integratör doğruluğu.",
    pillar_2_title: "Havacılık & Uzay Mühendisliği",
    pillar_2_desc: "Kinematik, yörünge hesaplamaları ve mekanik prensiplerin uçuş sistemlerine uygulanması.",
    pillar_3_title: "Gömülü Sistemler & Telemetri",
    pillar_3_desc: "ESP32 sensör platformları, donanım veri akışı ve gerçek zamanlı çevresel ölçümler.",
    pillar_4_title: "İleri Matematik & Fizik",
    pillar_4_desc: "Türev-integral temelli klasik mekanik, diferansiyel denklemler ve hesaplamalı matematik.",

    // Research Section
    research_tag: "ARAŞTIRMA ALANLARI",
    research_title: "Bilimsel Sorular & İnceleme Konuları",
    research_area_1_title: "Hesaplamalı Astrofizik",
    research_area_1_desc: "Çoklu cisim çekim etkileşimleri, sayısal integrasyon yöntemleri ve gezegen sistemlerinin kararlılığı.",
    research_area_2_title: "Astrofizik & Ötegezegenler",
    research_area_2_desc: "Yıldız mekaniği, gezegen geçiş dinamikleri ve astrofiziksel ışınım prensipleri.",
    research_area_3_title: "Havacılık & Yörünge Dinamiği",
    research_area_3_desc: "Yörünge mekaniği, delta-v yaklaşımları, transfer yörüngeleri ve fiziksel modelleme.",
    rq_label: "Güncel Araştırma Sorusu",
    rq_text: "“Sayısal integrasyon doğruluğu, simüle edilen kütleçekim sistemlerinin uzun vadeli kararlılığını ve enerji korunumunu nasıl etkiler?”",

    // Projects Section
    projects_tag: "ARAŞTIRMA PROJELERİ",
    projects_title: "Simülasyonlar, Donanım & Araştırmalar",
    projects_desc: "Bitmiş sıradan ödevler yerine yaşayan bilimsel süreçler ve belgelenmiş metodolojiler.",
    filter_all: "Tüm Projeler",
    filter_physics: "Astrofizik & Sim",
    filter_software: "Yazılım & IoT",
    filter_civic: "Sosyal & Mimari",
    btn_toggle_open: "Araştırma Detayları",
    btn_toggle_close: "Detayları Gizle",
    btn_view_github: "Depoyu Gör",
    label_status: "Durum:",
    label_field: "Alan:",
    label_done: "Ne Yaptım:",
    label_wip: "Ne Üzerinde Çalışıyorum:",

    // Project 1
    p1_status: "Aktif Araştırma Projesi",
    p1_date: "Başlangıç: 2026",
    p1_field: "Hesaplamalı Astrofizik",
    p1_title: "N-Body Kütleçekim Simülasyonu",
    p1_desc: "Çoklu gök cisminin Newton kütleçekim etkileşimlerini ayrık sayısal integrasyonla adım adım modelleyen ve Pygame ile görselleştiren modüler fizik motoru.",
    p1_done: "Euler ve Verlet integratörleri kodlandı, çarpışma mantığı ve Pygame grafik hattı kuruldu.",
    p1_wip: "Semplektik Leapfrog integratörü test ediliyor, 10^5 adım boyunca enerji kaybı ölçülüyor ve adım boyutu optimize ediliyor.",

    // Project 2
    p2_status: "Tamamlanmış Prototip",
    p2_date: "2025",
    p2_field: "Yazılım & Sensör Telemetrisi",
    p2_title: "Toprak Analiz & Akıllı Tarım Platformu",
    p2_desc: "Toprak pH, nem ve sıcaklık verilerini C# veri hattı üzerinden Flutter mobil uygulamaya aktaran; grafiksel analizler ve öneriler sunan tam sistem.",
    p2_done: "Sensör okuma protokolü, C# işleme arka yüzü, Flutter arayüzü ve geçmiş veri önbelleği inşa edildi.",
    p2_wip: "Çok problu analog sensörlerin uzun süreli veri testlerinde sapma payları kalibre ediliyor.",

    // Project 3
    p3_status: "Geliştirme / Konsept",
    p3_date: "2025",
    p3_field: "IoT & Erken Uyarı Sistemleri",
    p3_title: "Orman Yangını Erken Uyarı & Tampon İstasyonu",
    p3_desc: "Orman yangınlarını alev ve duman büyümeden algılayıp çevre koruma sulama tamponlarını devreye sokan otonom istasyon konsepti.",
    p3_done: "Kule yapı planları, ESP32 prototipi, IR alev dedektörü ve yanıcı gaz sensörü entegrasyonu.",
    p3_wip: "Selenoid valf otomasyonu ve düşük güç tüketimli veri aktarım protokolleri test ediliyor.",

    // Project 4
    p4_status: "Tasarım Spesifikasyonu",
    p4_date: "2024",
    p4_field: "Sosyal İnovasyon & Sahra Mimarisi",
    p4_title: "Modüler Prefabrik Sağlık Birimleri",
    p4_desc: "6 Şubat depremi sonrasında afet bölgelerinde hızlı triyaj ve gençlerin psikososyal ihtiyaçları için tasarlanmış minimalist sahra kliniği konsepti.",
    p4_done: "Modüler yerleşim planı, konteyner mimarisi ve acil durum operasyon akışı çizildi.",
    p4_wip: "Hafif kompozit malzemeler ve bağımsız güneş-termal enerji entegrasyonları inceleniyor.",

    // Research Notes
    notes_tag: "ARAŞTIRMA NOTLARI",
    notes_title: "Bilimsel Düşünceler, Hatalar ve Açık Sorular",
    notes_desc: "Öğrenme sürecini, sayısal deneyleri ve henüz tam kavrayamadığım fiziksel noktaları şeffaflıkla paylaştığım notlar.",
    note_1_cat: "Sayısal Yöntemler",
    note_1_title: "Euler İntegrasyonu Neden Uzun Vadeli Yörünge Simülasyonlarında Başarısız Olur?",
    note_1_date: "Şubat 2026",
    note_2_cat: "Astrofizik",
    note_2_title: "İlk N-Body Simülasyonumu Geliştirirken Neler Öğrendim?",
    note_2_date: "Ocak 2026",
    note_3_cat: "Açık Düşünce",
    note_3_title: "Astrofizik Hakkında Henüz Anlamadığım Şeyler",
    note_3_date: "Sürekli Güncel",
    note_read_more: "Notu Oku →",

    // Education
    edu_tag: "AKADEMİK GELİŞİM",
    edu_title: "Müfredat & Bağımsız Çalışmalar",
    edu_1_period: "2023 — Günümüz",
    edu_1_title: "Lise Eğitimi (11. Sınıf)",
    edu_1_sub: "Antalya, Türkiye — Fizik, matematik ve programlama odaklı ileri fen müfredatı.",
    edu_2_period: "2025 — 2026",
    edu_2_title: "AP Physics C: Mechanics Hazırlığı",
    edu_2_sub: "Kalkülüs temelli klasik mekanik, dönme dinamiği, iş-enerji teoremleri ve salınım sistemleri.",
    edu_3_period: "2024 — 2025",
    edu_3_title: "AP Physics 1: Cebir Temelli Fizik",
    edu_3_sub: "Analitik problem çözme, kinematik, Newton mekaniği ve basit harmonik hareket temelleri.",
    edu_4_period: "2025 — Günümüz",
    edu_4_title: "TÜBİTAK Astronomi & Astrofizik Olimpiyat Çalışmaları",
    edu_4_sub: "Küresel astronomi, gök mekaniği, Kepler yörüngeleri ve yıldız ışınım fiziği üzerine bağımsız çalışmalar.",

    // Achievements
    achievements_tag: "KİLOMETRE TAŞLARI",
    achievements_title: "Yarışmalar ve Doğrulanmış Adımlar",
    ach_1_title: "NASA Space Apps Challenge",
    ach_1_desc: "Uzay araştırmaları ve yer gözlemi üzerine küresel hackathon için kayıtlı katılımcı adayı.",
    ach_1_year: "2026 — Katılımcı Adayı",
    ach_2_title: "TÜBİTAK Ulusal Astronomi Çalışmaları",
    ach_2_desc: "Gök mekaniği ve astronomik hesaplamalar üzerine düzenli olimpiyat hazırlık çalışmaları.",
    ach_2_year: "2025 — 2026 Aktif",

    // Contact
    contact_tag: "İLETİŞİM",
    contact_title: "Bağlantı Kuralım & İş Birliği Yapalım",
    contact_desc: "Astrofizik simülasyonları, hesaplamalı fizik, akademik mentorluk veya araştırma iş birlikleri için benimle doğrudan iletişime geçebilirsiniz.",
    email_label: "E-Posta",
    loc_label: "Konum",
    loc_val: "Antalya, Türkiye",
    form_name: "Adınız Soyadınız",
    form_subject: "Konu",
    form_msg: "Mesajınız",
    form_name_ph: "Adınız",
    form_subj_ph: "Örn: Araştırma veya Proje İletişimi",
    form_msg_ph: "Mesajınızı veya sorunuzu buraya yazabilirsiniz...",
    btn_send_email: "E-Posta Gönder",

    // Footer
    quote_text: '"Bir yerlerde inanılmaz bir şey keşfedilmeyi bekliyor."',
    footer_rights: "Tüm hakları saklıdır.",
    back_top: "Başa Dön ↑"
  }
};

// ==========================================================================
// 2. STATE & LANGUAGE CONTROLLER (Default: English)
// ==========================================================================
let currentLang = localStorage.getItem('aren_site_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('aren_site_lang', lang);
  document.documentElement.lang = lang;

  // Toggle button active state
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
    if (translations[lang] && translations[lang][key] !== undefined) {
      const text = translations[lang][key];
      if (text.includes('<')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update input placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update button text for open accordions
  document.querySelectorAll('.btn-toggle-details').forEach(btn => {
    const isExpanded = btn.classList.contains('open');
    const textSpan = btn.querySelector('.toggle-text');
    if (textSpan) {
      textSpan.textContent = isExpanded 
        ? translations[lang].btn_toggle_close 
        : translations[lang].btn_toggle_open;
    }
  });

  // Update document title
  if (translations[lang].doc_title) {
    document.title = translations[lang].doc_title;
  }
}

// ==========================================================================
// 3. PROJECT RESEARCH ACCORDION TOGGLE
// ==========================================================================
function initProjectAccordion() {
  document.querySelectorAll('.btn-toggle-details').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      if (!card) return;
      const details = card.querySelector('.project-research-details');
      if (!details) return;

      const isExpanded = details.classList.toggle('open');
      btn.classList.toggle('open', isExpanded);

      const textSpan = btn.querySelector('.toggle-text');
      if (textSpan) {
        textSpan.textContent = isExpanded
          ? translations[currentLang].btn_toggle_close
          : translations[currentLang].btn_toggle_open;
      }
    });
  });
}

// ==========================================================================
// 4. PROJECT CATEGORY FILTERING
// ==========================================================================
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

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
// 5. NAVBAR SCROLL & ACTIVE LINK SPY
// ==========================================================================
function initNavbar() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPos = window.scrollY + 140;

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
  }, { passive: true });
}

// ==========================================================================
// 6. MOBILE DRAWER NAVIGATION
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
// 7. SCROLL REVEAL (IntersectionObserver)
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// 8. CONTACT FORM HANDLER
// ==========================================================================
function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('sender-name');
  const subjectInput = document.getElementById('sender-subject');
  const messageInput = document.getElementById('sender-message');

  const name = nameInput ? nameInput.value.trim() : '';
  const subject = subjectInput ? subjectInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  const mailtoBody = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);
  const mailtoSubject = encodeURIComponent(`[Academic Contact] ${subject} - ${name}`);
  const mailtoUrl = `mailto:arenazat@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  window.location.href = mailtoUrl;

  const alertMsg = currentLang === 'tr'
    ? 'E-posta uygulamanız açılıyor. Aren Azat ile iletişime geçtiğiniz için teşekkürler!'
    : 'Opening your email client. Thank you for connecting with Aren Azat!';
  alert(alertMsg);

  return false;
}

// ==========================================================================
// 9. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  if (btnTr) btnTr.addEventListener('click', () => setLanguage('tr'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

  // Initialize Language (Default: English)
  setLanguage(currentLang);

  // Initialize Interactive Components
  initNavbar();
  initProjectAccordion();
  initProjectFilters();
  initMobileMenu();
  initScrollReveal();
});
