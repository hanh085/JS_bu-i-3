/*
Bài 2: Viết chương trình tạo 1 mảng gồm 100 phần tử là các số ngẫu nhiên từ 0 -> 99. Xuất mảng ra màn hình console:
1. Đếm xem có bao nhiêu số 0 trong mảng
2. Đếm xem có bao nhiêu số nguyên tố trong mảng
3. Đếm xem có bao nhiêu số hoàn hảo trong mảng
4. Đếm xem có bao nhiêu số fibonacci trong mảng
5. Đếm xem có bao nhiêu số đối xứng trong mảng
*/

var arr = [];
// 1. Đếm xem có bao nhiêu số 0 trong mảng
var temp;
for (let i = 0; i < 100; i++) {
    temp = Math.random() * 101;
    temp=temp.toFixed();  // làm tròn thành số nguyên 
    arr.push(temp);
}
OutputArray(arr);

// 2. Đếm xem có bao nhiêu số nguyên tố trong mảng
var count =0; 
for (let i=0;i<100;i++)
{
    if(arr[i] == 0)
    {
        count ++; 
    }
}
console.log('Đếm phần tử 0 trong mảng'); 
console.log(count); 

// 3. Đếm xem có bao nhiêu số hoàn hảo trong mảng
count =0; 
for (let i=0;i<100;i++)
{
    if(isPerfectNumber(arr[i]) == true)
    {
        count ++; 
    }
}
console.log('Đếm phần tử là số hoàn hảo trong mảng'); 
console.log(count); 

// 4. Đếm xem có bao nhiêu số fibonacci trong mảng
count =0; 
for (let i=0;i<100;i++)
{
    if(isFibonacci(arr[i]) == true)
    {
        count ++; 
    }
}
console.log('Đếm phần tử là số fibonacci trong mảng'); 
console.log(count); 


// 5. Đếm xem có bao nhiêu số đối xứng trong mảng
count =0; 
for (let i=0;i<100;i++)
{
    if(KiemTraDoiXung(toString(arr[i])) == true)
    {
        count ++; 
    }
}
console.log('Đếm phần tử là số đối xứng trong mảng'); 
console.log(count); 

console.log(KiemTraDoiXung('1232')); 


function OutputArray(arr) {
    console.log(arr.join(', '));
}
function isPerfectNumber(n) {
    if (n <= 0) {
        return false;
    }
    var T = 0;
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            T += i;
        }
    }

    if (T == n) {
        return true;
    }
    else return false;

}

function isFibonacci(n) { 
    if (n <= 0) {
        return false;
    }
    var a = 1;
    var b = 1;
    var k = 0;

    while (k < n) {
        k = k + a + b;
        a = b;
        b = k;
    }
    if (k == n) {
        return true;
    }
    else return false;

}

function KiemTraDoiXung(n) // kiểm tra chuỗi đối xứng 
{
    for (let i=0; i< n.length/2; i++)
    {
        if (n[i] != n[n.length - 1 -i])
        {
            return false; 
        }
    }
    return true; 
}