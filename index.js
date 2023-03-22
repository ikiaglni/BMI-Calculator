function hitungBMI() {
  let beratBadan = document.getElementById("beratBadan").value;
  let tinggiBadan = document.getElementById("tinggiBadan").value * 0.01;

  let hasil;
  hasil = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);
  document.getElementById("hasil").innerHTML = hasil;

  if (
    umur.value == "" ||
    tinggiBadan.value == "" ||
    beratBadan.value == "" ||
    (pria.checked == false && perempuan.checked == false)
  ) {
    alert("Data mohon diisi dengan lengkap!");
  } else {
    document.getElementById("hasil").innerHTML = hasil;
    if (hasil < 18.5) {
      //underweight
      document.getElementById("keteranganStatus").innerHTML =
        "Kekurangan Berat Badan";
      document.getElementById("keteranganStatus1").innerHTML =
        "Kekurangan Berat Badan";
      document.getElementById("antara").innerHTML = "kurang dari 18.5";
      document.getElementById("keterangan").innerHTML =
        "Anda berada dalam <b>kategori underweight atau kekurangan Berat Badan.</b>  Cara terbaik untuk menaikkan berat badan adalah dengan mengkonsumsi makanan yang mengandung banyak nutrisi dan makan yang teratur dan cukup. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
      document.getElementById("keterangan2").innerHTML =
        "Beberapa penyakit yang berasal dari underweight <ul><li>Kulit keriput hingga penuaan dini</li><li>Infeksi saluran napas atas, kulit, atau saluran kemih</li><li>Osteoporosis</li><li>Fatigue yang susah diatasi</li></ul>";
    } else if (hasil >= 18.5 && hasil <= 24.9) {
      //normal
      document.getElementById("keteranganStatus").innerHTML = "Normal (Ideal)";
      document.getElementById("keteranganStatus1").innerHTML = "Normal (Ideal)";
      document.getElementById("antara").innerHTML = "diantara 18.5 sampai 24.9";
      document.getElementById("keterangan").innerHTML =
        "Anda berada dalam <b>kategori Berat badan Normal.</b> Cara terbaik untuk mempertahankan berat badan adalah dengan berolahraga dan istirahat yung cukup.";
    } else if (hasil >= 25.0 && hasil <= 29.9) {
      //overweight
      document.getElementById("keteranganStatus").innerHTML =
        "Kelebihan Berat Badan";
      document.getElementById("keteranganStatus1").innerHTML =
        "Kelebihan Berat Badan";
      document.getElementById("antara").innerHTML =
        "diantara 25.00 sampai 29.9";
      document.getElementById("keterangan").innerHTML =
        "Anda berada dalam <b>kategori overweight atau kelebihan berat badan.</b>  Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      document.getElementById("keterangan2").innerHTML =
        "Beberapa penyakit yang berasal dari overweight <ul><li>Diabetes tipe 2</li><li>Osteoarthritis</li><li>Sulit bernapas</li><li>Osteoarthritis</li></ul>";
    } else if (hasil > 30.0) {
      //obesitas
      document.getElementById("keteranganStatus").innerHTML =
        "Kegemukan (Obesitas)";
      document.getElementById("keteranganStatus1").innerHTML =
        "Kegemukan (Obesitas)";
      document.getElementById("antara").innerHTML = "30 atau lebih";
      document.getElementById("keterangan").innerHTML =
        "Anda berada dalam <b>kategori kegemukan atau obesitas.</b> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      document.getElementById("keterangan2").innerHTML =
        "Beberapa penyakit yang berasal dari kegemukan <ul><li>Sleep apnea</li><li>Diabetes</li><li>Penyakit jantung</li><li>Osteoarthritis</li></ul>";
    }
  }
}
