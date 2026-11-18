/* ══════════════════════════════════════════════════════════════════
   EVENTS — data & penyimpanan bersama (situs publik + dashboard admin)
   Disimpan di localStorage agar transaksi di situs langsung terlihat
   di dashboard, dan perubahan admin langsung tampil di situs.
   Tanggal seed dihitung relatif terhadap hari pertama data dibuat.
════════════════════════════════════════════════════════════════════ */
const EV_IMG = {
  wastra:'article/thumbnail-gaya-kini-wastra-dari-sekolah-mode-di-in2motionfest-2025-1761101657.jpg',
  muffest:'article/thumbnail-masculine-hingga-cottagecore-inspired-di-show-pamungkas-muffest-2025-1741671421.jpg',
  imfw:'news/thumbnail-indonesia-modest-fashion-week-imfw-2022-kembali-digelar--1666316490.jpeg',
  reborn:'article/thumbnail-the-whisper-of-grace-koleksi-musim-gugurmusim-dingin-reborn29-1742976292.jpg',
  tex:'article/thumbnail-aspirasi-hidup-dalam-desain-berpendar-ts-scarf-by-tex-saverio-1741324279.jpeg',
  iwan:'news/thumbnail-menerjemahkan-keselarasan-semesta-iwan-tirta-private-collection-1496897078.jpg',
  artjog:'article/thumbnail-artjog-2022-kembali-meluaskan-pandangan-seni-1661177664.jpg',
  halal:'article/thumbnail-indonesia-halal-industry-award-2021-1640784682.jpg',
  berkahf:'news/thumbnail-hidupkan-tiap-detik-hidup-kita-dengan-kebaikan-pesan-detikdetikberkahf-1710733499.jpg',
  borneo:'news/thumbnail-mystery-of--borneo-merayakan-tradisi-dan-budaya-kalimantan-di-the-apurva-kempinski-bali--1662625570.jpg',
};
const EV_CATS = ['Fashion Show', 'Talkshow', 'Workshop', 'Bazaar', 'Kajian', 'Tur Seni'];
const EV_PAY = ['VA BCA', 'VA Mandiri', 'GoPay', 'OVO', 'QRIS', 'Kartu Kredit'];
const EV_FEE = 5000;

