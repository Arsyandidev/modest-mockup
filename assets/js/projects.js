/* ══════════════════════════════════════════════════════════════════
   PORTOFOLIO — klien & proyek layanan modest.id (event + landing page)
   Halaman: portfolio.html (daftar) & project.html?id=… (detail)
   Data di bawah adalah CONTOH — ganti dengan portofolio asli.
════════════════════════════════════════════════════════════════════ */
const WIMG = {...EV_IMG,
  kahf:'news/thumbnail-kahf-luncurkan-decode-ekosistem-grooming-berbasis-sains-dan-ai-untuk-pria-indonesia-1764565752.jpg',
  lavojoy:'news/thumbnail-tangani-rambut-lelah-dan-rusak-segera-dengan-lavojoy-repair-me-now-series--1765856203.jpeg',
  siiru:'news/thumbnail-siiru-x-bpkh-limited-umrah-mandiri-kini-lebih-mudah--modern-1765424139.png',
  wardah:'news/thumbnail-rekreasi-dan-bermain-seni-di-wardah-art--beauty-space-astha-district-8--1672797760.jpeg',
  uob:'article/thumbnail-lukisan-tentang-fragmentasi-idealisme-karya-muhammad-yakin-menangkan-uob-painting-of-the-year-2024-1729741692.png',
};
const SERVICES = {
  'Event':['Konsep & kurasi acara', 'Produksi & manajemen hari-H', 'Tiket, registrasi & check-in', 'Liputan editorial & media sosial'],
  'Landing Page':['Desain & copywriting', 'Microsite kampanye responsif', 'Form registrasi / pre-order', 'Analitik & laporan konversi'],
};
const WORKS = [
  {id:'in2motionfest-2025', client:'IN2MOTIONFEST', type:'Event', cat:'Festival Mode', title:'IN2MOTIONFEST 2025: One Vision, One Movement', date:'Okt 2025', place:'Jakarta Convention Center', img:'wastra', featured:true,
   brief:'Festival mode modest internasional lima hari yang mempertemukan 200+ brand, buyer, dan media dari berbagai negara.',
   solution:'Kami merancang alur pengunjung, jadwal show harian, dan sistem tiket online dengan check-in QR di setiap pintu hall.',
   result:'Antrean masuk turun drastis berkat check-in QR, dan seluruh sesi show terisi penuh selama lima hari.',
   metrics:[['18.400', 'Pengunjung'], ['210', 'Brand peserta'], ['5', 'Hari acara']],
   quote:['Tim modest.id mengurus tiket hingga liputan dengan sangat rapi — kami bisa fokus pada panggung.', 'Tim Penyelenggara', 'IN2MOTIONFEST']},
  {id:'heaven-lights-anashera', client:'Heaven Lights', d:'heaven-lights', type:'Event', cat:'Fashion Show', title:'Anashera — 7th Annual Show', date:'Jan 2026', place:'Bandung', img:'imfw', also:'Landing Page',
   brief:'Show tahunan ketujuh sekaligus peluncuran koleksi Anashera untuk komunitas pelanggan setia.',
   solution:'Show intim dengan tata cahaya fajar, ditambah landing page undangan dan pre-order koleksi yang dibuka setelah show.',
   result:'Kursi undangan habis dalam dua hari dan pre-order koleksi melampaui target pada minggu pertama.',
   metrics:[['420', 'Tamu undangan'], ['2 hari', 'Undangan habis'], ['138%', 'Target pre-order']],
   quote:['Dari undangan sampai pre-order terasa satu cerita yang utuh.', 'Tim Brand', 'Heaven Lights']},
  {id:'ts-scarf-launch', client:'Tex Saverio', d:'tex-saverio', type:'Landing Page', cat:'Peluncuran Produk', title:'TS Scarf: Microsite Peluncuran', date:'Mar 2025', url:'tsscarf.modest.id', img:'tex',
   brief:'Memperkenalkan lini scarf bermotif berpendar kepada pasar modest yang lebih muda.',
   solution:'Microsite imersif dengan galeri motif, cerita di balik desain, dan form pre-order edisi pertama.',
   result:'Edisi pertama habis dipesan sebelum produk tiba di butik.',
   metrics:[['48rb', 'Kunjungan'], ['3,2%', 'Konversi pre-order'], ['1.150', 'Pre-order']],
   quote:['Microsite-nya terasa seperti karya itu sendiri — elegan dan berani.', 'Studio', 'Tex Saverio']},
  {id:'reborn29-whisper', client:'REBORN29', d:'reborn29', type:'Event', cat:'Fashion Show', title:'The Whisper of Grace Show', date:'Mar 2025', place:'The Apurva Kempinski, Bali', img:'reborn',
   brief:'Peluncuran koleksi musim gugur/musim dingin dalam format show intim untuk media dan tamu VIP.',
   solution:'Konsep show tepi pantai, manajemen tamu & media, serta liputan editorial di kanal Fashion modest.id.',
   result:'Liputan tersebar luas di media mode nasional dalam 48 jam setelah show.',
   metrics:[['150', 'Tamu VIP'], ['24', 'Media hadir'], ['2,1 jt', 'Impresi sosial']],
   quote:['Setiap detail tamu terurus, dari penjemputan hingga makan malam.', 'Tim Brand', 'REBORN29']},
  {id:'kahf-decode', client:'Kahf', type:'Landing Page', cat:'Peluncuran Produk', title:'DECODE: Analisis Kulit Berbasis AI', date:'Des 2025', url:'decode.modest.id', img:'kahf', also:'Event',
   brief:'Mengenalkan ekosistem grooming berbasis sains dan AI kepada pria muslim Indonesia.',
   solution:'Landing page dengan kuis analisis kulit interaktif, ditutup event peluncuran untuk media dan kreator.',
   result:'Ribuan pengunjung menyelesaikan kuis dan mendapatkan rekomendasi rutinitas yang dipersonalisasi.',
   metrics:[['62rb', 'Kunjungan'], ['9.800', 'Kuis selesai'], ['350', 'Tamu peluncuran']],
   quote:['Kuisnya sederhana tapi datanya sangat berguna bagi tim produk kami.', 'Tim Marketing', 'Kahf']},
  {id:'sekar-setaman-lookbook', client:'Batik Danar Hadi', d:'danar-hadi', type:'Landing Page', cat:'Lookbook Digital', title:'Sekar Setaman: Lookbook Raya', date:'Feb 2026', url:'sekarsetaman.modest.id', img:'iwan',
   brief:'Menghadirkan koleksi Raya bermotif flora Nusantara secara digital untuk pembeli di luar Solo.',
   solution:'Lookbook digital dengan cerita motif, zoom detail kain, dan tautan langsung ke butik serta WhatsApp.',
   result:'Rata-rata pengunjung membaca lookbook hampir empat menit — jauh di atas rata-rata halaman produk.',
   metrics:[['31rb', 'Kunjungan'], ['3:52', 'Rata-rata durasi'], ['12', 'Koleksi tampil']],
   quote:['Motif kami akhirnya bisa dinikmati sedetail aslinya.', 'Tim Pemasaran', 'Batik Danar Hadi']},
  {id:'wardah-art-beauty-space', client:'Wardah', type:'Event', cat:'Aktivasi Brand', title:'Wardah Art & Beauty Space', date:'Jan 2023', place:'Astha District 8, Jakarta', img:'wardah',
   brief:'Ruang interaktif yang mempertemukan instalasi seni dengan pengalaman kecantikan selama dua pekan.',
   solution:'Kurasi seniman, alur kunjungan berbasis slot waktu, dan registrasi online untuk menghindari antrean.',
   result:'Slot akhir pekan selalu penuh, dengan ulasan pengunjung yang sangat positif.',
   metrics:[['6.500', 'Pengunjung'], ['14', 'Hari aktivasi'], ['4,8/5', 'Rating pengunjung']],
   quote:['Sistem slot waktunya membuat pengalaman pengunjung tetap nyaman.', 'Brand Team', 'Wardah']},
  {id:'lavojoy-repair', client:'Lavojoy', type:'Landing Page', cat:'Kampanye Produk', title:'Repair Me Now: Kampanye Sampel', date:'Des 2025', url:'repairmenow.modest.id', img:'lavojoy',
   brief:'Mendorong uji coba rangkaian perawatan rambut untuk pemakai hijab.',
   solution:'Landing page kampanye dengan kuis tipe rambut dan klaim sampel gratis yang terhubung ke toko online.',
   result:'Kuota sampel habis lebih cepat dari jadwal, dengan klik ke toko online yang tinggi.',
   metrics:[['27rb', 'Kunjungan'], ['2.300', 'Sampel diklaim'], ['5,1%', 'Klik ke toko']],
   quote:['Kampanye paling efisien kami tahun ini.', 'Tim Digital', 'Lavojoy']},
  {id:'mystery-of-borneo', client:'The Apurva Kempinski', type:'Event', cat:'Malam Budaya', title:'Mystery of Borneo', date:'Sep 2022', place:'Nusa Dua, Bali', img:'borneo',
   brief:'Merayakan tradisi dan budaya Kalimantan untuk tamu hotel dan publik.',
   solution:'Kurasi perajin tenun, pertunjukan tari, dan jamuan kuliner dalam tiga malam bertema.',
   result:'Program ini menjadi seri budaya tahunan yang berlanjut ke pulau-pulau lain.',
   metrics:[['280', 'Tamu'], ['3', 'Malam bertema'], ['16', 'Perajin & seniman']],
   quote:['Kurasi budayanya hangat dan autentik.', 'Tim Event', 'The Apurva Kempinski']},
  {id:'siiru-umrah', client:'Siiru × BPKH', type:'Landing Page', cat:'Registrasi', title:'Umrah Mandiri: Halaman Pendaftaran', date:'Des 2025', url:'umrahmandiri.modest.id', img:'siiru',
   brief:'Memudahkan calon jamaah mendaftar program umrah mandiri secara online.',
   solution:'Landing page dengan simulasi biaya, FAQ, dan form pendaftaran bertahap yang ramah ponsel.',
   result:'Hampir empat dari sepuluh pengunjung yang membuka form menyelesaikan pendaftaran.',
   metrics:[['14rb', 'Kunjungan'], ['1.900', 'Pendaftar'], ['38%', 'Form selesai']],
   quote:['Form bertahapnya membuat jamaah lansia pun bisa mendaftar sendiri.', 'Tim Produk', 'Siiru']},
  {id:'uob-painting-award', client:'UOB Indonesia', type:'Event', cat:'Pameran & Penghargaan', title:'UOB Painting of the Year — Malam Penghargaan', date:'Nov 2023', place:'Jakarta', img:'uob',
   brief:'Malam penghargaan dan pameran karya finalis kompetisi lukis tahunan.',
   solution:'Tata pamer karya, manajemen tamu undangan, dan liputan di kanal Art & Culture modest.id.',
   result:'Acara berjalan tepat waktu dengan liputan menyeluruh untuk seluruh pemenang.',
   metrics:[['900', 'Tamu undangan'], ['40', 'Karya dipamerkan'], ['1', 'Malam penghargaan']],
   quote:['Pameran tertata indah dan tamu merasa disambut.', 'Tim Komunikasi', 'UOB Indonesia']},
  {id:'muffest-closing', client:'MUFFEST++', type:'Event', cat:'Fashion Show', title:'Closing Show MUFFEST++ 2025', date:'Mar 2025', place:'Jakarta Convention Center', img:'muffest',
   brief:'Show pamungkas festival mode muslim dengan ragam gaya dari masculine hingga cottagecore.',
   solution:'Penjadwalan sembilan brand dalam satu panggung, manajemen backstage, dan tiket tribun.',
   result:'Tribun penuh dan seluruh brand tampil sesuai jadwal tanpa jeda panjang.',
   metrics:[['1.200', 'Penonton'], ['9', 'Brand tampil'], ['38', 'Liputan media']],
   quote:['Backstage paling tertib yang pernah kami alami.', 'Koordinator Show', 'MUFFEST++']},
];
const wById = id => WORKS.find(w => w.id === id);
const wUrl = id => `project.html?id=${id}`;
const wf = {type:'Semua', cat:'Semua'};

