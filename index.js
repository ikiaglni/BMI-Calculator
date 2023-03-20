function hitungBMI() {
  let beratBadan = document.getElementById("beratBadan").value;
  let tinggiBadan = document.getElementById("tinggiBadan").value;

  let hasil;
  hasil = beratBadan * (tinggiBadan * tinggiBadan);
  console.log(beratBadan);
  document.getElementById("hasil").innerHTML = hasil;

  if (
    umur.value == "" ||
    tinggiBadan.value == "" ||
    beratBadan.value == "" ||
    (pria.checked == false && perempuan.checked == false)
  ) {
    alert("Data mohon diisi dengan lengkap!");
  } else {
    hasil = beratBadan * (tinggiBadan * tinggiBadan).toFixed(1);
    console.log(beratBadan);
    document.getElementById("hasil").innerHTML = hasil;
    if (hasil < 18.5) {
      //underweight
      document.getElementById("statusBeratBadan").innerHTML =
        "Kekurangan Berat Badan";
      document.getElementById("statusBeratBadan1").innerHTML =
        "Kekurangan Berat Badan";
      document.getElementById("antara").innerHTML = "kurang dari 18.5";
      document.getElementById("deskripsi").innerHTML =
        "Anda berada dalam <b>kategori underweight atau kekurangan Berat Badan.</b>  Cara terbaik untuk menaikkan berat badan adalah dengan mengkonsumsi makanan yang mengandung banyak nutrisi dan makan yang teratur dan cukup. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
      document.getElementById("deskripsi2").innerHTML =
        "Beberapa penyakit yang berasal dari underweight <ul><li>Malnutrisi</li><li>Turunnya Fungsi Kekebalan Tubuh</li><li>Osteoporosis</li><li>Infertilitas</li></ul>.";
    } else if (hasil >= 18.5 && hasil <= 24.9) {
      //normal
      document.getElementById("statusBeratBadan").innerHTML = "Normal (Ideal)";
      document.getElementById("statusBeratBadan1").innerHTML = "Normal (Ideal)";
      document.getElementById("antara").innerHTML = "diantara 18.5 sampai 24.9";
      document.getElementById("deskripsi").innerHTML =
        "Anda berada dalam <b>kategori Berat badan Normal.</b> Cara terbaik untuk mempertahankan berat badan adalah dengan berolahraga dan istirahat yung cukup.";
    } else if (hasil >= 25.0 && hasil <= 29.9) {
      //overweight
      document.getElementById("statusBeratBadan").innerHTML =
        "Kelebihan Berat Badan";
      document.getElementById("statusBeratBadan1").innerHTML =
        "Kelebihan Berat Badan";
      document.getElementById("antara").innerHTML =
        "diantara 25.00 sampai 29.9";
      document.getElementById("deskripsi").innerHTML =
        "Anda berada dalam <b>kategori overweight atau kelebihan berat badan.</b>  Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      document.getElementById("deskripsi2").innerHTML =
        "Beberapa penyakit yang berasal dari overweight <ul><li>Berkurangnya kualitas hidup</li><li>Tekanan darah tinggi</li><li>Sakit Jantung</li><li>Osteoarthritis</li></ul>.";
    } else if (hasil > 30.0) {
      //obesitas
      document.getElementById("statusBeratBadan").innerHTML =
        "Kegemukan (Obesitas)";
      document.getElementById("statusBeratBadan1").innerHTML =
        "Kegemukan (Obesitas)";
      document.getElementById("antara").innerHTML = "30 atau lebih";
      document.getElementById("deskripsi").innerHTML =
        "Anda berada dalam <b>kategori kegemukan atau obesitas.</b> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      document.getElementById("deskripsi2").innerHTML =
        "Beberapa penyakit yang berasal dari kegemukan <ul><li>Diabetes</li><li>Hipertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li></ul>.";
    }
  }
}
