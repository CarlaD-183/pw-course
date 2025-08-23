//In lần lượt từng phần tử của numbers.
const number = [1, 2, 3];
number.forEach(function (num) {
    console.log(num)
})
//Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);
let max = number[0];
for (let i = 1; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
    }
    console.log(max);
};
let min = number[0];
for (let i = 1; i < number.length; i++) {
    if (number[i] < min) {
        min = number[i];
    }
    console.log(min);
}
//Tao mang moi tu numbers voi moi phan tu nhan doi
let doubleNumber = number.map((val) => val * 2);
console.log(doubleNumber);
