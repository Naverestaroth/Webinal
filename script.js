// Fungsi ini berjalan ketika tombol 'Simpan Data' diklik
function simpanData() {
    let nama = document.getElementById("inputHewan").value;
    
    if(nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    // 1. Ambil data yang sudah ada di localStorage sebelumnya (jika ada)
    let dataLama = localStorage.getItem("dataHewan");
    let arrayHewan = [];
    
    if (dataLama) {
        // Ubah format teks (string) kembali menjadi Array
        arrayHewan = JSON.parse(dataLama);
    }

    // 2. Tambahkan nama hewan baru ke dalam Array
    arrayHewan.push(nama);

    // 3. Simpan kembali ke localStorage (wajib diubah jadi string)
    localStorage.setItem("dataHewan", JSON.stringify(arrayHewan));

    // Bersihkan kotak input dan perbarui tampilan
    document.getElementById("inputHewan").value = "";
    tampilkanData();
}

// Fungsi untuk mencetak data dari localStorage ke layar
function tampilkanData() {
    let dataLama = localStorage.getItem("dataHewan");
    let daftarElement = document.getElementById("daftarHewan");
    
    // Kosongkan list di layar sebelum diisi ulang
    daftarElement.innerHTML = "";

    if (dataLama) {
        let arrayHewan = JSON.parse(dataLama);
        
        // Lakukan perulangan untuk menampilkan setiap hewan
        arrayHewan.forEach(function(hewan) {
            let li = document.createElement("li");
            li.innerText = hewan;
            daftarElement.appendChild(li);
        });
    }
}

// Otomatis tampilkan data saat halaman web pertama kali dibuka
tampilkanData();