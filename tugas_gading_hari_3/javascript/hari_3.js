function solveIT16(){
    var inputan = prompt("Masukkan nilai : ");
    var nilai = parseInt(inputan);
    var g = "";
    
    for(var i=1;i<=nilai;i++){
        for(var j=1;j<=i;j++){
            g += "* ";
        }
        g += "\n";    
    }
    alert(g);

}

function solveIT17(){
    var inputan = prompt("Masukkan nilai : ");
    var nilai = parseInt(inputan);
    var g = "";
    
    for(var i=1;i<=nilai;i++){
        for(var j=i;j<=nilai;j++){
            g += "* ";
        }
        g += "\n";    
    }
    alert(g);

}

function solveIT18(){
    var inputan = prompt("Masukkan nilai : ");
    var nilai = parseInt(inputan);
    var g = "";
    var bagi = Math.round(nilai/2);
    
    for(var i=1;i<=nilai;i++){
        if(i<=bagi){
            for (var j=i;j<=nilai;j++){
                g += "* ";
            }
            g += "\n";
        }else if(i>bagi){
            for(var j=1;j<=i;j++){
                g += "* ";
            }
            g += "\n";
        }
    }
    alert(g);

}

function solveIT19(){
    var inputan = prompt("Masukkan nilai : ");
    var nilai = parseInt(inputan);
    var g = "";
    
    for(var i=1;i<=nilai;i++){
        for(var j=i;j<=nilai;j++){
            g += " "
        }
        for(var k=1;k<=i;k++){
            g += "*"
        }
        for(var l=1;l<=i-1;l++){
            g += "*"
        }
        g += "\n"
    }
    
    alert(g);

}

function solveIT20(){
    var inputan = prompt("Masukkan nilai : ");
    var nilai = parseInt(inputan);
    var g = "";
    
    for(var i=1;i<=nilai;i++){
        for (var j=1;j<=i;j++){
            g += " "
        }
        for (var k=i;k<=nilai;k++){
            g += "*"
        }
        for (var l=i+1;l<=nilai;l++){
            g += "*"
        }
        g += "\n"
    }
    
    alert(g);

}

function solveIT21(){
    var inputan = prompt("Masukkan nilai : ");
    var nilai = parseInt(inputan);
    var g = "";
    
    for(var i=1;i<=nilai;i++){
        for(var j=i;j<=nilai;j++){
            g += "* ";
        }
        g += "\n";    
    }
    alert(g);

}



