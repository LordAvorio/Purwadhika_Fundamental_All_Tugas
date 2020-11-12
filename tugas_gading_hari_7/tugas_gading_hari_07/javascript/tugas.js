function soal_1(){
    
    let input_huruf = prompt("Masukkan huruf : ")
    vocal(input_huruf)

    function vocal(word){
        let kata = word.split("")
        z = []
        for(let x = 0;x<=kata.length;x++){
            if(kata[x] == "a" || kata[x] == "i" || kata[x] == "u" || kata[x] == "e" || kata[x] == "o"){
              z += kata[x];  
            }
        }
        let hasil = [...new Set(z)];
        let jumlah = hasil.length;
        return alert(`Kata ${word} memiliki huruf vokal sebanyak ${jumlah}  : ${hasil} `)
    }
}


function soal_2(){
    let input_huruf = prompt("Masukkan huruf : ")
    remove_vocal(input_huruf)

    function remove_vocal(word){
        let kata = word.split("")
        for(let x = 0;x<=kata.length;x++){
            if(kata[x] == "a" || kata[x] == "i" || kata[x] == "u" || kata[x] == "e" || kata[x] == "o"){
                kata.splice(x,1)
            }
        }
        return alert(`Kata ${word} bila huruf vokal dihapus menjadi  : ${kata.join("")} `)
    }

}

function soal_3(){
    let input_huruf = prompt("Masukkan huruf : ")
    check_letter(input_huruf)

    function check_letter(word){
        let hasil = ""
        for(let x = 0;x<word.length;x++){
            if(word[x] === word[x].toUpperCase()){
                hasil += word[x].toLowerCase();
            }else {
                hasil += word[x].toUpperCase();            
            }           
        }
        return alert(hasil)
    }
}

function soal_4(){
    let input_huruf = prompt("Masukkan huruf : ")
    check_duplicate(input_huruf)

    function check_duplicate(word){
        let check_kata = word.split("").sort();
        console.log(check_kata)
        let hasil = []
        for(let x = 0;x<=check_kata.length-1;x++){
            if(check_kata[x+1] === check_kata[x] && check_kata[x] != " "){
                hasil.push(check_kata[x])
            }
        }
        console.log(hasil)
        return alert(`Kata ${word} memiliki duplikat huruf sebanyak : ${hasil.length}`)
    }
}