// 1. Variabel + tipe data
const nama1 = "Judy Hopps";
const nama2 = "Nick Wilde";

// jarak lari per hari
const jarakJudy = 3;  
const jarakNick = 2;

// elemen untuk output
let out = "";

// tampilkan jarak per hari
out += "Jarak lari per hari:\n";
out += `${nama1}: ${jarakJudy} km\n`;
out += `${nama2}: ${jarakNick} km\n\n`;

// 2. Looping 5 hari
let totalJudy = 0;
let totalNick = 0;

for (let hari = 1; hari <= 5; hari++) {
    out += `Hari ${hari}:\n`;
    out += `- ${nama1} lari ${jarakJudy} km\n`;
    out += `- ${nama2} lari ${jarakNick} km\n\n`;

    // hitung total
    totalJudy += jarakJudy;
    totalNick += jarakNick;
}

// 3. Tampilkan total
out += "=== TOTAL JARAK SELAMA 5 HARI ===\n";
out += `${nama1}: ${totalJudy} km\n`;
out += `${nama2}: ${totalNick} km\n`;

// masukkan ke div
document.getElementById("output").textContent = out;