// s/e = selisih hari dari hari seed dibuat; fill = tingkat keterisian tiket untuk data contoh
const EV_SEED = [
  {id:'in2motionfest-2026', title:'IN2MOTIONFEST 2026', cat:'Fashion Show', s:40, e:44, time:'10.00 – 21.00 WIB', featured:true,
   venue:'Jakarta Convention Center', city:'Jakarta', address:'Jl. Gatot Subroto, Senayan, Jakarta Pusat', img:'wastra',
   excerpt:'Indonesia International Modest Fashion Festival kembali: lima hari fashion show, eksibisi, talkshow, dan business matching.',
   desc:'IN2MOTIONFEST adalah festival mode modest internasional yang mempertemukan perancang, pelaku industri, dan pencinta mode dari berbagai negara. Tahun ini mengusung tema "One Vision, One Movement", menampilkan lebih dari 200 brand dalam fashion show, eksibisi, talkshow, hingga business matching.',
   rundown:[['10.00','Pembukaan Eksibisi','Hall A & B, lebih dari 200 booth brand modest'], ['13.00','Talkshow: Modest Goes Global','Bersama perancang dan buyer internasional'], ['16.00','Fashion Show Sesi 1','Koleksi Raya & Resort'], ['19.00','Fashion Show Sesi Malam','Show utama perancang tamu']],
   speakers:[{name:'Vivi Zubedi', role:'Perancang', d:'vivi-zubedi'}, {name:'Khanaan', role:'Perancang', d:'khanaan'}, {name:'Heaven Lights', role:'Brand', d:'heaven-lights'}],
   tickets:[{id:'day', name:'Day Pass', price:75000, quota:300, fill:.62, desc:'Akses eksibisi & fashion show untuk 1 hari pilihan'},
            {id:'full', name:'5-Day Pass', price:250000, quota:100, fill:.5, desc:'Akses penuh 5 hari, termasuk talkshow'},
            {id:'vip', name:'VIP Front Row', price:750000, quota:24, fill:.83, desc:'Kursi baris depan show malam + goodie bag eksklusif'}]},
  {id:'modest-talks-wastra', title:'Modest Talks: Wastra untuk Generasi Baru', cat:'Talkshow', s:15, time:'13.00 – 17.00 WIB',
   venue:'Galeri Nasional Indonesia', city:'Jakarta', address:'Jl. Medan Merdeka Timur No.14, Jakarta Pusat', img:'iwan',
   excerpt:'Diskusi hangat tentang bagaimana batik, tenun, dan lurik menemukan tempatnya di lemari generasi muda.',
   desc:'Sebuah sore bersama para pelestari dan perancang wastra. Kami membahas proses di balik selembar kain, tantangan regenerasi perajin, dan cara mengenakan wastra dalam gaya modest sehari-hari.',
   rundown:[['13.00','Registrasi & Welcome Tea',''], ['13.30','Sesi 1: Wastra dan Identitas',''], ['15.00','Sesi 2: Styling Wastra untuk Keseharian',''], ['16.30','Tanya Jawab & Networking','']],
   speakers:[{name:'Batik Danar Hadi', role:'Rumah Batik', d:'danar-hadi'}, {name:'Nuraini Wastra', role:'Studio Tenun', d:'nuraini-wastra'}, {name:'Nadia Rahma', role:'Moderator, Redaksi modest.id'}],
   tickets:[{id:'reg', name:'Reguler', price:75000, quota:120, fill:.71, desc:'Kursi talkshow + welcome tea'},
            {id:'merch', name:'Reguler + Tote Wastra', price:175000, quota:40, fill:.6, desc:'Termasuk tote bag lurik edisi terbatas'}]},
  {id:'hijab-masterclass', title:'Hijab Styling Masterclass', cat:'Workshop', s:22, time:'10.00 – 14.00 WIB',
   venue:'Studio modest.id', city:'Jakarta', address:'Jl. Kemang Raya No.8, Jakarta Selatan', img:'tex',
   excerpt:'Kelas kecil 24 peserta: teknik drape pashmina, scarf silk, dan styling untuk acara formal.',
   desc:'Belajar langsung dari stylist berpengalaman dalam kelas yang intim. Setiap peserta mendapatkan satu pashmina voal premium dan sesi foto hasil styling.',
   rundown:[['10.00','Pengenalan Bahan & Bentuk Wajah',''], ['11.00','Praktik Drape Pashmina',''], ['12.00','Ishoma',''], ['13.00','Styling Formal & Sesi Foto','']],
   speakers:[{name:'Alma Hijab Studio', role:'Hijab Stylist', d:'alma-hijab'}],
   tickets:[{id:'seat', name:'Peserta', price:350000, quota:24, fill:.92, desc:'Termasuk pashmina voal premium & makan siang'}]},
  {id:'kajian-haya', title:'Kajian Iqra: Haya\' di Era Digital', cat:'Kajian', s:0, time:'09.00 – 11.30 WIB',
   venue:'Masjid Cut Meutia', city:'Jakarta', address:'Jl. Taman Cut Mutiah No.1, Menteng, Jakarta Pusat', img:'berkahf',
   excerpt:'Kajian pagi tentang memaknai rasa malu sebagai penjaga martabat di ruang digital yang serba terbuka.',
   desc:'Kajian terbuka untuk umum, khusus muslimah. Membahas adab bermedia sosial, menjaga diri dari riya\', dan menjadikan rasa malu sebagai mahkota. Tersedia area penitipan anak.',
   rundown:[['09.00','Tilawah & Pembukaan',''], ['09.20','Kajian Utama',''], ['10.45','Tanya Jawab',''], ['11.15','Doa Penutup','']],
   speakers:[{name:'Ustazah Hanum Salsabila', role:'Pemateri'}],
   tickets:[{id:'free', name:'Peserta Umum', price:0, quota:200, fill:.74, desc:'Gratis, wajib registrasi'}]},
  {id:'halal-forum-2026', title:'Indonesia Halal Lifestyle Forum', cat:'Talkshow', s:33, time:'08.30 – 16.00 WIB',
   venue:'Hotel Mulia Senayan', city:'Jakarta', address:'Jl. Asia Afrika, Senayan, Jakarta Pusat', img:'halal',
   excerpt:'Forum sehari tentang ekosistem halal: fashion, kosmetik, pariwisata, dan keuangan syariah.',
   desc:'Forum yang mempertemukan regulator, pelaku usaha, dan investor untuk membahas peluang industri gaya hidup halal Indonesia di pasar global.',
   rundown:[['08.30','Registrasi',''], ['09.30','Keynote: Halal Goes Global',''], ['11.00','Panel Fashion & Kosmetik',''], ['14.00','Panel Pariwisata & Keuangan Syariah','']],
   speakers:[{name:'Klamby', role:'Panelis', d:'klamby'}, {name:'Sekar Ayu', role:'Moderator'}],
   tickets:[{id:'delegate', name:'Delegate', price:500000, quota:100, fill:.36, desc:'Akses semua sesi, makan siang & sertifikat'},
            {id:'student', name:'Mahasiswa', price:150000, quota:60, fill:.55, desc:'Wajib menunjukkan kartu mahasiswa aktif'}]},
  {id:'raya-bazaar-2027', title:'Modest Raya Bazaar 2027', cat:'Bazaar', s:110, e:112, time:'10.00 – 22.00 WIB',
   venue:'Kota Kasablanka Hall', city:'Jakarta', address:'Jl. Casablanca Raya Kav.88, Jakarta Selatan', img:'imfw',
   excerpt:'Tiga hari berburu koleksi Raya dari 150+ label modest lokal, lengkap dengan kuliner halal dan sesi styling.',
   desc:'Bazaar tahunan menjelang Ramadan. Temukan koleksi Raya terbaru, aksesori, dan kebutuhan ibadah dari label-label modest pilihan, plus panggung mini talkshow setiap sore.',
   rundown:[['10.00','Bazaar Dibuka',''], ['15.00','Mini Talkshow',''], ['19.30','Fashion Parade','']],
   speakers:[{name:'Benang Jarum', role:'Tenant Utama', d:'benang-jarum'}, {name:'Heaven Lights', role:'Tenant Utama', d:'heaven-lights'}],
   tickets:[{id:'early', name:'Early Bird', price:25000, quota:300, fill:.48, saleEnd:45, desc:'Harga khusus hingga batas waktu'},
            {id:'reg', name:'Reguler', price:40000, quota:900, fill:.08, desc:'Tiket masuk 1 hari'}]},
  {id:'art-walk-2027', title:'Modest Art Walk: Yogyakarta', cat:'Tur Seni', s:78, time:'08.00 – 18.00 WIB', status:'draft',
   venue:'Jogja National Museum', city:'Yogyakarta', address:'Jl. Prof. Ki Amri Yahya No.1, Yogyakarta', img:'artjog',
   excerpt:'Tur seni sehari mengunjungi galeri dan studio seniman di Yogyakarta bersama kurator.',
   desc:'Perjalanan sehari menyusuri ruang seni Yogyakarta: galeri kontemporer, studio seniman, dan pusat kerajinan, dipandu langsung oleh kurator.',
   rundown:[['08.00','Berkumpul di Jogja National Museum',''], ['10.00','Kunjungan Studio Seniman',''], ['13.00','Makan Siang',''], ['14.30','Tur Galeri Kontemporer','']],
   speakers:[{name:'Aulia Putri', role:'Kurator Tamu'}],
   tickets:[{id:'tour', name:'Tur + Transport', price:450000, quota:30, fill:0, desc:'Transport, makan siang & tiket masuk galeri'}]},
  {id:'muffest-2025-closing', title:'MUFFEST++ Closing Show', cat:'Fashion Show', s:-120, time:'15.00 – 21.00 WIB',
   venue:'Jakarta Convention Center', city:'Jakarta', address:'Jl. Gatot Subroto, Senayan, Jakarta Pusat', img:'muffest',
   excerpt:'Show pamungkas dengan ragam gaya dari masculine hingga cottagecore inspired.',
   desc:'Show penutup yang menampilkan koleksi dari Sofie, Irna La Perle, REBORN29, Jenna & Kaia, dan banyak lagi.',
   rundown:[['15.00','Open Gate',''], ['16.00','Show Sesi 1',''], ['19.00','Closing Show','']],
   speakers:[{name:'Sofie', role:'Perancang', d:'sofie'}, {name:'Jenna & Kaia', role:'Perancang', d:'jenna-kaia'}],
   tickets:[{id:'reg', name:'Reguler', price:100000, quota:300, fill:.93, desc:'Kursi tribun'},
            {id:'vip', name:'VIP', price:400000, quota:40, fill:1, desc:'Kursi baris depan'}]},
  {id:'reborn29-show', title:'REBORN29: The Whisper of Grace', cat:'Fashion Show', s:-62, time:'19.00 – 21.00 WIB',
   venue:'The Apurva Kempinski', city:'Bali', address:'Jl. Raya Nusa Dua Selatan, Bali', img:'reborn',
   excerpt:'Peluncuran koleksi musim gugur/musim dingin REBORN29 dalam show intim di tepi pantai.',
   desc:'Malam peluncuran koleksi dengan lapisan wol ringan dan tekstur rajut, ditutup dengan makan malam bersama.',
   rundown:[['19.00','Welcome Drink',''], ['19.45','Show',''], ['20.30','Dinner','']],
   speakers:[{name:'REBORN29', role:'Perancang', d:'reborn29'}],
   tickets:[{id:'pass', name:'Show Pass', price:150000, quota:150, fill:.88, desc:'Show + welcome drink'}]},
];

