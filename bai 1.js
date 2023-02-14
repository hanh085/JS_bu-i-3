// Bài 1: Viết chương trình nhập mảng, xuất mảng, đảo mảng, sắp xếp mảng 

var arr = [];

InputArray(arr);
OutputArray(arr);

ReverseArray(arr);
OutputArray(arr);

SortArray(arr);
OutputArray(arr);



function InputArray(arr) {
    var n = prompt('Nhập số lượng phần tử của mảng: ');
    while (Check(n) == false) {
        n = prompt('Nhập số lượng phần tử của mảng: ');
    }

    var temp;
    for (let i = 0; i < n; i++) {
        temp = prompt('Thêm phần tử: ');
        arr.push(temp);
    }
}

function OutputArray(arr) {
    console.log(arr.join(', '));
}

function ReverseArray(arr) {
    arr.reverse();
}

function SortArray(arr) {
    arr.sort();
}

function Check(value) {
    if (value === '' || value === null) {
        console.log('giá trị rỗng');
        return false;
    }
    else if (isNaN(value)) {
        console.log('giá trị ko là định dạng số');
        return false;
    }

    return true;
}
