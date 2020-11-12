
function showProduk(idx) {

    let table = document.getElementById("tabelProduk")
    let tbody = table.getElementsByTagName("tbody")[0]

    let tr = ""
    for (let i = 0; i < dataProduk.length; i++) {
        if (idx === i) {
            tr += `
            <tr>
                <td></td>
                <td>
                    <input id="editNamaProduk" type="text" value="${dataProduk[i].namaProduk}">
                </td>
                <td>
                    <input id="editGambarProduk" type="text" value="${dataProduk[i].gambarProduk}">
                </td>
                <td>
                    <input id="editHargaProduk" type="number" value="${dataProduk[i].hargaProduk}">
                </td>
                <td>
                    <input id="editStokProduk" type="number" value="${dataProduk[i].stokProduk}">
                </td>
                <td>
                    <button onclick="buttonSave(${i})" class="btn"><i class="fas fa-save"></i></button>
                    <button onclick="buttonCancel()" class="btn"><i class="far fa-times-circle"></i></button>
                </td>
            </tr>            
            `
        } else {
            tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataProduk[i].namaProduk}</td>
                <td>
                    <img src="${dataProduk[i].gambarProduk}" height="60px">
                </td>
                <td>${dataProduk[i].hargaProduk}</td>
                <td>${dataProduk[i].stokProduk}</td>
                <td>
                    <button onclick="buttonDelete(${i})" class="btn"><i class="fa fa-trash"></i></button>
                    <button onclick="buttonEdit(${i})" class="btn"><i class="far fa-edit"></i></button>
                    <button onclick="buttonCart(${i})" class="btn buttonAddCart"><i class="fas fa-comment-dollar"></i></button>
                </td>            
            </tr>
            `
        }
    }
    tbody.innerHTML = tr

}

showProduk()

function tambahProduk(e) {
    e.preventDefault()
    console.log("add button di klik")

    let namaProduk = document.getElementById("namaProduk").value
    let gambarProduk = document.getElementById("gambarProduk").value
    let hargaProduk = parseInt(document.getElementById("hargaProduk").value)
    let stokProduk = parseInt(document.getElementById("stokProduk").value)


    // check input value => tidak boleh ada value yang kosong
    // check value dari harga dan stok tidak boleh < 0 atau negatif


    if (namaProduk === "" || gambarProduk === "" || hargaProduk === "" || stokProduk === "") {
        alert("input tidak boleh kosong")
    } else if (hargaProduk <= 0 || stokProduk <= 0) {
        alert("Harga atau stok tidak boleh bernilai kurang dari sama dengan 0")
    } else {
        // masukan semua value ke daftar produk dalam bentuk object
        dataProduk.push(new Produk(
            dataProduk.length + 1,
            namaProduk,
            gambarProduk,
            hargaProduk,
            stokProduk
        ))
        console.log(dataProduk)

        // tampilkan ulang produk
        showProduk()

        // reset value di form
        namaProduk.value = ""
        gambarProduk.value = ""
        hargaProduk.value = ""
        stokProduk.value = ""
    }

}

function buttonDelete(index) {
    dataProduk.splice(index, 1)
    showProduk()
}

function buttonEdit(index) {
    showProduk(index)
}

function buttonSave(index) {
    let editNamaProduk = document.getElementById("editNamaProduk").value
    let editGambarProduk = document.getElementById("editGambarProduk").value
    let editHargaProduk = document.getElementById("editHargaProduk").value
    let editStokProduk = document.getElementById("editStokProduk").value

    dataProduk[index].namaProduk = editNamaProduk
    dataProduk[index].gambarProduk = editGambarProduk
    dataProduk[index].hargaProduk = editHargaProduk
    dataProduk[index].stokProduk = editStokProduk

    showProduk()

}

function buttonCancel() {
    showProduk()
}

function sortingTabelProduk(){

    console.log("button diklik")

    let pilihan = document.getElementById("pilihSort").value

    console.log(pilihan)

    if(pilihan == "ascending"){
        function sortingAscending(a, b){
            if(a.hargaProduk > b.hargaProduk){
                return 1
            }
            if (a.hargaProduk < b.hargaProduk) {
                return -1
            }
            return 0
        }
        dataProduk.sort(sortingAscending)
    }else if(pilihan == "descending"){
        function sortingDescending(a, b){
            if(a.hargaProduk > b.hargaProduk){
                return -1
            }
            if (a.hargaProduk < b.hargaProduk) {
                return 1
            }
            return 0
        }
        dataProduk.sort(sortingDescending)
    }

    showProduk()
}

function searchByName(){

    console.log("button telah diklik")
    let searchText = document.getElementById("searchField")
    let nama = searchText.value

    let table = document.getElementById("tabelProduk")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ""

    if(nama == ""){
        alert("silahkan input terlebih dahulu")
        console.log(`data kosong`)
        showProduk()
    }else{
        console.log(`data ada`)
        let re = new RegExp(`${nama}`, 'gim')
        for(let i=0;i<dataProduk.length;i++){
            if(re.test(dataProduk[i].namaProduk) === true){
                console.log("data detected")
                tr += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${dataProduk[i].namaProduk}</td>
                        <td>
                            <img src="${dataProduk[i].gambarProduk}" height="60px">
                        </td>
                        <td>${dataProduk[i].hargaProduk}</td>
                        <td>${dataProduk[i].stokProduk}</td>
                        <td>
                            <button onclick="buttonDelete(${i})" class="btn"><i class="fa fa-trash"></i></button>
                            <button onclick="buttonEdit(${i})" class="btn"><i class="far fa-edit"></i></button>
                            <button onclick="buttonCart(${i})" class="btn buttonAddCart"><i class="fas fa-comment-dollar"></i></button>
                        </td>            
                    </tr>
                 `
            }else{
                console.log(`data not detected`)
            }
        }
        tbody.innerHTML = tr
        searchText = ""
    }

}








