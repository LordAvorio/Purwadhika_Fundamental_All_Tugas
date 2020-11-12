function tugasHari2(){
    var nama = prompt("Masukkan Nama : ");
    var usia = prompt("Masukkan Hobby : ");
    var hobby = prompt("Masukkan Hobby : ");
    var gender = prompt("Masukkan Gender : ");

    alert("Nama saya adalah "+nama+"\nSaya berusia "+usia+" tahun\nHobi saya adalah "+hobby+"\nSaya bergender "+gender);
    confirm("Apakah data sudah dimasukkan dengan benar?")

}

function tugasHari2_2(){
    var jumlah_apel = prompt("Masukkan jumlah apel : ");
    var jumlah_jeruk = prompt("Masukkan jumlah jeruk : ");
    var jumlah_anggur = prompt("Masukkan jumlah anggur : ");

    var total_apel = jumlah_apel * 10000;
    var total_jeruk = jumlah_jeruk * 20000;
    var total_anggur = jumlah_anggur * 30000;

    var total_harga = total_apel+total_jeruk+total_anggur;
    
    alert("Anda membeli :\nApel🍎 : "+jumlah_apel+" * 10000 = "+total_apel+"\nJeruk🍊 : "+jumlah_jeruk+" * 20000 = "+total_jeruk+"\nAnggur🍇 : "+jumlah_anggur+" * 30000 = "+total_anggur+"\nSehingga total harga semua🙏 : "+total_harga);
}