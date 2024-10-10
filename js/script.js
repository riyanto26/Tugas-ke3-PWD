
// Fungsi untuk menampilkan promo hari ini
function tampilPromo() {
  let hari = new Date().getDay();
  let promo = "";

  if (hari === 0 || hari === 6) {
      promo = "Diskon 25% untuk semua level pedas!";
  } else {
      promo = "Beli 3 Gratis 1 untuk seblak level 5.";
  }
  document.getElementById("promoMessage").innerHTML = promo;
}

// Daftar menu seblak favorit beserta harga dan status diskon
let menuFavorit = [
  { nama: "Seblak Kerupuk", harga: 15000, diskon: true }, // Diskon 25%
  { nama: "Seblak Baso", harga: 10000, diskon: false },
  { nama: "Seblak Sosis", harga: 20000, diskon: false },
  { nama: "Seblak Ceker", harga: 17000, diskon: true } // Diskon 25%
];

let totalHargaSetelahDiskon = 0;

function tampilkanMenu() {
  let listMenuElement = document.getElementById("listMenu");
  let pilihMenuElement = document.getElementById("pilihMenu");

  // Bersihkan list sebelum menambah item baru
  listMenuElement.innerHTML = "";
  pilihMenuElement.innerHTML = "";

  menuFavorit.forEach(function(item, index) {
      // Menambah item ke dalam list (ul)
      let li = document.createElement("li");
      li.textContent = `${item.nama} - Rp. ${item.harga}`;
      listMenuElement.appendChild(li);

      // Menambah opsi ke dalam select (pilihMenu)
      let option = document.createElement("option");
      option.value = index;
      option.textContent = `${item.nama} - Rp. ${item.harga}`;
      pilihMenuElement.appendChild(option);
  });
}

// Fungsi untuk mengecek pesanan
function cekPesanan() {
  let indexMenu = document.getElementById("pilihMenu").value;
  let jumlahPesanan = document.getElementById("inputJumlah").value;

  if (indexMenu === "" || jumlahPesanan === "") {
      document.getElementById("hasilPesanan").innerHTML = "Harap pilih menu dan masukkan jumlah pesanan!";
      return;
  }

  let menuDipilih = menuFavorit[indexMenu];
  let hargaTotal = menuDipilih.harga * jumlahPesanan;

  document.getElementById("hasilPesanan").innerHTML = `Anda memesan ${menuDipilih.nama} sebanyak ${jumlahPesanan} porsi.`;
  document.getElementById("totalBayar").innerHTML = `Total harga: Rp. ${hargaTotal}`;
}

// Fungsi untuk menghitung kembalian
function hitungKembalian() {
  let totalBayar = document.getElementById("totalBayar").textContent.replace("Total harga: Rp. ", "");
  let uangDibayar = document.getElementById("uangBayar").value;

  if (!uangDibayar || uangDibayar < totalBayar) {
      document.getElementById("hasilKembalian").innerHTML = "Uang yang dibayar kurang!";
      return;
  }

  let kembalian = uangDibayar - totalBayar;
  document.getElementById("hasilKembalian").innerHTML = `Kembalian Anda: Rp. ${kembalian}`;
}
