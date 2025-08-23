//1.Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`Sum from 1 to 100 is: ${sum}`);
//2.In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${$i}`);//lay ra cac gia tri tuw 2 den 9
    for (let j = 1; j <= 10; j++) { // lay cac gia tri tu 1 den 10
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
//3.Tạo một mảng chứa các số lẻ từ 1 đến 99.
let soLe = [];
for (let i = 1; i <= 99; i += 2) {
    soLe.push(i);//them so le vao cuoi mang
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
//C2-bt4:
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}
//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
//in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
const revenue = [
    { month: "January", amount: 100 },
    { month: " February", amount: 150 },
    { month: "March", amount: 200 },
    { month: "April", amount: 200 },
    { month: "May", amount: 100 },
    { month: "June", amount: 50 },
    { month: "July", amount: 200 },
    { month: "August", amount: 300 },
    { month: "Septemper", amount: 200 },
    { month: "November", amount: 150 },
    { month: "December", amount: 200 },
];
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[1].amount; // cong don doanh thu cac thang
};
console.log(`Tong doanh thu trong nan: ${totalRevenue}`);
