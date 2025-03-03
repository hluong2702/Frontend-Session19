let a = +prompt(`Moi ban nhap vao so 1`);
let b = +prompt(`Moi ban nhap vao so 2`);
let c = +prompt(`Moi ban nhap vao so 3`);
let max = (a > b)? ((a > c) ? a : c) : ((b > c) ? b : c)
document.write(`So lon nhat trong 3 so la ${max}`);