function soal_1(){

    do{
        var x = 0;
        var input_bulan = prompt("Masukkan Bulan (1-12) : ");
        var bulan = parseInt(input_bulan);

        if(input_bulan == "" || bulan == 0){
            alert("Inputan tidak boleh kosong")
        }else if(bulan < 0){
            alert("Inputan tidak boleh minus")
        }else if(bulan > 12){
            alert("Inputan hanya boleh antara 1 sampai 12")
        }else if(bulan>0 && bulan <=12){
            alert("Inputan Berhasil")
            x = 1;
        }
    }while(x==0)

    if(bulan == 12 || bulan <3){
        alert("Bulan Desember sampai Februari adalah Musim Dingin");
    }else if(bulan >= 3 && bulan <6 ){
        alert("Bulan Maret sampai Mei adalah Musim Semi");
    }else if(bulan >=6 && bulan <9 ){
        alert("Bulan Juni sampai Agustus adalah Musim Panas");
    }else if(bulan >=9 && bulan <12 ){
        alert("Bulan September sampai November adalah Musim Gugur");
    }
        
}

function soal_2(){
    var a = 0;
    var b = 1;
    var f = 1;
    var x = "";

    var input_nilai = prompt("Masukkan jumlah fibonacci : ");
    var nilai = parseInt(input_nilai);


    for(var i = 2; i <= nilai; i++) {
        f = a + b;
        a = b;
        b = f;
        x += f+" ";
    }
    alert(x);
}

function soal_3(){
    var input_angka = prompt("Masukkan angka maksimal : ");
    var angka = parseInt(input_angka);
    var genap = "";
    var ganjil = "";

    for(var x=0;x<=angka;x++){
        if(x%2 == 0){
            genap += x+" ";
        }else if(x%2 != 0){
            ganjil += x+" ";
        }
    }
    alert("Genap : "+genap+"\nGanjil : "+ganjil);

}

function soal_4(){
    var kata = prompt("Masukkan kata : ");
    var input_angka = prompt("Masukkan jumlah perulangan kata (angka) : ")
    var angka = parseInt(input_angka);

    x = "";

    for(i=1;i<=angka;i++){
        x += kata+" ";
    }

    alert(x);


}