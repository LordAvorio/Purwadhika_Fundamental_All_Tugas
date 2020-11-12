function buttonCart(index) {
    if(dataProduk[index].stokProduk != 0){

        let propertyProduk = {...dataProduk[index]}
        let cartIndex
        // cari data produk yang sama di user cart
        for (let i = 0; i < dataCart.length; i++) {
            if (dataCart[i].namaProdukCart === propertyProduk.namaProduk) {
                cartIndex = i
            }
        }
        // add produk ke cart
        if (cartIndex !== undefined) {
            dataCart[cartIndex].kuantitiProdukCart += 1
        } else {
            dataCart.push(
                new Cart (
                    dataCart.length + 1,
                    dataProduk[index].namaProduk, 
                    dataProduk[index].gambarProduk, 
                    dataProduk[index].hargaProduk,
                    1
                )
            )
        }
        dataProduk[index].stokProduk -= 1
        

        let buttonAddCart = document.getElementById("buttonCetakReceipt")
        if (buttonAddCart.disabled === true) {
            buttonAddCart.disabled = false
        }

        showProduk()
        ShowUserCart()
    }else if(dataProduk[index].stokProduk == 0){
        alert("Stok Telah Habis")
    }
    
}

function ShowUserCart(){
    let table = document.getElementById("tabelCart")
    let tbody = table.getElementsByTagName("tbody")[0]

    let tr = ""
    for (let i = 0; i < dataCart.length; i++) {
        tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataCart[i].namaProdukCart}</td>
                <td>
                    <img src="${dataCart[i].gambarProdukCart}" height="60px">
                </td>
                <td>${dataCart[i].hargaProdukCart}</td>
                <td>${dataCart[i].kuantitiProdukCart}</td>
                <td>${dataCart[i].total()}</td>
                <td>
                    <button onclick="buttonDeleteCart(${i})" class="btn deleteCart"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        `
    }

    // tambahkan ke tbody
    tbody.innerHTML = tr
}

function buttonDeleteCart(index) {
    console.log("delete diklik")

    let tempCart = {...dataCart[index]}
    // let jumlahKuantiti = tempCart.kuantitiProdukCart
    let namaBarang =  tempCart.namaProdukCart

    //#region cara 1
    // console.log(jumlahKuantiti)
    // console.log(namaBarang)

    // if(jumlahKuantiti > 1){
    //     console.log("Kuantiti Dikurang")
    //     dataCart[index].kuantitiProdukCart -= 1
    // }else{
    //     dataCart.splice(index, 1)
    // }

    // for(let i=0;i<dataProduk.length;i++){
    //     if(dataProduk[i].namaProduk == namaBarang){
    //         dataProduk[i].stokProduk +=1
    //     }
    // }
    //#endregion
    
    //#region cara 2
    if(dataCart[index].kuantitiProdukCart > 1){
        console.log("Kuantiti Dikurang")
        dataCart[index].kuantitiProdukCart -= 1
    }else{
        dataCart.splice(index, 1)
    }

    for(let i=0;i<dataProduk.length;i++){
        if(dataProduk[i].namaProduk == namaBarang){
            dataProduk[i].stokProduk +=1
        }
    }
    //#endregion

    let buttonAddCart = document.getElementById("buttonCetakReceipt")
    if (dataCart.length === 0) {
        buttonAddCart.disabled = true
    }

    showProduk()
    ShowUserCart()
}