const EV_FIRST = ['Aisyah','Nadia','Salsabila','Hanum','Zahra','Aulia','Khadijah','Rania','Syifa','Nabila','Fatimah','Alya','Dinda','Putri','Sekar','Maryam','Annisa','Laila','Tiara','Kirana','Rahma','Hafsah','Inara','Naura'];
const EV_LAST = ['Rahmawati','Putri','Hasanah','Azzahra','Lestari','Maharani','Salsabila','Nurhaliza','Wulandari','Kusuma','Pratiwi','Ramadhani','Fitriani','Anggraini','Safitri','Hidayah'];

const EV = {
  KEY:'modest_ev_db_v1', MINE:'modest_my_orders', db:null,

  today(){ return ymd(new Date()); },
  load(){
    if(this.db) return this.db;
    try{ this.db = JSON.parse(localStorage.getItem(this.KEY) || 'null'); }catch(e){}
    if(!this.db) { this.db = evSeed(); this.save(); }
    return this.db;
  },
  save(){ try{ localStorage.setItem(this.KEY, JSON.stringify(this.db)); }catch(e){} },
  reset(){ try{ localStorage.removeItem(this.KEY); localStorage.removeItem(this.MINE); }catch(e){} this.db = null; return this.load(); },

  events(){ return this.load().events; },
  event(id){ return this.events().find(e => e.id === id); },
  published(){ return this.events().filter(e => e.status === 'published'); },
  orders(evId){ const o = this.load().orders; return evId ? o.filter(x => x.ev === evId) : o; },
  order(id){ return this.orders().find(o => o.id === id); },
  promos(){ return this.load().promos; },

  phase(e){ const t = this.today(); return e.end < t ? 'ended' : e.start <= t ? 'live' : 'upcoming'; },
  counts(o){ return o.status === 'paid' || o.status === 'pending'; },
  sold(e, tId){ return this.orders(e.id).filter(this.counts).reduce((n, o) => n + o.items.filter(i => !tId || i.t === tId).reduce((a, i) => a + i.qty, 0), 0); },
  capacity(e){ return e.tickets.reduce((n, t) => n + +t.quota, 0); },
  left(e, t){ return Math.max(0, t.quota - this.sold(e, t.id)); },
  revenue(e){ return this.orders(e.id).filter(o => o.status === 'paid').reduce((n, o) => n + o.total, 0); },
  minPrice(e){ return Math.min(...e.tickets.map(t => +t.price)); },
  onSale(t){ return !t.saleEnd || t.saleEnd >= this.today(); },
  attendees(evId){ return this.orders(evId).filter(o => o.status === 'paid').flatMap(o => o.att.map(a => ({...a, order:o}))); },
  promoUsed(code){ return this.orders().filter(o => o.promo === code && o.status !== 'cancelled').length; },
  checkPromo(code, evId){
    const p = this.promos().find(x => x.code === code.trim().toUpperCase());
    if(!p) return {err:'Kode promo tidak ditemukan'};
    if(!p.active) return {err:'Kode promo sedang tidak aktif'};
    if(p.until && p.until < this.today()) return {err:'Kode promo sudah kedaluwarsa'};
    if(p.ev && p.ev !== evId) return {err:'Kode promo tidak berlaku untuk event ini'};
    if(this.promoUsed(p.code) >= p.quota) return {err:'Kuota kode promo sudah habis'};
    return {promo:p};
  },
  discount(p, subtotal){ return !p ? 0 : Math.min(subtotal, p.type === 'pct' ? Math.round(subtotal * p.val / 100) : +p.val); },
  nextInvoice(){
    const d = new Date(), n = this.orders().length + 1;
    return `INV-${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}-${String(n).padStart(4, '0')}`;
  },
  code(){ const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s = ''; for(let i = 0; i < 6; i++) s += c[Math.floor(Math.random() * c.length)]; return 'MDS-' + s; },
  // buat pesanan baru (dipakai checkout publik & transaksi manual admin)
  createOrder({ev, name, email, phone, items, attendees, promo, pay, status = 'pending', src = 'web'}){
    const e = this.event(ev);
    const sub = items.reduce((n, i) => n + i.price * i.qty, 0);
    const disc = this.discount(promo, sub);
    const fee = sub - disc > 0 && src === 'web' ? EV_FEE : 0;
    const now = new Date().toISOString();
    const o = {id:this.nextInvoice(), ev, name, email, phone, items, promo:promo ? promo.code : '', disc, fee, total:sub - disc + fee, pay, status, at:now, paidAt:status === 'paid' ? now : null, src,
      att:attendees.map(a => ({c:this.code(), n:a.n, t:a.t, in:null}))};
    this.load().orders.unshift(o); this.save();
    if(src === 'web'){ try{ const m = JSON.parse(localStorage.getItem(this.MINE) || '[]'); m.unshift(o.id); localStorage.setItem(this.MINE, JSON.stringify(m)); }catch(err){} }
    return o;
  },
  setStatus(id, status){ const o = this.order(id); o.status = status; if(status === 'paid') o.paidAt = new Date().toISOString(); this.save(); return o; },
  mine(){ try{ return JSON.parse(localStorage.getItem(this.MINE) || '[]').map(id => this.order(id)).filter(Boolean); }catch(e){ return []; } },
};

