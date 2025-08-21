//1.Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`Sum from 1 to 100 is: ${sum}`);
//2.In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
//3.Tạo một mảng chứa các số lẻ từ 1 đến 99.
let soLe = [];
for (let i = 1; i <= 99; i += 2) {
    soLe.push(i);//them so le vao mang
}
console.log(soLe);
//4.In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
//user1@example.com, user2@example.com, ..., user10@example.com).
let base = "user";
let domain = "@example.com";

let emails = [];
for (let i = 1; i <= 10; i++) {
    emails.push(`${base}${i}${domain}`);
}
console.log(emails);
//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
//in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: