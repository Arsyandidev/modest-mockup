/* ══════════════════════════════════════════════════════════════════
   SHOWCASE — data halaman & interaksi showcase proyek modest.id
   Screenshot ada di assets/img/showcase/
════════════════════════════════════════════════════════════════════ */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const SHOT = 'assets/img/showcase/';

const GROUPS = [['all', 'Semua'], ['editorial', 'Editorial'], ['commerce', 'Commerce'], ['events', 'Events'], ['admin', 'Dashboard Admin']];
const PAGES = [
  {g:'editorial', file:'index.html', img:'home', title:'Home', desc:'Halaman depan editorial: hero slider, kabar terbaru, sorotan per kanal, katalog pilihan, agenda event, dan pita Iqra.',
   feats:['Hero slider otomatis + ticker berita terkini', 'Section per kanal: Fashion, Lifestyle, Art & Culture', 'Shop the Edit — produk pilihan pekan ini', 'Agenda event mendatang dengan hitung mundur', 'Pita Iqra berlatar gelap dengan kutipan ayat']},
  {g:'editorial', file:'fashion.html', img:'fashion', title:'Kanal Jurnal', desc:'Satu template untuk Fashion, Lifestyle, Art & Culture, dan Iqra — filter subkanal, artikel utama, dan sidebar terpopuler.',
   feats:['Filter subkanal (Runway, Koleksi, Beauty, Pameran…)', 'Artikel utama + grid 2 kolom, tombol "Muat Lebih Banyak"', 'Sidebar Terpopuler yang menempel saat di-scroll', 'Kartu Iqra khusus bergaya kutipan'], extra:[['lifestyle.html', 'Lifestyle'], ['art-culture.html', 'Art & Culture'], ['iqra.html', 'Iqra']]},
  {g:'editorial', file:'article.html?id=uob-2024', img:'article', title:'Detail Artikel', desc:'Pengalaman membaca yang tenang: drop cap, kutipan, bar progres baca, simpan artikel, dan artikel terkait.',
   feats:['Bar progres baca di bagian atas', 'Drop cap & blockquote serif', 'Simpan ke "Bacaan Tersimpan"', 'Bagikan ke WhatsApp / X / salin tautan']},
  {g:'editorial', file:'designers.html', img:'designers', title:'Designer Directory', desc:'Direktori perancang dengan pencarian, filter kategori & kota, indeks A–Z, profil, dan formulir pendaftaran label.',
   feats:['Pencarian nama & gaya', 'Filter kategori, kota, dan indeks A–Z', 'Profil desainer + liputan & katalog terkait', 'Form "Daftarkan Label"']},
  {g:'commerce', file:'catalog.html', img:'catalog', title:'Catalog', desc:'Katalog busana modest dengan filter kategori, harga, warna, desainer, wishlist, dan urutan.',
   feats:['Filter multi: kategori, harga, warna, desainer', 'Chip filter aktif + hapus semua', 'Wishlist & tambah cepat ke keranjang', 'Filter lewat URL (?type=, ?brand=)']},
  {g:'commerce', file:'product.html?id=kaftan-sekar', img:'product', title:'Detail Produk', desc:'Galeri dengan zoom, pilihan warna & ukuran, panduan ukuran, ulasan, dan produk terkait.',
   feats:['Galeri + zoom saat hover', 'Pilih warna/ukuran, stok habis dicoret', 'Modal Panduan Ukuran', 'Keranjang samping, voucher, dan checkout']},
  {g:'events', file:'events.html', img:'events', title:'Events', desc:'Agenda fashion show, talkshow, workshop, bazaar, dan kajian — event unggulan, filter kategori, dan arsip.',
   feats:['Banner event unggulan + hitung mundur', 'Tab Mendatang / Telah Berlangsung', 'Status Berlangsung, Sisa tiket, Sold Out', 'Tiket Saya di setiap halaman']},
  {g:'events', file:'event.html?id=in2motionfest-2026', img:'event', title:'Detail Event & Tiket', desc:'Rundown, pembicara, lokasi, dan pembelian tiket lengkap hingga e-tiket ber-QR.',
   feats:['Pilih jenis & jumlah tiket, kuota real-time', 'Data peserta per tiket + kode promo', 'Instruksi VA / QRIS / kartu', 'E-tiket QR, unduh, dan tambah ke kalender (.ics)']},
  {g:'admin', file:'admin/login.html', img:'adm-login', title:'Event Studio · Masuk', desc:'Halaman masuk dashboard admin event dengan tampilan editorial yang sama.',
   feats:['Layout terbelah dengan visual runway', 'Lupa kata sandi & ingat saya']},
  {g:'admin', file:'admin/index.html', img:'adm-dash', title:'Dashboard', desc:'Ringkasan bisnis event: KPI, grafik pendapatan harian, daftar perlu tindakan, dan transaksi terbaru.',
   feats:['KPI 30 hari dengan perbandingan periode', 'Grafik pendapatan 7/30/90 hari + tampilan tabel', 'Perlu Tindakan: event hari ini, pembayaran tertunda, tiket hampir habis', 'Penjualan per event & metode pembayaran']},
  {g:'admin', file:'admin/events.html', img:'adm-events', title:'Kelola Event', desc:'Buat, edit, duplikat, dan arsipkan event — lengkap dengan tiket, rundown, pembicara, dan publikasi.',
   feats:['Editor 5 tab: Detail, Jadwal, Tiket, Rundown, Publikasi', 'Validasi & pratinjau kartu', 'Event bertransaksi tidak bisa dihapus (jadikan draft)', 'Tautkan pembicara ke Designer Directory']},
  {g:'admin', file:'admin/orders.html', img:'adm-orders', title:'Transaksi', desc:'Semua penjualan tiket: filter, detail pesanan, konfirmasi bayar, refund, invoice, dan transaksi manual on-site.',
   feats:['Filter event, status, metode, rentang waktu', 'Detail + riwayat pesanan', 'Konfirmasi pembayaran, batal, refund', 'Transaksi manual (Tunai, EDC, Komplimen) & ekspor CSV']},
  {g:'admin', file:'admin/attendees.html', img:'adm-attendees', title:'Peserta & Check-in', desc:'Alat hari-H: statistik kehadiran, check-in manual, dan pemindai kode tiket.',
   feats:['Kehadiran per jenis tiket', 'Check-in & batalkan check-in', 'Scan tiket: berhasil / sudah masuk / tidak dikenal / event lain', 'Ekspor daftar peserta']},
  {g:'admin', file:'admin/promos.html', img:'adm-promos', title:'Promo', desc:'Kode promo persentase atau nominal, kuota, masa berlaku, dan cakupan event.',
   feats:['Persentase atau nominal', 'Kuota & pemakaian real-time', 'Berlaku untuk semua atau satu event', 'Aktif/nonaktif sekali klik']},
];
// lebar strip = seberapa banyak warna itu dipakai di desain
const COLORS = [['Ivory', '#FBF6EF', 30, 'Latar halaman'], ['Ivory 2', '#F2ECE3', 16, 'Section & kotak'], ['Paper', '#FFFFFF', 14, 'Kartu & panel'],
  ['Line', '#E7DFD3', 7, 'Garis'], ['Ink', '#1E1B18', 16, 'Teks & tombol'], ['Champagne', '#A8865A', 9, 'Aksen'], ['Sage', '#7D8B78', 9, 'Pendukung']];