function workImg(w, ratio = 'r-43'){
  if(w.type !== 'Landing Page') return ph(WIMG[w.img], ratio, w.client);
  return `<div class="lp-frame"><div class="bar"><i></i><i></i><i></i><span>${w.url}</span></div>${ph(WIMG[w.img], ratio, w.client)}</div>`;
}
function workCard(w){
  return `<a class="wk-card" href="${wUrl(w.id)}">
    <div class="position-relative">${workImg(w)}<span class="wk-type">${w.type}${w.also ? ' + ' + w.also : ''}</span></div>
    <div class="pt-3"><div class="d-flex justify-content-between gap-2"><span class="tag-pill">${esc(w.client)}</span><span class="meta">${w.date}</span></div>
      <h5>${esc(w.title)}</h5>
      <div class="meta mb-3"><i class="bi ${w.url ? 'bi-globe2' : 'bi-geo-alt'} me-1"></i>${esc(w.url || w.place)}</div>
      <div class="wk-metrics">${w.metrics.slice(0, 2).map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div>
    </div></a>`;
}
const clients = () => [...new Set(WORKS.map(w => w.client))];

/* ---------- Halaman daftar ---------- */
function viewPortfolio(){
  const f = WORKS.find(w => w.featured);
  const ev = WORKS.filter(w => w.type === 'Event' || w.also === 'Event').length, lp = WORKS.filter(w => w.type === 'Landing Page' || w.also === 'Landing Page').length;
  const quotes = WORKS.filter(w => w.quote).slice(0, 5);
  return `
  <div class="page-hd"><div class="container-x">
    <div class="eyebrow">Portofolio</div><h1>Karya &amp; Klien</h1>
    <p>Event dan landing page yang kami rancang bersama brand, desainer, dan institusi — dari fashion show hingga microsite peluncuran.</p>
  </div></div>
  <div class="container-x">
    <div class="wk-stats">
      <div><b>${clients().length}</b><span>Klien</span></div>
      <div><b>${ev}</b><span>Event terlaksana</span></div>
      <div><b>${lp}</b><span>Landing page</span></div>
      <div><b>36rb+</b><span>Peserta & pengunjung</span></div>
    </div>
  </div>

  <section class="blk pb-0"><div class="container-x">
    ${secHead('Proyek Unggulan', esc(f.client))}
    <a class="event wk-feature" href="${wUrl(f.id)}">
      ${ph(WIMG[f.img], '', f.client)}
      <div class="body">
        <div class="eyebrow">${f.type} · ${f.cat} · ${f.date}</div>
        <h3 class="mt-3">${esc(f.title)}</h3>
        <p class="mt-3 mb-4" style="font-weight:300; color:var(--ink-2)">${esc(f.brief)}</p>
        <div class="wk-metrics lg mb-4">${f.metrics.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div>
        <span class="btn btn-ink">Lihat Studi Kasus <i class="bi bi-arrow-right ms-2"></i></span>
      </div>
    </a>
  </div></section>

  <section class="blk"><div class="container-x">
    <div class="sec-head"><div><div class="eyebrow">Semua Proyek</div><h2>Yang Telah Kami Kerjakan</h2></div>
      <select class="form-select" style="width:auto" onchange="wf.cat=this.value; drawWorks()"><option value="Semua">Semua kategori</option>${[...new Set(WORKS.map(w => w.cat))].sort().map(c => `<option ${wf.cat === c ? 'selected' : ''}>${c}</option>`).join('')}</select></div>
    <div class="filters justify-content-start pt-0" id="wkTabs"></div>
    <div class="row g-4 gy-5" id="wkGrid"></div>
  </div></section>

  <section class="blk" style="background:var(--paper); border-top:1px solid var(--line); border-bottom:1px solid var(--line)"><div class="container-x">
    <div class="text-center mb-5"><div class="eyebrow">Dipercaya oleh</div><h2 class="serif fw-semibold mt-2" style="font-size:40px">Klien Kami</h2></div>
    <div class="client-wall">${clients().map(c => { const w = WORKS.find(x => x.client === c); return `<a href="${wUrl(w.id)}" title="${esc(c)}"><span>${esc(c)}</span><small>${w.type}</small></a>`; }).join('')}</div>
  </div></section>

  <section class="blk"><div class="container-x">
    <div id="wkQuotes" class="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
      <div class="carousel-inner text-center">${quotes.map((w, i) => `<div class="carousel-item ${i ? '' : 'active'}">
        <i class="bi bi-quote text-gold" style="font-size:44px"></i>
        <p class="wk-quote mx-auto">“${esc(w.quote[0])}”</p>
        <div class="meta mt-3"><b style="color:var(--ink); font-weight:500">${esc(w.quote[1])}</b> · ${esc(w.quote[2])}</div>
        <a class="link-more d-inline-block mt-3" href="${wUrl(w.id)}">${esc(w.title)}</a></div>`).join('')}</div>
      <div class="d-flex justify-content-center gap-2 mt-4">${quotes.map((_, i) => `<button class="wk-dot ${i ? '' : 'active'}" data-bs-target="#wkQuotes" data-bs-slide-to="${i}" aria-label="Testimoni ${i + 1}"></button>`).join('')}</div>
    </div>
  </div></section>

  <section class="blk pt-0"><div class="container-x">
    ${secHead('Layanan', 'Apa yang Kami Kerjakan')}
    <div class="row g-4">${Object.entries(SERVICES).map(([k, list]) => `<div class="col-md-6"><div class="wk-service">
      <i class="bi ${k === 'Event' ? 'bi-calendar2-heart' : 'bi-window-desktop'} text-gold" style="font-size:30px"></i>
      <h4>${k === 'Event' ? 'Penyelenggaraan Event' : 'Pembuatan Landing Page'}</h4>
      <p>${k === 'Event' ? 'Fashion show, peluncuran, pop-up, talkshow, hingga kajian — dari konsep sampai liputan.' : 'Microsite kampanye, lookbook digital, dan halaman registrasi yang siap mengonversi.'}</p>
      <ul>${list.map(s => `<li><i class="bi bi-check2"></i>${s}</li>`).join('')}</ul></div></div>`).join('')}</div>
  </div></section>

  ${inquiryBand()}`;
}
function drawWorks(){
  const types = ['Semua', 'Event', 'Landing Page'];
  const match = w => (wf.type === 'Semua' || w.type === wf.type || w.also === wf.type) && (wf.cat === 'Semua' || w.cat === wf.cat);
  $('#wkTabs').innerHTML = types.map(t => `<button class="${wf.type === t ? 'on' : ''}" onclick="wf.type='${t}'; drawWorks()">${t} <span class="text-muted">${WORKS.filter(w => (t === 'Semua' || w.type === t || w.also === t) && (wf.cat === 'Semua' || w.cat === wf.cat)).length}</span></button>`).join('');
  const list = WORKS.filter(match);
  $('#wkGrid').innerHTML = list.length ? list.map(w => `<div class="col-md-6 col-lg-4">${workCard(w)}</div>`).join('') : '<div class="col-12 empty"><i class="bi bi-briefcase"></i>Belum ada proyek di kategori ini.</div>';
}

