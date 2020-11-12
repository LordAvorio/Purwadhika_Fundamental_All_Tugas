let dataProduk = [{
        id: 1,
        namaProduk: "iPhone 12",
        gambarProduk: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg",
        hargaProduk: 23000000,
        stokProduk: 12
    },
    {
        id: 2,
        namaProduk: "Samsung Galaxy Note 20",
        gambarProduk: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-1.jpg",
        hargaProduk: 22500000,
        stokProduk: 20
    },
    {
        id: 3,
        namaProduk: "Google Pixel 5 5G",
        gambarProduk: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5-5g-1.jpg",
        hargaProduk: 8960000,
        stokProduk: 5
    },
    {
        id: 4,
        namaProduk: "OnePlus 8T",
        gambarProduk: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-1.jpg",
        hargaProduk: 6578000,
        stokProduk: 8
    }
]

var dataCart = []

class Produk {
    constructor(id, namaProduk, gambarProduk, hargaProduk, stokProduk) {
        this.id = id,
            this.namaProduk = namaProduk,
            this.gambarProduk = gambarProduk,
            this.hargaProduk = hargaProduk,
            this.stokProduk = stokProduk
    }
}

class Cart {
    constructor(id, namaProdukCart, gambarProdukCart, hargaProdukCart, kuantitiProdukCart) {
        this.id = id,
            this.namaProdukCart = namaProdukCart,
            this.gambarProdukCart = gambarProdukCart,
            this.hargaProdukCart = hargaProdukCart,
            this.kuantitiProdukCart = kuantitiProdukCart
    }

    total = function () {
        return this.kuantitiProdukCart * this.hargaProdukCart
    }
}