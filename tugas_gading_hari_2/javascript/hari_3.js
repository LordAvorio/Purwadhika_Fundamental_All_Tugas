function solveIT2(){
    var nilai = prompt("Masukkan Nilai :");
    var kuadrat = prompt("Masukkan Kuadrat :");
    var nilai_integer = parseInt(nilai);
    var kuadrat_integer = parseInt(kuadrat);
    var hasil = Math.pow(nilai_integer, kuadrat_integer);

    alert("Bilangan "+ nilai_integer+" bila dikuadratkan "+ kuadrat_integer+" Hasilnya : "+hasil);

}

function solveIT4(){
    var tahun = 0;
    var bulan = 0;
    var minggu = 0;
    var hari_hasil = 0;
    var hari_input = prompt("Masukkan Jumlah Hari : ");
    var hari = parseInt(hari_input);

    // var tahun = Math.round(hari/365);
    // var sisa_tahun = hari%365;
    // alert(sisa_tahun)

    do{
        if(hari >= 365){
            var hari = hari-365;
            tahun++;
        }else if(hari >= 30 && hari < 365 ){
            var hari = hari-30;
            bulan++;
        }else if(hari >= 7 && hari < 30){
            var hari = hari-7;
            minggu++;
        }
    }while(hari>=7)

    if(hari <7 && hari >0){
        var hari_hasil = hari;
    }else if(hari == 0){
        var hari_hasil = 0;
    }


    

    alert(hari_input+" Hari memiliki "+tahun+" tahun "+bulan+" bulan "+minggu+" minggu "+hari_hasil+" hari");
}

function solveIT6(){
    var hari = new Date();
    var hari_kemarin = hari.getDate()-1;
    var hari_esok = hari.getDate()+1;
    var bulan = hari.getMonth()+1;

    alert("Hari ini tanggal "+hari.getDate()+" - "+bulan+" - "+hari.getFullYear()+"\n Besok tanggal "+hari_esok+" - "+bulan+" - "+hari.getFullYear()+"\n Kemarin tanggal "+hari_kemarin+" - "+bulan+" - "+hari.getFullYear());
}

function solveIT10(){
    var angka = prompt("Masukkan Angka :");
    var hasil = angka % 2;

    // IF ELSE
    // if(hasil == 0){
    //     alert("Angka "+angka+" tergolong bilangan GENAP !");
    // }else{
    //     alert("Angka "+angka+" tergolong bilangan GANJIL !");
    // }

    // SWITCH CASE
    switch(true){
        case(hasil == 0):
            alert("Angka "+angka+" tergolong bilangan GENAP !");
            break;
        case(hasil != 0):
            alert("Angka "+angka+" tergolong bilangan GANJIL !");
            break;
        default: alert("Halo.");  
    }
}

function solveIT13(){
    var massa = prompt("Masukkan Massa (KG) : ");
    var tinggi = prompt("Masukkan Tinggi (meter) : ");
    var massa_number = Number(massa);
    var tinggi_number = Number(tinggi);
    var imt = massa_number / Math.pow(tinggi_number,2);
    
    if(imt >=0 && imt < 18.5){
        var hasil = "Berat Badan Kurang";
    }else if(imt >= 18.5 && imt <=24.9){
        var hasil = "Berat Badan Ideal";
    }else if(imt >= 25.0 && imt <=29.9){
        var hasil = "Berat Badan Berlebih";
    }else if(imt >= 30.0 && imt <=39.9){
        var hasil = "Berat Badan Sangat Berlebih";
    }else if(imt > 39.9){
        var hasil = "Berat Badan Obesitas";
    }else{
        var hasil = "ERROR";
    }

    alert("Massa "+massa+" kg & tinggi "+tinggi+" m\nIMT = "+imt+", "+hasil+"!");
}