/* ---------- Halaman detail ---------- */
function viewProject(id){
  const w = wById(id);
  if(!w) return `<div class="container-x empty"><i class="bi bi-briefcase"></i>Proyek tidak ditemukan. <a class="link-more ms-2" href="portfolio.html">Lihat portofolio</a></div>`;
  const i = WORKS.indexOf(w), next = WORKS[(i + 1) % WORKS.length];
  const related = WORKS.filter(x => x.id !== w.id && (x.type === w.type || x.cat === w.cat)).slice(0, 3);
  const d = DESIGNERS.find(x => x.id === w.d);
  const services = [...SERVICES[w.type], ...(w.also ? SERVICES[w.also].slice(0, 2) : [])];
  const views = [['50% 30%', 1.4], ['30% 60%', 1.8], ['70% 40%', 1.6]];
  return `
  <div class="container-x">
    <nav class="pt-4 meta"><a href="index.html">Home</a> <i class="bi bi-chevron-right mx-1" style="font-size:10px"></i> <a href="portfolio.html">Portofolio</a> <i class="bi bi-chevron-right mx-1" style="font-size:10px"></i> ${esc(w.client)}</nav>
    <div class="art-hd" style="max-width:900px">
      <a class="eyebrow" href="portfolio.html">${w.type}${w.also ? ' + ' + w.also : ''} · ${w.cat}</a>
      <h1>${esc(w.title)}</h1>
      <p class="lede">${esc(w.brief)}</p>
    </div>
    <div class="facts-strip">
      <div><span>Klien</span>${d ? `<a href="javascript:void(0)" onclick="openDesigner('${d.id}')" style="text-decoration:underline">${esc(w.client)}</a>` : esc(w.client)}</div>
      <div><span>Layanan</span>${w.type}${w.also ? ' + ' + w.also : ''}</div>
      <div><span>Waktu</span>${w.date}</div>
      <div><span>${w.url ? 'Situs' : 'Lokasi'}</span>${esc(w.url || w.place)}</div>
    </div>
    <div class="mt-4">${workImg(w, 'r-219')}</div>
  </div>

  <div class="container-x mt-5"><div class="wk-stats dark">${w.metrics.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div></div>

  <section class="blk"><div class="container-x">
    <div class="row g-5">
      ${[['i.', 'Tantangan', w.brief], ['ii.', 'Solusi', w.solution], ['iii.', 'Hasil', w.result]].map(([n, t, x]) => `<div class="col-md-4"><div class="wk-step"><span class="n">${n}</span><h4>${t}</h4><p>${esc(x)}</p></div></div>`).join('')}
    </div>
  </div></section>

  <div class="container-x"><div class="row g-3">${views.map(([pos, z], k) => `<div class="col-md-${k ? 3 : 6}">${ph(WIMG[w.img], k ? 'r-23' : 'r-43', w.client, crop(pos, z))}</div>`).join('')}</div>
    <div class="meta mt-2">Dokumentasi proyek ${esc(w.client)}.</div></div>

  <section class="blk"><div class="container-x"><div class="row g-5 align-items-center">
    <div class="col-lg-7">${w.quote ? `<i class="bi bi-quote text-gold" style="font-size:40px"></i><p class="wk-quote text-start m-0">“${esc(w.quote[0])}”</p><div class="meta mt-3"><b style="color:var(--ink); font-weight:500">${esc(w.quote[1])}</b> · ${esc(w.quote[2])}</div>` : ''}</div>
    <div class="col-lg-5"><div class="wk-service"><div class="lbl-sm">Yang kami kerjakan</div><ul>${services.map(s => `<li><i class="bi bi-check2"></i>${s}</li>`).join('')}</ul></div></div>
  </div></div></section>

  <div class="container-x"><a class="wk-next" href="${wUrl(next.id)}"><span class="meta">Proyek berikutnya</span><span class="serif">${esc(next.title)} <i class="bi bi-arrow-right"></i></span></a></div>

  ${related.length ? `<section class="blk" style="background:var(--paper); border-top:1px solid var(--line)"><div class="container-x">
    ${secHead('Proyek Serupa', 'Lihat Juga', 'portfolio.html')}
    <div class="row g-4 gy-5">${related.map(x => `<div class="col-md-4">${workCard(x)}</div>`).join('')}</div></div></section>` : ''}
  ${inquiryBand()}`;
}

