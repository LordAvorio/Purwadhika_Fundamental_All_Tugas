function soal_1_2(){
    let inputan = prompt("Masukkan Inputan : ")
    let kata = inputan.split("")
    let vocal = []
    let vocal_count = 0;

    for(let i = 0; i < kata.length; i++){
        if(kata[i] == "a" || kata[i] == "i" || kata[i] == "u" || kata[i] == "e" || kata[i] == "o"){
            vocal.push(kata[i])
            vocal_count++;
        }
    }
    alert(`
    Pada inputan ${inputan}, memiliki jumlah huruf vocal : ${vocal_count}
    ${vocal}
    `)

}

function soal_3(){
    let inputan = prompt("Masukkan Inputan : ")
    let kata = inputan.split("")
    let urut = kata.sort();
    alert(`Kata ${inputan} bila diurutkan secara abjad menjadi ${urut.join("")}`)
}

function soal_4(){
    let inputan = prompt("Masukkan Inputan : ")
    let kata = inputan.split("")
    let kata_terbalik = kata.reverse()
    let hasil_terbalik = kata_terbalik.join("")
    if(inputan == hasil_terbalik){
        alert(`
        Kata ${inputan} termasuk Polidrom
        ${inputan} == ${hasil_terbalik}
        `)
    }else{
        alert(`
        Kata ${inputan} bukan termasuk Polidrom
        ${inputan} != ${hasil_terbalik}
        `)
    }
}