//#region DUMP

 // for (let i = 0; i <= dataProduk.length; i++) {
    //     if (i != index) {

    //     } else {
    //         id_cart = dataProduk[index].id
    //         namaProduk_cart = dataProduk[index].namaProduk
    //         gambarProduk_cart = dataProduk[index].gambarProduk
    //         hargaProduk_cart = dataProduk[index].hargaProduk
    //         quantity = 1
    //         total = quantity * hargaProduk_cart

    //         if (dataCart.length > 0) {
    //             cekCount = 0;
    //             for (let j = 0; j < dataCart.length; j++) {
    //                 cartData = Object.values(dataCart);
    //                 id = cartData[j].id;
    //                 if (id == index + 1) {
    //                     idCartCek = cartData[j].id
    //                     gambarProdukCek = cartData[j].gambarProdukCart
    //                     hargaProdukCek = cartData[j].hargaProdukCart
    //                     namaProdukCek = cartData[j].namaProdukCart
    //                     stokProdukCek = cartData[j].stokProdukCart
    //                     totalProdukCart = cartData[j].totalProdukCart

    //                     newStokProduk = stokProdukCek + 1;
    //                     newTotalProduk = newStokProduk * totalProdukCart;

    //                     dataCart.shift(cartData[j])
    //                     dataCart.push(new Cart(
    //                         idCartCek,
    //                         namaProdukCek,
    //                         gambarProdukCek,
    //                         hargaProdukCek,
    //                         newStokProduk,
    //                         newTotalProduk,
    //                     ))
    //                     cekCount++;                       

    //                 }
    //             }

    //             if (cekCount == 0) {
    //                 dataCart.push(new Cart(
    //                     id_cart,
    //                     namaProduk_cart,
    //                     gambarProduk_cart,
    //                     hargaProduk_cart,
    //                     quantity,
    //                     total,
    //                 ))
    //             }
    //         } else {
    //             dataCart.push(new Cart(
    //                 id_cart,
    //                 namaProduk_cart,
    //                 gambarProduk_cart,
    //                 hargaProduk_cart,
    //                 quantity,
    //                 total,
    //             ))

    //         }

    //     }
    // }

    // console.log(dataCart)



    // let tbody = document.getElementById("tabelCartData");

    // let tr = ""
    // for (let k = 0; k < dataCart.length; k++) {
    //     tr += `
    //     <tr>
    //         <td>${k + 1}</td>
    //         <td>${dataCart[k]if(dataCart.length == 0){
    //     //             dataCart.push(
    //     //                 new Cart(
    //     //                     dataCart.length + 1,
    //     //                     dataProduk[index].namaProduk,
    //     //                     dataProduk[index].gambarProduk,
    //     //                     dataProduk[index].hargaProduk,
    //     //                     1
    //     //             ))
    //     //             console.log("cart pertama",dataCart)
    //     //             console.log(dataCart.length)
    //     //         }
    //     // else if(dataCart.length !=0){
    //     //     for(let i=0;i<dataCart.length;i++){
    //     //         if(dataProduk[index].namaProduk === dataCart[i].namaProdukCart){
    //     //             dataCart[index].kuantitiProdukCart += 1
    //     //             console.log("Produk Sudah Ada")
    //     //         }
    //     //         else if(dataProduk[index].namaProduk != dataCart[i].namaProdukCart){
    //     //             dataCart.push(
    //     //                 new Cart(
    //     //                     dataCart.length + 1,
    //     //                     dataProduk[index].namaProduk,
    //     //                     dataProduk[index].gambarProduk,
    //     //                     dataProduk[index].hargaProduk,
    //     //                     1
    //     //             ))
    //     //             console.log("cart setelah di add", dataCart)
    //     //         }
    //     //     }
    //     // }.namaProdukCart}</td>
    //         <td>
    //             <img src="${dataCart[k].gambarProdukCart}" height="60px">
    //         </td>
    //         <td>${dataCart[k].hargaProdukCart}</td>
    //         <td>${dataCart[k].stokProdukCart}</td>
    //         <td>${dataCart[k].totalProdukCart}</td>           
    //         <td>Test</td>           
    //     </tr>
    //     `
    // }
    // tbody.innerHTML = tr

    // 



//#endregion