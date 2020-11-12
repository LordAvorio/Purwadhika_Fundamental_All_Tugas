//#region Data Diri
var buttonSubmit = document.getElementById("test")

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    var namaDepan = document.getElementById("nama_depan").value
    var namaBelakang = document.getElementById("nama_belakang").value
    var nomorKontak = document.getElementById("nomor_telepon").value
    var urutanAnak = document.getElementById("urutan_anak").value

    var kelamin = document.getElementsByName("gender")
    for(var i=0, l = kelamin.length;i<l;i++){
        if(kelamin[i].checked){
            var gender = kelamin[i].value
        }
    }
    var alamat = document.getElementById("alamat").value

    document.getElementById("hasil").innerHTML = `
    Nama Depan : ${namaDepan}
    <br/>
    Nama Belakang : ${namaBelakang}
    <br/>
    Nomor Kontak : ${nomorKontak}
    <br/>
    Anak Ke : ${urutanAnak}
    <br/>
    Gender : ${gender}
    <br/>
    Alamat : ${alamat}
    ` 
})
//#endregion

//#region kalkulator
var buttonKali = document.getElementById("kali")
buttonKali.addEventListener("click", (event) => {
    event.preventDefault()

    var input_1 = document.getElementById("angka_1").value
    var angka_1 = parseInt(input_1)
    var input_2 = document.getElementById("angka_2").value
    var angka_2 = parseInt(input_2)

    var hasilKali = angka_1*angka_2
    document.getElementById("hasil_calculator").innerHTML = 
    `
    ${angka_1}*${angka_2} = ${hasilKali} 
    `
})

var buttonBagi = document.getElementById("bagi")
buttonBagi.addEventListener("click", (event) => {
    event.preventDefault()

    var input_1 = document.getElementById("angka_1").value
    var angka_1 = parseInt(input_1)
    var input_2 = document.getElementById("angka_2").value
    var angka_2 = parseInt(input_2)

    var hasilBagi = angka_1/angka_2
    document.getElementById("hasil_calculator").innerHTML = 
    `
    ${angka_1}/${angka_2} = ${hasilBagi} 
    `
})

var buttonTambah = document.getElementById("tambah")
buttonTambah.addEventListener("click", (event) => {
    event.preventDefault()

    var input_1 = document.getElementById("angka_1").value
    var angka_1 = parseInt(input_1)
    var input_2 = document.getElementById("angka_2").value
    var angka_2 = parseInt(input_2)

    var hasilTambah = angka_1+angka_2
    document.getElementById("hasil_calculator").innerHTML = 
    `
    ${angka_1}+${angka_2} = ${hasilTambah} 
    `
})

var buttonKurang = document.getElementById("kurang")
buttonKurang.addEventListener("click", (event) => {
    event.preventDefault()

    var input_1 = document.getElementById("angka_1").value
    var angka_1 = parseInt(input_1)
    var input_2 = document.getElementById("angka_2").value
    var angka_2 = parseInt(input_2)

    var hasilKurang = angka_1-angka_2
    document.getElementById("hasil_calculator").innerHTML = 
    `
    ${angka_1}-${angka_2} = ${hasilKurang} 
    `
})

var buttonModulus = document.getElementById("modulus")
buttonModulus.addEventListener("click", (event) => {
    event.preventDefault()

    var input_1 = document.getElementById("angka_1").value
    var angka_1 = parseInt(input_1)
    var input_2 = document.getElementById("angka_2").value
    var angka_2 = parseInt(input_2)

    var hasilModulus = angka_1%angka_2
    document.getElementById("hasil_calculator").innerHTML = 
    `
    ${angka_1}%${angka_2} = ${hasilModulus} 
    `
})

var buttonPangkat = document.getElementById("pangkat")
buttonPangkat.addEventListener("click", (event) => {
    event.preventDefault()

    var input_1 = document.getElementById("angka_1").value
    var angka_1 = parseInt(input_1)
    var input_2 = document.getElementById("angka_2").value
    var angka_2 = parseInt(input_2)

    var hasilPangkat = Math.pow(angka_1, angka_2)
    document.getElementById("hasil_calculator").innerHTML = 
    `
    ${angka_1}<sup>${angka_2}</sup> = ${hasilPangkat} 
    `
})
//#endregion

//#region QUIZ
var buttonQuiz = document.getElementById("quiz")
buttonQuiz.addEventListener("click", (event) => {
    event.preventDefault()

    var soal_1 = document.getElementsByName("soal_1")
    for(var i=0, l = soal_1.length;i<l;i++){
        if(soal_1[i].checked){
            var hasil1 = parseInt(soal_1[i].value)
        }
    }
    var soal_2 = document.getElementsByName("soal_2")
    for(var i=0, l = soal_2.length;i<l;i++){
        if(soal_2[i].checked){
            var hasil2 = parseInt(soal_2[i].value)
        }
    }
    var soal_3 = document.getElementsByName("soal_3")
    for(var i=0, l = soal_3.length;i<l;i++){
        if(soal_3[i].checked){
            var hasil3 = parseInt(soal_3[i].value)
        }
    }
    var soal_4 = document.getElementsByName("soal_4")
    for(var i=0, l = soal_4.length;i<l;i++){
        if(soal_4[i].checked){
            var hasil4 = parseInt(soal_4[i].value)
        }
    }

    var totalHasil = hasil1+hasil2+hasil3+hasil4 

    document.getElementById("hasil_quiz").innerHTML = `${totalHasil}`

})
//#endregion