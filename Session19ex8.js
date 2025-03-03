let input = +prompt(`Moi ban nhap vao thang trong nam`);
document.write(
    input ===1 || input ===2 || input ===3 ?"Mua xuan" :
    input ===4 || input ===5 || input ===6 ?"Mua ha" :
    input ===7 || input ===8 || input ===9 ?"Mua thu" :
    input ===10 || input ===11 || input ===12 ?"Mua dong":'Thang khong hop le'
);