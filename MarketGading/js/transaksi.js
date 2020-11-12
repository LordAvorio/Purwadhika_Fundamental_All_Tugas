function printReceipt(){

    if(dataCart.length !=0){

        let temp = "==========RECEIPT==========<br>"
        let receipt = document.getElementById("cetakReceipt")
        let total = 0
        for(let i=0;i<dataCart.length;i++){
            temp += `${i+1}. ${dataCart[i].namaProdukCart} x ${dataCart[i].kuantitiProdukCart} = ${dataCart[i].total()} <br>`
            total += dataCart[i].total()
        }

        temp += `<br> Total Belanja : Rp. ${total},00`

        receipt.innerHTML = temp

        let buttonDeleteCart = document.body.getElementsByClassName("deleteCart")
        let buttonAddCart = document.body.getElementsByTagName("buttonAddCart")

        for(let i=0;i<buttonDeleteCart.length;i++){
            buttonDeleteCart[i].disabled = true
        }

        for(let x of buttonAddCart){
            x.disabled = true
        }



        let uang = document.getElementById("uang")
        let checkout = document.getElementById("checkout")
        uang.hidden = false
        checkout.hidden = false

    }else{
        alert(`Data cart masih kosong`)
    }
    
}

function buttonCheckout(){
    
    let uang = parseInt(document.getElementById("uang").value)

    let totalBelanja = 0
    for(let i=0;i<dataCart.length;i++){
        totalBelanja += dataCart[i].total()
    }

    let kembalian = uang-totalBelanja

    if(uang < totalBelanja){
        alert("Uang tidak cukup")
    }else if(isNaN(uang)){
        alert("Masukkan jumlah uang yang akan dibayarkan")
    }else if(kembalian > 0){
        resetAfterCheckout()
        alert(`Terima kasih sudah berbelanja \n Kembalian : Rp. ${kembalian},00`)
    }else{
        resetAfterCheckout()
        alert(`Terima kasih sudah berbelanja`)
    }

    uang.value = ""
    

}

function resetAfterCheckout(){
    let fieldUang = document.getElementById("uang")
    dataCart = []
    let buttonDeleteCart = document.body.getElementsByClassName("deleteCart")
    let buttonAddCart = document.body.getElementsByTagName("buttonAddCart")
    let buttonCetakReceipt = document.getElementById("buttonCetakReceipt")
    buttonCetakReceipt.disabled = true

    for (let i=0;i<buttonDeleteCart.length;i++){
        buttonDeleteCart[i].disabled = false
    }

    for (let i=0;i<buttonAddCart.length;i++){
        buttonAddCart[i].disabled = false
    }

    let receipt = document.getElementById("cetakReceipt")
    receipt.textContent = ``

    let checkout = document.getElementById("checkout")
    fieldUang.hidden = true
    checkout.hidden = true

    showProduk()
    ShowUserCart()
}