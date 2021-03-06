class Produk {
    constructor(nama, harga, stok) {
        this.nama = nama,
        this.harga = harga,
        this.stok = stok
    }
}
var produk_array = []
let qty = new Array(produk_array.length)


main: while (true) {
    main_menu = parseInt(prompt(`
    =============================
    Selamat Datang Di Toko Gading
    --===We Sell Fresh Fruit===--
    =============================
    Silahkan Pilih Menu :
    1. Tambah Produk
    2. Lihat Produk
    3. Transaksi
    4. Edit Produk
    5. Exit
    =============================
    `))
    if (main_menu == 1) {
        menu_1: while (true) {
            tambahProduk(produk_array)
            break menu_1
        }
    }
    else if (main_menu == 2) {
        menu_2: while (true) {
            ShowMenu()
            break menu_2
        }
    }
    else if (main_menu == 3) {
        menu_3: while (true) {
            inputBuah(produk_array)
            var total = eachFruit(qty, produk_array)
            var totalBelanja = totalHarga(total)
            detailHarga(qty, produk_array, total, totalBelanja)
            pembayaran(totalBelanja)
            kurangStok(qty, produk_array)
            showStok(produk_array)

            let confirmation = confirm("Apakah anda ingin belanja lagi?")
            if (confirmation === false) {
                break menu_3
            }
        }
    }
    else if(main_menu ==4){
        if(typeof produk_array !== 'undefined' && produk_array.length > 0){
            editProduk(produk_array)
        }else{
            alert("Data masih kosong !, silahkan input terlebih dahulu")
        }
    }
    else if(main_menu == 5) {
        alert("TERIMA KASIH !")
        break main
    }
    else{
        alert("WRONG INPUT")
    }
}


//Function

function editProduk(produk_array){

var editProdukMenu = "====================\nSilahkan Pilih Produk\nYang Ingin Diedit\n====================\n"
for(let x=0;x<produk_array.length;x++){
    editProdukMenu += `${x+1}. ${produk_array[x].nama}\n`
}
editProdukMenu += `====================`
alert(editProdukMenu)

var temp_name = []

for(let x=0;x<produk_array.length;x++){
    temp_name[x] = produk_array[x].nama
}

checkInput: while(true){
    var inputCheck = prompt("Masukkan produk yang ingin diedit :")
    for(let x=0;x<temp_name.length;x++){
        if(temp_name[x] == inputCheck){
            var changeName = prompt("Masukkan nama produk yang baru : ", "Apel")
            var changePrice = parseInt(prompt("Masukkan harga produk yang baru : ", "2000"))
            var changeStock = parseInt(prompt("Masukkan stok produk yang baru : ", "2000"))

            produk_array[x].nama = changeName
            produk_array[x].harga = changePrice
            produk_array[x].stok = changeStock
            
            alert(`${produk_array[x].nama}, harga : ${produk_array[x].harga}, stock : ${produk_array[x].stok}`)
            break checkInput;
        }else if(inputCheck == ""){
            alert("Inputan tidak boleh kosong")
        }else{
            alert("Produk tidak ditemukan")
        }
    }
}    
return produk_array
}

function inputBuah(produk_array) {
for (let i = 0; i < produk_array.length; i++) {
    input_buah: while (true) {
        qty[i] = parseInt(prompt(`Masukan total ${produk_array[i].nama} yang ingin anda beli!`))
        if (qty[i] > produk_array[i].stok) {
            alert(`input over stock ${produk_array[i].nama}`)
        } else if (isNaN(qty[i])) {
            alert("⚠ wrong input.")
        } else {
            break input_buah;
        }
    }
}
return qty
}

function eachFruit(qty, produk_array) {
let total = [0, 0, 0]
for (i = 0; i < produk_array.length; i++) {
    total[i] = produk_array[i].harga * qty[i]
}
return total;
}

function totalHarga(total) {
let totalBelanja = total.reduce((a, b) => a + b)
return totalBelanja
}

function detailHarga(qty, produk_array, total, totalBelanja) {
let detail_harga = `Detail Harga\n====================\n`
for (i = 0; i < produk_array.length; i++) {
    detail_harga +=
        `Total ${produk_array[i].nama} : ${qty[i]} buah x ${produk_array[i].harga} = ${total[i]}\n`
}
detail_harga += `Total Belanja : ${totalBelanja}\n====================`
return alert(detail_harga)
}

function pembayaran(totalBelanja) {
var bayar = 0
loop_pembayaran: while (true) {
    bayar = parseInt(prompt("Masukan uang anda !"))
    if (bayar < totalBelanja) {
        alert("Maaf uang anda kurang")
    } else if (isNaN(bayar)) {
        alert("⚠ Wrong input !")
    } else if (bayar >= totalBelanja) {
        var kembalian = bayar - totalBelanja
        break loop_pembayaran;
    }
}

let showKembalian = `
    Terima kasih sudah berbelanja di toko kami 🙏
    Uang kembalian : Rp ${kembalian},00 `
return alert(showKembalian)
}

function showStok(produk_array) {
let lihatStok = `STOK BUAH\n====================\n`
for (let i = 0; i < produk_array.length; i++) {
    lihatStok += `Total Stok ${produk_array[i].nama} = ${produk_array[i].stok}\n`
}
return alert(lihatStok)
}

function kurangStok(qty, produk_array) {
for (let i = 0; i < produk_array.length; i++) {
    produk_array[i].stok -= qty[i]
}
return produk_array
}

function ShowMenu() {
let menu = "====================\nList Buah\n====================\n"
for (let i = 0; i < produk_array.length; i++) {
    menu +=
        `${i + 1}. ${produk_array[i].nama} Rp ${produk_array[i].harga},00 /kg stok : ${produk_array[i].stok} \n`
}
menu += `====================`
alert(menu)
}

function tambahProduk(produk_array) {
namaProduk: while (true) {
    var nama_produk = prompt("Masukkan Nama Produk :");
    if (nama_produk == "") {
        alert("Nama Produk Tidak Boleh Kosong")
    } else {
        alert("Nama Produk berhasil ditambahkan")
        break namaProduk
    }
}
hargaProduk: while (true) {
    var harga_produk = parseInt(prompt("Masukkan Harga Produk :"));
    if (harga_produk == "" || harga_produk <= 0) {
        alert("Harga Produk Tidak Boleh Kosong, bernilai 0 dan minus")
    } else {
        alert("Harga Produk berhasil ditambahkan")
        break hargaProduk
    }
}
stokProduk: while (true) {
    var stok_produk = parseInt(prompt("Masukkan Stok Produk :"));
    if (stok_produk == "" || stok_produk <= 0) {
        alert("Stok Produk Tidak Boleh Kosong, bernilai 0 dan minus")
    } else {
        alert("Stok Produk berhasil ditambahkan")
        break stokProduk
    }
}
let inputan = produk_array.push(new Produk(nama_produk, harga_produk, stok_produk))
alert("Data berhasil dimasukkan")
return inputan
}

//endfunction