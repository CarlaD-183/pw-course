// In ra lan luot tung ki tu cua string
let str = "Phuong";
for (let character of str) {
    console.log(character);
}
//Tạo mảng đảo ngược từ string
let reverseStr = "";
for (let character of str) {
    reverseStr = character + reverseStr;
}
console.log(reverseStr);
// Timf và in ra vị trí đầu tiên và cuối cùng cuar giá trị 3 trong arr
const arr = [1, 2, 3, 4, 5, 3, 6, 3];
for (let val of arr) {
    if (val === 3) {
        console.log(arr.indexOf(val));
        console.log(arr.lastIndexOf(val));
        break;
    }
}
//Loc các phần tử xuất hiện 1 lần trong dupArr
let dupArr = arr.map((val) => val * 2);
for (let val of dupArr) {
    if (dupArr.indexOf(val) === dupArr.lastIndexOf(val)) {
        console.log(val);
    }
}