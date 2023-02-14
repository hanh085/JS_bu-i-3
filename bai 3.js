// Bài 3: Cho mảng các số từ 1 đến 10 như sau:
var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. in mảng theo thứ tự index tăng dần
// 2. in mảng theo thứ tự index giảm dần
// 3. Xóa phần tử cuối cùng của mảng
// 4. Xóa phần tử đầu tiên của mảng
// 5. Thêm phần tử 0 vào cuối mảng
// 6. Thêm phần tử 0 vào đầu mảng
// 7. Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới
// 8. Chèn thêm số 100 vào phần tử thứ 5 của mảng
// 9. Thay thế phần tử thứ 5 bằng số 100
// 10. copy từ mảng arrNumber thành 1 mảng mới từ phần tử 5 đến hết
// 11. copy từ mảng arrNumber thành 1 mảng mới từ phần tử đầu tiên đến phần tử thứ 5
// 12. Cho mảng sau:
var arrNumber2 = [11, 22, 33, 44, 55];
// - Nối mảng arrNumber2 vào mảng arrNumber


// 1. in mảng theo thứ tự index tăng dần
console.log(arrNumber.join(', ')); 
// 2. in mảng theo thứ tự index giảm dần
for (let i=(arrNumber.length) -1; i>=0; i--)
{
    console.log(arrNumber[i]); 
}
// 3. Xóa phần tử cuối cùng của mảng
arrNumber.pop(); 

// 4. Xóa phần tử đầu tiên của mảng
arrNumber.shift(); 

// 5. Thêm phần tử 0 vào cuối mảng
arrNumber.push(0); 
console.log(arrNumber.join(', ')); 

// 6. Thêm phần tử 0 vào đầu mảng
arrNumber.unshift(0); 
console.log(arrNumber.join(', ')); 

// 7. Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới
var arr7 = arrNumber.slice(0,5); 
console.log(arr7.join(', ')); 

// 8. Chèn thêm số 100 vào phần tử thứ 5 của mảng
arrNumber.splice(5,0,100); 
console.log(arrNumber.join(', ')); 

// 9. Thay thế phần tử thứ 5 bằng số 100
arrNumber[5] = 100; 
console.log(arrNumber.join(', ')); 

// 10. copy từ mảng arrNumber thành 1 mảng mới từ phần tử 5 đến hết
var arr10 = arrNumber.slice(-6); 
console.log(arr10.join(', ')); 

// 11. copy từ mảng arrNumber thành 1 mảng mới từ phần tử đầu tiên đến phần tử thứ 5
var arr11 = arrNumber.slice(0,6);
console.log(arr11.join(', ')); 

// 12. Nối mảng arrNumber2 vào mảng arrNumber
arrNumber = arrNumber.concat(arrNumber2); 
console.log(arrNumber.join(', ')); 