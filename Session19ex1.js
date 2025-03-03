let months = +prompt(`Moi ban nhap vao thang mong muon`);
if (months === 4 || months === 6 || months ===9 || months === 11) {
    document.write(`Thang ${months} co 30 ngay`);
} else if(months === 2) {
    document.write(`Thang ${2} co 28 hoac 29 ngay nam nhuan`);  
} else if(months >=13){
    document.write(`Khong hop le`);
}else{
    document.write(`Thang ${months} co 31 ngay`);
}