/* ---------- Ajakan & form konsultasi ---------- */
function inquiryBand(){
  return `<section class="blk iqra-band"><div class="container-x position-relative">
    <div class="row g-4 align-items-center">
      <div class="col-lg-8"><div class="eyebrow">Bekerja sama</div><p class="iqra-quote mt-3 mb-0">Punya acara atau peluncuran? Mari rancang bersama.</p></div>
      <div class="col-lg-4 text-lg-end"><button class="btn btn-ink" style="background:var(--gold); border-color:var(--gold)" onclick="openInquiry()">Konsultasi Gratis <i class="bi bi-arrow-right ms-2"></i></button></div>
    </div></div></section>`;
}
function openInquiry(){
  $('#dModalBody').innerHTML = `<form class="p-4 p-lg-5" onsubmit="event.preventDefault(); bootstrap.Modal.getInstance('#dModal').hide(); toast('Terima kasih! Tim kami akan menghubungi Anda dalam 1×24 jam.')">
    <div class="d-flex justify-content-between"><div><div class="eyebrow">Konsultasi Gratis</div><h3 class="serif fw-semibold mt-2" style="font-size:36px">Ceritakan Proyek Anda</h3></div><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
    <div class="row g-3 mt-1">
      <div class="col-md-6"><label class="meta mb-1">Nama</label><input class="form-control" required></div>
      <div class="col-md-6"><label class="meta mb-1">Brand / Institusi</label><input class="form-control" required></div>
      <div class="col-md-6"><label class="meta mb-1">Email</label><input type="email" class="form-control" required></div>
      <div class="col-md-6"><label class="meta mb-1">No. WhatsApp</label><input class="form-control" required placeholder="08…"></div>
      <div class="col-12"><label class="meta mb-1">Layanan</label><div class="d-flex flex-wrap gap-2">${['Event', 'Landing Page', 'Event + Landing Page'].map((s, i) => `<label class="pay-opt mb-0"><input type="radio" name="svc" ${i ? '' : 'checked'}>${s}</label>`).join('')}</div></div>
      <div class="col-md-6"><label class="meta mb-1">Perkiraan waktu</label><input type="month" class="form-control"></div>
      <div class="col-md-6"><label class="meta mb-1">Kisaran anggaran</label><select class="form-select"><option>&lt; Rp50 juta</option><option>Rp50–150 juta</option><option>Rp150–500 juta</option><option>&gt; Rp500 juta</option></select></div>
      <div class="col-12"><label class="meta mb-1">Ceritakan singkat</label><textarea class="form-control" rows="3" placeholder="Tujuan, target audiens, jumlah tamu…"></textarea></div>
    </div>
    <button class="btn btn-ink w-100 mt-4">Kirim</button></form>`;
  bootstrap.Modal.getOrCreateInstance('#dModal').show();
}
