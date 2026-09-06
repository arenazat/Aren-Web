# Aren Azat — Kişisel Web Sitesi & Portfolyo

Astrofizik, hesaplamalı fizik simülasyonları, havacılık-uzay ve yazılım projelerini sergileyen, iki dilli (Türkçe & İngilizce), açık temalı (light mode) ve **GitHub Pages** ile tam uyumlu kişisel web sitesi.

---

## 🚀 Proje Yapısı

```
c:\Aren Web\
├── index.html            # Ana sayfa semantik iskeleti & SEO meta etiketleri
├── css\
│   ├── main.css          # Açık tema renk sistemi, tipografi, grid ve responsive düzen
│   └── components.css    # UI bileşenleri, kartlar, interaktif simülasyon kutuları
├── js\
│   └── app.js            # İki dilli dil motoru (TR/EN), proje filtreleri, mobil menü
├── assets\
│   └── images\
│       ├── aren-portrait.jpg   # Buraya kendi portre fotoğrafınızı yerleştiriniz
│       └── default-avatar.svg  # Varsayılan şık vektör portre yedeği
└── README.md             # Kurulum ve GitHub Pages yayınlama kılavuzu
```

---

## 📸 Kendi Fotoğrafınızı Ekleme

1. Kullanmak istediğiniz portre fotoğrafınızı **`aren-portrait.jpg`** adıyla kaydedin.
2. Bu fotoğrafı **`c:\Aren Web\assets\images\`** klasörünün içine yapıştırın.
3. Sayfayı yenilediğinizde fotoğrafınız otomatik olarak şık yörünge çerçevesi içinde görüntülenecektir. *(Fotoğraf henüz eklenmediğinde sistem otomatik olarak modern bilimsel vektör avatarını gösterir).*

---

## 🌐 GitHub ve GitHub Pages'te Yayınlama Adımları

Web siteniz saf modern HTML5, CSS3 ve JavaScript ile geliştirildiği için hiçbir derleme (build) veya ek kurulum gerektirmeden GitHub Pages üzerinde saniyeler içinde çalışır:

### 1. Yeni GitHub Deposu Açın
- [GitHub](https://github.com/new) hesabınızda (`arenazat`) oturum açın.
- Yeni bir depo (repository) oluşturun (Örn: `arenazat.github.io` veya `aren-web`).
- Depoyu **Public** (Herkese Açık) olarak belirleyin.

### 2. Dosyaları Gönderin (Terminal / Git ile)
`c:\Aren Web` klasöründe terminal veya PowerShell açıp şu komutları çalıştırın:

```bash
git init
git add .
git commit -m "Initial commit: Aren Azat personal website"
git branch -M main
git remote add origin https://github.com/arenazat/arenazat.github.io.git
git push -u origin main
```
*(Depo adınız farklıysa `origin` URL'sini kendi deponuza göre güncelleyiniz).*

### 3. GitHub Pages'i Aktif Edin
1. GitHub deponuzun üst menüsünden **Settings** (Ayarlar) sekmesine tıklayın.
2. Sol menüden **Pages** seçeneğini seçin.
3. **Build and deployment > Source** kısmını **"Deploy from a branch"** yapın.
4. **Branch** kısmında **`main`** dalını ve klasör olarak **`/ (root)`** seçip **Save** butonuna tıklayın.
5. 1-2 dakika içinde siteniz **`https://arenazat.github.io/`** adresinde canlıya geçecektir!

---

## ✨ Özellikler
- **Açık Tema (Executive Light Mode):** Modern, ferah ve göz yormayan bilimsel tasarım.
- **İki Dilli Destek (TR & EN):** Sağ üst köşedeki `TR / EN` butonu ile sayfanın tüm içeriği anında akıcı bir şekilde tercüme edilir ve kullanıcının tercihi tarayıcıda (`localStorage`) saklanır.
- **Dinamik Proje Filtreleme:** Projeler arasında Fizik & Simülasyon, Yazılım & IoT ve Sosyal İnovasyon kategorilerine göre tek tıkla filtreleme.
- **SEO ve Sosyal Medya Hazırlığı:** Open Graph etiketleri, meta açıklamaları ve semantik HTML.
- **Tam Mobil Uyumlu:** Telefon, tablet ve masaüstü ekranlar için optimize edilmiş akıcı arayüz.
