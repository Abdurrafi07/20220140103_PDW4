// Mengambil elemen dengan ID "Waktu" dan menyimpannya dalam variabel Waktu
const Waktu = document.getElementById("Waktu");

// Fungsi untuk mengupdate waktu secara real-time
function dateTime(){
    const date = new Date();
    Waktu.innerHTML = date; // Mengatur innerHTML dari elemen Waktu dengan nilai waktu saat ini
}

// Memanggil fungsi dateTime setiap 1000 milidetik (1 detik)
setInterval(dateTime, 1000);

// Memanggil fungsi dateTime untuk menampilkan waktu saat halaman dimuat
dateTime();

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // Fungsi untuk mendapatkan waktu dalam format HH:MM:SS
    function getTime(date) {
        // Mengembalikan waktu dalam format waktu lokal
        return date.toLocaleTimeString();
    }

    // Fungsi untuk mendapatkan tanggal dalam format DD/MM/YYYY
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

    // Fungsi untuk menampilkan notifikasi waktu real-time
    function showNotification() {
        // Mendapatkan waktu dan tanggal saat ini
        const now = new Date();
        // Mendapatkan waktu saat ini
        const waktu = getTime(now);
        // Panggil fungsi formatDate untuk mendapatkan tanggal
        const tanggal = formatDate(now); 
        // Mengambil nilai input username
        const username = document.getElementById('Username').value;
        // Menampilkan notifikasi dengan waktu, tanggal, dan nama pengguna
        alert("Selamat Bergabung, " + username + " Sebagai Shinobi Magang" + "!\nPada Tanggal: " + tanggal + "\nPukul: " + waktu );
    }

    // Menangani pengiriman formulir saat tombol Login diklik
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Menghentikan perilaku default dari pengiriman formulir
        event.preventDefault(); 

        // Tampilkan notifikasi waktu real-time
        showNotification();

        // Kosongkan nilai input setelah pengiriman formulir
        document.getElementById('Username').value = ''; // Mengosongkan nilai input username
        document.getElementById('Password').value = ''; // Mengosongkan nilai input password
    });
});

