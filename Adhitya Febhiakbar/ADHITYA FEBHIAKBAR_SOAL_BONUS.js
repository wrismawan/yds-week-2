let jumlah = 0;
let items = [];

function jumlahArray() {
    let boxvalue = document.getElementById('box').value;
    // If input is not as expected
    if (isNaN(boxvalue) || boxvalue < 2 || boxvalue > 10 || boxvalue instanceof String) {
        return document.getElementById('message').innerHTML = "Only Number From 2-10!"; 
    }else if(items.length>49){ // Max data in array is 50
        return false;
    }else{
        // Push data into array
        jumlah = boxvalue;
        document.getElementById('message').innerHTML = "OK";
        return jumlah;
    }
}

function showJumlahArray(){
    return document.getElementById('items').innerHTML = jumlah;
}

function dataArray() {
    let boxvalue = document.getElementById('box').value;
    // If input is not as expected
    if(items.length>49){ // Max data in array is 50
        return false;
    }else{
        // Push data into array
        items.push(boxvalue);
        document.getElementById('message').innerHTML = "OK";
        return false;
    }
}

function average(){
    let rata = document.getElementById('box').value;
    for(x= 1; x<items.length; x++){ 
        jumlah += items[x];
        console.log(items[x]);
        rata = jumlah/3;
    }
    return document.getElementById('Result').innerHTML = rata;
}

function show(){
    // show data in array
    
    return document.getElementById('items').innerHTML = items.join(' ');
}