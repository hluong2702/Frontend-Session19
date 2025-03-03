let input = prompt(`Moi ban nhap vao`);
if (input.length === 1 && input >= 'a' && input <= 'z' || input.length === 1 && input >= 'A' && input <= 'Z'){
    document.write(`Ky tu ${input} la chu cai`);
}else{
    document.write(`Khong phai la chu cai `);
}
    
