//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    return a * b;
}
const result1 = multiply(3, 4);
console.log(result1);
//BT2: Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(1, 5, 2));
//BT3. Viết hàm getTopStudents nhận 2 tham số:
//students: mảng các object, mỗi object chứa name (tên) và score (điểm).
//hreshold: ngưỡng điểm để được coi là "top" (số).
//
// function getTopStudents(students, threshold) {
//   return students
//     .filter(s => typeof s.score === 'number' && s.score >= threshold)
//     .map(s => s.name);
// }

// const student= [
//   { name: "An", score: 85 },
//   { name: "Binh", score: 90 },
//   { name: "Linh", score: 75 }
// ];

// const threshold = 80;

// console.log(getTopStudents(student, threshold)); 
//////
let student = [
    { name: "An", score: 85 },
    { name: "Binh", score: 90 },
    { name: "Linh", score: 75 }
];
let threshold = 80;
function getTopStudents(){
    if (student.score >= threshold) {
        return student.score;
    }
}
console.log(student.name, student.score);



//BT4:

// Viết hàm calculateInterest nhận 3 tham số:
// ● principal: số tiền gửi ban đầu (số).
// ● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
// ● years: số năm gửi.
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
// đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
// in kết quả.
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}
const principal = 2000;  // số tiền gửi ban đầu
const rate = 3;          // lãi suất hàng năm (5%)
const years = 2;         // số năm gửi

const totalAmount = calculateInterest(principal, rate, years);
console.log(totalAmount);
