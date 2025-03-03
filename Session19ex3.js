let price = prompt(`Moi ban nhap vao ti gia muon chuyen doi(VND || USD)`);
if( price === 'VND'){
    let input = +prompt(`Moi ban nhap vao so tien muon doi`);
    document.write(`${input} doi sang USD la ${input/23000} USD`);
}else if(price === 'USD'){
    let request = +prompt(`Moi ban nhap vao so tien muon doi`);
    document.write(`${request} doi sang VND la ${request*23000} VND `);
}else{
    document.write(`Khong hop le`);
}