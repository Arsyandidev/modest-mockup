# modest.id — Mockup Redesign

Mockup HTML statis (Bootstrap 5.3 + JavaScript, tanpa build tool). Buka `index.html` langsung di browser.
Dashboard admin event: buka `admin/login.html` (email & kata sandi apa pun bisa dipakai).
Portofolio layanan (klien event & landing page): `portfolio.html` → detail `project.html?id=…`.
Studi kasus redesign untuk presentasi internal: `showcase.html`.

## Struktur

```
modest/
├── index.html          Home
├── fashion.html        Kanal Fashion
├── lifestyle.html      Kanal Lifestyle
├── art-culture.html    Kanal Art & Culture
├── iqra.html           Kanal Iqra
├── events.html         Daftar event (mendatang / telah berlangsung)
├── event.html          Detail event + beli tiket → event.html?id=in2motionfest-2026
├── catalog.html        Katalog produk (filter via URL: ?brand=khanaan, ?type=Outer)
├── product.html        Detail produk   → product.html?id=kaftan-sekar
├── article.html        Detail artikel  → article.html?id=modinity
├── designers.html      Designer Directory
├── about.html          Tentang Kami
├── portfolio.html      Portofolio klien: event & landing page yang pernah dikerjakan
├── project.html        Detail proyek → project.html?id=ts-scarf-launch
├── showcase.html       Studi kasus redesign (sebelum/sesudah, semua halaman) — internal
├── admin/              Event Studio (dashboard admin event)
│   ├── login.html
│   ├── index.html      Dashboard: KPI, grafik pendapatan, perlu tindakan
│   ├── events.html     Buat / edit / duplikat / hapus event, tiket, rundown, pembicara
│   ├── orders.html     Transaksi: filter, detail, konfirmasi bayar, refund, invoice, transaksi manual, CSV
│   ├── attendees.html  Peserta & check-in (scan kode tiket), CSV
│   └── promos.html     Kode promo
└── assets/
    ├── css/modest.css  Style situs (palet warna di :root)
    ├── css/admin.css   Style dashboard (memakai token modest.css)
    ├── img/uploads/    Gambar yang disalin dari modest.id
    └── js/
        ├── data.js         Konten: artikel (A), desainer (DESIGNERS), produk (P)
        ├── events-data.js  Data event + penyimpanan bersama (objek EV) + QR e-tiket
        ├── projects.js     Data & tampilan portofolio (WORKS) — data contoh
        ├── events.js       Halaman event publik, checkout tiket, e-tiket, Tiket Saya
        ├── modest.js       Tampilan & interaksi halaman situs
        └── admin.js        Tampilan & interaksi dashboard admin
```

## Cara kerja

- Header, navigasi, dan footer ditulis langsung di tiap file HTML. Kalau menu berubah, ubah di **semua** file HTML situs (dan sidebar di `admin/*.html`).
- Isi halaman dirender oleh JavaScript berdasarkan `<body data-page="…">`.
- **Situs dan dashboard berbagi data lewat `localStorage`** (kunci `modest_ev_db_v1`). Tiket yang dibeli di `event.html` langsung muncul di Transaksi dan Peserta; event yang diedit admin langsung tampil di situs. Buka keduanya di browser yang sama.
- Data contoh event dibuat otomatis saat pertama dibuka, dengan tanggal relatif terhadap hari itu (selalu ada event "hari ini" untuk demo check-in). Tombol **Reset Data Demo** di sidebar admin mengembalikan data awal.
- Keranjang katalog, wishlist, dan bacaan tersimpan juga disimpan di `localStorage` (hanya untuk demo).

## Skenario demo

1. Situs → Events → pilih event → pilih tiket → checkout (promo `MODEST10` atau `IN2MOTION25`) → "Saya Sudah Bayar" → e-tiket ber-QR.
2. Admin → Transaksi → pesanan tadi muncul paling atas. Coba Konfirmasi Pembayaran / Refund / Invoice.
3. Admin → Transaksi Baru → penjualan on-site (Tunai, EDC, Komplimen).
4. Admin → Peserta & Check-in → Scan Tiket → masukkan kode `MDS-…` dari e-tiket, atau pakai tombol demo.
5. Admin → Events → Buat Event → publikasikan → cek di halaman Events situs.

Kode voucher katalog: `MODEST10`.

## Catatan konten

- Gambar disimpan lokal di `assets/img/uploads/` karena sertifikat SSL modest.id kedaluwarsa (gambar via https gagal dimuat). Sebagian gambar artikel 2026 memang sudah tidak ada di server, jadi yang tampil adalah placeholder.
- Data produk, event, transaksi, peserta, dan sebagian profil desainer adalah **contoh**. QR di e-tiket adalah pola tiruan (bukan QR yang bisa dipindai). Ganti dengan data asli sebelum dipresentasikan ke klien.