let grp = 'all';
function drawGallery(){
  $('#grpTabs').innerHTML = GROUPS.map(([k, l]) => `<button class="${grp === k ? 'on' : ''}" onclick="grp='${k}'; drawGallery()">${l} <span class="text-muted">${k === 'all' ? PAGES.length : PAGES.filter(p => p.g === k).length}</span></button>`).join('');
  $('#gallery').innerHTML = PAGES.map((p, i) => ({p, i})).filter(({p}) => grp === 'all' || p.g === grp).map(({p, i}) => `
    <div class="col-md-6 col-xl-4"><div class="pg-card" onclick="openShot(${i})">
      <div class="browser scroll"><div class="bar"><i></i><i></i><i></i><span>modest.id/${p.file}</span></div><div class="shot"><img src="${SHOT + p.img}.jpg" alt="Tampilan ${p.title}" loading="lazy"></div></div>
      <div class="pt-3"><span class="num">${String(i + 1).padStart(2, '0')}</span><h5>${p.title}</h5><p>${p.desc}</p>
        <span class="chip-s">${GROUPS.find(g => g[0] === p.g)[1]}</span>${p.extra ? `<span class="chip-s">+${p.extra.length} kanal</span>` : ''}</div>
    </div></div>`).join('');
}
function openShot(i){
  const p = PAGES[i];
  $('#lbBody').innerHTML = `<div class="row g-0">
    <div class="col-lg-8 lb-shot"><img src="${SHOT + p.img}.jpg" alt="Tampilan ${p.title}"></div>
    <div class="col-lg-4 p-4 p-lg-5 d-flex flex-column">
      <div class="d-flex justify-content-between"><div class="eyebrow">${String(i + 1).padStart(2, '0')} · ${GROUPS.find(g => g[0] === p.g)[1]}</div><button class="btn-close" data-bs-dismiss="modal"></button></div>
      <h3 class="serif fw-semibold mt-2" style="font-size:36px; line-height:1.05">${p.title}</h3>
      <p class="text-muted" style="font-weight:300">${p.desc}</p>
      <div class="lbl-sm mt-2">Fitur</div>
      <ul class="lb-feats list-unstyled">${p.feats.map(f => `<li><i class="bi bi-check2"></i>${f}</li>`).join('')}</ul>
      ${p.extra ? `<div class="lbl-sm mt-3">Halaman serupa</div><div>${p.extra.map(([f, l]) => `<a class="chip-s" href="${f}" target="_blank">${l} ↗</a>`).join('')}</div>` : ''}
      <div class="mt-auto pt-4 d-flex gap-2">
        <a class="btn btn-ink flex-grow-1" href="${p.file}" target="_blank"><i class="bi bi-box-arrow-up-right me-2"></i>Buka Halaman</a>
        <button class="btn btn-line" onclick="openShot(${(i + 1) % PAGES.length})" title="Halaman berikutnya"><i class="bi bi-arrow-right"></i></button>
      </div>
    </div></div>`;
  bootstrap.Modal.getOrCreateInstance('#lb').show();
}
function drawPalette(){
  $('#palette').innerHTML = COLORS.map(([n, hex, w, use]) => { const dark = ['#1E1B18', '#A8865A', '#7D8B78'].includes(hex);
    return `<button class="pal" style="flex:${w}; background:${hex}; color:${dark ? '#FBF6EF' : '#1E1B18'}" onclick="copyHex('${hex}')" title="Salin ${hex}"><b>${n}</b><span>${hex}</span><em>${use}</em></button>`; }).join('');
}
let bsToast;
function toast(msg){ $('#toastMsg').textContent = msg; (bsToast ||= new bootstrap.Toast('#toast', {delay:2200})).show(); }
function copyHex(hex){ navigator.clipboard?.writeText(hex).catch(() => {}); toast(`${hex} disalin`); }

// slider sebelum / sesudah
$('#baRange').addEventListener('input', e => $('#ba').style.setProperty('--x', e.target.value + '%'));

// tandai menu sesuai section yang sedang dilihat
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) $$('.pf-links a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); }), {rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s => io.observe(s));

$('#statPages').textContent = PAGES.length + 4;
drawGallery(); drawPalette();