function ymd(d){ return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
const EV_MON = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const EV_DAY = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const evDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
function evDateLabel(e, long = true){
  const a = evDate(e.start), b = evDate(e.end);
  const f = d => `${d.getDate()} ${EV_MON[d.getMonth()]} ${d.getFullYear()}`;
  if(e.start === e.end) return long ? `${EV_DAY[a.getDay()]}, ${f(a)}` : f(a);
  return a.getMonth() === b.getMonth() ? `${a.getDate()}–${f(b)}` : `${a.getDate()} ${EV_MON[a.getMonth()]} – ${f(b)}`;
}

function evSeed(){
  let seed = 20261031;
  const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const pick = a => a[Math.floor(rnd() * a.length)];
  const base = new Date(); base.setHours(0, 0, 0, 0);
  const day = off => { const d = new Date(base); d.setDate(d.getDate() + off); return ymd(d); };
  const today = day(0);

  const events = EV_SEED.map(({s, e, fill, ...ev}) => ({...ev, start:day(s), end:day(e ?? s), status:ev.status || 'published', featured:!!ev.featured, created:day(Math.min(s, 0) - 60),
    tickets:ev.tickets.map(({fill, saleEnd, ...t}) => ({...t, saleEnd:saleEnd != null ? day(saleEnd) : ''}))}));
  const promos = [
    {code:'MODEST10', type:'pct', val:10, quota:300, ev:'', until:day(60), active:true},
    {code:'IN2MOTION25', type:'fix', val:25000, quota:80, ev:'in2motionfest-2026', until:day(30), active:true},
    {code:'WASTRA20', type:'pct', val:20, quota:40, ev:'modest-talks-wastra', until:day(10), active:true},
    {code:'RAYAEARLY', type:'fix', val:5000, quota:150, ev:'raya-bazaar-2027', until:day(45), active:false},
  ];

  const orders = [];
  EV_SEED.forEach(src => {
    const ev = events.find(x => x.id === src.id);
    const past = ev.end < today, live = ev.start <= today && ev.end >= today;
    src.tickets.forEach(t => {
      let target = Math.round(t.quota * t.fill), sold = 0;
      while(sold < target){
        const qty = Math.min(target - sold, pick([1, 1, 1, 2, 2, 3]));
        const back = past ? Math.floor(rnd() * 40) + (today > ev.start ? Math.round((evDate(today) - evDate(ev.start)) / 864e5) : 0) : Math.floor(Math.pow(rnd(), 1.4) * 45);
        const at = new Date(base); at.setDate(at.getDate() - back); at.setHours(7 + Math.floor(rnd() * 15), Math.floor(rnd() * 60));
        const r = rnd();
        let status = 'paid';
        if(!past && back <= 1 && r < .35 && t.price) status = 'pending';
        else if(r < .04) status = 'cancelled';
        else if(r < .06 && t.price) status = 'refunded';
        const promo = t.price && rnd() < .15 ? (src.id === 'in2motionfest-2026' && rnd() < .5 ? promos[1] : promos[0]) : null;
        const sub = t.price * qty, disc = promo ? Math.min(sub, promo.type === 'pct' ? Math.round(sub * promo.val / 100) : promo.val) : 0, fee = sub ? EV_FEE : 0;
        const first = pick(EV_FIRST), last = pick(EV_LAST);
        const att = Array.from({length:qty}, (_, i) => {
          const checked = status === 'paid' && (past ? rnd() < .87 : live ? rnd() < .45 : false);
          return {c:'MDS-' + Math.floor(rnd() * 36 ** 6).toString(36).toUpperCase().padStart(6, '7'), n:i ? `${pick(EV_FIRST)} ${pick(EV_LAST)}` : `${first} ${last}`, t:t.id,
            in:checked ? `${ev.start}T${String(8 + Math.floor(rnd() * 3)).padStart(2, '0')}:${String(Math.floor(rnd() * 60)).padStart(2, '0')}:00` : null};
        });
        orders.push({ev:ev.id, name:`${first} ${last}`, email:`${first}.${last}`.toLowerCase() + pick(['@gmail.com', '@yahoo.co.id', '@outlook.com']), phone:'08' + (1100000000 + Math.floor(rnd() * 8.8e9)),
          items:[{t:t.id, qty, price:t.price}], promo:promo ? promo.code : '', disc, fee, total:sub - disc + fee, pay:t.price ? pick(EV_PAY) : 'Gratis', status,
          at:at.toISOString(), paidAt:status === 'paid' || status === 'refunded' ? at.toISOString() : null, src:'web', att});
        if(status !== 'cancelled' && status !== 'refunded') sold += qty;
      }
    });
  });
  orders.sort((a, b) => a.at.localeCompare(b.at));
  orders.forEach((o, i) => { o.id = `INV-${o.at.slice(2, 4)}${o.at.slice(5, 7)}-${String(i + 1).padStart(4, '0')}`; });
  orders.reverse();
  return {v:1, seeded:today, events, orders, promos};
}

// QR tiruan (pola deterministik dari kode tiket) untuk e-tiket — situs & admin
function qrSvg(text, size = 120){
  let h = 2166136261; for(const ch of text){ h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  const n = 25, cell = size / n, rnd = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return (h >>> 0) / 4294967296; };
  const finder = (x, y) => `<rect x="${x * cell}" y="${y * cell}" width="${7 * cell}" height="${7 * cell}" fill="#1E1B18"/><rect x="${(x + 1) * cell}" y="${(y + 1) * cell}" width="${5 * cell}" height="${5 * cell}" fill="#fff"/><rect x="${(x + 2) * cell}" y="${(y + 2) * cell}" width="${3 * cell}" height="${3 * cell}" fill="#1E1B18"/>`;
  const inF = (x, y) => (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
  let r = '';
  for(let y = 0; y < n; y++) for(let x = 0; x < n; x++) if(!inF(x, y) && rnd() < .5) r += `<rect x="${x * cell}" y="${y * cell}" width="${cell + .3}" height="${cell + .3}"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="QR ${String(text).replace(/[<>&"]/g, '')}"><rect width="${size}" height="${size}" fill="#fff"/><g fill="#1E1B18">${r}</g>${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}</svg>`;
}
